"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store";
import { Book, LayoutDashboard, LogOut, ClipboardCheck, LucideIcon, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// 菜单项类型定义
interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  roles: ('USER' | 'ADMIN')[]; // 允许访问的角色
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, logout, user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!useAuthStore.getState().isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  if (!isClient) return null; // Avoid hydration mismatch

  if (!isAuthenticated()) return null;

  // 菜单配置（带角色权限）
  const navItems: NavItem[] = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard, roles: ["USER", "ADMIN"] },
    { name: "Books", href: "/books", icon: Book, roles: ["USER", "ADMIN"] },
    { name: "借阅审核", href: "/loans/review", icon: ClipboardCheck, roles: ["ADMIN"] },
    { name: "收藏列表", href: "/favorites", icon: Heart, roles: ["ADMIN"] },
  ];

  // 根据用户角色过滤菜单
  const visibleNavItems = navItems.filter(item => 
    user?.role && item.roles.includes(user.role)
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col hidden md:flex">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Library Admin</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {visibleNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center mb-4 px-4">
             <div className="text-sm">
                <p className="font-medium text-gray-900">{user?.name}</p>
                <p className="text-gray-500 text-xs">{user?.email}</p>
                {/* 角色标签 */}
                <p className="mt-1">
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs font-medium",
                    user?.role === 'ADMIN' 
                      ? "bg-purple-100 text-purple-700" 
                      : "bg-gray-100 text-gray-600"
                  )}>
                    {user?.role === 'ADMIN' ? '管理员' : '普通用户'}
                  </span>
                </p>
             </div>
          </div>
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" onClick={logout}>
            <LogOut className="mr-3 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
         {/* Mobile Header could go here */}
        {children}
      </main>
    </div>
  );
}
