import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NikAiModal } from './components/NikAiModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isNikAiOpen, setIsNikAiOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070B14] text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      
      {/* Top Floating / Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenNikAiDemo={() => setIsNikAiOpen(true)}
      />

      {/* Main Single-Page Content Stream */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenNikAiDemo={() => setIsNikAiOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience & Learning Journey */}
        <Timeline />

        {/* Projects Showcase */}
        <Projects
          onOpenNikAiDemo={() => setIsNikAiOpen(true)}
        />

        {/* Achievements & Milestones */}
        <Achievements
          onOpenNikAiDemo={() => setIsNikAiOpen(true)}
        />

        {/* Education & Curriculum */}
        <Education />

        {/* Services / What I Do */}
        <Services />

        {/* Contact CTA & Direct Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenNikAiDemo={() => setIsNikAiOpen(true)}
      />

      {/* Interactive NikAI Assistant Simulator Modal */}
      <NikAiModal
        isOpen={isNikAiOpen}
        onClose={() => setIsNikAiOpen(false)}
      />

      {/* ATS-Ready Clean Formatted Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
