"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Target, TerminalSquare } from "lucide-react";

export default function MissionTimeline() {
  const events = [
    {
      date: "PRESENT",
      title: "Building VELA Protocol",
      description: "Developing an AI-driven threat intelligence and digital security life assistant.",
      icon: TerminalSquare,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      date: "2025",
      title: "Founded SentraLog",
      description: "Architected a real-time SIEM from scratch focused on raw speed and analyst workflows.",
      icon: Target,
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      date: "2024",
      title: "SOC Analyst Training",
      description: "Mastered packet analysis, incident response, and threat hunting methodologies.",
      icon: ShieldCheck,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-[#05070a] relative font-mono">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-16 border-b border-slate-800 pb-4">
          <Clock className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-slate-200 uppercase tracking-widest">Mission Timeline_</h2>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Node */}
                <div className={`absolute -left-[17px] top-1 p-2 rounded-full bg-[#05070a] border border-slate-800 ${event.color}`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="bg-[#0a0f1d] border border-slate-800 p-6 rounded-lg hover:border-slate-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${event.bg} ${event.color} border border-current`}>
                      [{event.date}]
                    </span>
                    <h3 className="text-lg font-bold text-slate-200">{event.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
