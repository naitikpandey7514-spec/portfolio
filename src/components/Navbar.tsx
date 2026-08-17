import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenNikAiDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenNikAiDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['about', 'skills', 'experience', 'projects', 'achievements', 'education', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            id="nav-logo-link"
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#070B14] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                <span>{PERSONAL_INFO.name}</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for Opportunities"></span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">AI & ML Developer</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 bg-[#111827]/70 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-nikai-demo-btn"
              onClick={onOpenNikAiDemo}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all flex items-center gap-1.5 group"
              title="Try NikAI Assistant in interactive sandbox"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>Try NikAI</span>
            </button>

            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/80 hover:text-white hover:bg-slate-700 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>

            <a
              id="nav-connect-btn"
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-md shadow-blue-600/20 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden mt-3 px-4 pb-6 pt-2 bg-[#0B1020]/95 border-b border-white/10 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1.5 max-w-md mx-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/20 border border-blue-500/30 text-cyan-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                id="mobile-nav-nikai-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNikAiDemo();
                }}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Try NikAI Assistant Simulator</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  id="mobile-nav-resume-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="py-2 px-3 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Resume</span>
                </button>
                <a
                  id="mobile-nav-connect-btn"
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="py-2 px-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
