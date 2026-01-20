import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllCategories = async () => {
    // Check if empty, if so seed
    const countResult: any[] = await prisma.$queryRaw`SELECT COUNT(*) as count FROM "Category"`;
    const count = Number(countResult[0].count);

    if (count === 0) {
        console.log("Seeding default categories...");
        await prisma.$executeRaw`
            INSERT INTO "Category" (name, "desc") VALUES 
            ('Fiction', 'Novel, Literature, etc.'),
            ('Sci-Fi', 'Science Fiction and Fantasy'),
            ('History', 'History and Biography'),
            ('Programming', 'Computer Science and Tech'),
            ('Business', 'Economics and Management'),
            ('Art', 'Design, Music, Painting')
        `;
    }

    const categories = await prisma.$queryRaw`SELECT * FROM "Category" ORDER BY id ASC`;
    return categories;
};
