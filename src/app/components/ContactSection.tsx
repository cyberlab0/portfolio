"use client";

import { motion } from "framer-motion";
import { Mail, Send, Briefcase, Handshake, MessageSquareText } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaDev, FaMediumM, FaFacebook, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function ContactSection() {
  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/cyberlab0", color: "hover:text-white" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/michael-olowoselu-727871394", color: "hover:text-blue-500" },
    { name: "X", icon: FaXTwitter, href: "https://x.com/cyberlab222?s=11", color: "hover:text-white" },
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/michael_olowoselu/", color: "hover:text-pink-500" },
    { name: "YouTube", icon: FaYoutube, href: "https://youtube.com/@cyberlab0-p5v?si=kAKOIFbuVMCRqMyS", color: "hover:text-red-500" },
    { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/share/1EQEoe4m1x/?mibextid=wwXIfr", color: "hover:text-blue-600" },
    { name: "TikTok", icon: FaTiktok, href: "https://vt.tiktok.com/ZSX8bqj1v/", color: "hover:text-pink-600" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/2348069599521", color: "hover:text-green-500" },
    { name: "Telegram", icon: FaTelegramPlane, href: "https://t.me/Cyberlab22", color: "hover:text-blue-400" },
    { name: "Dev.to", icon: FaDev, href: "https://dev.to/cyberlab0", color: "hover:text-white" },
    { name: "Medium", icon: FaMediumM, href: "https://medium.com/@michaelolowoselu", color: "hover:text-white" },
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#0f1423]">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Initialize Connection</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Whether you want to collaborate on a security project, discuss SentraLog, or just say hi, my inbox is open.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wide">
            <Briefcase className="w-4 h-4" /> Available for Contract Engineering & Freelance Outsourcing
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-[#151b2b] border border-slate-800 p-8 rounded-2xl h-full shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-bold mb-6 text-slate-200">Contact Details</h3>
              <a 
                href="mailto:michaelolowoselu@gmail.com"
                className="flex items-center text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                michaelolowoselu@gmail.com
              </a>

              <div className="space-y-4 mb-8">
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 transition-all group">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <span className="font-medium">Hire Me</span>
                  </div>
                  <Send className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 transition-all group">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Handshake className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">Collaborate</span>
                  </div>
                  <Send className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 transition-all group">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MessageSquareText className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Ask a Question</span>
                  </div>
                  <Send className="w-4 h-4 text-slate-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </button>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Digital Presence</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-slate-800/50 rounded-lg text-slate-400 transition-all hover:-translate-y-1 ${link.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#151b2b] border border-slate-800 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] h-full">
              <h3 className="text-xl font-bold mb-6 text-slate-200">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] mt-4"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
