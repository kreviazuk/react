import api from './api';

export interface Loan {
  id: number;
  userId: number;
  copyId: number;
  borrowDate: string;
  dueDate: string | null;
  returnDate: string | null;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'RETURNED' | 'OVERDUE';
  rejectReason: string | null;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  copy: {
    id: number;
    barcode: string;
    book: {
      id: number;
      title: string;
      author: string;
      coverImage: string | null;
    };
  };
}

export const loansApi = {
  // 获取待审核列表
  getPending: () => api.get<{ data: Loan[] }>('/loans/pending'),
  
  // 获取所有借阅记录
  getAll: (params?: { status?: string; page?: number; limit?: number }) => 
    api.get<{ data: Loan[]; pagination: { total: number; page: number; limit: number } }>('/loans', { params }),
  
  // 获取借阅详情
  getById: (id: number) => api.get<{ data: Loan }>(`/loans/${id}`),
  
  // 批准借阅
  approve: (id: number, borrowDays?: number) => 
    api.put<{ message: string; data: Loan }>(`/loans/${id}/approve`, { borrowDays }),
  
  // 拒绝借阅
  reject: (id: number, reason: string) => 
    api.put<{ message: string; data: Loan }>(`/loans/${id}/reject`, { reason }),
  
  // 确认归还
  return: (id: number) => 
    api.put<{ message: string; data: Loan }>(`/loans/${id}/return`),
};
