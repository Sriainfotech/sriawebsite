import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Eye, EyeOff, Loader2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { adminListBlogs, adminDeleteBlog, adminTogglePublish, type BlogPost } from "@/lib/adminApi";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const res = await adminListBlogs();
      setPosts(res.data.posts);
    } catch (error: any) {
      toast({ title: "Error", description: "Failed to load posts.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleTogglePublish = async (post: BlogPost) => {
    setBusyId(post._id);
    try {
      const res = await adminTogglePublish(post._id);
      setPosts((prev) => prev.map((p) => (p._id === post._id ? res.data.post : p)));
      toast({
        title: res.data.post.status === "published" ? "Post published" : "Post unpublished",
        description: post.title,
      });
    } catch {
      toast({ title: "Error", description: "Failed to update post status.", variant: "destructive" });
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setBusyId(deleteTarget._id);
    try {
      await adminDeleteBlog(deleteTarget._id);
      setPosts((prev) => prev.filter((p) => p._id !== deleteTarget._id));
      toast({ title: "Post deleted", description: deleteTarget.title });
    } catch {
      toast({ title: "Error", description: "Failed to delete post.", variant: "destructive" });
    } finally {
      setBusyId(null);
      setDeleteTarget(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading font-bold text-2xl text-slate-900">Blog Posts</h1>
          <p className="text-slate-500 text-sm mt-1">{posts.length} total</p>
        </div>
        <Button asChild className="bg-orange-700 hover:bg-orange-800">
          <Link to="/admin/blogs/new">
            <Plus className="w-4 h-4" />
            New Post
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-slate-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-16 text-center">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-slate-700 font-medium">No posts yet</p>
          <p className="text-slate-400 text-sm mt-1">Create your first post to get started.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100 overflow-hidden">
          {posts.map((post, idx) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="flex items-center gap-4 p-4 sm:p-5 hover:bg-slate-50/80 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-slate-900 truncate">{post.title}</p>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0 ${
                      post.status === "published"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  /{post.slug} · Updated {new Date(post.updatedAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={busyId === post._id}
                  onClick={() => handleTogglePublish(post)}
                  title={post.status === "published" ? "Unpublish" : "Publish"}
                >
                  {post.status === "published" ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button variant="ghost" size="sm" asChild title="Edit">
                  <Link to={`/admin/blogs/edit/${post._id}`}>
                    <Pencil className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={busyId === post._id}
                  onClick={() => setDeleteTarget(post)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Dialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete post?</DialogTitle>
            <DialogDescription>
              This will permanently delete "{deleteTarget?.title}". This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTarget(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={busyId === deleteTarget?._id}>
              {busyId === deleteTarget?._id ? <Loader2 className="w-4 h-4 animate-spin" /> : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
