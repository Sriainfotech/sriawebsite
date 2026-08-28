import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Loader2, Eye, Pencil, Upload, X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { adminCreateBlog, adminUpdateBlog, adminGetBlog, adminUploadImage, type BlogPost } from "@/lib/adminApi";

const MAX_IMAGE_SIZE_MB = 5;
const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];

const DEFAULT_COVER_POSITION = "50% 50%";

// "30% 60%" -> { x: 30, y: 60 }; falls back to centered on anything unparseable.
const parsePosition = (position: string): { x: number; y: number } => {
  const match = position.match(/^([\d.]+)%\s+([\d.]+)%$/);
  if (!match) return { x: 50, y: 50 };
  return { x: parseFloat(match[1]), y: parseFloat(match[2]) };
};

const slugify = (text: string) =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");

const AdminPostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
  const { toast } = useToast();

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<BlogPost["status"]>("draft");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [coverImagePosition, setCoverImagePosition] = useState(DEFAULT_COVER_POSITION);
  const [coverImageZoom, setCoverImageZoom] = useState(100);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [draggingFocalPoint, setDraggingFocalPoint] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverPreviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEdit) return;
    adminGetBlog(id!)
      .then((res) => {
        const post = res.data.post;
        setTitle(post.title);
        setSlug(post.slug);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setCoverImageUrl(post.coverImageUrl);
        setCoverImagePosition(post.coverImagePosition || DEFAULT_COVER_POSITION);
        setCoverImageZoom(post.coverImageZoom || 100);
        setCurrentStatus(post.status);
        setSlugTouched(true);
      })
      .catch(() => {
        toast({ title: "Error", description: "Failed to load post.", variant: "destructive" });
        navigate("/admin/blogs");
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // While dragging the focal-point crosshair, track the pointer across the
  // whole document (not just the preview box) so a fast drag that slips
  // outside the box's bounds doesn't drop the interaction.
  useEffect(() => {
    if (!draggingFocalPoint) return;
    const handleMove = (e: MouseEvent) => setFocalPointFromPointer(e.clientX, e.clientY);
    const handleUp = () => setDraggingFocalPoint(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggingFocalPoint]);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      toast({ title: "Unsupported file", description: "Please upload a PNG, JPEG, WEBP, or GIF image.", variant: "destructive" });
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      toast({ title: "File too large", description: `Please upload an image under ${MAX_IMAGE_SIZE_MB}MB.`, variant: "destructive" });
      return;
    }

    setUploadingImage(true);
    try {
      const res = await adminUploadImage(file);
      setCoverImageUrl(res.data.url);
      toast({ title: "Image uploaded" });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.response?.data?.message || "Failed to upload image.",
        variant: "destructive",
      });
    } finally {
      setUploadingImage(false);
    }
  };

  // Sets the focal point from a pointer position within the preview box —
  // used both on click and while dragging, so the crosshair tracks the cursor.
  const setFocalPointFromPointer = (clientX: number, clientY: number) => {
    const box = coverPreviewRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((clientY - rect.top) / rect.height) * 100));
    setCoverImagePosition(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
  };

  const resetFocalPoint = () => {
    setCoverImagePosition(DEFAULT_COVER_POSITION);
    setCoverImageZoom(100);
  };

  const save = async (status: "draft" | "published") => {
    if (!title.trim() || !content.trim()) {
      toast({ title: "Missing fields", description: "Title and content are required.", variant: "destructive" });
      return;
    }

    setSaving(true);
    const payload = { title, slug, excerpt, content, coverImageUrl, coverImagePosition, coverImageZoom, status };

    try {
      if (isEdit) {
        await adminUpdateBlog(id!, payload);
      } else {
        await adminCreateBlog(payload);
      }
      toast({ title: status === "published" ? "Post published" : "Draft saved", description: title });
      navigate("/admin/blogs");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to save post.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-slate-400">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <Link to="/admin/blogs" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-orange-700 transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to posts
      </Link>

      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading font-bold text-2xl text-slate-900">{isEdit ? "Edit Post" : "New Post"}</h1>
        <p className="text-xs text-slate-600">
          <span className="text-red-500">*</span> Required
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">
                Title <span className="text-red-500">*</span>
              </Label>
              <Input id="title" value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Post title" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => {
                  setSlug(slugify(e.target.value));
                  setSlugTouched(true);
                }}
                placeholder="post-url-slug"
              />
              <p className="text-xs text-slate-600">/blog/{slug || "..."}</p>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Short summary shown on the blog listing card"
                rows={2}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="coverImageUrl">Cover image</Label>
              <div className="flex gap-2">
                <Input
                  id="coverImageUrl"
                  value={coverImageUrl}
                  onChange={(e) => setCoverImageUrl(e.target.value)}
                  placeholder="Paste an image URL, or upload a file"
                  className="flex-1"
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={ALLOWED_IMAGE_TYPES.join(",")}
                  onChange={handleImageFileChange}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingImage}
                >
                  {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                  Upload
                </Button>
              </div>
              {coverImageUrl && (
                <div className="flex flex-col gap-2 mt-1">
                  <div
                    ref={coverPreviewRef}
                    onMouseDown={(e) => {
                      setDraggingFocalPoint(true);
                      setFocalPointFromPointer(e.clientX, e.clientY);
                    }}
                    className="relative w-full h-36 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 cursor-crosshair select-none"
                  >
                    <img
                      src={coverImageUrl}
                      alt="Cover preview"
                      draggable={false}
                      className="w-full h-full object-cover pointer-events-none"
                      style={{
                        objectPosition: coverImagePosition,
                        transform: `scale(${coverImageZoom / 100})`,
                        transformOrigin: coverImagePosition,
                      }}
                    />
                    {/* Crosshair marking the current focal point, so it's clear what "center" means while dragging. */}
                    <div
                      className="absolute w-4 h-4 rounded-full border-2 border-white bg-orange-600/80 shadow -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ left: parsePosition(coverImagePosition).x + "%", top: parsePosition(coverImagePosition).y + "%" }}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCoverImageUrl("");
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                      aria-label="Remove cover image"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-600 whitespace-nowrap">Zoom</span>
                    <input
                      type="range"
                      min={100}
                      max={200}
                      step={5}
                      value={coverImageZoom}
                      onChange={(e) => setCoverImageZoom(Number(e.target.value))}
                      className="flex-1 accent-orange-700"
                    />
                    <button
                      type="button"
                      onClick={resetFocalPoint}
                      className="text-xs text-slate-600 hover:text-orange-700 flex items-center gap-1 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  </div>
                  <p className="text-xs text-slate-600">Click or drag on the image to choose what part stays in view when it's cropped.</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3">
              <Label htmlFor="content">
                Content (Markdown) <span className="text-red-500">*</span>
              </Label>
              <Button type="button" variant="outline" size="sm" onClick={() => setShowPreview((p) => !p)}>
                {showPreview ? <Pencil className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showPreview ? "Edit" : "Preview"}
              </Button>
            </div>
            {showPreview ? (
              <div className="prose prose-slate max-w-none min-h-[320px] border border-slate-100 rounded-lg p-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || "*Nothing to preview yet.*"}</ReactMarkdown>
              </div>
            ) : (
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post in Markdown..."
                rows={18}
                className="font-mono text-sm"
              />
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 flex flex-col gap-3 lg:sticky lg:top-6">
            <p className="text-sm text-slate-500">
              Status: <span className="font-semibold text-slate-900 capitalize">{currentStatus}</span>
            </p>
            <Button onClick={() => save("published")} disabled={saving} className="bg-orange-700 hover:bg-orange-800">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Publish"}
            </Button>
            <Button onClick={() => save("draft")} disabled={saving} variant="outline">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save as Draft"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostForm;
