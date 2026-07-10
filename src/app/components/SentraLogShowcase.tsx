"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Activity, Database, Bell, ExternalLink, Monitor } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function SentraLogShowcase() {
  const images = [
    { src: '/sentralog/map.png', title: 'Global Threat Analytics', desc: 'Live geographical tracking of threat vectors and attack origins.' },
    { src: '/sentralog/incident.png', title: 'Incident Narrative View', desc: 'Translates raw unstructured logs into chronological attack stories.' },
    { src: '/sentralog/ueba.png', title: 'User Entity Behavior Analytics', desc: 'Zero Trust identity monitoring for impossible travel and abnormal access.' },
    { src: '/sentralog/sandbox.png', title: 'Malware Detonation Sandbox', desc: 'Executes suspicious payloads in an isolated hypervisor.' },
    { src: '/sentralog/intel.png', title: 'Threat Intel Scanner', desc: 'Scans IPs and executes automated containment playbooks instantly.' },
    { src: '/sentralog/workspace.png', title: 'Virtual Analyst Workspace', desc: 'Secure isolated environment for investigating incidents.' },
    { src: '/sentralog/tenant.png', title: 'Multi-Tenant Organizations', desc: 'Manage and monitor separate organizations from a single pane of glass.' },
    { src: '/sentralog/gatekeeper.png', title: 'Super Admin Gatekeeper', desc: 'Intercepts logins and manages emergency bypass keys.' },
    { src: '/sentralog/audit.png', title: 'Global Audit Tracking', desc: 'Tracks live locations, IPs, and actions of all dashboard users.' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

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
          {/* Dashboard Mockup - Replaced by Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-3xl transform -rotate-6"></div>
            <div className="relative rounded-2xl bg-[#0F172A] border border-slate-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              {/* Fake Window Header */}
              <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700 absolute top-0 left-0 right-0 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-slate-400 font-mono">sentralog.dashboard / {images[currentImageIndex].title}</div>
              </div>
              
              {/* Image Carousel */}
              <div className="relative aspect-[16/9] mt-[45px] bg-slate-900 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={images[currentImageIndex].src} 
                      alt={images[currentImageIndex].title}
                      className="w-full h-full object-cover object-left-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <h4 className="text-white font-bold">{images[currentImageIndex].title}</h4>
                      <p className="text-slate-300 text-sm">{images[currentImageIndex].desc}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button onClick={prevImage} className="p-2 m-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors opacity-0 group-hover:opacity-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button onClick={nextImage} className="p-2 m-2 rounded-full bg-black/50 text-white hover:bg-blue-600 transition-colors opacity-0 group-hover:opacity-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </button>
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
