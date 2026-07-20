import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveTerminal from "./components/LiveTerminal";
import LiveDashboard from "./components/LiveDashboard";
import MissionTimeline from "./components/MissionTimeline";
import SentraLogShowcase from "./components/SentraLogShowcase";
import VelaShowcase from "./components/VelaShowcase";
import MissionFiles from "./components/MissionFiles";
import BlogPreview from "./components/BlogPreview";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SystemStatusBadge from "./components/SystemStatusBadge";

export default function Home() {
  return (
    <>
      <SystemStatusBadge />
      <main className="flex-grow flex flex-col relative">
        <Navbar />
        <Hero />
        <LiveTerminal />
        <LiveDashboard />
        <MissionTimeline />
        <SentraLogShowcase />
        <VelaShowcase />
        <MissionFiles />
        <BlogPreview />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
