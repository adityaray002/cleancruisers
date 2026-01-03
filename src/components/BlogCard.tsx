import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <Link 
        to={`/blog/${post.id}`}
        className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700/50 hover:border-green-500/50 transition-all duration-500"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent md:bg-gradient-to-r" />
            <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-black text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full w-fit mb-4">
              {post.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-neutral-400 mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-2 text-green-400 font-medium group-hover:gap-3 transition-all">
              Read Article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/blog/${post.id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800/50 border border-neutral-700/50 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-green-500/10 backdrop-blur-sm text-green-400 text-xs font-medium rounded-full border border-green-500/20">
          {post.category}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-neutral-400 mb-4 line-clamp-2 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;