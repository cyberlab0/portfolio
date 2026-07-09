"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Activity, Cpu } from "lucide-react";

export default function SystemStatusBadge() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="fixed top-24 right-4 z-40 hidden lg:block"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <motion.div 
        layout
        className="bg-[#050914]/90 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.15)] overflow-hidden cursor-default"
      >
        <div className="px-4 py-2 flex items-center gap-3 border-b border-slate-700/50 bg-slate-800/30">
          <Activity className="w-4 h-4 text-green-400" />
          <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider">SYSTEM STATUS</span>
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse ml-auto"></div>
        </div>

        <motion.div 
          initial={false}
          animate={{ height: expanded ? "auto" : "0px", opacity: expanded ? 1 : 0 }}
          className="px-4 py-3 flex flex-col gap-3 font-mono text-xs overflow-hidden"
        >
          <div className="flex items-center justify-between gap-6">
            <span className="flex items-center gap-2 text-slate-400"><Server className="w-3.5 h-3.5" /> Server</span>
            <span className="text-green-400">Online</span>
          </div>
          <div className="flex items-center justify-between gap-6">
            <span className="flex items-center gap-2 text-slate-400"><Cpu className="w-3.5 h-3.5" /> AI Engine</span>
            <span className="text-blue-400">Active</span>
          </div>
          <div className="flex items-center justify-between gap-6">
            <span className="flex items-center gap-2 text-slate-400"><ShieldCheck className="w-3.5 h-3.5" /> Security</span>
            <span className="text-green-400">Normal</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
