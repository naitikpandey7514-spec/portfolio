import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenNikAiDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenNikAiDemo }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="portfolio-footer" className="bg-[#070B14] border-t border-white/10 py-12 relative overflow-hidden">
      
      {/* Subtle bottom ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-t from-blue-600/10 to-transparent blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                <div className="w-full h-full bg-[#070B14] rounded-[6px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-300" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <button onClick={onOpenNikAiDemo} className="hover:text-cyan-300 transition-colors text-cyan-400">
              Try NikAI
            </button>
            <button onClick={onOpenResume} className="hover:text-cyan-300 transition-colors">
              Resume
            </button>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all group"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center justify-center gap-1 text-slate-400">
            <span>Built with passion & modern code</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
