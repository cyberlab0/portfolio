"use client";

import { motion } from "framer-motion";
import { MessageSquare, Globe2, MessageCircleCode, Wallet, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VelaShowcase() {
  const features = [
    {
      title: "AI Wealth Assistant",
      description: "Ask questions about your budget and get instant, personalized financial advice and spending breakdowns.",
      icon: MessageSquare,
      color: "text-purple-400"
    },
    {
      title: "Universal Global Gateway",
      description: "Connect 15,000+ banks across North America, Europe, Africa, Asia, and LATAM in one unified dashboard.",
      icon: Globe2,
      color: "text-blue-400"
    },
    {
      title: "Real-Time SMS Alerts",
      description: "Get direct SMS text messages alerting you of unusual spending or weekly financial health summaries.",
      icon: MessageCircleCode,
      color: "text-green-400"
    },
    {
      title: "Military-Grade Security",
      description: "256-bit encrypted tunnel architecture. We never store or see your bank login credentials.",
      icon: ShieldCheck,
      color: "text-red-400"
    }
  ];

  return (
    <section id="vela" className="py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Information Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Currently Building
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Meet VELA: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                The Ultimate AI Financial Powerhouse
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              AI system that connects and automates digital life.
            </p>

            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2 font-mono">
                <span className="text-slate-400">Development Progress</span>
                <span className="text-purple-400 font-bold">80%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                ></motion.div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
              >
                View Concept <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="flex items-center justify-center px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-slate-300 rounded-lg font-medium transition-colors"
              >
                See Roadmap
              </Link>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 grid sm:grid-cols-2 gap-6 relative"
          >
            {/* Center decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px]"></div>

            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-[#151b2b]/80 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/30 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(147,51,234,0.1)] relative z-10"
                >
                  <div className={`w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4 ${feature.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
