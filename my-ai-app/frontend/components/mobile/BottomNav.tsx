"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Book, User, ScanLine } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  // Active color: text-[#134E4A] (Deep Teal/Green)
  // Inactive: text-gray-400

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 h-20 z-40 px-6 pb-2">
      <div className="grid grid-cols-5 h-full items-center">
        {/* Home */}
        <Link href="/home" className="flex flex-col items-center justify-center gap-1">
          <Home className={cn("w-6 h-6", isActive('/home') ? "text-[#134E4A]" : "text-gray-400")} />
          <span className={cn("text-[10px] font-medium", isActive('/home') ? "text-[#134E4A]" : "text-gray-400")}>Home</span>
        </Link>
        
        {/* Search */}
        <Link href="/search" className="flex flex-col items-center justify-center gap-1">
          <Search className={cn("w-6 h-6", isActive('/search') ? "text-[#134E4A]" : "text-gray-400")} />
          <span className={cn("text-[10px] font-medium", isActive('/search') ? "text-[#134E4A]" : "text-gray-400")}>Search</span>
        </Link>

        {/* Scan Button (Center) */}
        <div className="relative flex justify-center items-center">
            <div className="absolute -top-10">
                <button className="bg-[#134E4A] rounded-full p-4 shadow-xl border-[6px] border-white active:scale-95 transition-transform">
                    <ScanLine className="w-7 h-7 text-white" />
                </button>
            </div>
        </div>

        {/* My Books */}
        <Link href="/my-books" className="flex flex-col items-center justify-center gap-1">
          <Book className={cn("w-6 h-6", isActive('/my-books') ? "text-[#134E4A]" : "text-gray-400")} />
          <span className={cn("text-[10px] font-medium", isActive('/my-books') ? "text-[#134E4A]" : "text-gray-400")}>My Books</span>
        </Link>

        {/* Profile */}
        <Link href="/profile" className="flex flex-col items-center justify-center gap-1">
          <User className={cn("w-6 h-6", isActive('/profile') ? "text-[#134E4A]" : "text-gray-400")} />
          <span className={cn("text-[10px] font-medium", isActive('/profile') ? "text-[#134E4A]" : "text-gray-400")}>Profile</span>
        </Link>
      </div>
    </div>
  );
}
