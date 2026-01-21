"use client";

import { useQuery } from "@tanstack/react-query";
import { adminFavoritesApi, Favorite } from "@/lib/favorites";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminFavoritesPage() {
    const { data: favorites, isLoading } = useQuery({
        queryKey: ["admin-favorites"],
        queryFn: async () => {
            const res = await adminFavoritesApi.getAll();
            return res.data.data as Favorite[];
        }
    });

    if (isLoading) return <div className="p-8">Loading...</div>;

    return (
        <div className="p-8 max-w-7xl mx-auto">
             <h1 className="text-3xl font-bold mb-6">用户收藏记录 (Favorites)</h1>
             <div className="border rounded-lg p-4 bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>User</TableHead>
                            <TableHead>Book</TableHead>
                            <TableHead>Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {favorites?.map((fav) => (
                            <TableRow key={fav.id}>
                                <TableCell>{fav.id}</TableCell>
                                <TableCell>
                                    <div>
                                        <div className="font-medium">{fav.user.name || "Unknown"}</div>
                                        <div className="text-xs text-gray-500">{fav.user.email}</div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        {fav.book.coverImage ? (
                                            <img src={fav.book.coverImage} className="w-8 h-10 object-cover rounded" alt="cover" />
                                        ) : (
                                            <div className="w-8 h-10 bg-gray-200 rounded"></div>
                                        )}
                                        <span className="font-medium">{fav.book.title}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {new Date(fav.createdAt).toLocaleString()}
                                </TableCell>
                            </TableRow>
                        ))}
                         {(!favorites || favorites.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                                    暂无收藏记录
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
             </div>
        </div>
    );
}
