"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { loansApi, Loan } from "@/api/loans";
import { favoritesApi } from "@/api/favorites";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bell, Search, Info, ChevronRight, AlertCircle, Clock, Heart, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Book } from "@/hooks/useBooks";
import { toast } from "sonner";

export default function MyBooksPage() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const [activeTab, setActiveTab] = useState<'current' | 'requests' | 'history'>('current');

    // Fetch Loans
    const { data: loans, isLoading: loansLoading } = useQuery({
        queryKey: ["my-loans"],
        queryFn: async () => {
            const res = await loansApi.getMyLoans();
            return res.data.data as Loan[];
        },
    });

    // Fetch Favorites
    const { data: favorites, isLoading: favoritesLoading } = useQuery({
        queryKey: ["favorites"],
        queryFn: async () => {
            const res = await favoritesApi.getFavorites();
            return res.data.data as Book[];
        },
    });

    // Remove Favorite Mutation
    const removeFavoriteMutation = useMutation({
        mutationFn: async (bookId: number) => {
             return favoritesApi.toggleFavorite(bookId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["favorites"] });
            toast.success("Removed from favorites");
        }
    });

    if (loansLoading || favoritesLoading) return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div></div>;

    // --- Helpers ---
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

    const isLoanOverdue = (l: Loan) => {
        if (l.status === 'OVERDUE') return true;
        if (l.status === 'APPROVED' && l.dueDate) {
            return new Date(l.dueDate) < new Date();
        }
        return false;
    };

    const isLoanActive = (l: Loan) => {
        return l.status === 'APPROVED' && !isLoanOverdue(l);
    }

    // --- Data Filtering ---
    // Requests Tab: Pending, Approved, Overdue
    const requestLoans = loans?.filter(l => ['PENDING', 'APPROVED', 'OVERDUE'].includes(l.status)).sort((a, b) => {
         // Priority: Overdue > Active > Pending
         const getPriority = (l: Loan) => {
            if (isLoanOverdue(l)) return 0;
            if (isLoanActive(l)) return 1;
            return 2;
        };
        return getPriority(a) - getPriority(b);
    });

    const overdueLoans = requestLoans?.filter(l => isLoanOverdue(l));

    // History Tab: Returned, Rejected
    const historyLoans = loans?.filter(l => ['RETURNED', 'REJECTED'].includes(l.status));

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

                {/* Tabs */}
                <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                    <button 
                        onClick={() => setActiveTab('current')}
                        className={cn("flex-1 py-1.5 text-sm font-medium rounded-lg transition-all", activeTab === 'current' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900")}
                    >
                        Current
                    </button>
                    <button 
                        onClick={() => setActiveTab('requests')}
                        className={cn("flex-1 py-1.5 text-sm font-medium rounded-lg transition-all", activeTab === 'requests' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900")}
                    >
                        Requests
                    </button>
                    <button 
                        onClick={() => setActiveTab('history')}
                        className={cn("flex-1 py-1.5 text-sm font-medium rounded-lg transition-all", activeTab === 'history' ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900")}
                    >
                        History
                    </button>
                </div>
            </header>

            <div className="px-4 py-6">
                
                {/* --- FAVORITES (Current Tab) --- */}
                {activeTab === 'current' && (
                    <div className="space-y-6">
                         <div className="flex justify-between items-end mb-2">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">My Favorites</p>
                                <h2 className="text-3xl font-serif italic font-bold text-gray-900">
                                    {favorites?.length || 0} Saved
                                </h2>
                            </div>
                        </div>

                        {favorites?.map((book) => (
                             <div 
                                key={book.id} 
                                className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex gap-4 relative overflow-hidden active:scale-[0.99] transition-transform"
                                onClick={() => router.push(`/books/${book.id}`)}
                             >
                                <div className="w-20 h-28 bg-gray-200 rounded-lg shadow-md flex-shrink-0 overflow-hidden">
                                     {book.coverImage && (
                                        <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                                    )}
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-serif font-bold text-lg text-gray-900 leading-tight line-clamp-2 pr-2">{book.title}</h3>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); removeFavoriteMutation.mutate(book.id); }}
                                                className="text-red-400 hover:text-red-500 p-1 -mr-2 -mt-2"
                                            >
                                                <Heart size={20} fill="currentColor" />
                                            </button>
                                        </div>
                                        <p className="text-gray-500 text-sm mt-1">{book.author}</p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className={cn("w-2 h-2 rounded-full", (book.isAvailable ?? true) ? "bg-emerald-500" : "bg-gray-400")}></div>
                                        <span className={cn("text-xs font-medium", (book.isAvailable ?? true) ? "text-emerald-700" : "text-gray-500")}>
                                            {(book.isAvailable ?? true) ? "Available now" : "Unavailable"}
                                        </span>
                                    </div>
                                </div>
                             </div>
                        ))}

                        {(!favorites || favorites.length === 0) && (
                            <div className="text-center py-12 text-gray-400 border border-dashed rounded-xl border-gray-200">
                                <p>No favorite books yet.</p>
                                <Button variant="link" onClick={() => router.push('/books')}>Explore books</Button>
                            </div>
                        )}
                    </div>
                )}

                {/* --- REQUESTS (Requests Tab) --- */}
                {activeTab === 'requests' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Active Loans & Requests</p>
                                <h2 className="text-3xl font-serif italic font-bold text-gray-900">
                                    {requestLoans?.length || 0} Items
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

                        {requestLoans?.map((loan) => (
                             <div key={loan.id} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
                                <div className="flex gap-4 relative z-10">
                                    <div className="w-20 h-28 bg-gray-200 rounded-lg shadow-md flex-shrink-0 overflow-hidden">
                                         {loan.copy.book.coverImage && (
                                            <img src={loan.copy.book.coverImage} alt={loan.copy.book.title} className="w-full h-full object-cover" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                                        <div>
                                            {loan.status === 'PENDING' && (
                                                <div className="absolute top-0 right-0 bg-orange-100 text-orange-600 px-3 py-1 rounded-bl-xl rounded-tr-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                                                    Pending
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
                                {loan.status === 'PENDING' && (
                                    <div className="mt-4 h-1.5 w-4/5 mx-auto bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-orange-400 w-1/3 rounded-full"></div>
                                    </div>
                                )}
                             </div>
                        ))}
                         {(!requestLoans || requestLoans.length === 0) && (
                            <div className="text-center py-12 text-gray-400 border border-dashed rounded-xl border-gray-200">
                                <p>No active requests or loans.</p>
                                <Button variant="link" onClick={() => router.push('/books')}>Request a book</Button>
                            </div>
                        )}
                    </div>
                )}

                 {/* --- HISTORY (History Tab) --- */}
                 {activeTab === 'history' && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Reading History</h2>
                         {historyLoans?.map((loan) => (
                             <div key={loan.id} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-gray-100 opacity-75">
                                <div className="w-16 h-20 bg-gray-200 rounded overflow-hidden">
                                    {loan.copy.book.coverImage && (
                                        <img src={loan.copy.book.coverImage} alt={loan.copy.book.title} className="w-full h-full object-cover grayscale" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{loan.copy.book.title}</h3>
                                    <div className="mt-2 text-xs font-bold px-2 py-0.5 bg-gray-100 rounded inline-block">
                                        {loan.status}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">Returned on {loan.returnDate ? new Date(loan.returnDate).toLocaleDateString() : 'N/A'}</p>
                                </div>
                             </div>
                         ))}
                          {(!historyLoans || historyLoans.length === 0) && (
                            <div className="text-center py-12 text-gray-400">
                                <p>No history yet.</p>
                            </div>
                        )}
                    </div>
                 )}

            </div>
        </div>
    )
}
