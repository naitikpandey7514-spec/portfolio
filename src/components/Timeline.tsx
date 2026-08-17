import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Code, 
  Layout, 
  Server, 
  Brain, 
  Trophy 
} from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'academic': return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'code': return <Code className="w-4 h-4 text-blue-400" />;
      case 'web': return <Layout className="w-4 h-4 text-purple-400" />;
      case 'ai': return <Brain className="w-4 h-4 text-pink-400" />;
      case 'hackathon': return <Trophy className="w-4 h-4 text-yellow-400" />;
      default: return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative bg-[#0B1020]/40 border-t border-white/5">
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. LEARNING JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Developer Evolution & Milestones
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-2">
            A chronological timeline tracing the progression from programming fundamentals to real-world AI applications.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central glowing line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500/40 opacity-40"></div>

          {/* Items */}
          <div className="space-y-12">
            {TIMELINE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-xl bg-[#070B14] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 z-10">
                    {getIcon(item.iconType)}
                  </div>

                  {/* Content Box */}
                  <div className={`ml-12 sm:ml-0 w-full sm:w-1/2 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                  }`}>
                    <div className="p-6 rounded-2xl bg-[#111827]/80 border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl backdrop-blur-md group">
                      
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-950/70 border border-blue-500/30 text-cyan-300">
                          {item.period}
                        </span>
                        {item.organization && (
                          <span className="text-xs font-mono text-slate-400">
                            • {item.organization}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                        {item.description}
                      </p>

                      {item.highlight && (
                        <div className="mt-3 p-2.5 rounded-lg bg-[#070B14] border border-cyan-500/20 text-xs font-mono text-cyan-300">
                          💡 {item.highlight}
                        </div>
                      )}

                      {/* Tech pills */}
                      <div className={`flex flex-wrap gap-1.5 mt-4 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/90 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
