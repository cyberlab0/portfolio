"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Network, Database } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "SOC Analysis", icon: Activity, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { name: "Threat Detection", icon: ShieldCheck, color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
    { name: "Network Security", icon: Network, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    { name: "SIEM Development", icon: Database, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              "I build systems that detect, analyze, and respond to cyber threats in <span className="text-blue-400 font-semibold">real time</span>."
            </div>
            <p className="text-slate-400 leading-relaxed">
              I am a SOC Analyst student and a passionate builder in the cybersecurity space. 
              My journey involves diving deep into network packets, analyzing malicious activities, 
              and architecting solutions that empower organizations to stay ahead of threats. 
            </p>
            <p className="text-slate-400 leading-relaxed">
              As the founder of SentraLog, I'm actively developing tools that make Security Information and Event Management (SIEM) more accessible, intelligent, and actionable.
            </p>
          </motion.div>

          {/* Key Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-xl border ${skill.border} ${skill.bg} backdrop-blur-sm flex flex-col items-center text-center gap-4 transition-all`}
                >
                  <div className={`p-3 rounded-full bg-slate-900/50 ${skill.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium text-slate-200">{skill.name}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
