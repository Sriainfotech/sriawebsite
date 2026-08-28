import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { ikSrc, ikSrcSet } from "@/lib/imagekit";

interface BlogPreviewItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  coverImagePosition?: string;
  coverImageZoom?: number;
  publishedAt: string;
  readTimeMinutes: number;
}

const BlogPreviewSection = () => {
  const [posts, setPosts] = useState<BlogPreviewItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/blogs", { params: { page: 1, limit: 3 } })
      .then((res) => setPosts(res.data.posts))
      .catch(() => setPosts([]))
      .finally(() => setLoaded(true));
  }, []);

  // Nothing published yet — skip the section entirely rather than show an
  // empty "glimpse" block on the homepage.
  if (loaded && posts.length === 0) return null;
  if (!loaded) return null;

  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-orange-700 font-semibold tracking-widest uppercase text-xs mb-3">From the Blog</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Latest Insights</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block"
          >
            <Link
              to="/blog"
              className="group flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-100 text-slate-900 font-semibold text-sm hover:bg-orange-500 hover:text-slate-900 hover:border-orange-500 transition-all duration-300"
            >
              View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  {post.coverImageUrl ? (
                    <div
                      className="w-full h-full"
                      style={{
                        transform: `scale(${(post.coverImageZoom || 100) / 100})`,
                        transformOrigin: post.coverImagePosition || "50% 50%",
                      }}
                    >
                      <img
                        src={ikSrc(post.coverImageUrl, 480)}
                        srcSet={ikSrcSet(post.coverImageUrl, [480, 720])}
                        sizes="(min-width: 1024px) 450px, 100vw"
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        width={450}
                        height={176}
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
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2 leading-snug group-hover:text-orange-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-orange-700 text-sm font-semibold mt-4">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/blog" className="inline-flex items-center gap-2 text-orange-700 font-semibold text-sm">
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
