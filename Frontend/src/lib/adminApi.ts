import adminAxios from "@/lib/adminAxios";

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  coverImagePosition: string;
  coverImageZoom: number;
  status: "draft" | "published";
  author: string;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export const adminLogin = (username: string, password: string) =>
  adminAxios.post("/login", { username, password });

export const adminListBlogs = () =>
  adminAxios.get<{ success: boolean; posts: BlogPost[] }>("/blogs");

export const adminGetBlog = (id: string) =>
  adminAxios.get<{ success: boolean; post: BlogPost }>(`/blogs/${id}`);

export const adminCreateBlog = (data: Partial<BlogPost>) =>
  adminAxios.post<{ success: boolean; post: BlogPost }>("/blogs", data);

export const adminUpdateBlog = (id: string, data: Partial<BlogPost>) =>
  adminAxios.put<{ success: boolean; post: BlogPost }>(`/blogs/${id}`, data);

export const adminDeleteBlog = (id: string) =>
  adminAxios.delete(`/blogs/${id}`);

export const adminTogglePublish = (id: string) =>
  adminAxios.patch<{ success: boolean; post: BlogPost }>(`/blogs/${id}/publish`, {});

export const adminUploadImage = (file: File) => {
  const formData = new FormData();
  formData.append("image", file);
  // Let the browser set its own multipart Content-Type + boundary —
  // adminAxios's default JSON header would otherwise strip the boundary.
  return adminAxios.post<{ success: boolean; url: string }>("/upload-image", formData, {
    headers: { "Content-Type": undefined },
  });
};
