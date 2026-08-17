import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Code2, 
  Brain, 
  Database, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const coreModules = [
    { title: "Artificial Intelligence & Heuristics", desc: "Search algorithms, knowledge engineering, state-space representations.", icon: Brain },
    { title: "Machine Learning & Statistical Models", desc: "Supervised classifiers, regression analysis, evaluation metrics.", icon: Layers },
    { title: "Data Structures & Algorithms", desc: "Binary trees, dynamic programming, sorting complexity in Java & C.", icon: Code2 },
    { title: "Generative AI & LLM Systems", desc: "Prompt engineering, embedding vectorization, agentic pipelines.", icon: Sparkles },
    { title: "Relational Database Management", desc: "Schema normalization, ACID properties, indexing, SQL queries.", icon: Database },
    { title: "Full-Stack Web Architecture", desc: "Client-server protocol, REST endpoints, asynchronous event loops.", icon: BookOpen }
  ];

  return (
    <section id="education" className="py-24 relative bg-[#0B1020]/50 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06. ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Education & Core Coursework
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-2">
            Formal engineering foundations combined with self-driven applied projects.
          </p>
        </div>

        {/* Academic Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#111827]/80 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          
          {/* Main Degree Info Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 p-0.5 shrink-0 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#070B14] rounded-[14px] flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-cyan-300" />
                </div>
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-0.5">
                  {PERSONAL_INFO.education}
                </h3>
                <p className="text-slate-400 text-xs font-mono mt-1">
                  Location: {PERSONAL_INFO.location} • AI & Machine Learning Specialization
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-end gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 font-medium">
                Pursuing Degree
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Full-Time Engineering
              </span>
            </div>
          </div>

          {/* Focus Areas Grid */}
          <div>
            <h4 className="text-sm font-semibold font-heading text-slate-200 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Core Academic Curriculum & Technical Focus Areas</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreModules.map((module) => {
                const IconComp = module.icon;
                return (
                  <div
                    key={module.title}
                    className="p-4 rounded-xl bg-[#070B14]/70 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center text-cyan-400 mb-3">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h5 className="text-xs font-bold text-white mb-1 font-heading">{module.title}</h5>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{module.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Philosophy Summary */}
          <div className="p-4 rounded-xl bg-[#0B1020] border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Active in technical workshops, lab algorithmic problem solving, and collaborative hackathons.</span>
            </div>
            <a
              href="#projects"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 shrink-0 font-medium hover:underline"
            >
              See Project Implementations →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
