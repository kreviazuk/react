"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewsApi, Review } from "@/lib/reviews";
import { toast } from "sonner";
import { Search, Trash2, Star, User } from "lucide-react";
import { useState } from "react";

export default function ReviewsPage() {
    const queryClient = useQueryClient();
    const [search, setSearch] = useState("");

    const { data: reviews, isLoading } = useQuery({
        queryKey: ["admin-reviews"],
        queryFn: async () => {
             const res = await reviewsApi.getAll();
             return res.data.data as Review[];
        }
    });

    const deleteMutation = useMutation({
        mutationFn: reviewsApi.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });
            toast.success("Review deleted");
        },
        onError: () => toast.error("Failed to delete review")
    });

    const filteredReviews = reviews?.filter(r => 
        r.content?.toLowerCase().includes(search.toLowerCase()) || 
        r.book.title.toLowerCase().includes(search.toLowerCase()) ||
        r.user.name?.toLowerCase().includes(search.toLowerCase())
    );

    if (isLoading) return <div className="p-8">Loading...</div>;

    return (
        <div className="p-8 max-w-7xl mx-auto">
             <div className="flex justify-between items-center mb-8">
                <div>
                     <h1 className="text-3xl font-serif font-bold text-gray-900">Reviews & Ratings</h1>
                     <p className="text-gray-500 mt-1">Manage user feedback</p>
                </div>
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search reviews..." 
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
             </div>

             <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-medium">
                        <tr>
                            <th className="px-6 py-4">Book</th>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Rating</th>
                            <th className="px-6 py-4">Review</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredReviews?.map((review) => (
                            <tr key={review.id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 max-w-[200px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-10 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                                             {review.book.coverImage && <img src={review.book.coverImage} className="w-full h-full object-cover" />}
                                        </div>
                                        <p className="font-medium text-gray-900 truncate" title={review.book.title}>{review.book.title}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                     <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                            <User size={14} />
                                        </div>
                                        <span className="text-sm text-gray-700">{review.user.name || review.user.email}</span>
                                     </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex text-yellow-400 gap-0.5">
                                         {Array.from({length: 5}).map((_, i) => (
                                             <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-200"} />
                                         ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <p className="text-sm text-gray-600 line-clamp-2" title={review.content}>
                                        {review.content || <span className="text-gray-300 italic">No content</span>}
                                    </p>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    {new Date(review.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button 
                                        onClick={() => { if(confirm('Delete this review?')) deleteMutation.mutate(review.id) }}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                         {filteredReviews?.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                                    No reviews found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
             </div>
        </div>
    )
}
