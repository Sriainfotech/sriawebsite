import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import axiosInstance from "@/lib/axios";

interface BlogListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  coverImagePosition?: string;
  coverImageZoom?: number;
  publishedAt: string;
  author: string;
  readTimeMinutes: number;
}

const POSTS_PER_PAGE = 9;

const BlogListing = () => {
  const [posts, setPosts] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/blogs`, { params: { page, limit: POSTS_PER_PAGE } })
      .then((res) => {
        setPosts(res.data.posts);
        setTotalPages(res.data.pagination.totalPages);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Blog"
        subtitle="Insights, updates, and perspectives from the Sria Infotech team."
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-24 text-slate-300">
              <Loader2 className="w-7 h-7 animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-slate-400 text-lg">No posts yet.</p>
              <p className="text-slate-400 text-sm mt-2">Check back soon for updates from our team.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-48 bg-slate-100 overflow-hidden">
                        {post.coverImageUrl ? (
                          <div
                            className="w-full h-full"
                            style={{
                              transform: `scale(${(post.coverImageZoom || 100) / 100})`,
                              transformOrigin: post.coverImagePosition || "50% 50%",
                            }}
                          >
                            <img
                              src={post.coverImageUrl}
                              alt={post.title}
                              loading="lazy"
                              decoding="async"
                              width={480}
                              height={192}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              style={{ objectPosition: post.coverImagePosition || "50% 50%" }}
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTimeMinutes} min read
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 leading-snug group-hover:text-orange-700 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-1.5 text-orange-700 text-sm font-semibold mt-4">
                          Read more
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-14">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-orange-200 hover:text-orange-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-slate-500">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-orange-200 hover:text-orange-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogListing;
