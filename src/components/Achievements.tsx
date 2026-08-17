import React from 'react';
import { 
  Sparkles, 
  Trophy, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Code2, 
  Rocket 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS } from '../data/portfolioData';

interface AchievementsProps {
  onOpenNikAiDemo: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onOpenNikAiDemo }) => {
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#3B82F6', '#8B5CF6', '#10B981']
      });
    } catch {
      // safe fallback if not supported
    }
  };

  return (
    <section id="achievements" className="py-24 relative bg-[#070B14]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. ACHIEVEMENTS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Hackathons, Competitions & Recognition
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-2">
            Verified milestones demonstrating collaborative engineering and competitive problem solving.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              onClick={triggerConfetti}
              className="rounded-2xl bg-[#111827]/70 border border-white/10 p-6 flex flex-col justify-between hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-md group cursor-pointer"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    {ach.id === 'hackdevengers' ? <Trophy className="w-5 h-5 text-yellow-400" /> : <Award className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300">
                    {ach.date}
                  </span>
                </div>

                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                  {ach.event}
                </span>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                  {ach.title}
                </h3>

                <div className="text-xs font-mono text-slate-400 mt-1 mb-3">
                  Project: <span className="text-slate-200 font-semibold">{ach.project}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {ach.description}
                </p>

                {/* Badge pill */}
                <div className="mt-4 p-2.5 rounded-lg bg-[#070B14] border border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{ach.badge}</span>
                </div>
              </div>

              {/* Footer Tags and Action */}
              <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {ach.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#070B14] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {ach.id === 'hackdevengers' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenNikAiDemo();
                    }}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline"
                  >
                    <span>Test NikAI</span>
                    <Rocket className="w-3 h-3" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
