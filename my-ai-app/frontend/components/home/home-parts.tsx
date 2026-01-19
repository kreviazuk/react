"use client";

import { Bell, Search, ScanLine, ArrowRight, Star, ScrollText, FlaskConical, Brain, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/hooks/useBooks";
import Link from "next/link";

// === Header ===
export function HomeHeader() {
  return (
    <div className="flex justify-between items-start mb-6 pt-4">
      <div className="flex items-center gap-3">
         {/* Avatar Mock */}
         <div className="w-12 h-12 rounded-full bg-yellow-100 overflow-hidden border border-white shadow-sm flex-shrink-0">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full" />
         </div>
         <div className="flex flex-col">
            <p className="text-[#134E4A] text-lg font-bold leading-none mb-1">Welcome back,</p>
            <p className="text-gray-900 text-3xl font-bold leading-none">Alex.</p>
         </div>
      </div>
      <button className="relative p-2">
         <Bell className="text-[#134E4A]" size={28} />
         <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-tea-500 rounded-full border border-white bg-[#134E4A]"></span>
      </button>
    </div>
  );
}

// === Search Bar ===
export function SearchBar() {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <Input 
        className="pl-12 pr-12 h-14 rounded-2xl bg-white border-none shadow-sm text-base placeholder:text-gray-400" 
        placeholder="Search titles, authors, or ISBN." 
      />
      <ScanLine className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}

// === Hero Banner ===
export function HeroBanner() {
  return (
    <div className="relative w-full h-64 rounded-[32px] overflow-hidden mb-10 shadow-lg">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5E3C] to-[#C68E5D]"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-center h-full max-w-[70%]">
        <div className="mb-3">
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] tracking-wider font-bold px-3 py-1.5 rounded-md uppercase">
                Live Event
            </span>
        </div>
        <h2 className="text-white text-2xl font-bold leading-tight mb-2">
            Meet the Author: <br/> Zadie Smith
        </h2>
        <p className="text-white/80 text-sm mb-6 font-medium">
            Join the live Q&A session this Friday at 6 PM.
        </p>
        
        <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 rounded-full px-5 py-5 font-bold text-sm h-10 group">
            Reserve a Spot 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
        </Button>
      </div>

      {/* Decorative Book/Glasses Image (Mock) */}
      <div className="absolute bottom-0 right-0 w-[45%] h-[80%] opacity-90">
         <div className="w-full h-full bg-gradient-to-tl from-black/20 to-transparent rounded-tl-[100px]"></div>
      </div>
    </div>
  );
}

// === New Arrivals ===
export function NewArrivals() {
    const { data: books, isLoading } = useBooks();

    if (isLoading) return <div className="mb-10 px-6">Loading new arrivals...</div>;

    const recentBooks = books?.slice(0, 5) || [];

    return (
        <div className="mb-10">
            <div className="flex justify-between items-center mb-4 px-1">
                <h3 className="text-xl font-bold text-gray-900">New Arrivals</h3>
                <button className="text-[#134E4A] text-sm font-semibold">View all</button>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar snap-x">
                {recentBooks.map((book) => (
                    <Link href={`/books/${book.id}`} key={book.id} className="flex-shrink-0 w-32 snap-center block">
                        <div className={`h-48 bg-gray-100 rounded-xl shadow-md mb-3 relative overflow-hidden group`}>
                             {/* Book Spine Mock */}
                             <div className="absolute left-1 top-0 bottom-0 w-1 bg-black/5 z-10"></div>
                             {book.coverImage ? (
                                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                             ) : (
                                <div className="w-full h-full flex items-center justify-center p-2 text-center bg-blue-100">
                                     <span className="text-blue-900/50 text-xs font-serif italic">{book.title}</span>
                                </div>
                             )}
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1 line-clamp-2">{book.title}</h4>
                        <p className="text-gray-500 text-xs truncate">{book.author}</p>
                    </Link>
                ))}
                {recentBooks.length === 0 && <p className="text-gray-400 text-sm">No new books yet.</p>}
            </div>
        </div>
    )
}

// === Categories ===
const CATEGORIES = [
    { name: "History", count: "1,240 books", icon: ScrollText, bg: "bg-emerald-100", color: "text-emerald-800" },
    { name: "Science", count: "856 books", icon: FlaskConical, bg: "bg-orange-100", color: "text-orange-800" },
    { name: "Philosophy", count: "420 books", icon: Brain, bg: "bg-orange-100", color: "text-orange-800" },
    { name: "Fiction", count: "4,203 books", icon: BookOpen, bg: "bg-blue-100", color: "text-blue-800" },
];

export function CategoryGrid() {
    return (
        <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 px-1">Explore Categories</h3>
            <div className="grid grid-cols-2 gap-4">
                {CATEGORIES.map((cat, i) => (
                    <div key={i} className="bg-[#F8F7F4] p-4 rounded-3xl flex flex-col gap-3">
                         <div className={`w-10 h-10 ${cat.bg} rounded-full flex items-center justify-center`}>
                             <cat.icon size={20} className={cat.color} />
                         </div>
                         <div>
                             <h4 className="font-bold text-gray-900">{cat.name}</h4>
                             <p className="text-gray-400 text-xs">{cat.count}</p>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// === Recommended ===
export function RecommendedList() {
    const { data: books } = useBooks();
    // Just pick different ones or random ones for demo
    const recommended = books?.slice(0, 3) || [];

    return (
        <div className="mb-8">
             <h3 className="text-xl font-bold text-gray-900 mb-4 px-1">Recommended for You</h3>
             <div className="space-y-4">
                 {recommended.map(book => (
                     <Link href={`/books/${book.id}`} key={book.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center block">
                         <div className="w-16 h-24 bg-gray-200 rounded-lg shadow-sm flex-shrink-0 overflow-hidden">
                            {book.coverImage ? (
                                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Img</div>
                            )}
                         </div>
                         <div className="flex-1">
                             <div className="flex justify-between items-start mb-1">
                                 <h4 className="font-bold text-gray-900 line-clamp-1">{book.title}</h4>
                                 <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                    <Star size={8} fill="currentColor" /> 4.5
                                 </span>
                             </div>
                             <p className="text-gray-500 text-xs mb-3">{book.author}</p>
                             
                             <div className="flex justify-between items-center">
                                 <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded">Available</span>
                                 <button className="text-[#134E4A] text-xs font-bold">Borrow</button>
                             </div>
                         </div>
                     </Link>
                 ))}
             </div>
        </div>
    )
}
