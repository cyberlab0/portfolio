import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Michael Olowoselu",
  description: "Privacy Policy for the cybersecurity portfolio of Michael Olowoselu.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 py-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
        </div>

        <p className="text-slate-400 mb-12">Last Updated: July 19, 2026</p>

        <div className="space-y-12 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">1. Our Philosophy</h2>
            <p className="mb-4">
              As a Cybersecurity Engineer, I believe privacy is a fundamental human right. This portfolio and its associated projects (including SentraLog and VELA showcases) are built with privacy by design. 
            </p>
            <p>
              <strong>We do not sell your data. We do not run third-party advertisements. We do not track you across the internet.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              When you visit this website, we only collect the minimum amount of data necessary to ensure the platform functions securely and to understand general traffic trends.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li><strong>Essential Data:</strong> We may use temporary cookies or local storage strictly to save your preferences (e.g., your choice on our Cookie Consent banner).</li>
              <li><strong>Analytics Data:</strong> If you grant permission, we may collect anonymized, aggregated analytics data to see which pages are most popular and to ensure our infrastructure is handling traffic smoothly. This data cannot identify you personally.</li>
              <li><strong>Communications:</strong> If you contact me directly via email or social media, I will solely use the information you provide to respond to your inquiry.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              Any information collected is used exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Maintaining the security and stability of the website.</li>
              <li>Understanding high-level traffic metrics to improve the portfolio experience.</li>
              <li>Responding to your direct outreach regarding contract engineering or collaboration.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">4. Third-Party Services</h2>
            <p>
              This website is hosted on Render and deployed via GitHub. These standard infrastructure providers may collect basic connection data (like IP addresses) automatically as part of standard internet protocol routing to serve you the website. They are strictly bound by their own enterprise security and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">5. Your Rights</h2>
            <p className="mb-4">
              Under global privacy frameworks (including GDPR and CCPA), you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Opt-out of non-essential analytics at any time by clearing your browser data or rejecting the cookie banner.</li>
              <li>Request access to any personal communication data you have directly sent me.</li>
              <li>Request deletion of any direct communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">6. Contact</h2>
            <p>
              If you have any questions or concerns about this policy, or if you would like to discuss security architectures, please reach out at <a href="mailto:michaelolowoselu@gmail.com" className="text-blue-400 hover:underline">michaelolowoselu@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
