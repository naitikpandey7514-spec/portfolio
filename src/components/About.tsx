import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowUpRight,
  Code,
  Brain,
  Rocket
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const focusPillars = [
    {
      title: "Intelligent Systems",
      desc: "Architecting generative AI workflows, agentic assistance, and machine learning pipelines with Python and Google Gemini.",
      icon: Brain,
      color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400"
    },
    {
      title: "Full-Stack Reliability",
      desc: "Developing responsive React applications with performant FastAPI / ASP.NET Core backends and normalized database storage.",
      icon: Code,
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400"
    },
    {
      title: "Practical Builder",
      desc: "Turning real student and developer pain points into deployed software solutions, tested across hackathons like HackDevengers 1.0.",
      icon: Rocket,
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Background, Philosophy & Focus
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Blending academic rigor in Artificial Intelligence with a hands-on builder mindset.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              {PERSONAL_INFO.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {focusPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={pillar.title}
                    className="p-4 rounded-xl bg-[#111827]/70 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#070B14] border border-white/10 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1 font-heading">{pillar.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Philosophy quote */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900/60 border-l-4 border-cyan-400 border-t border-r border-b border-white/5">
              <p className="text-sm italic text-slate-300 leading-relaxed font-sans">
                "I believe modern AI is most valuable when integrated into thoughtful, intuitive software that genuinely helps people learn, create, and solve problems faster."
              </p>
              <div className="mt-2 text-xs font-mono text-cyan-400 font-medium">
                — Naitik Pandey
              </div>
            </div>

          </div>

          {/* Right Column: Digital Tech Profile Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl bg-[#0B1020] border border-white/15 p-6 shadow-2xl backdrop-blur-xl space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full bg-[#070B14] rounded-[10px] flex items-center justify-center font-heading font-extrabold text-lg text-cyan-300">
                      NP
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-cyan-400 font-mono">B.Tech in AI & ML</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active
                </span>
              </div>

              {/* Information Rows */}
              <div className="space-y-4 text-xs">
                
                <div className="p-3.5 rounded-xl bg-[#111827]/80 border border-white/5 flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400 font-mono text-[11px]">Academic Track</div>
                    <div className="text-slate-200 font-semibold text-xs mt-0.5">{PERSONAL_INFO.education}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111827]/80 border border-white/5 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400 font-mono text-[11px]">Location & Availability</div>
                    <div className="text-slate-200 font-semibold text-xs mt-0.5">{PERSONAL_INFO.location} • Open to Remote & On-site Internships</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111827]/80 border border-white/5 flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="w-full">
                    <div className="text-slate-400 font-mono text-[11px]">Current Learning Focus</div>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {PERSONAL_INFO.currentlyLearning.map((item) => (
                        <span 
                          key={item} 
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {PERSONAL_INFO.quickStats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#151D2E]/80 border border-white/5">
                    <div className="text-[11px] text-slate-400 font-mono">{stat.label}</div>
                    <div className="text-sm font-bold text-white mt-1 font-heading text-cyan-300">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#111827] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center justify-between text-xs font-mono"
                >
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                  <div className="flex items-center gap-1 text-cyan-400">
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </div>
                </button>

                <a
                  href="#projects"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-600/20"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
