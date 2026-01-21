"use client";

import { useState } from "react";
import { useBooks, useCreateBook, useUpdateBook, useDeleteBook, useCategories } from "@/hooks/useBooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import api from "@/lib/api";
import { Upload, Image as ImageIcon, Loader2, Trash2, AlertCircle, X } from "lucide-react";
import { Switch } from "@/components/ui/switch"; 

const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  isbn: z.string().length(13, "ISBN must be exactly 13 characters"),
  coverImage: z.string().optional(),
  description: z.string().optional(),
  categoryId: z.coerce.number().optional(),
  isAvailable: z.boolean().default(true),
  isBorrowed: z.boolean().default(false),
  inventoryCount: z.coerce.number().int().nonnegative().optional(),
});

type BookFormValues = z.infer<typeof bookSchema>;

export default function BooksPage() {
  const { data: books, isLoading } = useBooks();
  const { data: categories } = useCategories();
  const createBookMutation = useCreateBook();
  const updateBookMutation = useUpdateBook();
  const deleteBookMutation = useDeleteBook();
  
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [bookToDelete, setBookToDelete] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookFormValues>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      coverImage: "",
      description: "",
      categoryId: undefined,
      isAvailable: true,
      isBorrowed: false,
      inventoryCount: 0,
    },
  });

  const coverImage = watch("coverImage");

  const onSubmit = async (data: BookFormValues) => {
    try {
      if (editingId) {
        await updateBookMutation.mutateAsync({ id: editingId, data });
      } else {
        await createBookMutation.mutateAsync(data);
      }
      setOpen(false);
      reset(); 
      setEditingId(null);
    } catch (error) {
      console.error("Failed to save book", error);
    }
  };

  const handleDeleteClick = (book: any) => {
    setBookToDelete(book);
  };

  const confirmDelete = async () => {
    if (!bookToDelete) return;
    try {
      await deleteBookMutation.mutateAsync(bookToDelete.id);
      setBookToDelete(null);
    } catch (error) {
      alert("删除失败，可能该书有借阅记录");
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      reset(); // Reset form when dialog closes
      setEditingId(null);
    }
  };

  const handleEdit = (book: any) => {
    setEditingId(book.id);
    setValue("title", book.title);
    setValue("author", book.author);
    setValue("isbn", book.isbn);
    setValue("coverImage", book.coverImage || "");
    setValue("description", book.description || "");
    setValue("categoryId", book.categoryId);
    setValue("isAvailable", book.isAvailable ?? true);
    setValue("isBorrowed", book.isBorrowed ?? false);
    setValue("inventoryCount", book.copies?.length || 0); // Set current inventory
    setOpen(true);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const res = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setValue("coverImage", res.data.url);
    } catch (err) {
      console.error("Upload failed", err);
      alert("上传失败，请重试");
    } finally {
      setUploading(false);
    }
  };

  if (isLoading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">图书管理 (Library Admin)</h1>
        
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button>+ 录入新书 (Add Book)</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{editingId ? "编辑图书" : "录入新书"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">书名</Label>
                    <Input id="title" {...register("title")} />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="author">作者</Label>
                    <Input id="author" {...register("author")} />
                    {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
                  </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="isbn">ISBN</Label>
                  <Input id="isbn" {...register("isbn")} />
                  {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>}
                </div>
                <div>
                  <Label htmlFor="inventoryCount">库存数量 (Inventory)</Label>
                  <Input 
                    id="inventoryCount" 
                    type="number"
                    min={0}
                    {...register("inventoryCount")} 
                    placeholder="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">自动增加/减少库存</p>
                  {errors.inventoryCount && <p className="text-red-500 text-sm mt-1">{errors.inventoryCount.message}</p>}
                </div>
              </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                  <Label htmlFor="category">分类 (Category)</Label>
                  <Controller
                    control={control}
                    name="categoryId"
                    render={({ field }) => (
                      <Select 
                        onValueChange={(value) => field.onChange(Number(value))} 
                        value={field.value ? String(field.value) : undefined}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="选择分类..." />
                        </SelectTrigger>
                        <SelectContent>
                          {categories?.map((cat) => (
                            <SelectItem key={cat.id} value={String(cat.id)}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
               </div>

                <div className="grid grid-cols-2 gap-4">
                 <Controller
                    control={control}
                    name="isAvailable"
                    render={({ field }) => (
                        <div className="flex flex-col gap-2 rounded-lg border p-3 bg-gray-50 h-full justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-sm font-medium">开放借阅</Label>
                                <div className="text-xs text-gray-500">
                                    关闭后全体不可见
                                </div>
                            </div>
                            <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </div>
                    )}
                />
                 <Controller
                    control={control}
                    name="isBorrowed"
                    render={({ field }) => (
                        <div className="flex flex-col gap-2 rounded-lg border p-3 bg-orange-50 h-full justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-sm font-medium text-orange-900">标记已借出</Label>
                                <div className="text-xs text-orange-700">
                                    显示为 "On Loan"
                                </div>
                            </div>
                            <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="data-[state=checked]:bg-orange-500"
                            />
                        </div>
                    )}
                />
               </div>

              <div>
                <Label htmlFor="description">简介 (Description)</Label>
                <Textarea 
                  id="description" 
                  placeholder="请输入图书简介..." 
                  className="mt-1"
                  {...register("description")} 
                />
              </div>
              
              <div className="space-y-2">
                <Label>封面图片</Label>
                <div className="flex justify-center">
                   <div className="relative group w-32 h-44 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                      
                      {/* Hidden Real Input */}
                      <Input 
                        type="file" 
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                        onChange={handleUpload}
                        disabled={uploading}
                      />

                      {/* Loading State */}
                      {uploading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
                           <Loader2 className="animate-spin text-primary" size={24} />
                           <span className="text-xs text-primary mt-2 font-medium">Uploading...</span>
                        </div>
                      )}

                      {/* Image Preview or Placeholder */}
                      {coverImage ? (
                        <>
                           <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                           {/* Hover Overlay */}
                           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white z-10">
                              <Upload size={20} className="mb-1" />
                              <span className="text-xs font-medium">更换图片</span>
                           </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                           <ImageIcon size={28} className="mb-2" />
                           <span className="text-xs text-center font-medium px-2">点击上传封面</span>
                        </div>
                      )}
                   </div>
                </div>
                {/* Hidden field for binding */}
                <input type="hidden" {...register("coverImage")} />
              </div>

              <Button type="submit" disabled={createBookMutation.isPending || updateBookMutation.isPending || uploading} className="w-full">
                {createBookMutation.isPending || updateBookMutation.isPending ? "Submitting..." : (editingId ? "保存修改 (Save)" : "立即创建 (Create)")}
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
              <TableHead>封面</TableHead>
              <TableHead>书名 (Title)</TableHead>
              <TableHead>作者 (Author)</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>状态 (Status)</TableHead>
              <TableHead>库存 (Copies)</TableHead>
              <TableHead>操作 (Actions)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell>
                  {book.coverImage ? (
                    <div 
                      className="w-10 h-14 relative border rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary hover:scale-105 transition-all"
                      onClick={() => setPreviewImage(book.coverImage || "")}
                    >
                      <img src={book.coverImage} alt={book.title} className="object-cover w-full h-full" />
                    </div>
                  ) : (
                    <div className="w-10 h-14 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                      无图
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>
                    {/* Status Logic */}
                    {book.isAvailable === false ? (
                         <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                            不可借阅
                         </span>
                    ) : book.isBorrowed ? (
                         <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                            已借出
                         </span>
                    ) : (
                         <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            可借阅
                         </span>
                    )}
                </TableCell>
                <TableCell>{book.copies?.length || 0}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(book)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteClick(book)}>
                        <Trash2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!bookToDelete} onOpenChange={(open) => !open && setBookToDelete(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
               <AlertCircle className="h-5 w-5" />
               确认删除 (Confirm Delete)
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-gray-500">
              您确定要删除图书 <span className="font-bold text-gray-900">“{bookToDelete?.title}”</span> 吗？
            </p>
            <p className="text-sm text-gray-500 mt-2">
              此操作无法撤销。如果该书有借阅记录，可能无法删除。
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setBookToDelete(null)}>取消 (Cancel)</Button>
            <Button 
              variant="destructive" 
              onClick={confirmDelete}
              disabled={deleteBookMutation.isPending}
            >
              {deleteBookMutation.isPending ? "Deleting..." : "确认删除"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Preview Dialog */}
      <Dialog open={!!previewImage} onOpenChange={(open) => !open && setPreviewImage(null)}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none text-center">
            <div className="relative w-full h-[80vh] flex items-center justify-center pointer-events-none">
                {/* Image Container with pointer-events-auto to allow right-click save */}
                <div className="relative pointer-events-auto"> 
                  {previewImage && (
                    <img 
                      src={previewImage} 
                      alt="Preview" 
                      className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" 
                    />
                  )}
                  <button 
                    onClick={() => setPreviewImage(null)}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors backdrop-blur-sm z-50"
                  >
                    <X size={20} />
                  </button>
                </div>
            </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
