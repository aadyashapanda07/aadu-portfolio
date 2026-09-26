import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactModal from "./components/ContactModal";
import ResumeModal from "./components/ResumeModal";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Chatbot from "./components/Chatbot";
import CursorGlow from "./components/CursorGlow";
import { ArrowRight, Mail, FileText, Sparkles } from "lucide-react";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <CursorGlow />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <Chatbot />
      <SmoothScroll>
        <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Navbar
            onOpenContact={() => setIsContactOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero
              onOpenContact={() => setIsContactOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />
            <About />
            <Skills />
            <Projects />

            {/* Pre-Footer Call to Action Banner */}
            <section className="py-20">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-sky-600 to-indigo-700 p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl shadow-sky-500/20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider">
                    <Sparkles size={14} />
                    <span>Let's Create Together</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight leading-tight">
                    Have an opportunity or exciting project in mind?
                  </h2>

                  <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
                    I'm actively seeking software engineering internships, full-stack roles, and open-source collaborations. Let's discuss how I can contribute to your team.
                  </p>

                  <div className="flex flex-wrap gap-3.5 justify-center pt-2">
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="px-7 py-3.5 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-bold shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                    >
                      <Mail size={18} />
                      Get in Touch
                    </button>
                    <button
                      onClick={() => setIsResumeOpen(true)}
                      className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-2xl font-semibold backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <FileText size={18} />
                      View Resume
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
