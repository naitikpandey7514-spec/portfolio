import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Terminal as TerminalIcon, 
  Play, 
  Check, 
  Copy, 
  Code2, 
  Cpu, 
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenNikAiDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenNikAiDemo }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'nikai' | 'java' | 'fastapi'>('nikai');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [outputLogs, setOutputLogs] = useState<string[]>([
    "System: Initialized NikAI runtime engine",
    "Connected to Google Gemini API (Stream: Active)",
    "Ready for prompt execution..."
  ]);

  const codeSnippets = {
    nikai: `# NikAI Core Engine (FastAPI + Google Gemini)
from fastapi import FastAPI, HTTPException
from google.genai import GoogleGenAI
import os

app = FastAPI(title="NikAI Intelligent Assistant")
ai_client = GoogleGenAI(api_key=os.getenv("GEMINI_API_KEY"))

@app.post("/api/v1/assistant/chat")
async def generate_response(prompt: str, mode: str = "study"):
    """NikAI specialized multi-mode reasoning pipeline"""
    system_prompt = get_mode_instruction(mode)
    response = await ai_client.models.generate_content(
        model="gemini-2.0-flash",
        contents=f"{system_prompt}\\n\\nUser: {prompt}"
    )
    return {"status": "success", "mode": mode, "text": response.text}`,

    java: `// NeuralLayer.java - Feedforward Layer
public class NeuralLayer {
    private double[][] weights;
    private double[] biases;
    private int inputDim;
    private int outputDim;

    public NeuralLayer(int inputDim, int outputDim) {
        this.inputDim = inputDim;
        this.outputDim = outputDim;
        this.initializeHeNormal();
    }

    public double[] forward(double[] inputs) {
        double[] output = new double[outputDim];
        for (int i = 0; i < outputDim; i++) {
            double sum = biases[i];
            for (int j = 0; j < inputDim; j++) {
                sum += inputs[j] * weights[j][i];
            }
            output[i] = Math.max(0.0, sum); // ReLU activation
        }
        return output;
    }
}`,

    fastapi: `# FastAPI Async High-Throughput REST Endpoint
from fastapi import FastAPI, Depends, BackgroundTasks
from pydantic import BaseModel, Field

class AnalysisRequest(BaseModel):
    dataset_id: str
    epochs: int = Field(ge=1, le=1000, default=100)
    learning_rate: float = 0.001

@app.post("/api/v1/train-pipeline")
async def trigger_training(req: AnalysisRequest, bg: BackgroundTasks):
    job_id = generate_job_uuid()
    bg.add_task(run_ml_training, job_id, req.dataset_id, req.learning_rate)
    return {"job_id": job_id, "status": "queued", "eta": "12s"}`
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setOutputLogs(prev => [...prev, `[EXEC] Running ${activeCodeTab.toUpperCase()} module...`]);

    setTimeout(() => {
      if (activeCodeTab === 'nikai') {
        setOutputLogs(prev => [
          ...prev.slice(-3),
          "→ Initialized Google Gemini model stream",
          "→ Session SQLite storage verified",
          "✔ NikAI Core: 200 OK [Response generated in 340ms]"
        ]);
      } else if (activeCodeTab === 'java') {
        setOutputLogs(prev => [
          ...prev.slice(-3),
          "→ Compiling NeuralLayer.java [JDK 21]",
          "→ Forward pass ReLU tensors: Shape [32, 64]",
          "✔ Layer Output: Mean Activation 0.742, Loss 0.021"
        ]);
      } else {
        setOutputLogs(prev => [
          ...prev.slice(-3),
          "→ FastAPI ASGI server receiving payload",
          "→ Background task worker dispatched",
          "✔ HTTP 202 Accepted: Job UUID 8f9c-44a1"
        ]);
      }
      setIsRunning(false);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[280px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Identity, Value Proposition, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div 
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-sm shadow-cyan-500/10 text-xs font-medium text-cyan-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-mono text-[11px]">B.Tech AI & ML</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider uppercase text-cyan-400 font-mono">
                Hello, I am
              </p>
              <h1 id="hero-main-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent pt-1">
                {PERSONAL_INFO.title}
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.headline}
            </p>

            {/* Quick Highlights / Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-slate-400 mr-1">Specialties:</span>
              {["Python", "Java", "C", "JavaScript", "FastAPI", "React", "Google Gemini", "Machine Learning"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#111827] border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero-try-nikai-btn"
                onClick={onOpenNikAiDemo}
                className="px-5 py-3 rounded-xl font-semibold text-sm text-cyan-300 bg-[#111827]/90 border border-cyan-500/40 hover:bg-cyan-950/40 hover:border-cyan-400 transition-all shadow-md shadow-cyan-500/10 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Try NikAI Assistant</span>
              </button>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl font-medium text-sm text-slate-300 bg-slate-800/80 border border-slate-700 hover:bg-slate-700/80 hover:text-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs text-slate-400 font-mono">Connect directly:</span>
              <div className="flex items-center gap-3">
                <a
                  id="hero-social-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/60 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-social-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/60 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="hero-social-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg bg-slate-800/60 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-slate-800 transition-all"
                  title="Email Naitik"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <span className="text-xs text-slate-400 font-mono ml-auto hidden sm:inline">
                📍 {PERSONAL_INFO.location}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Code Playground */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Decorative accent glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              {/* Terminal Card */}
              <div className="relative rounded-2xl bg-[#0B1020] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#070B14]/90 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>workspace/dev</span>
                    </span>
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                    title="Copy code"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tabs bar */}
                <div className="px-3 py-1.5 bg-[#111827]/70 border-b border-white/5 flex items-center justify-between overflow-x-auto">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('nikai')}
                      className={`px-2.5 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-all ${
                        activeCodeTab === 'nikai'
                          ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>nikai_core.py</span>
                    </button>

                    <button
                      onClick={() => setActiveCodeTab('java')}
                      className={`px-2.5 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-all ${
                        activeCodeTab === 'java'
                          ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Cpu className="w-3 h-3 text-purple-400" />
                      <span>NeuralLayer.java</span>
                    </button>

                    <button
                      onClick={() => setActiveCodeTab('fastapi')}
                      className={`px-2.5 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-all ${
                        activeCodeTab === 'fastapi'
                          ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Code2 className="w-3 h-3 text-emerald-400" />
                      <span>api_router.py</span>
                    </button>
                  </div>

                  <button
                    onClick={handleRunSimulation}
                    disabled={isRunning}
                    className="px-2.5 py-1 rounded bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-[11px] font-mono font-medium flex items-center gap-1 shadow-sm transition-all ml-2 disabled:opacity-50"
                  >
                    <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                    <span>{isRunning ? 'Running...' : 'Run'}</span>
                  </button>
                </div>

                {/* Code Window Body */}
                <div className="p-4 bg-[#070B14]/90 overflow-x-auto max-h-[260px] text-xs font-mono text-slate-300 leading-relaxed scrollbar-thin">
                  <pre className="whitespace-pre">
                    <code>{codeSnippets[activeCodeTab]}</code>
                  </pre>
                </div>

                {/* Output Console simulation */}
                <div className="p-3 bg-[#0B1020] border-t border-white/10 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-cyan-400" />
                      <span>Live Terminal Output</span>
                    </span>
                    <span className="text-emerald-400 text-[10px]">● Ready</span>
                  </div>
                  <div className="space-y-0.5 text-slate-300">
                    {outputLogs.map((log, idx) => (
                      <div 
                        key={idx} 
                        className={log.includes('✔') ? 'text-emerald-400' : log.includes('→') ? 'text-cyan-300' : 'text-slate-400'}
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating Technology Feature Pill */}
              <div className="absolute -bottom-4 -left-4 bg-[#111827] border border-cyan-500/40 rounded-xl px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2.5 hidden sm:flex">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">NikAI Flagship</div>
                  <div className="text-[10px] text-slate-400 font-mono">FastAPI + Gemini AI</div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-[#111827] border border-purple-500/40 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-2 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                <span className="text-[11px] font-mono text-purple-300 font-medium">HackDevengers 1.0</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
