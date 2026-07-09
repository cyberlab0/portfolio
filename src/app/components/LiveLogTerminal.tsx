"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

type LogEntry = {
  id: string;
  timestamp: string;
  type: "INFO" | "WARNING" | "CRITICAL" | "SUCCESS";
  message: string;
  ip?: string;
};

const MOCK_IPS = ["192.168.1.105", "10.0.0.42", "172.16.254.1", "45.22.19.8", "8.8.8.8", "192.168.1.200"];
const MOCK_EVENTS = [
  { type: "SUCCESS", message: "User login detected", ip: true },
  { type: "WARNING", message: "Suspicious attempt blocked", ip: true },
  { type: "SUCCESS", message: "System scan complete", ip: false },
  { type: "CRITICAL", message: "Malware signature matched in payload", ip: false },
  { type: "INFO", message: "Firewall rules updated successfully", ip: false },
  { type: "CRITICAL", message: "Unauthorized access attempt on port 22 (SSH)", ip: true },
  { type: "WARNING", message: "Unusual outbound traffic spike", ip: true },
  { type: "INFO", message: "Scheduled backup completed", ip: false },
  { type: "CRITICAL", message: "SQL Injection payload detected in web traffic", ip: true },
];

export default function LiveLogTerminal() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial logs
    const initialLogs: LogEntry[] = Array.from({ length: 5 }).map((_, i) => generateLog());
    setLogs(initialLogs);

    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, generateLog()];
        // Keep only last 50 logs to prevent memory issues
        return newLogs.length > 50 ? newLogs.slice(newLogs.length - 50) : newLogs;
      });
    }, 2500); // Generate a new log every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  function generateLog(): LogEntry {
    const event = MOCK_EVENTS[Math.floor(Math.random() * MOCK_EVENTS.length)];
    const ip = event.ip ? MOCK_IPS[Math.floor(Math.random() * MOCK_IPS.length)] : undefined;
    const now = new Date();
    
    return {
      id: Math.random().toString(36).substring(7),
      timestamp: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`,
      type: event.type as "INFO" | "WARNING" | "CRITICAL" | "SUCCESS",
      message: event.message,
      ip
    };
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "INFO": return "text-blue-400";
      case "WARNING": return "text-yellow-400";
      case "CRITICAL": return "text-red-400";
      case "SUCCESS": return "text-green-400";
      default: return "text-slate-400";
    }
  };

  return (
    <section id="demo" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Activity Monitor</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A simulated view of the real-time log ingestion and threat analysis systems I build for SOC environments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-slate-700 bg-[#050914] shadow-[0_0_40px_rgba(16,185,129,0.1)]"
        >
          {/* Terminal Header */}
          <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-green-400" />
              <span className="text-sm font-mono text-slate-300">sentralog-monitor.exe</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] animate-pulse"></div>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="h-[400px] p-6 font-mono text-sm md:text-base overflow-y-auto scrollbar-hide scroll-smooth"
          >
            {logs.map((log) => (
              <motion.div 
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2 flex flex-wrap gap-x-3 gap-y-1"
              >
                <span className="text-slate-500">[{log.timestamp}]</span>
                <span className={`font-semibold ${getTypeColor(log.type)}`}>
                  [{log.type}]
                </span>
                <span className="text-slate-300">
                  {log.message}
                </span>
                {log.ip && (
                  <span className="text-purple-400">
                    SRC_IP: {log.ip}
                  </span>
                )}
              </motion.div>
            ))}
            <div className="mt-2 flex items-center text-slate-500">
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
