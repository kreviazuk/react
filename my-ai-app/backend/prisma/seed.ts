import { PrismaClient, Role, BookStatus, LoanStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 开始 Seed...\n');

  // 1. 创建管理员账户
  const adminPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@library.com' },
    update: {
      role: Role.ADMIN,
    },
    create: {
      email: 'admin@library.com',
      password: adminPassword,
      name: '系统管理员',
      role: Role.ADMIN,
    },
  });
  
  console.log('✅ 管理员账户:', admin.email, '(role:', admin.role, ')');

  // 2. 创建测试用户账户
  const userPassword = await bcrypt.hash('user123', 10);
  
  const user = await prisma.user.upsert({
    where: { email: 'user@library.com' },
    update: {},
    create: {
      email: 'user@library.com',
      password: userPassword,
      name: '测试用户',
      role: Role.USER,
    },
  });
  
  console.log('✅ 测试用户:', user.email, '(role:', user.role, ')');

  // 3. 创建分类
  const fiction = await prisma.category.upsert({
    where: { name: 'Fiction' },
    update: {},
    create: { name: 'Fiction', desc: '小说类' },
  });
  
  const tech = await prisma.category.upsert({
    where: { name: 'Technology' },
    update: {},
    create: { name: 'Technology', desc: '技术类' },
  });

  // 4. 创建书籍
  // 4.1 The Great Gatsby (Available)
  const gatsby = await prisma.book.upsert({
    where: { isbn: '9780743273565' },
    update: {},
    create: {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '9780743273565',
      description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island...',
      coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
      publishDate: new Date('1925-04-10'),
      publisher: 'Scribner',
      categoryId: fiction.id,
    },
  });

  // 创建副本 (2 Copies Available)
  await prisma.bookCopy.createMany({
    data: [
      { bookId: gatsby.id, barcode: 'GATSBY-001', status: BookStatus.AVAILABLE, location: 'Central Library' },
      { bookId: gatsby.id, barcode: 'GATSBY-002', status: BookStatus.AVAILABLE, location: 'Westside Branch' },
    ],
    skipDuplicates: true,
  });

  // 4.2 1984 (Overdue Case)
  const book1984 = await prisma.book.upsert({
    where: { isbn: '9780451524935' },
    update: {},
    create: {
      title: '1984',
      author: 'George Orwell',
      isbn: '9780451524935',
      description: 'Nineteen Eighty-Four is a dystopian social science fiction novel...',
      coverImage: 'https://images.unsplash.com/photo-1531901599143-df5010ab9438?auto=format&fit=crop&q=80&w=800',
      publishDate: new Date('1949-06-08'),
      publisher: 'Secker & Warburg',
      categoryId: fiction.id,
    },
  });
  
  // 创建副本 (已借出)
  const copy1984 = await prisma.bookCopy.create({
    data: { bookId: book1984.id, barcode: '1984-001', status: BookStatus.BORROWED, location: 'Central Library' },
  });

  // 创建逾期借阅记录
  const overdueDate = new Date();
  overdueDate.setDate(overdueDate.getDate() - 2); // 2 days late
  await prisma.loan.create({
    data: {
      userId: user.id,
      copyId: copy1984.id,
      status: LoanStatus.APPROVED, // 实际逻辑中 APPROVED + dueDate < now 就是 Overdue，这里保持状态一致性
      borrowDate: new Date(new Date().setDate(new Date().getDate() - 32)),
      dueDate: overdueDate,
    },
  });

  // 4.3 The Design of Everyday Things (Pending Approval Case)
  const designBook = await prisma.book.upsert({
    where: { isbn: '9780465050659' },
    update: {},
    create: {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '9780465050659',
      description: 'The Design of Everyday Things is a best-selling book by cognitive scientist...',
      coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
      publishDate: new Date('1988-01-01'),
      publisher: 'Basic Books',
      categoryId: tech.id,
    },
  });

  // 创建副本 (被预定)
  const copyDesign = await prisma.bookCopy.create({
    data: { bookId: designBook.id, barcode: 'DESIGN-001', status: BookStatus.RESERVED, location: 'Tech Zone' },
  });

  // 创建待审核借阅申请
  await prisma.loan.create({
    data: {
      userId: user.id,
      copyId: copyDesign.id,
      status: LoanStatus.PENDING,
      borrowDate: new Date(), // Requested today
    },
  });

  console.log('\n🎉 Seed 完成!');
  console.log('\n📝 测试账户信息:');
  console.log('┌─────────────┬─────────────────────┬──────────┐');
  console.log('│ 角色        │ 邮箱                │ 密码     │');
  console.log('├─────────────┼─────────────────────┼──────────┤');
  console.log('│ 管理员      │ admin@library.com   │ admin123 │');
  console.log('│ 普通用户    │ user@library.com    │ user123  │');
  console.log('└─────────────┴─────────────────────┴──────────┘');
}

main()
  .catch((e) => {
    console.error('❌ Seed 失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
