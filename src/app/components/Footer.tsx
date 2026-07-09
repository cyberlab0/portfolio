"use client";

import { Shield, Lock, Server } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050914] pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4 text-slate-300">
              <Shield className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-xl tracking-tight">
                Olowoselu<span className="text-blue-500">.CYBER</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Detect. Analyze. Defend. Building intelligent security systems and automated financial technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Trust & Security</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400 text-sm">
                <Lock className="w-4 h-4 mr-2 text-green-400" /> Data privacy focused
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Server className="w-4 h-4 mr-2 text-blue-400" /> Built with secure architecture
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Michael Olowoselu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#home" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Home</Link>
            <Link href="#sentralog" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">SentraLog</Link>
            <Link href="#vela" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Vela</Link>
            <Link href="#contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
