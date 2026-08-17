import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Server, 
  Palette, 
  Cpu, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-pink-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#070B14]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07. WHAT I DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Capabilities & Technical Value
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-2">
            Translating conceptual requirements into production-ready software solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#111827]/70 border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-md group"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#070B14] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 mb-4">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Key Offerings:</div>
                  <div className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href="#contact"
                  className="text-xs font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Discuss an opportunity</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
