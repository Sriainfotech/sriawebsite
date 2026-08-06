import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Clock, Loader2 } from "lucide-react";
import axiosInstance from "@/lib/axios";
import PageHeader from "@/components/layout/PageHeader";

interface BlogPostData {
  title: string;
  slug: string;
  content: string;
  coverImageUrl: string;
  coverImagePosition?: string;
  coverImageZoom?: number;
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
}

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    axiosInstance
      .get(`/blogs/${slug}`)
      .then((res) => setPost(res.data.post))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="w-7 h-7 animate-spin text-slate-300" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading font-bold text-2xl text-slate-900 mb-3">Post not found</h1>
        <p className="text-slate-500 mb-6">This post may have been unpublished or removed.</p>
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      <PageHeader
        title={post.title}
        breadcrumbs={[{ name: "Blog", path: "/blog" }, { name: post.title }]}
        backgroundImage={post.coverImageUrl || undefined}
        backgroundImagePosition={post.coverImagePosition}
        backgroundImageZoom={post.coverImageZoom}
      />

      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-orange-700 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-4 text-sm text-slate-500 pb-8 mb-8 border-b border-slate-100">
          <span className="font-medium text-slate-700">{post.author}</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTimeMinutes} min read
          </span>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:font-heading prose-a:text-orange-700 prose-img:rounded-xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
