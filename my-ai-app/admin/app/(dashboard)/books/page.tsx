"use client";

import { useState } from "react";
import { useBooks, useCreateBook } from "@/hooks/useBooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function BooksPage() {
  const { data: books, isLoading } = useBooks();
  const createBookMutation = useCreateBook();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", author: "", isbn: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBookMutation.mutateAsync(formData);
    setOpen(false);
    setFormData({ title: "", author: "", isbn: "" });
  };

  if (isLoading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">图书管理 (Library Admin)</h1>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>+ 录入新书 (Add Book)</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>录入新书</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">书名</Label>
                <Input 
                  id="title" 
                  value={formData.title} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})} 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="author">作者</Label>
                <Input 
                  id="author" 
                  value={formData.author} 
                  onChange={(e) => setFormData({...formData, author: e.target.value})} 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="isbn">ISBN</Label>
                <Input 
                  id="isbn" 
                  value={formData.isbn} 
                  onChange={(e) => setFormData({...formData, isbn: e.target.value})} 
                  required 
                />
              </div>
              <Button type="submit" disabled={createBookMutation.isPending}>
                {createBookMutation.isPending ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg p-4 bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>书名 (Title)</TableHead>
              <TableHead>作者 (Author)</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>库存 (Copies)</TableHead>
              <TableHead>操作 (Actions)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies?.length || 0}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Manage</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
