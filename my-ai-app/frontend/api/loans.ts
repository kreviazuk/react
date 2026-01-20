import api from './client';

export interface Loan {
  id: number;
  userId: number;
  copyId: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'RETURNED' | 'OVERDUE';
  borrowDate: string;
  dueDate: string | null;
  copy: {
    id: number;
    bookId: number;
    book: {
      title: string;
      author: string;
      coverImage: string | null;
    };
  };
}

export const loansApi = {
  // 申请借阅
  apply: (copyId: number) => api.post('/loans/apply', { copyId }),
  
  // 获取我的借阅记录
  getMyLoans: (status?: string) => api.get<{ data: Loan[] }>('/loans/my', { params: { status } }),
};
