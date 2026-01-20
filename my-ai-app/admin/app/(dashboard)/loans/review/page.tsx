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
import { Textarea } from "@/components/ui/textarea";
import { Check, X, RefreshCw, Loader2 } from "lucide-react";

export default function LoanReviewPage() {
  const { user } = useAuthStore();
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  // 权限保护
  useEffect(() => {
    if (user?.role !== "ADMIN") {
      router.push("/");
    }
  }, [user, router]);

  // 获取待审核列表
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["loans", "pending"],
    queryFn: async () => {
      const res = await loansApi.getPending();
      return res.data.data;
    },
  });

  // 批准借阅
  const approveMutation = useMutation({
    mutationFn: (id: number) => loansApi.approve(id, 30),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["loans"] });
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

  const handleApprove = (loan: Loan) => {
    if (confirm(`确定批准 ${loan.user.name} 借阅《${loan.copy.book.title}》吗？`)) {
      approveMutation.mutate(loan.id);
    }
  };

  const handleRejectClick = (loan: Loan) => {
    setSelectedLoan(loan);
    setRejectDialogOpen(true);
  };

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

  if (user?.role !== "ADMIN") {
    return null;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">借阅审核</h1>
          <p className="text-gray-500 text-sm mt-1">
            审核用户的借阅申请
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => refetch()}
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
          刷新
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : data && data.length > 0 ? (
        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">ID</TableHead>
                <TableHead>申请人</TableHead>
                <TableHead>书名</TableHead>
                <TableHead>条形码</TableHead>
                <TableHead>申请时间</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell className="font-medium">{loan.id}</TableCell>
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
                          className="w-10 h-14 object-cover rounded"
                        />
                      )}
                      <div>
                        <p className="font-medium">{loan.copy.book.title}</p>
                        <p className="text-xs text-gray-500">{loan.copy.book.author}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-500 font-mono text-sm">
                    {loan.copy.barcode}
                  </TableCell>
                  <TableCell className="text-gray-500">
                    {formatDate(loan.createdAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleApprove(loan)}
                        disabled={approveMutation.isPending}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        批准
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRejectClick(loan)}
                        disabled={rejectMutation.isPending}
                      >
                        <X className="h-4 w-4 mr-1" />
                        拒绝
                      </Button>
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
            暂无待审核的借阅申请
          </h3>
          <p className="text-gray-500">
            所有借阅申请都已处理完毕
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
