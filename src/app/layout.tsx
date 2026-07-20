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

import GlobalProtections from "./components/GlobalProtections";
import { StructuredData } from "./components/StructuredData";
import CookieConsent from "./components/CookieConsent";
import BootScreen from "./components/BootScreen";
import AIAssistant from "./components/AIAssistant";

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-v0rz.onrender.com'),
  title: "Michael Olowoselu | SOC Analyst & Cybersecurity Engineer",
  description: "Portfolio of Michael Olowoselu, SOC Analyst, Cybersecurity Engineer, and Founder of SentraLog. Building intelligent security systems and AI-powered tools.",
  keywords: ["SOC Analyst", "Cybersecurity Engineer", "SIEM Developer", "Michael Olowoselu", "SentraLog", "Infosec"],
  openGraph: {
    title: "Michael Olowoselu | SOC Analyst & Cybersecurity Engineer",
    description: "Portfolio of Michael Olowoselu, SOC Analyst, Cybersecurity Engineer, and Founder of SentraLog.",
    url: 'https://portfolio-v0rz.onrender.com',
    siteName: 'Michael Olowoselu Portfolio',
    images: [
      {
        url: '/favicon.ico',
        width: 256,
        height: 256,
        alt: 'Michael Olowoselu Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Michael Olowoselu | Cybersecurity Engineer",
    description: "SOC Analyst, Cybersecurity Engineer, and Founder of SentraLog.",
    images: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
        <BootScreen />
        <AIAssistant />
        <StructuredData />
        <GlobalProtections />
        <CookieConsent />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B0F19] to-[#0B0F19]"></div>
        {children}
      </body>
    </html>
  );
}
