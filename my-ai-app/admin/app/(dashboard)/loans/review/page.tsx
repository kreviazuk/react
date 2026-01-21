"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/lib/store";
import { loansApi, Loan } from "@/lib/loans";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check, X, RefreshCw, Loader2, Undo2 } from "lucide-react";

export default function LoanReviewPage() {
  const { user } = useAuthStore();
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  // 权限保护
  useEffect(() => {
    if (user?.role !== "ADMIN") {
      router.push("/");
    }
  }, [user, router]);

  // 获取借阅列表 (根据筛选状态)
  const { data: loanData, isLoading, refetch } = useQuery({
    queryKey: ["loans", filterStatus],
    queryFn: async () => {
      // 如果是用 getAll，返回结构是 { data: [], pagination: {} }
      // 如果是用 getPending，返回结构是 { data: [] }
      // 为了统一，我们全部改用 getAll
      const statusParam = filterStatus === 'ALL' ? undefined : filterStatus;
      const res = await loansApi.getAll({ status: statusParam });
      return res.data.data;
    },
  });

  const loans = loanData || [];

  // 批准借阅
  const approveMutation = useMutation({
    mutationFn: (id: number) => loansApi.approve(id, 30),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loans"] });
      // toast.success("已批准");
    },
  });

  // 拒绝借阅
  const rejectMutation = useMutation({
    mutationFn: ({ id, reason }: { id: number; reason: string }) =>
      loansApi.reject(id, reason),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loans"] });
      setRejectDialogOpen(false);
      setRejectReason("");
      setSelectedLoan(null);
    },
  });

  // 归还书籍
  const returnMutation = useMutation({
    mutationFn: (id: number) => loansApi.return(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loans"] });
    },
  });

  const handleApprove = (loan: Loan) => {
    if (confirm(`确定批准 ${loan.user.name} 借阅《${loan.copy.book.title}》吗？`)) {
      approveMutation.mutate(loan.id);
    }
  };

  const handleRejectClick = (loan: Loan) => {
    setSelectedLoan(loan);
    setRejectDialogOpen(true);
  };

  const handleReturn = (loan: Loan) => {
      if (confirm(`确认《${loan.copy.book.title}》已归还？`)) {
          returnMutation.mutate(loan.id);
      }
  }

  const handleRejectConfirm = () => {
    if (selectedLoan && rejectReason.trim()) {
      rejectMutation.mutate({ id: selectedLoan.id, reason: rejectReason });
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 状态颜色 Helper
  const getStatusBadge = (status: string) => {
      const styles: Record<string, string> = {
          PENDING: "bg-orange-100 text-orange-700",
          APPROVED: "bg-blue-100 text-blue-700",
          REJECTED: "bg-red-100 text-red-700",
          RETURNED: "bg-gray-100 text-gray-700",
          OVERDUE: "bg-red-500 text-white",
      };
      const label: Record<string, string> = {
          PENDING: "待审核",
          APPROVED: "借阅中",
          REJECTED: "已拒绝",
          RETURNED: "已归还",
          OVERDUE: "已逾期",
      };
      return (
          <span className={`px-2 py-1 rounded text-xs font-medium ${styles[status] || "bg-gray-100"}`}>
              {label[status] || status}
          </span>
      );
  };

  if (user?.role !== "ADMIN") {
    return null;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">借阅管理</h1>
          <p className="text-gray-500 text-sm mt-1">
            审核申请与管理借阅记录
          </p>
        </div>
        <div className="flex gap-4">
             <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="筛选状态" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="PENDING">待审核 (Pending)</SelectItem>
                    <SelectItem value="APPROVED">借阅中 (Approved)</SelectItem>
                    <SelectItem value="OVERDUE">已逾期 (Overdue)</SelectItem>
                    <SelectItem value="RETURNED">已归还 (Returned)</SelectItem>
                    <SelectItem value="REJECTED">已拒绝 (Rejected)</SelectItem>
                    <SelectItem value="ALL">全部记录 (All)</SelectItem>
                </SelectContent>
            </Select>

            <Button
                variant="outline"
                onClick={() => refetch()}
                disabled={isLoading}
            >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            刷新
            </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : loans.length > 0 ? (
        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">ID</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>申请人</TableHead>
                <TableHead>书名</TableHead>
                <TableHead>条形码</TableHead>
                <TableHead>时间</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell className="font-medium">{loan.id}</TableCell>
                   <TableCell>
                      {getStatusBadge(loan.status)}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{loan.user.name}</p>
                      <p className="text-xs text-gray-500">{loan.user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {loan.copy.book.coverImage && (
                        <img
                          src={loan.copy.book.coverImage}
                          alt={loan.copy.book.title}
                          className="w-8 h-12 object-cover rounded shadow-sm"
                        />
                      )}
                      <div>
                        <p className="font-medium text-sm">{loan.copy.book.title}</p>
                        <p className="text-xs text-gray-500">{loan.copy.book.author}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-500 font-mono text-sm">
                    {loan.copy.barcode}
                  </TableCell>
                  <TableCell className="text-gray-500 text-xs">
                    <div>申请: {formatDate(loan.createdAt)}</div>
                    {loan.dueDate && <div className="text-blue-600">应还: {formatDate(loan.dueDate)}</div>}
                    {loan.returnDate && <div className="text-green-600">实还: {formatDate(loan.returnDate)}</div>}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {loan.status === 'PENDING' && (
                          <>
                            <Button
                                size="sm"
                                onClick={() => handleApprove(loan)}
                                disabled={approveMutation.isPending}
                                className="bg-green-600 hover:bg-green-700 h-8 px-2"
                            >
                                <Check className="h-4 w-4 mr-1" />
                                批准
                            </Button>
                            <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleRejectClick(loan)}
                                disabled={rejectMutation.isPending}
                                className="h-8 px-2"
                            >
                                <X className="h-4 w-4 mr-1" />
                                拒绝
                            </Button>
                          </>
                      )}

                      {(loan.status === 'APPROVED' || loan.status === 'OVERDUE') && (
                           <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleReturn(loan)}
                                disabled={returnMutation.isPending}
                                className="h-8 px-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                            >
                                <Undo2 className="h-4 w-4 mr-1" />
                                归还
                            </Button>
                      )}

                      {(loan.status === 'REJECTED' || loan.status === 'RETURNED') && (
                          <span className="text-xs text-gray-400 font-medium px-2">—</span>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <div className="text-gray-400 mb-4">
            <Check className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            未找到记录
          </h3>
          <p className="text-gray-500">
            当前筛选条件下没有借阅记录
          </p>
        </div>
      )}

      {/* 拒绝理由对话框 */}
      <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>拒绝借阅申请</DialogTitle>
            <DialogDescription>
              请输入拒绝理由，申请人将会看到此理由。
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="请输入拒绝理由..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRejectDialogOpen(false)}
            >
              取消
            </Button>
            <Button
              variant="destructive"
              onClick={handleRejectConfirm}
              disabled={!rejectReason.trim() || rejectMutation.isPending}
            >
              {rejectMutation.isPending ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : null}
              确认拒绝
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
