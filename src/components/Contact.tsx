import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Check, 
  Copy, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a short message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {}
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B1020]/80 border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-purple-600/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Have an idea, project, collaboration, or opportunity? Let's connect and build something meaningful.
          </p>
        </div>

        {/* Contact Form & Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left: Contact Info & Quick Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-[#111827]/80 border border-white/10 p-6 shadow-xl backdrop-blur-md space-y-6">
              
              <div>
                <h3 className="text-lg font-bold font-heading text-white">
                  Direct Contact & Profiles
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Feel free to send an email or reach out on GitHub and LinkedIn.
                </p>
              </div>

              {/* Email box */}
              <div className="p-4 rounded-xl bg-[#070B14] border border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Primary Email</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-cyan-300 hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#070B14] border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-xs font-semibold text-white mt-0.5">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 mb-3">Professional Profiles:</div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#070B14] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2.5 text-xs font-medium"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#070B14] border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2.5 text-xs font-medium"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Opportunity Availability Banner */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Currently open for AI & Full-Stack internship opportunities.</span>
              </div>

            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111827]/80 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-cyan-300 font-semibold">{formData.name}</span>! I have received your note regarding "{formData.subject}" and will respond promptly.
                  </p>
                  
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-mono transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold flex items-center gap-1.5"
                    >
                      <span>Open in Email Client</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#070B14] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.name 
                            ? 'border-red-500/80 focus:ring-1 focus:ring-red-500' 
                            : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#070B14] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.email 
                            ? 'border-red-500/80 focus:ring-1 focus:ring-red-500' 
                            : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Internship Opportunity / Collaboration on NikAI"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#070B14] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.subject 
                          ? 'border-red-500/80 focus:ring-1 focus:ring-red-500' 
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Describe your project, team, or opportunity..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#070B14] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                        errors.message 
                          ? 'border-red-500/80 focus:ring-1 focus:ring-red-500' 
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>

                  <p className="text-[11px] text-slate-400 font-mono text-center pt-2">
                    🔒 Messages are sent directly. No spam or third-party sharing.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
