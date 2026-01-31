import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <SmoothScroll>
        <div className="min-h-screen">
          <Navbar onOpenContact={() => setIsContactOpen(true)} />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero onOpenContact={() => setIsContactOpen(true)} />
            <About />
            <Skills />
            <Projects />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}


export default App;
