import React from 'react';
import { ShieldCheck, HeartPulse, FileText, Mail, Github, User, ExternalLink, Globe, Sparkles, Download } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openProtocolModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openProtocolModal }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-4 border-t border-stone-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* About Who I Am Section (Bottom Footer) */}
        <div className="bg-stone-950/80 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-lg">About Who I Am</h3>
                <p className="text-xs text-stone-400">Project Architect & Systems Developer</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <a 
                href="https://nate-mina.github.io/Portfolio-CV/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-purple-900/40 hover:bg-purple-900/70 text-purple-300 border border-purple-500/40 px-3.5 py-2 rounded-xl transition font-bold"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Portfolio & CV Hub</span>
                <ExternalLink className="w-3 h-3 text-purple-300" />
              </a>

              <a 
                href="mailto:nate@purecomp.onmicrosoft.com"
                className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 px-3.5 py-2 rounded-xl transition"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>nate@purecomp.onmicrosoft.com</span>
              </a>

              <a 
                href="https://www.purecomp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-emerald-300 border border-stone-700 px-3.5 py-2 rounded-xl transition font-bold"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>www.purecomp.net</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <button 
                onClick={() => setActiveTab('vitalstats')}
                className="inline-flex items-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-2 rounded-xl transition font-bold"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>VitalStats Supplement Portal</span>
              </button>

              <a 
                href="https://github.com/Nate-Mina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 px-3.5 py-2 rounded-xl transition font-bold"
              >
                <Github className="w-3.5 h-3.5 text-stone-300" />
                <span>github.com/Nate-Mina</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              {typeof window !== 'undefined' && window.location.protocol !== 'file:' && (
                <a
                  href="dom_i_nately_health_standalone.html"
                  download="dom_i_nately_health_standalone.html"
                  className="inline-flex items-center gap-1.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 px-3.5 py-2 rounded-xl transition font-bold"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Single HTML</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed max-w-4xl">
            Hi, I'm <strong className="text-white">Nathaniel Mina</strong> — an AI engineer, entrepreneur, learner, teacher, businessman, content creator, and musician. I specialize in AI tech and other technology solutions, software systems, and health informatics. For my link-in-bio & about me portfolio, visit <a href="https://nate-mina.github.io/Portfolio-CV/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline font-bold">nate-mina.github.io/Portfolio-CV</a>. For my technology applications, visit <a href="https://www.purecomp.net" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold">www.purecomp.net</a>. You can also view my research publication <a href="https://gemini.google.com/share/adca0beb7fc6?skid=92cc7c01-cf12-4d67-b8db-3810a08d75b5" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline font-bold">Top Reasons People Use Supplements</a>, visit <a href="https://github.com/Nate-Mina" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-bold">GitHub (github.com/Nate-Mina)</a>, or reach me directly at <a href="mailto:nate@purecomp.onmicrosoft.com" className="text-amber-300 hover:underline">nate@purecomp.onmicrosoft.com</a>.
          </p>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-white font-serif font-bold text-2xl">Dom-I-</span>
              <span className="text-amber-500 font-serif font-bold text-2xl tracking-widest">Nately</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Dedicated to the clinical intersection of male performance, endocrine regulation, and botanical science. Synthesizing double-blind placebo-controlled RCTs and FDA databases.
            </p>
            <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono">
              Clinical Health Informatics Standard • AUA / EAU Referenced
            </p>
          </div>

          {/* Contact & Profile Headings */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Developer & Contact</h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Nate Mina</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:nate@purecomp.onmicrosoft.com" className="hover:text-amber-300 transition break-all">
                  nate@purecomp.onmicrosoft.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="https://www.purecomp.net" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition font-mono">
                  www.purecomp.net
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="https://github.com/Nate-Mina" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition font-mono">
                  github.com/Nate-Mina
                </a>
              </li>
            </ul>
          </div>

          {/* Modules Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Core Modules</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => setActiveTab('ed')} className="hover:text-amber-400 transition">
                  Vascular ED & NO Science
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('endocrine')} className="hover:text-amber-400 transition">
                  Serum Testosterone Modulation
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('fitness')} className="hover:text-amber-400 transition">
                  Hypertrophy & Ergogenic Aids
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('safety')} className="hover:text-amber-400 transition">
                  Adulteration & Quality Audit
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-amber-400 transition font-bold text-amber-300">
                  About Me →
                </button>
              </li>
            </ul>
          </div>

          {/* Verification & Platforms */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Web Platforms & Quality</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <a href="https://nate-mina.github.io/Portfolio-CV/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition font-bold">
                  Portfolio & CV (Link-in-Bio)
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <a href="https://www.purecomp.net" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition font-bold">
                  PureComp AI Tech & Other Tech
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <a href="https://gemini.google.com/share/adca0beb7fc6?skid=92cc7c01-cf12-4d67-b8db-3810a08d75b5" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition font-bold">
                  Top Reasons People Use Supplements
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-amber-400" />
                <a href="https://github.com/Nate-Mina" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition">
                  Nate-Mina Profile
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>FDA Tainted Product Audit</span>
              </li>
              <li className="flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-red-500" />
                <span>2-5 Yr MACE Warning Sentinel</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-stone-800 text-center text-[11px] text-stone-500 space-y-2">
          <p className="max-w-3xl mx-auto leading-relaxed">
            <strong className="text-stone-400">Medical Disclaimer:</strong> This web application provides research and health informatics synthesis for educational purposes only. It does not constitute medical advice, diagnosis, or treatment. Consult a licensed physician for personal medical evaluation.
          </p>
          <p className="font-mono text-[10px] text-stone-600">
            © 2026 Dom-I-Nately Health Informatics — Engineered by Nate Mina (<a href="https://www.purecomp.net" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-400 underline">www.purecomp.net</a> | <a href="https://github.com/Nate-Mina" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-400 underline">github.com/Nate-Mina</a>).
          </p>
        </div>
      </div>
    </footer>
  );
};
