"use client";

import { motion } from "framer-motion";
import { Lock, Code2, Globe, Cpu } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Lock,
      color: "text-red-400",
      borderColor: "border-red-500/30",
      skills: ["Threat Hunting", "Log Analysis (SIEM)", "Incident Response", "Vulnerability Assessment", "Packet Analysis"]
    },
    {
      title: "Development",
      icon: Code2,
      color: "text-blue-400",
      borderColor: "border-blue-500/30",
      skills: ["Python", "JavaScript / TypeScript", "React / Next.js", "Bash Scripting", "Go"]
    },
    {
      title: "Networking",
      icon: Globe,
      color: "text-purple-400",
      borderColor: "border-purple-500/30",
      skills: ["TCP/IP", "Firewall Configuration", "Wireshark", "Nmap", "DNS / DHCP"]
    },
    {
      title: "AI / Automation",
      icon: Cpu,
      color: "text-green-400",
      borderColor: "border-green-500/30",
      skills: ["Machine Learning", "Automated Playbooks", "Log Anomaly Detection", "API Integration"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-slate-900/50 border ${category.borderColor} backdrop-blur-sm transition-all hover:shadow-[0_15px_40px_rgba(59,130,246,0.2)] hover:border-slate-500/50 relative overflow-hidden group`}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-10 blur-lg transition duration-1000 group-hover:duration-200 ${category.color.replace('text', 'from').replace('400', '600')} to-slate-900`}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-slate-800/80 ${category.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-200">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${category.color.replace('text', 'bg')} shadow-[0_0_5px_currentColor]`}></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
