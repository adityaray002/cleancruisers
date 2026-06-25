import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getPostById, getRelatedPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : undefined;
  const relatedPosts = id ? getRelatedPosts(id, 3) : [];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this article: ${post.title}`;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <>
     <Helmet>
  <title>{post.metaTitle || post.title}</title>
  <meta name="description" content={post.metaDescription || post.excerpt} />
  {/* <link rel="canonical" href={`https://cleancruisers.in/blog/${post.id}`} /> */}

  {/* Open Graph (for sharing) */}
  <meta property="og:title" content={post.metaTitle || post.title} />
  <meta property="og:description" content={post.metaDescription || post.excerpt} />
  <meta property="og:image" content={`https://cleancruisers.in${post.image}`} />
  <meta property="og:url" content={`https://cleancruisers.in/blog/${post.id}`} />
  <meta property="og:type" content="article" />
</Helmet>

      <div className="min-h-screen bg-neutral-950">
        <Header />

        {/* Hero Image */}
        <section className="relative pt-16 md:pt-20">
          <div className="relative h-64 md:h-96 lg:h-[28rem] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
          </div>
        </section>

        {/* Article Content */}
        <article className="relative -mt-32 md:-mt-40 pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Back Link */}
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-green-400 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Article Header */}
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800/80 border border-neutral-700/50 rounded-2xl p-6 md:p-10 mb-8">
                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full mb-4">
                  {post.category}
                </span>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-neutral-400 mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-contain bg-white p-1"
                    />
                    <span className="font-medium text-white">{post.author}</span>
                  </div>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-700/50">
                  <span className="text-sm text-neutral-500 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share:
                  </span>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="p-2 rounded-full bg-green-600/20 text-green-400 hover:bg-green-600/30 transition-colors"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="p-2 rounded-full bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="p-2 rounded-full bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Article Body */}
           <div className="prose prose-invert prose-lg max-w-none">
  <ReactMarkdown
    components={{
      p: ({ children }) => (
        <p className="text-neutral-300 mb-4 leading-relaxed">{children}</p>
      ),
      h2: ({ children }) => (
        <h2 className="text-white text-2xl font-bold mt-10 mb-4">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-white text-xl font-semibold mt-8 mb-3">{children}</h3>
      ),
      strong: ({ children }) => (
        <strong className="text-green-400 font-semibold">{children}</strong>
      ),
      li: ({ children }) => (
        <li className="text-neutral-300 ml-4">{children}</li>
      ),

      // ✅ FIXED LINK COMPONENT
      a: ({ ...props }) => (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-green-400 underline hover:text-green-300"
        />
      ),
    }}
  >
    {post.content}
  </ReactMarkdown>
</div>

              {/* CTA Box */}
              <div className="mt-12 p-6 md:p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Ready to Give Your Car Premium Care?
                </h3>
                <p className="text-neutral-400 mb-6">
                  Book a doorstep car wash with CleanCruisers today.
                </p>
                <a
                  href="/booking"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-colors"
                >
                  Book Your Wash
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="pb-20 md:pb-28 bg-neutral-900/30">
            <div className="container mx-auto px-4 pt-12 md:pt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;