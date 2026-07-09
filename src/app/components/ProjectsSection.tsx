"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldAlert, Rocket, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "SentraLog",
      description: "A centralized intelligent security system that collects, parses, and analyzes logs in real-time. Features advanced threat detection algorithms and an intuitive dashboard for SOC analysts.",
      icon: ShieldAlert,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-500/30",
      tags: ["SIEM", "Threat Detection", "Log Analysis", "Real-time"],
      liveLink: "https://sentralog.onrender.com",
      github: "https://github.com/cyberlab0", // Replace with specific repo if needed
      featured: true,
    },
    {
      title: "Vela",
      description: "Next-generation vulnerability scanning and assessment tool. Currently in active development, Vela aims to automate routine security audits with AI-driven insights.",
      icon: Rocket,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-500/30",
      tags: ["Vulnerability Scanner", "In Development", "Automation"],
      liveLink: "#",
      github: "https://github.com/cyberlab0",
      featured: false,
    },
    {
      title: "Custom Security Scripts",
      description: "A collection of Python and Bash scripts for network reconnaissance, automated payload generation, and quick log parsing tasks.",
      icon: Terminal,
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-500/30",
      tags: ["Python", "Bash", "Automation", "Recon"],
      liveLink: "#",
      github: "https://github.com/cyberlab0",
      featured: false,
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#0f1423]">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Tools</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A showcase of the systems and tools I've built to detect, prevent, and respond to security incidents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col relative p-6 rounded-2xl bg-[#151b2b] border ${project.border} hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] overflow-hidden group`}
              >
                {project.featured && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-bl-lg">
                    Main Project
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl ${project.bg} ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800">
                  {project.liveLink !== "#" && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    <FaGithub className="w-4 h-4 mr-2" />
                    Source Code
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
