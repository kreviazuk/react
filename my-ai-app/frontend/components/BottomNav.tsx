"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, Search, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
    const router = useRouter();
    const pathname = usePathname();

    // 登录/注册页不显示导航
    if (pathname === "/login" || pathname === "/register") return null;
    
    // 详情页通常也不显示底部导航，给内容更多空间
    // 如果路径包含 /books/ 且后面有数字，则认为是详情页
    const isDetailPage = /^\/books\/\d+$/.test(pathname);
    if (isDetailPage) return null;

    const navItems = [
        { label: "Home", icon: Home, path: "/home" },
        { label: "Search", icon: Search, path: "/books" },
        { label: "My Books", icon: BookOpen, path: "/my-books" },
        { label: "Profile", icon: User, path: "/profile" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-3 flex justify-between items-center z-50 pb-6 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
            {navItems.map((item) => {
                // 精确匹配 Home，其他页面前缀匹配
                const isActive = item.path === "/" 
                    ? pathname === "/"
                    : pathname.startsWith(item.path);

                return (
                    <button
                        key={item.label}
                        onClick={() => router.push(item.path)}
                        className="flex flex-col items-center gap-1.5 w-16"
                    >
                        <item.icon 
                            size={24} 
                            strokeWidth={isActive ? 2.5 : 2}
                            className={cn(
                                "transition-colors",
                                isActive ? "text-[#134E4A]" : "text-gray-400"
                            )} 
                        />
                        <span className={cn(
                            "text-[10px] font-bold tracking-wide",
                            isActive ? "text-[#134E4A]" : "text-gray-400"
                        )}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
