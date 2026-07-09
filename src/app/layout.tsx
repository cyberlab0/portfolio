import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Olowoselu | SOC Analyst & Cybersecurity Engineer",
  description: "Portfolio of Michael Olowoselu, SOC Analyst, Cybersecurity Engineer, and Founder of SentraLog. Building intelligent security systems and AI-powered tools.",
  keywords: ["SOC Analyst", "Cybersecurity Engineer", "SIEM Developer", "Michael Olowoselu", "SentraLog", "Infosec"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B0F19] to-[#0B0F19]"></div>
        {children}
      </body>
    </html>
  );
}
