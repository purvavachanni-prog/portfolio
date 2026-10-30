import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2C2825] flex flex-col font-sans selection:bg-[#C88363]/20 selection:text-[#2C2825]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Portfolio Monograph */}
      <main className="flex-1">
        <Hero
          onOpenContact={handleOpenContact}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Full Resume Monograph Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
