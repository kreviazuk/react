"use client";

import { useBook, Book } from "@/hooks/useBooks";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Star, Heart, CheckCircle2, Clock, AlertCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loansApi } from "@/api/loans";
import { favoritesApi } from "@/api/favorites";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { reviewsApi, Review } from "@/api/reviews";

export default function BookDetailPage() {
    const { id } = useParams() as { id: string };
    const router = useRouter();
    const queryClient = useQueryClient();
    const { data: book, isLoading, error } = useBook(id);
    
    // --- Data Fetching ---

    // 1. My Loans (to check status)
    const { data: myLoans } = useQuery({
        queryKey: ["my-loans"],
        queryFn: async () => {
            const res = await loansApi.getMyLoans();
            return res.data.data;
        },
    });

    // 2. Favorites (to check status)
    const { data: favorites, refetch: refetchFavorites } = useQuery({
        queryKey: ["favorites"],
        queryFn: async () => {
             const res = await favoritesApi.getFavorites();
             return res.data.data as Book[];
        }
    });

    // 3. Reviews
    const [rating, setRating] = useState(0);
    const [reviewContent, setReviewContent] = useState("");

    const { data: reviewsData, refetch: refetchReviews } = useQuery({
        queryKey: ["reviews", id],
        queryFn: () => reviewsApi.getReviews(Number(id)).then(res => res.data)
    });

    // --- Computed State ---

    const currentLoan = myLoans?.find(
        (loan: any) => loan.copy.bookId === Number(id) && 
        ['PENDING', 'APPROVED', 'OVERDUE'].includes(loan.status)
    );

    const availableCopies = book?.copies?.filter(c => c.status === 'AVAILABLE') || [];
    const hasAvailableCopies = availableCopies.length > 0;
    
    const isFavorite = favorites?.some((b: any) => b.id === Number(id));

    // --- Mutations ---

    const applyMutation = useMutation({
        mutationFn: async () => {
            if (!hasAvailableCopies) throw new Error("No copies available");
            const copyId = availableCopies[0].id;
            return loansApi.apply(copyId);
        },
        onSuccess: () => {
            toast.success("Request Sent Successfully", {
                description: "Ready for pickup at Central Library once approved.",
            });
            queryClient.invalidateQueries({ queryKey: ["my-loans"] });
            queryClient.invalidateQueries({ queryKey: ["book", id] });
        },
        onError: (err: any) => {
            toast.error(err.response?.data?.message || "Failed to request book");
        },
    });

    const favoriteMutation = useMutation({
        mutationFn: async () => {
            return favoritesApi.toggleFavorite(Number(id));
        },
        onSuccess: () => {
            refetchFavorites();
            toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
        },
        onError: () => {
            toast.error("Failed to update favorites");
        }
    });

    const addReviewMutation = useMutation({
        mutationFn: () => reviewsApi.createReview(Number(id), { rating, content: reviewContent }),
        onSuccess: () => {
            toast.success("Review posted!");
            setRating(0);
            setReviewContent("");
            refetchReviews();
        },
        onError: (err: any) => toast.error(err.response?.data?.error || "Failed to post review")
    });

    // --- Handlers ---

    const handleBorrow = () => {
        applyMutation.mutate();
    };

    const toggleFavorite = () => {
        favoriteMutation.mutate();
    };


    if (isLoading) return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div></div>;
    if (error || !book) return <div className="p-8 text-center text-gray-500">Book not found</div>;

    // --- Status Button Logic ---
    let statusButton;
    if (currentLoan) {
        if (currentLoan.status === 'PENDING') {
            statusButton = (
                <Button className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 font-bold h-12 shadow-lg shadow-emerald-900/10 text-base" disabled>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Request Sent
                </Button>
            );
        } else if (currentLoan.status === 'APPROVED') {
            statusButton = (
                <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 font-bold h-12 shadow-lg shadow-blue-900/10 text-base" disabled>
                    <Clock className="mr-2 h-5 w-5" />
                    Borrowed (Due: {currentLoan.dueDate ? new Date(currentLoan.dueDate).toLocaleDateString() : 'TBD'})
                </Button>
            );
        } else if (currentLoan.status === 'OVERDUE') {
            statusButton = (
                <Button className="w-full rounded-xl bg-red-600 hover:bg-red-700 font-bold h-12 shadow-lg shadow-red-900/10 text-base" disabled>
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Overdue
                </Button>
            );
        }
    } else if (book?.isAvailable === false) {
         statusButton = (
            <Button className="w-full rounded-xl bg-gray-100 text-gray-400 font-bold h-12 shadow-none text-base border border-gray-200 cursor-not-allowed" disabled>
                <AlertCircle className="mr-2 h-5 w-5" />
                Not Available for Loan
            </Button>
        );
    } else if (book?.isBorrowed) {
         statusButton = (
            <Button className="w-full rounded-xl bg-orange-100 text-orange-700 font-bold h-12 shadow-none text-base border border-orange-200 cursor-not-allowed" disabled>
                <Clock className="mr-2 h-5 w-5" />
                On Loan (Manual Hold)
            </Button>
        );
    } else if (hasAvailableCopies) {
        statusButton = (
            <Button 
                onClick={handleBorrow} 
                disabled={applyMutation.isPending}
                className="w-full rounded-xl bg-[#134E4A] hover:bg-[#11403d] font-bold h-12 shadow-xl shadow-teal-900/20 text-base"
            >
                {applyMutation.isPending ? "Requesting..." : "Request Book"}
            </Button>
        );
    } else {
         statusButton = (
            <Button className="w-full rounded-xl bg-orange-100 text-orange-700 font-bold h-12 shadow-none text-base hover:bg-orange-200">
                Join Waitlist
            </Button>
        );
    }

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Header / Nav */}
            <div className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10">
                <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
                    <ArrowLeft size={24} className="text-gray-900" />
                </button>
                <div className="flex gap-2">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="px-6">
                {/* Book Cover */}
                <div className="flex justify-center mb-8 mt-2">
                     <div className="w-48 h-72 bg-gray-200 rounded-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] overflow-hidden relative">
                        {book.coverImage ? (
                            <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                        )}
                     </div>
                </div>

                {/* Title & Author */}
                <div className="text-center space-y-2 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 font-serif tracking-tight">{book.title}</h2>
                    <p className="text-gray-500 text-lg">{book.author}</p>
                    
                    {/* Rating */}
                    {reviewsData?.stats ? (
                        <div className="flex items-center justify-center gap-1 text-teal-800 pt-1">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star 
                                        key={i} 
                                        size={16} 
                                        fill={i <= Math.round(reviewsData.stats.average) ? "currentColor" : "none"} 
                                        className={i <= Math.round(reviewsData.stats.average) ? "text-yellow-400" : "text-gray-300"} 
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-bold ml-1 text-gray-900">{Number(reviewsData.stats.average).toFixed(1)}</span>
                            <span className="text-sm text-gray-400">({reviewsData.stats.count})</span>
                        </div>
                    ): (
                        <div className="flex items-center justify-center gap-1 text-teal-800 pt-1">
                            <span className="text-sm text-gray-400">No ratings yet</span>
                        </div>
                    )}
                </div>

                {/* Tags */}
                <div className="flex justify-center gap-3 mb-8">
                    <div className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-600 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        {book.category?.name || "Fiction"}
                    </div>
                    <div className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-600 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                        {book.publishDate ? new Date(book.publishDate).getFullYear() : "N/A"}
                    </div>
                    <div className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-600 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                        218 pgs
                    </div>
                </div>

                {/* Synopsis */}
                <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Synopsis</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        {book.description || "No description available."}
                    </p>
                </div>

                {/* Availability Section */}
                <div className="mb-10">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900 text-lg">Availability</h3>
                        <span className={cn(
                            "text-xs font-bold px-2 py-1 rounded bg-emerald-100 text-emerald-700",
                            !hasAvailableCopies && "bg-orange-100 text-orange-700"
                        )}>
                           {hasAvailableCopies ? `${availableCopies.length} Copies Available` : "Waitlist Only"}
                        </span>
                    </div>

                    <div className="space-y-3"> 
                        {book.copies && book.copies.length > 0 ? (
                            book.copies.map(copy => (
                                <div key={copy.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-teal-700 mt-0.5" size={18} />
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{copy.location || "Central Library"}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">0.8 mi away</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1.5 justify-end">
                                            <div className={cn(
                                                "w-2 h-2 rounded-full",
                                                copy.status === 'AVAILABLE' ? "bg-emerald-500" : "bg-orange-500"
                                            )}></div>
                                            <span className={cn(
                                                "text-xs font-bold",
                                                copy.status === 'AVAILABLE' ? "text-emerald-700" : "text-orange-700"
                                            )}>
                                                {copy.status === 'AVAILABLE' ? "On Shelf" : "Borrowed"}
                                            </span>
                                        </div>
                                        {copy.status !== 'AVAILABLE' && (
                                            <p className="text-xs text-orange-400 mt-1 font-medium">Due Oct 12</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                             <div className="p-4 text-center text-gray-400 border border-dashed rounded-xl border-gray-200 text-sm">
                                 No copies registered in system.
                             </div>
                        )}
                    </div>
                </div>

                 {/* Reviews Section */}
                 <div className="mb-10">
                    <h3 className="font-bold text-gray-900 text-lg mb-4">Reviews</h3>
                    
                    {/* Review Stats */}
                    {reviewsData?.stats && (
                        <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded-xl">
                            <div className="text-center border-r border-gray-200 pr-4">
                                <div className="text-3xl font-bold text-gray-900">{Number(reviewsData.stats.average).toFixed(1)}</div>
                                <div className="flex justify-center text-yellow-400 text-xs text-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className={i < Math.round(Number(reviewsData.stats.average)) ? "text-yellow-400" : "text-gray-300"}>★</span>
                                    ))}
                                </div>
                                <div className="text-xs text-gray-400 mt-1">{reviewsData.stats.count} reviews</div>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-500">
                                    {reviewsData.stats.count > 0 ? "Community feedback" : "No reviews yet. Be the first!"}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Review List */}
                    <div className="space-y-6 mb-8">
                        {reviewsData?.data.map((review: Review) => (
                            <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-bold text-gray-900 text-sm">{review.user.name || "Anonymous"}</div>
                                    <div className="text-xs text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</div>
                                </div>
                                <div className="flex text-yellow-400 text-xs mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{review.content}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Review Form */}
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-gray-900 text-sm mb-3">Write a Review</h4>
                        <div className="flex gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button key={star} onClick={() => setRating(star)} className={cn("transition-colors", star <= rating ? "text-yellow-400" : "text-gray-300")}>
                                    <Star size={24} fill="currentColor" />
                                </button>
                            ))}
                        </div>
                        <textarea 
                            className="w-full p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 mb-3 bg-white"
                            placeholder="Share your thoughts about this book..."
                            rows={3}
                            value={reviewContent}
                            onChange={(e) => setReviewContent(e.target.value)}
                        ></textarea>
                        <Button 
                            onClick={() => addReviewMutation.mutate()} 
                            disabled={addReviewMutation.isPending || rating === 0}
                            className="w-full bg-gray-900 text-white rounded-lg py-2 text-sm font-bold hover:bg-gray-800"
                        >
                            {addReviewMutation.isPending ? "Posting..." : "Post Review"}
                        </Button>
                    </div>
                </div>

            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 flex items-center gap-3 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <button 
                    onClick={toggleFavorite}
                     disabled={favoriteMutation.isPending}
                    className={cn(
                        "w-14 h-12 flex items-center justify-center rounded-xl border transition-colors",
                        isFavorite 
                            ? "border-red-100 bg-red-50 text-red-500" 
                            : "border-gray-200 text-gray-900 hover:bg-gray-50"
                    )}
                >
                    <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
                </button>
                <div className="flex-1">
                    {statusButton}
                </div>
            </div>
        </div>
    )
}
