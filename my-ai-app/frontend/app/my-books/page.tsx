"use client";

import { useQuery } from "@tanstack/react-query";
import { loansApi, Loan } from "@/api/loans";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bell, Search, Info, ChevronRight, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function MyBooksPage() {
    const router = useRouter();

    const { data: loans, isLoading, error } = useQuery({
        queryKey: ["my-loans"],
        queryFn: async () => {
            const res = await loansApi.getMyLoans();
            return res.data.data;
        },
    });

    if (isLoading) return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div></div>;

    const getDueDays = (dueDate: string | null) => {
        if (!dueDate) return 0;
        const due = new Date(dueDate);
        const now = new Date();
        const diffTime = due.getTime() - now.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    };
    
    const getOverdueDays = (dueDate: string | null) => {
        if (!dueDate) return 0;
        const due = new Date(dueDate);
        const now = new Date();
        const diffTime = now.getTime() - due.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    // Helper to determine if a loan should be treated as overdue visually
    const isLoanOverdue = (l: Loan) => {
        // If API explicitly says OVERDUE, or if APPROVED but past due date
        if (l.status === 'OVERDUE') return true;
        if (l.status === 'APPROVED' && l.dueDate) {
            return new Date(l.dueDate) < new Date();
        }
        return false;
    };

    // Helper to determine if a loan is actively borrowed (Approved and NOT overdue)
    const isLoanActive = (l: Loan) => {
        return l.status === 'APPROVED' && !isLoanOverdue(l);
    }

    // Filter active loans (Pending, Approved, Overdue)
    const activeLoans = loans?.filter(l => ['PENDING', 'APPROVED', 'OVERDUE'].includes(l.status));
    
    const overdueLoans = activeLoans?.filter(l => isLoanOverdue(l));
    
    // Sort: Overdue first, then Approved (Active), then Pending
    const sortedLoans = activeLoans?.sort((a, b) => {
        const getPriority = (l: Loan) => {
            if (isLoanOverdue(l)) return 0;
            if (isLoanActive(l)) return 1;
            return 2; // Pending
        };
        return getPriority(a) - getPriority(b);
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <header className="bg-white px-4 py-4 sticky top-0 z-10 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                        <ArrowLeft size={24} className="text-gray-900" />
                    </button>
                    <h1 className="text-xl font-serif font-bold text-gray-900">My Books</h1>
                    <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 relative">
                        <Bell size={24} className="text-gray-900" />
                        {overdueLoans && overdueLoans.length > 0 && (
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        )}
                    </button>
                </div>

                {/* Tags */}
                <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                    <button className="flex-1 py-1.5 text-sm font-medium bg-white text-gray-900 shadow-sm rounded-lg">Current</button>
                    <button className="flex-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">Requests</button>
                    <button className="flex-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">History</button>
                </div>
            </header>

            <div className="px-4 py-6">
                {/* Stats */}
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Active Loans & Requests</p>
                        <h2 className="text-3xl font-serif italic font-bold text-gray-900">
                            {activeLoans?.length || 0} Items
                        </h2>
                    </div>
                    {overdueLoans && overdueLoans.length > 0 && (
                        <div className="text-right">
                            <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Action Needed</p>
                            <h2 className="text-xl font-serif text-gray-900">
                                {overdueLoans.length} Overdue
                            </h2>
                        </div>
                    )}
                </div>

                {/* Request Banner */}
                <div 
                    onClick={() => router.push('/books')}
                    className="bg-gray-200/50 rounded-2xl p-4 flex items-center justify-between mb-8 cursor-pointer active:scale-95 transition-transform"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <Search size={20} className="text-gray-900" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-sm">Request a New Book</h3>
                            <p className="text-xs text-gray-500">Browse the catalog to request items</p>
                        </div>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                </div>

                {/* List */}
                <div className="space-y-6">
                    {sortedLoans?.map((loan) => (
                        <div key={loan.id} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
                            
                            {/* Card Content Helper */}
                            <div className="flex gap-4 relative z-10">
                                {/* Cover */}
                                <div className="w-20 h-28 bg-gray-200 rounded-lg shadow-md flex-shrink-0 overflow-hidden">
                                     {loan.copy.book.coverImage && (
                                        <img src={loan.copy.book.coverImage} alt={loan.copy.book.title} className="w-full h-full object-cover" />
                                    )}
                                </div>
                                
                                {/* Info */}
                                <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                                    <div>
                                        {/* Status Badges */}
                                        {loan.status === 'PENDING' && (
                                            <div className="absolute top-0 right-0 bg-orange-100 text-orange-600 px-3 py-1 rounded-bl-xl rounded-tr-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                                                Pending Approval
                                            </div>
                                        )}
                                        
                                        {isLoanOverdue(loan) && (
                                             <div className="absolute top-4 right-4 bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                                                Overdue
                                            </div>
                                        )}

                                        <h3 className="font-serif font-bold text-xl text-gray-900 leading-tight truncate pr-16">{loan.copy.book.title}</h3>
                                        <p className="text-gray-500 text-sm mt-1">{loan.copy.book.author}</p>
                                    </div>

                                    {/* Footer Info based on status */}
                                    <div className="w-full">
                                        {loan.status === 'PENDING' && (
                                            <div className="flex justify-between items-end text-xs text-gray-400 font-medium">
                                                <span>Requested today</span>
                                                <span>Waiting for librarian</span>
                                            </div>
                                        )}

                                        {isLoanActive(loan) && loan.dueDate && (
                                            <>
                                                <div className="flex justify-between items-end text-xs font-medium mb-1.5">
                                                    <span className="text-gray-900">Due in {getDueDays(loan.dueDate)} days</span>
                                                    <span className="text-gray-400">{new Date(loan.dueDate).toLocaleDateString(undefined, {month:'short', day:'numeric'})}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#1e293b] w-2/3 rounded-full"></div>
                                                </div>
                                            </>
                                        )}

                                        {isLoanOverdue(loan) && loan.dueDate && (
                                            <>
                                                 <div className="flex justify-between items-end text-xs font-medium mb-1.5">
                                                    <span className="text-red-600 font-bold">{getOverdueDays(loan.dueDate)} days late</span>
                                                    <span className="text-gray-400 line-through decoration-red-400">{new Date(loan.dueDate).toLocaleDateString(undefined, {month:'short', day:'numeric'})}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-red-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-red-600 w-full rounded-full"></div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Pending State Progress Bar Decoration */}
                            {loan.status === 'PENDING' && (
                                <div className="mt-4 h-1.5 w-4/5 mx-auto bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-400 w-1/3 rounded-full"></div>
                                </div>
                            )}

                             {/* Overdue Action */}
                             {isLoanOverdue(loan) && (
                                <div className="mt-4 pt-4 border-t border-gray-50">
                                    <Button className="w-full bg-[#c2410c] hover:bg-[#9a3412] text-white rounded-xl shadow-lg shadow-orange-900/20">
                                        <ArrowLeft className="mr-2 h-4 w-4 rotate-180" />
                                        Return Now
                                    </Button>
                                </div>
                            )}

                             {/* Approved/Pending Action (Cancel) */}
                             {(loan.status === 'PENDING' || isLoanActive(loan)) && (
                                 <div className="mt-4 flex justify-between items-center pt-2">
                                     {isLoanActive(loan) && (
                                         <div className="flex items-center text-xs text-gray-400">
                                             <Info size={14} className="mr-1" />
                                             Cannot renew yet
                                         </div>
                                     )}
                                     {loan.status === 'PENDING' && (
                                         <div className="text-xs text-gray-400">
                                             Est. wait: 2 days
                                         </div>
                                     )}
                                     
                                     <Button variant="ghost" size="sm" className="ml-auto text-xs font-bold text-gray-500 hover:text-red-500 hover:bg-red-50 h-8 px-3">
                                         {loan.status === 'PENDING' ? 'Cancel Request' : 'Details'}
                                     </Button>
                                 </div>
                             )}

                        </div>
                    ))}
                    
                    {(!sortedLoans || sortedLoans.length === 0) && (
                         <div className="text-center py-12 text-gray-400">
                             <p>No active books.</p>
                             <Button variant="link" onClick={() => router.push('/books')}>Find a book to read</Button>
                         </div>
                    )}
                </div>
            </div>
        </div>
    )
}
