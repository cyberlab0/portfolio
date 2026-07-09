import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SentraLogShowcase from "./components/SentraLogShowcase";
import VelaShowcase from "./components/VelaShowcase";
import SkillsSection from "./components/SkillsSection";
import LiveLogTerminal from "./components/LiveLogTerminal";
import BlogPreview from "./components/BlogPreview";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
import SystemStatusBadge from "./components/SystemStatusBadge";

export default function Home() {
  return (
    <>
      <SystemStatusBadge />
      <main className="flex-grow flex flex-col relative">
        <Navbar />
        <Hero />
        <AboutSection />
        <SentraLogShowcase />
        <VelaShowcase />
        <LiveLogTerminal />
        <SkillsSection />
        <BlogPreview />
        <ContactSection />
        <Footer />
      </main>
      <FloatingChat />
    </>
  );
}
