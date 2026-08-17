import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Brain, 
  Code, 
  Layout, 
  Server, 
  Database, 
  Terminal,
  Cpu,
  Layers,
  CheckCircle,
  Filter
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'ai-ml': <Brain className="w-4 h-4" />,
    'languages': <Code className="w-4 h-4" />,
    'frontend': <Layout className="w-4 h-4" />,
    'backend': <Server className="w-4 h-4" />,
    'databases': <Database className="w-4 h-4" />,
    'tools': <Terminal className="w-4 h-4" />
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map(category => {
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }
      
      const filteredSkills = category.skills.filter(skill => 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredSkills.length === 0 && searchQuery.trim() !== '') {
        return null;
      }

      return {
        ...category,
        skills: filteredSkills
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative bg-[#0B1020]/60 border-y border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02. TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Tools, Languages & Intelligence Stack
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-2">
              Categorized by technical focus areas without superficial percentages — built through real projects and coursework.
            </p>
          </div>

          {/* Search input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search skill (e.g. FastAPI, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#111827] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-[#111827] border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Technologies</span>
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-[#111827] border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;
            return (
              <div
                key={category.id}
                className="rounded-2xl bg-[#111827]/70 border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                        {categoryIcons[category.id] || <Cpu className="w-4 h-4" />}
                      </div>
                      <h3 className="font-heading font-semibold text-white text-base">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#070B14]/60 border border-white/5 hover:border-white/15 transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-200 font-mono flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            skill.level === 'Core'
                              ? 'bg-blue-950/60 border-blue-500/40 text-blue-300'
                              : skill.level === 'Advanced'
                              ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
                              : 'bg-slate-800 border-slate-700 text-slate-300'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer tag */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Applied in Academic & Side Projects</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-[#111827]/40 rounded-2xl border border-white/10 p-8">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 text-sm font-medium">No skills match "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-cyan-400 hover:underline font-mono"
            >
              Clear search filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
