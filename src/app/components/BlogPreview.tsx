"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogPreview() {
  const posts = [
    {
      title: "How I Built My SIEM Tool",
      excerpt: "A deep dive into the architecture and challenges of building SentraLog from scratch using modern web technologies.",
      date: "Jul 12, 2026",
      readTime: "8 min read",
      category: "Engineering"
    },
    {
      title: "The Future of AI Automations",
      excerpt: "How neural networks and intelligent agents are completely revolutionizing security engineering and automated workflows.",
      date: "Jun 28, 2026",
      readTime: "5 min read",
      category: "AI_Engineering"
    },
    {
      title: "How Threat Detection Works",
      excerpt: "Understanding the underlying mechanics of pattern matching, anomaly detection, and heuristic analysis in cybersecurity.",
      date: "May 15, 2026",
      readTime: "6 min read",
      category: "Technical"
    }
  ];

  return (
    <section id="insights" className="py-24 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">
              <BookOpen className="w-4 h-4" /> Security Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Articles</h2>
          </div>
          <Link href="/blog" className="hidden md:inline-flex items-center text-slate-400 hover:text-white transition-colors group">
            View All Posts <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col h-full bg-[#151b2b] border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[50px] group-hover:bg-blue-500/10 transition-colors"></div>
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="px-3 py-1 bg-slate-800 text-xs font-medium text-slate-300 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center text-xs text-slate-500">
                  <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors relative z-10">
                {post.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50 relative z-10">
                <span className="text-xs text-slate-500">{post.date}</span>
                <span className="text-blue-400 text-sm font-medium flex items-center group-hover:underline underline-offset-4">
                  Read Article <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-white transition-colors group">
            View All Posts <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
