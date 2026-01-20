"use client";

import { useBooks, Book } from "@/hooks/useBooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, SlidersHorizontal, Star, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BookListPage() {
    const router = useRouter();
    const { data: books, isLoading, error } = useBooks();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Books");

    const categories = ["All Books", "Fiction", "Technology", "Sci-Fi", "History"];

    // Filter Logic
    const filteredBooks = books?.filter(book => {
        // 1. Search Query
        const matchesSearch = 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.isbn.includes(searchQuery);

        // 2. Category
        const matchesCategory = selectedCategory === "All Books" || book.category?.name === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const getStatus = (book: Book) => {
        const availableCount = book.copies.filter(c => c.status === 'AVAILABLE').length;
        if (availableCount > 0) {
            return { type: 'AVAILABLE', label: 'AVAILABLE' };
        }
        
        // 简化逻辑：如果没库存，假设借出了
        // 实际如果要显示 "Back in 3 days"，需要后端聚合 Loan 数据，这个暂时 mockup
        return { type: 'ON_LOAN', label: 'ON LOAN', sub: 'Back in 3 days' };
    };

    if (isLoading) return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div></div>;

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header / Search */}
            <div className="sticky top-0 z-10 bg-gray-50 pt-4 pb-2 px-4 space-y-4">
                <div className="flex gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input 
                            placeholder="Search title, author, or ISBN" 
                            className="pl-10 h-12 rounded-xl border-none shadow-sm bg-white text-base"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl bg-white border-none shadow-sm shrink-0">
                        <SlidersHorizontal size={20} className="text-gray-700" />
                    </Button>
                </div>

                {/* Filters */}
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                                selectedCategory === cat 
                                    ? "bg-[#134E4A] text-white shadow-md shadow-teal-900/10" 
                                    : "bg-white text-gray-600 border border-gray-100"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Book List */}
            <div className="px-4 space-y-4 mt-2">
                {filteredBooks?.map((book) => {
                    const status = getStatus(book);
                    return (
                        <div 
                            key={book.id}
                            onClick={() => router.push(`/books/${book.id}`)}
                            className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-gray-100 cursor-pointer active:scale-[0.99] transition-transform relative"
                        >
                            {/* Bookmark Icon */}
                            <Bookmark className="absolute top-4 right-4 text-gray-300 fill-gray-300/20" size={18} />

                            {/* Cover */}
                            <div className="w-24 h-36 bg-gray-200 rounded-lg shadow-md flex-shrink-0 overflow-hidden">
                                {book.coverImage && (
                                    <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                                <div>
                                    <h3 className="font-serif font-bold text-lg text-gray-900 leading-tight mb-1 line-clamp-2 pr-6">
                                        {book.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-medium">{book.author}</p>
                                </div>

                                <div className="flex items-end justify-between">
                                    <div className="flex items-center gap-1 bg-[#FFF9EB] px-2 py-1 rounded-md">
                                        <Star size={12} fill="#D97706" className="text-[#D97706]" />
                                        <span className="text-xs font-bold text-[#D97706]">4.8</span>
                                    </div>

                                    <div className="text-right">
                                        {status.type === 'ON_LOAN' ? (
                                            <div className="bg-gray-100 px-3 py-1 rounded-full inline-block">
                                                 <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">On Loan</span>
                                                 {/* <div className="text-[10px] text-gray-400 font-medium">Back in 3 days</div> */}
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1.5 status-available">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">Available</span>
                                            </div>
                                        )}
                                        {status.sub && (
                                            <p className="text-[10px] text-gray-400 mt-1">{status.sub}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {filteredBooks?.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        <p>No books found.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
