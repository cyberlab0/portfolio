"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

type Skill = {
  name: string;
  blocks: number;
  color: string;
};

export default function LiveDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills: Skill[] = [
    { name: "Threat Detection", blocks: 10, color: "text-red-500" },
    { name: "Python", blocks: 11, color: "text-blue-500" },
    { name: "Networking", blocks: 10, color: "text-green-500" },
    { name: "Cloud", blocks: 9, color: "text-purple-500" },
    { name: "AI Integration", blocks: 12, color: "text-yellow-500" },
    { name: "SIEM Architecture", blocks: 11, color: "text-teal-500" },
  ];

  const renderBlocks = (count: number, color: string) => {
    return Array.from({ length: 15 }).map((_, i) => {
      const isActive = i < count;
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: isActive ? 1 : 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1, delay: i * 0.05 }}
          className={`inline-block w-2 h-4 mx-[1px] ${isActive ? color : "bg-slate-800"}`}
          style={{ backgroundColor: isActive ? 'currentColor' : '' }}
        />
      );
    });
  };

  return (
    <section id="skills" className="py-24 bg-[#05070a] relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#05070a] to-[#05070a] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-12 border-b border-slate-800 pb-4">
          <Activity className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-slate-200 uppercase tracking-widest">Live Dashboard_</h2>
        </div>

        <div className="bg-[#0a0f1d] border border-slate-800 rounded-xl p-6 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="text-slate-300 w-48 text-sm tracking-wider">
                  {skill.name}
                </div>
                {mounted && (
                  <div className="flex items-center flex-1">
                    {renderBlocks(skill.blocks, skill.color)}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-slate-800 flex justify-between text-xs text-slate-500">
            <span>UPTIME: 99.99%</span>
            <span>SYSTEM_NORMAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
