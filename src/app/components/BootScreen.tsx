"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen() {
  const [stage, setStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bootSequence = [
    "Initializing...",
    "Loading Threat Intelligence...",
    "Loading AI Modules...",
    "Loading Michael OS...",
    "Establishing Secure Connection...",
    "System Ready."
  ];

  useEffect(() => {
    // Check if we've already booted in this session to avoid annoyance on every page load
    const hasBooted = sessionStorage.getItem("hasBooted");
    if (hasBooted) {
      setIsVisible(false);
      return;
    }

    let currentStage = 0;
    const interval = setInterval(() => {
      currentStage++;
      if (currentStage <= bootSequence.length) {
        setStage(currentStage);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem("hasBooted", "true");
        }, 1000); // Hold on System Ready for 1 second
      }
    }, 600); // 600ms per line

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="boot-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-[9999] bg-[#05070a] flex flex-col justify-center items-start px-8 md:px-24 font-mono text-green-500 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 via-[#05070a] to-[#05070a]"></div>
        
        <div className="relative z-10 max-w-3xl w-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-500/20 border border-green-500/50 flex items-center justify-center rounded-sm">
              <span className="text-xl font-bold">OS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-widest text-white">MICHAEL_OS</h1>
              <p className="text-xs text-green-400/70">v4.0.0-rc1 | Kernel 6.5.x-cyber</p>
            </div>
          </div>

          <div className="space-y-2 text-sm md:text-base">
            {bootSequence.slice(0, stage).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <span className="text-slate-500">[{new Date().toISOString().split('T')[1].substring(0, 8)}]</span>
                <span className={index === bootSequence.length - 1 ? "text-white font-bold" : "text-green-400"}>
                  {line}
                </span>
              </motion.div>
            ))}
            
            {stage < bootSequence.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-green-500 inline-block mt-2"
              />
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
