"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderLock, ExternalLink, Terminal, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function MissionFiles() {
  const [activeMission, setActiveMission] = useState<number | null>(null);

  const missions = [
    {
      id: "001",
      name: "SentraLog Engine",
      status: "ACTIVE",
      statusColor: "text-green-500",
      description: "A real-time SIEM and Threat Detection platform built to ingest, analyze, and alert on thousands of security events per second.",
      tech: ["Next.js", "Python", "Go", "WebSocket", "PostgreSQL"],
      link: "#sentralog",
      github: "https://github.com/cyberlab0"
    },
    {
      id: "002",
      name: "VELA AI Protocol",
      status: "BUILDING",
      statusColor: "text-yellow-500",
      description: "An AI system designed to connect, analyze, and automate digital security life. Neural parsing of threat intelligence feeds.",
      tech: ["AI/ML", "Python", "TensorFlow", "React"],
      link: "#vela",
      github: "https://github.com/cyberlab0"
    },
    {
      id: "003",
      name: "Malware Sandbox",
      status: "ARCHIVED",
      statusColor: "text-slate-500",
      description: "Isolated virtual environment for executing and analyzing zero-day malware variants safely.",
      tech: ["C++", "Cuckoo", "Python", "Docker"],
      link: "#",
      github: "https://github.com/cyberlab0"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0f1d] relative font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <FolderLock className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-slate-200 uppercase tracking-widest">Mission Files_</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#151b2b] border ${activeMission === index ? 'border-blue-500' : 'border-slate-800'} rounded-xl overflow-hidden cursor-pointer group hover:border-blue-500/50 transition-colors`}
              onClick={() => setActiveMission(activeMission === index ? null : index)}
            >
              <div className="p-4 border-b border-slate-800/50 bg-[#0f1423] flex justify-between items-center">
                <span className="text-slate-500 text-sm">FILE_ID: {mission.id}</span>
                <span className={`text-xs font-bold ${mission.statusColor} flex items-center gap-1`}>
                  <span className={`w-2 h-2 rounded-full ${mission.statusColor.replace('text', 'bg')} animate-pulse`}></span>
                  {mission.status}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
                  {mission.name}
                </h3>
                
                <AnimatePresence>
                  {activeMission === index ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                        {mission.description}
                      </p>
                      
                      <div className="mt-6">
                        <span className="text-xs text-slate-500 block mb-2">MODULES_LOADED:</span>
                        <div className="flex flex-wrap gap-2">
                          {mission.tech.map(t => (
                            <span key={t} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4">
                        <Link href={mission.link} className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded transition-colors flex items-center justify-center gap-2">
                          <Terminal className="w-4 h-4" /> EXECUTE
                        </Link>
                        <a href={mission.github} target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-700 hover:border-slate-500 rounded text-slate-400 hover:text-white transition-colors">
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="mt-4 flex items-center text-blue-500 text-sm font-bold">
                      ACCESS FILE <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
