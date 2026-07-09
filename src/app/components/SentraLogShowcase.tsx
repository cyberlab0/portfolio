"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Activity, Database, Bell, ExternalLink, Monitor } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function SentraLogShowcase() {
  const features = [
    {
      title: "Threat Detection",
      description: "Advanced algorithms to identify malicious patterns in real-time.",
      icon: ShieldAlert,
      color: "text-red-400"
    },
    {
      title: "Log Analysis",
      description: "Centralized parsing and correlation of diverse log sources.",
      icon: Database,
      color: "text-blue-400"
    },
    {
      title: "Real-time Monitoring",
      description: "Live dashboards for instantaneous visibility into system health.",
      icon: Activity,
      color: "text-green-400"
    },
    {
      title: "Security Alerts",
      description: "Automated alert pipelines integrating directly with SOC workflows.",
      icon: Bell,
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="sentralog" className="py-32 relative bg-[#0B0F19]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">
            <Monitor className="w-4 h-4" /> Flagship Product
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">SentraLog</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A centralized intelligent security system that collects, parses, and analyzes logs in real-time. Built specifically for SOC analysts to rapidly detect and respond to threats.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-3xl transform -rotate-6"></div>
            <div className="relative rounded-2xl bg-[#0F172A] border border-slate-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Fake Window Header */}
              <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-slate-400 font-mono">sentralog.dashboard / admin</div>
              </div>
              
              {/* Fake Dashboard Body */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">Total Logs (24h)</div>
                    <div className="text-2xl font-bold text-blue-400">1.2M</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">Active Alerts</div>
                    <div className="text-2xl font-bold text-red-400 animate-pulse">14</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">System Health</div>
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/30 p-3 rounded border border-slate-700/30">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="flex-1 h-3 bg-slate-700 rounded-full w-1/3"></div>
                      <div className="w-24 h-3 bg-slate-600 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-slate-800/20 border border-slate-700/50 hover:bg-slate-800/40 transition-colors"
                  >
                    <Icon className={`w-8 h-8 ${feature.color} mb-4`} />
                    <h3 className="text-lg font-bold text-slate-200 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="https://sentralog.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </Link>
              <Link
                href="#contact"
                className="flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 rounded-lg font-medium transition-colors"
              >
                View Architecture
              </Link>
              <Link
                href="https://github.com/cyberlab0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 text-slate-400 hover:text-white transition-colors"
              >
                <FaGithub className="w-5 h-5 mr-2" /> GitHub
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
