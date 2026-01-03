import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { BookOpen } from "lucide-react";

const Blog: React.FC = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Car Care Blog | CleanCruisers - Tips, Guides & Expert Advice</title>
        <meta 
          name="description" 
          content="Discover expert car care tips, detailing guides, and professional advice from CleanCruisers. Learn how to maintain your vehicle and keep it looking showroom-new." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-950">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
                <BookOpen className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Our Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Car Care{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
                  Insights
                </span>
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Expert tips, guides, and advice to help you maintain your vehicle 
                and make informed decisions about car care.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <BlogCard post={featuredPost} featured />
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Latest Articles
              </h2>
              <div className="h-px flex-grow ml-6 bg-gradient-to-r from-neutral-700 to-transparent" />
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent border border-green-500/20 p-8 md:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Experience Premium Car Care?
                </h3>
                <p className="text-neutral-400 mb-6">
                  Book your first doorstep car wash with CleanCruisers and see 
                  why thousands of customers trust us with their vehicles.
                </p>
                <a 
                  href="/booking"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;