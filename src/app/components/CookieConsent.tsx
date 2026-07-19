"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay so it slides in smoothly after page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] bg-[#0f1423] border border-slate-800 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-500/10 rounded-full text-blue-400 mt-1 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-200 mb-2">
                Legal & Privacy Notice
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We use essential cookies to keep you logged in. With your permission we also use analytics cookies to understand how the platform is used. No advertising, no data selling.{" "}
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={handleReject}
              className="flex-1 px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
