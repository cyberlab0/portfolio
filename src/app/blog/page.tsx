"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SystemStatusBadge from "../components/SystemStatusBadge";
import { Terminal, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = [
    {
      id: "001",
      title: "How I Built My SIEM Tool",
      date: "2026",
      excerpt: "A deep dive into the architecture and challenges of building SentraLog from scratch using modern web technologies.",
      category: "ENGINEERING"
    },
    {
      id: "002",
      title: "The Future of AI Automations",
      date: "2026",
      excerpt: "How neural networks and intelligent agents are completely revolutionizing security engineering and automated workflows.",
      category: "AI_ENGINEERING"
    },
    {
      id: "003",
      title: "How Threat Detection Works",
      date: "2026",
      excerpt: "Understanding the underlying mechanics of pattern matching, anomaly detection, and heuristic analysis in cybersecurity.",
      category: "TECHNICAL"
    }
  ];

  return (
    <>
      <SystemStatusBadge />
      <main className="min-h-screen bg-[#05070a] text-slate-200 font-mono flex flex-col pt-20">
        <Navbar />
        
        <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="flex items-center gap-3 mb-12 border-b border-slate-800 pb-4">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-slate-100 uppercase tracking-widest">Cyber Journal_</h1>
          </div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0a0f1d] border border-slate-800 rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                    [{post.category}]
                  </span>
                  <div className="flex items-center text-xs text-slate-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-slate-200 mb-3">
                  {post.title}
                </h2>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center text-slate-500 text-sm">
            // END OF RECORDS
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
