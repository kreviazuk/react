import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Helper to cast BigInt to Number for JSON serialization (if necessary)
// Prisma usually handles BigInt serialization quirks, but raw query might return raw types.
// We'll proceed with standard query.

export const getAllBooks = async () => {
  // Use json_agg to emulate `include: { copies: true, category: true }`
  const result = await prisma.$queryRaw`
    SELECT 
      b.*,
      COALESCE(
        (
          SELECT json_agg(c.*) 
          FROM "BookCopy" c 
          WHERE c."bookId" = b.id
        ), 
        '[]'::json
      ) as copies,
      (
        SELECT row_to_json(cat.*) 
        FROM "Category" cat 
        WHERE cat.id = b."categoryId"
      ) as category
    FROM "Book" b
    ORDER BY b."createdAt" DESC
  `;
  return result;
};

export const getBookById = async (id: number) => {
  const result: any[] = await prisma.$queryRaw`
    SELECT 
      b.*,
      COALESCE(
        (
          SELECT json_agg(c.*) 
          FROM "BookCopy" c 
          WHERE c."bookId" = b.id
        ), 
        '[]'::json
      ) as copies,
      (
        SELECT row_to_json(cat.*) 
        FROM "Category" cat 
        WHERE cat.id = b."categoryId"
      ) as category
    FROM "Book" b
    WHERE b.id = ${id}
    LIMIT 1
  `;
  return result[0] || null;
};

export const createBook = async (data: any) => {
  // We assume data is flat (has categoryId, not category connect object)
  // because that's what the controller sends.
  const { title, author, isbn, coverImage, description, publisher, publishDate, categoryId, isAvailable, isBorrowed } = data;

  const result: any[] = await prisma.$queryRaw`
    INSERT INTO "Book" (
      "title", "author", "isbn", "coverImage", "description", 
      "publisher", "publishDate", "categoryId", "isAvailable", "isBorrowed", "updatedAt"
    )
    VALUES (
      ${title}, ${author}, ${isbn}, ${coverImage}, ${description}, 
      ${publisher}, ${publishDate}, ${categoryId}, ${isAvailable ?? true}, ${isBorrowed ?? false}, NOW()
    )
    RETURNING *
  `;
  return result[0];
};

export const updateBook = async (id: number, data: any) => {
  // Handle Inventory Count Update
  if (typeof data.inventoryCount === 'number') {
    const targetCount = data.inventoryCount;
    
    // Get current copies
    const currentCopies: any[] = await prisma.$queryRaw`
      SELECT * FROM "BookCopy" WHERE "bookId" = ${id} ORDER BY id ASC
    `;
    const currentCount = currentCopies.length;
    const diff = targetCount - currentCount;

    if (diff > 0) {
      // Add copies
      // We need the book ISBN for barcode generation
      const book: any[] = await prisma.$queryRaw`SELECT isbn FROM "Book" WHERE id = ${id}`;
      const isbn = book[0]?.isbn || 'UNKNOWN';

      for (let i = 0; i < diff; i++) {
         const barcode = `${isbn}-${Date.now()}-${i}`;
         await prisma.$queryRaw`
           INSERT INTO "BookCopy" ("barcode", "status", "bookId", "updatedAt")
           VALUES (${barcode}, 'AVAILABLE', ${id}, NOW())
         `;
      }
    } else if (diff < 0) {
      // Remove copies
      // Only remove AVAILABLE copies
      const toRemoveCount = Math.abs(diff);
      const availableCopies = currentCopies.filter((c: any) => c.status === 'AVAILABLE');
      
      if (availableCopies.length < toRemoveCount) {
        throw new Error(`Cannot reduce inventory to ${targetCount}. Only ${availableCopies.length} copies are available to remove, but need to remove ${toRemoveCount}. Others are borrowed or in use.`);
      }

      const idsToRemove = availableCopies.slice(0, toRemoveCount).map((c: any) => c.id);
      
      if (idsToRemove.length > 0) {
          // Prisma Raw SQL with IN clause is tricky, usually need creating a string or looping
          // simplest here is looping or using executeRawUnsafe with manual string join
          const idString = idsToRemove.join(',');
           await prisma.$executeRawUnsafe(`
            DELETE FROM "BookCopy" WHERE id IN (${idString})
          `);
      }
    }
    // Continue to update other fields...
  }

  // Construct dynamic SET clause
  // const updates: string[] = [];
  const validColumns = ['title', 'author', 'isbn', 'coverImage', 'description', 'publisher', 'publishDate', 'categoryId', 'isAvailable', 'isBorrowed'];
  
  // We need to verify if data has these keys.
  // Note: Parameter binding with dynamic columns is tricky in Prisma Raw.
  // We will iterate and build the query string carefully.
  // Safe approach: Use Prisma.sql for parts if possible, but here we'll use a loop
  // and direct values (since we trust the controller valdiation) OR purely dynamic SQL logic 
  // isn't easily possible with tagged template literals for values mixed with column names.
  
  // Alternative: Use COALESCE for every field? 
  // UPDATE "Book" SET title = COALESCE($1, title), author = COALESCE($2, author) ...
  // This updates everything but keeps old value if new is null. But undefined vs null is the catch.
  
  // Let's try the Coalesce approach or just a separate query for each if we wanted strictness.
  // Better: Fetch current, merge, update all. 
  // But let's try the simple UPDATE ... SET ... way using raw values but carefully.
  // Actually, for this demo, let's just update fields if they exist in a bit hacky way using multiple queries 
  // if we can't do dynamic SQL easily. 
  
  // WAIT: prisma.$executeRawUnsafe allows dynamic strings.
  // Let's use $executeRawUnsafe for the update to show "Raw SQL" power.
  
  const setClauses = [];
  const params = [];
  
  // valid keys
  for (const key of Object.keys(data)) {
      if (validColumns.includes(key)) {
          setClauses.push(`"${key}" = $${params.length + 1}`);
          // Handle Date objects specifically if needed, but Prisma Client usually handles JS Date -> DB Date
          params.push(data[key]);
      }
  }

  // Always update updatedAt
  setClauses.push(`"updatedAt" = NOW()`);

  // If no other fields to update, return the book (after potential inventory update)
  if (setClauses.length === 1 && !data.updatedAt) { // Only updatedAt was added
     // If we updated inventory, we still want to return the updated book
     return getBookById(id);
  }

  const query = `
    UPDATE "Book" 
    SET ${setClauses.join(', ')} 
    WHERE id = $${params.length + 1}
    RETURNING *
  `;
  
  // We add 'id' as the last param
  params.push(id);

  // Use executeRawUnsafe for dynamic string query
  // Note: RETURNING * isn't returned by executeRaw (it returns count). 
  // Use queryRawUnsafe instead to get the object back.
  const result: any[] = await prisma.$queryRawUnsafe(query, ...params);
  
  return result[0];
};

export const deleteBook = async (id: number) => {
  // Note: Raw SQL delete will fail if constraints exist (foreign keys like copies).
  // Prisma delete() also fails unless cascade is set or handled.
  // Raw SQL needs standard error handling.
  const result: any[] = await prisma.$queryRaw`
    DELETE FROM "Book" 
    WHERE id = ${id}
    RETURNING *
  `;
  return result[0];
};
