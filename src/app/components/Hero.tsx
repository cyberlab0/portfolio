"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldAlert, Cpu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import NeuralNetworkBackground from "./NeuralNetworkBackground";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(new Date().toISOString().replace('T', ' ').substring(0, 19));
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#05070a]">
      {/* Background */}
      <NeuralNetworkBackground />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Top Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-10 font-mono text-xs md:text-sm"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a0f1d] border border-blue-500/30 rounded text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            [ LIVE TIME: {time} ]
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a0f1d] border border-green-500/30 rounded text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            [ SYSTEM STATUS: SECURE ]
          </div>
        </motion.div>

        {/* Main Identity */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white"
        >
          MICHAEL OLOWOSEU
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-mono text-slate-300 mb-8"
        >
          <span className="text-blue-400">AI Automation Engineer</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="text-purple-400">Cybersecurity Engineer</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="text-green-400">Founder of SentraLog</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="inline-block border border-slate-800 bg-[#0a0f1d] px-6 py-2 rounded-lg font-mono text-sm text-slate-500 mb-12 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <span className="text-slate-400">/* Everything you are looking at is live */</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#sentralog"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-mono font-bold text-black bg-blue-500 rounded border border-blue-400 overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)] w-full sm:w-auto"
          >
            <span className="relative flex items-center">
              <Cpu className="mr-2 w-4 h-4" />
              VIEW SENTRALOG
            </span>
          </Link>
          <Link
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-mono font-bold text-white bg-transparent rounded border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative flex items-center">
              <Terminal className="mr-2 w-4 h-4" />
              MISSION FILES
            </span>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-mono font-bold text-slate-400 hover:text-white transition-colors w-full sm:w-auto underline-offset-4 hover:underline"
          >
            CONTACT ME
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
