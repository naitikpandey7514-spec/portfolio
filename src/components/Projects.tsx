import React, { useState } from 'react';
import { 
  Sparkles, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight, 
  Bot, 
  Database, 
  Terminal,
  Code2,
  Info
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onOpenNikAiDemo: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenNikAiDemo }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProjectDetail, setActiveProjectDetail] = useState<Project | null>(null);

  const categories = ['All', 'AI / ML', 'Full-Stack', 'Backend', 'Web App'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  const featuredProject = PROJECTS.find(p => p.featured) || PROJECTS[0];
  const standardProjects = filteredProjects.filter(p => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-24 relative bg-[#070B14]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03. FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Engineered Projects & AI Solutions
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-2">
              Production-ready applications bridging intelligent models, full-stack backends, and user-centric interfaces.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#111827] border border-white/10 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedFilter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase: NikAI */}
        {selectedFilter === 'All' || selectedFilter === 'AI / ML' ? (
          <div className="mb-16">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#111827] to-[#0B1020] border border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group">
              
              {/* Corner highlight badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-l from-cyan-500 to-blue-600 text-[#070B14] font-mono text-[11px] font-bold px-4 py-1 rounded-bl-xl shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>FLAGSHIP PROJECT</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left info column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-950/80 border border-blue-500/30 text-cyan-300">
                      HackDevengers 1.0 Submission
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Deployed
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight flex items-center gap-3">
                      <span>{featuredProject.title}</span>
                      <span className="text-xs font-mono text-cyan-400 font-normal px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
                        v1.2 Full-Stack
                      </span>
                    </h3>
                    <p className="text-cyan-400 text-sm font-mono mt-1">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Core Features list */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Capabilities:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {featuredProject.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-[#070B14]/60 p-2 rounded-lg border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#070B14] border border-cyan-500/30 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={onOpenNikAiDemo}
                      className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 group"
                    >
                      <Bot className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                      <span>Launch Interactive Simulator</span>
                    </button>

                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    <button
                      onClick={() => setActiveProjectDetail(featuredProject)}
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-transparent border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all flex items-center gap-1.5"
                    >
                      <Info className="w-4 h-4" />
                      <span>Architecture Details</span>
                    </button>
                  </div>
                </div>

                {/* Right visual preview column */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#070B14] group-hover:border-cyan-500/40 transition-all">
                    
                    {/* Simulated App Header */}
                    <div className="px-4 py-2.5 bg-[#0B1020] border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                        <span className="ml-2 text-[11px] font-mono text-slate-400">nikai-workspace.web.app</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">● Live AI Engine</span>
                    </div>

                    {/* Screenshot / Visual representation */}
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <img
                        src={featuredProject.image}
                        alt="NikAI Architecture Preview"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent"></div>

                      {/* Floating overlay chip */}
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B1020]/90 border border-cyan-500/30 backdrop-blur-md">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5" />
                            <span>FastAPI + Google Gemini</span>
                          </span>
                          <span className="font-mono text-slate-400 text-[11px]">SQLite Persistent</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : null}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#111827]/70 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl backdrop-blur-md group"
            >
              <div>
                {/* Image Header with hover zoom */}
                <div className="relative h-48 overflow-hidden bg-[#070B14]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#070B14]/90 border border-white/10 text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mt-0.5 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#070B14] border border-white/5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-white/5 flex items-center justify-between gap-2 mt-4">
                <button
                  onClick={() => setActiveProjectDetail(project)}
                  className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-medium flex items-center gap-1 shadow-sm transition-all"
                      title="Open Live Application"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProjectDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0B1020] border border-cyan-500/30 p-6 shadow-2xl text-slate-200">
            
            <button
              onClick={() => setActiveProjectDetail(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-950 border border-blue-500/30 text-cyan-300">
                {activeProjectDetail.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-white">{activeProjectDetail.title}</h3>
            <p className="text-cyan-400 text-xs font-mono mt-0.5">{activeProjectDetail.tagline}</p>

            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              {activeProjectDetail.longDescription || activeProjectDetail.description}
            </p>

            {/* Architecture Details if any */}
            {activeProjectDetail.architecture && (
              <div className="mt-5 p-4 rounded-xl bg-[#070B14] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>System Architecture:</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {activeProjectDetail.architecture.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">▸</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            <div className="mt-5 space-y-2">
              <div className="text-xs font-mono text-slate-400">Core Features:</div>
              <div className="space-y-1.5 text-xs text-slate-300">
                {activeProjectDetail.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[#111827] p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              {activeProjectDetail.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-cyan-200">
                  {tag}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <a
                href={activeProjectDetail.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              {activeProjectDetail.liveUrl && (
                <a
                  href={activeProjectDetail.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 flex items-center gap-1.5"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
