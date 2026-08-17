import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink, 
  Sparkles,
  GraduationCap,
  Briefcase,
  Code,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const resumeText = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Education: ${PERSONAL_INFO.education}

CORE SKILLS:
- Languages: Python, Java, C, JavaScript
- Web/Backend: React, FastAPI, ASP.NET Core, REST APIs, HTML5/CSS3
- AI/ML: Machine Learning, Generative AI, Prompt Engineering, Google Gemini API
- Databases & Tools: MySQL, SQLite, Git, GitHub, VS Code, Vercel, Render

FLAGSHIP PROJECTS:
1. NikAI - Full-Stack AI Assistant (React, FastAPI, Google Gemini, SQLite)
2. NeuralFlow ML Studio - Interactive Neural Network & ML Playground
3. PulseHealth Assistant - ML Predictive Risk Diagnostic Tool

ACHIEVEMENTS:
- HackDevengers 1.0 International Hackathon Participant (NikAI Project)`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl h-[88vh] max-h-[850px] bg-[#0B1020] border border-cyan-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Modal Controls Header */}
        <div className="px-5 py-3.5 bg-[#070B14] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="font-heading font-bold text-white text-sm sm:text-base">
                Curriculum Vitae / Resume
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {PERSONAL_INFO.name} • ATS-Ready Technical Profile
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="p-1.5 px-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
              title="Copy plain-text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 px-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all text-xs font-semibold flex items-center gap-1 shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-red-950/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#070B14]/90 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-extrabold font-heading text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-cyan-400 font-mono text-sm font-semibold mt-1">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono mt-3">
              <span>📧 {PERSONAL_INFO.email}</span>
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>🔗 github.com</span>
              <span>💼 linkedin.com</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <div className="font-bold text-white">{PERSONAL_INFO.education}</div>
                <div className="text-slate-400 text-xs mt-0.5">Specialization in Artificial Intelligence, Machine Learning & Algorithms</div>
              </div>
              <div className="text-xs font-mono text-cyan-300">Pursuing</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-slate-200">Languages: </span>
                <span className="text-slate-300 font-mono">Python, Java, C, JavaScript</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">AI & Machine Learning: </span>
                <span className="text-slate-300 font-mono">Generative AI, Prompt Engineering, Google Gemini API, Scikit-Learn</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Web & Backend: </span>
                <span className="text-slate-300 font-mono">React, FastAPI, ASP.NET Core, HTML5, CSS3, Vite, REST APIs</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Databases & Tools: </span>
                <span className="text-slate-300 font-mono">MySQL, SQLite, Git, GitHub, VS Code, Vercel, Render</span>
              </div>
            </div>
          </div>

          {/* Featured Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects</span>
            </h2>

            <div className="space-y-4 text-xs">
              {PROJECTS.slice(0, 3).map((project) => (
                <div key={project.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white text-sm">{project.title}</span>
                    <span className="font-mono text-[11px] text-cyan-400">{project.tags.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{project.description}</p>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-400 text-[11px] pl-1">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Achievements */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <Award className="w-4 h-4" />
              <span>Achievements & Hackathons</span>
            </h2>
            <div className="space-y-2 text-xs">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-white">{ach.title} ({ach.event})</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">{ach.description}</p>
                  </div>
                  <span className="font-mono text-[11px] text-purple-300 shrink-0 ml-2">{ach.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
