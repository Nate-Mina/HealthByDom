import React from 'react';
import { ShieldAlert, Stethoscope, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';

export const MedicalDisclaimerSection: React.FC = () => {
  return (
    <section id="healthcare-disclaimer" className="mb-16">
      <div className="bg-gradient-to-br from-amber-50/90 via-stone-50 to-emerald-50/50 dark:from-amber-950/30 dark:via-stone-900 dark:to-emerald-950/30 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-amber-800/50 shadow-xs relative overflow-hidden transition-colors">
        {/* Subtle Decorative Backdrop Badge */}
        <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-48 h-48 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-100/90 dark:bg-amber-950/80 px-3 py-1 rounded-full mb-3 border border-amber-200 dark:border-amber-800/70">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />
              Official Medical Disclaimer & Legal Notice
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Clinical Literature Guide & Healthcare Disclaimer
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-2 max-w-3xl leading-relaxed">
              Understanding the boundary between evidence-based health informatics, academic research synthesis, and clinical medical practice.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/80 dark:bg-stone-800/80 border border-amber-200 dark:border-amber-800/60 px-4 py-2.5 rounded-2xl text-stone-800 dark:text-stone-100 text-xs font-bold shrink-0 shadow-2xs">
            <Stethoscope className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>Consult Your Physician</span>
          </div>
        </div>

        {/* 2-Column Notice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1: Not For Medical Use / Educational Guide */}
          <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/90 dark:border-stone-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-amber-800 dark:text-amber-300 font-serif font-bold text-base">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <h3>1. Not For Direct Medical Use (Educational Guide Only)</h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              This application, its interactive calculators, AI chatbot, dosage charts, and research summaries are designed <strong className="text-stone-900 dark:text-white">strictly as an educational guide and health informatics resource</strong>. They do NOT constitute medical diagnosis, treatment plans, or prescription mandates.
            </p>
            <ul className="text-xs text-stone-600 dark:text-stone-300 space-y-1.5 pt-1">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                <span>Do not rely on this application for emergency medical conditions or acute health crises.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                <span>Individual biological responses vary based on underlying vascular, renal, or endocrine pathologies.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Backed By Medical Science, Not From A Practicing Doctor */}
          <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/90 dark:border-stone-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2.5 text-emerald-950 dark:text-emerald-300 font-serif font-bold text-base">
              <BookOpen className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" />
              <h3>2. Backed By Research, But NOT From A Practicing Doctor</h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              All findings, mechanisms, and threshold dosages presented across Dom-I-Nately Health are <strong className="text-stone-900 dark:text-white">rigorously backed by published peer-reviewed medical literature</strong> (double-blind placebo RCTs, PubMed PMID citations, AUA/EAU guidelines, and FDA databases).
            </p>
            <p className="text-xs leading-relaxed font-medium bg-emerald-50/80 dark:bg-emerald-950/60 p-3 rounded-xl border border-emerald-100 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200">
              <strong className="font-bold text-emerald-950 dark:text-emerald-100">Important Distinction:</strong> While the data reflects validated clinical research, this platform is an automated informatics tool and <strong className="underline">is NOT provided by your practicing physician or a doctor treating you</strong>. Always consult your personal doctor or licensed medical professional before starting, altering, or stopping any dietary supplement, workout protocol, or health regimen.
            </p>
          </div>
        </div>

        {/* Verification Footer Banner */}
        <div className="mt-6 pt-4 border-t border-amber-200/60 dark:border-amber-800/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Transparency Standard: Every compound includes direct NCBI PubMed PMID links for primary study audit.</span>
          </div>
          <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider">
            Health Informatics Standard v2.4
          </span>
        </div>
      </div>
    </section>
  );
};
