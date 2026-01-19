"use client";

import { useBook } from "@/hooks/useBooks";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookDetailPage() {
    const { id } = useParams() as { id: string };
    const router = useRouter();
    const { data: book, isLoading, error } = useBook(id);

    if (isLoading) return <div className="p-8">Loading...</div>;
    if (error || !book) return <div className="p-8">Book not found</div>;

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header / Nav */}
            <div className="bg-white px-6 py-4 flex items-center shadow-sm sticky top-0 z-10">
                <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
                    <ArrowLeft size={24} className="text-gray-700" />
                </button>
                <div className="flex-1 ml-2 mr-8 text-center">
                    <span className="font-bold text-sm text-gray-500 uppercase tracking-widest">Book Detail</span>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 fade-in">
                {/* Book Cover */}
                <div className="flex justify-center mb-8">
                     <div className="w-40 h-60 bg-white rounded-lg shadow-2xl overflow-hidden relative transform transition-transform hover:scale-105 duration-300">
                        {book.coverImage ? (
                            <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">No Image</div>
                        )}
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
                     </div>
                </div>

                {/* Details */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2 font-serif">{book.title}</h2>
                        <p className="text-base text-gray-500 font-medium">{book.author}</p>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <div className="bg-white py-3 px-4 rounded-2xl border border-gray-100 flex flex-col items-center shadow-sm min-w-[30%]">
                             <div className="text-yellow-500 font-bold flex items-center gap-1 text-lg">
                                 4.5 <Star size={14} fill="currentColor" />
                             </div>
                             <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mt-1">Rating</div>
                        </div>
                        <div className="bg-white py-3 px-4 rounded-2xl border border-gray-100 flex flex-col items-center shadow-sm min-w-[30%]">
                             <div className="text-gray-900 font-bold text-lg">198</div>
                             <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mt-1">Pages</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">Synopsis</h3>
                        <p className="text-gray-600 leading-relaxed text-sm text-justify">
                            {book.description || "No description available for this book. The library is working on adding more details soon."}
                        </p>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 border-t border-gray-100 flex items-center justify-between pb-8 z-20">
                <div className="flex flex-col pl-2">
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Status</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Available
                    </span>
                </div>
                <Button className="rounded-full px-8 bg-[#134E4A] hover:bg-[#11403d] font-bold h-12 shadow-xl shadow-teal-900/20 w-48 text-base">
                    Borrow Now
                </Button>
            </div>
        </div>
    )
}
