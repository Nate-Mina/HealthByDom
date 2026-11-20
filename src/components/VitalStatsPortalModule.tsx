import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, BarChart3, FileText, ArrowRight } from 'lucide-react';
import { VITAL_STATS_PORTAL_HTML } from '../data/vitalStatsPortalHtml';

interface VitalStatsPortalModuleProps {
  isDark?: boolean;
}

export const VitalStatsPortalModule: React.FC<VitalStatsPortalModuleProps> = ({ isDark = true }) => {
  const [portalBlobUrl, setPortalBlobUrl] = useState<string>('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const blob = new Blob([VITAL_STATS_PORTAL_HTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    setPortalBlobUrl(url);
    return () => URL.revokeObjectURL(url);
  }, []);

  const syncIframeTheme = () => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        { type: 'DOM_INATELY_THEME', isDark },
        '*',
      );
    } catch {
      // ignore cross-context errors
    }
  };

  useEffect(() => {
    syncIframeTheme();
  }, [isDark]);

  return (
    <section className="mb-16 space-y-8">
      {/* Portal Header Banner */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                VitalStats v4.2 Clinical Portal
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-full text-xs font-mono font-bold">
                Epidemiological Surveillance & Diagnostic Analytics
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={portalBlobUrl || 'vitalstats_portal.html'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-md"
              >
                <span>Launch Fullscreen Portal</span>
                <ExternalLink className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="https://gemini.google.com/share/adca0beb7fc6?skid=92cc7c01-cf12-4d67-b8db-3810a08d75b5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-amber-300" />
                <span>Google Research Share</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>

          <div className="space-y-2 max-w-4xl">
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Clinical Supplement Analytics & Synthesis Application
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Integrates CDC NHANES surveillance data with systematic RCT meta-analyses. Features an interactive compound evidence database, personalized Rx assessment wizard, male ergogenic rankings, HPG/HPA endocrine synthesis, microvascular model, and regulatory adulteration audits.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 font-mono text-xs">
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
              <span className="text-slate-400 text-[10px] uppercase block">NHANES Usage</span>
              <span className="font-bold text-emerald-400 text-base tabular-nums">57.6% Population</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
              <span className="text-slate-400 text-[10px] uppercase block">Master Matrix</span>
              <span className="font-bold text-amber-300 text-base tabular-nums">16 Clinical Compounds</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
              <span className="text-slate-400 text-[10px] uppercase block">Safety Audit</span>
              <span className="font-bold text-rose-400 text-base">FDA Tainted Sentinel</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
              <span className="text-slate-400 text-[10px] uppercase block">Assessment Protocol</span>
              <span className="font-bold text-cyan-300 text-base">Interactive Wizard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Application Window */}
      <div className="bg-white dark:bg-slate-950 rounded-3xl border border-stone-200 dark:border-slate-800 shadow-2xl overflow-hidden space-y-3 p-4 sm:p-6 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 className="text-sm font-bold font-mono text-stone-900 dark:text-white tracking-wide uppercase">
              Interactive Web Application Preview
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-stone-500 dark:text-slate-400 hidden sm:inline">
              Synced Theme: {isDark ? 'Dark Slate' : 'Light Clinical'}
            </span>
            <a
              href={portalBlobUrl || 'vitalstats_portal.html'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-bold flex items-center gap-1 underline"
            >
              <span>Open Standalone Tab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="w-full h-[900px] rounded-2xl overflow-hidden border border-stone-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-900 shadow-inner">
          <iframe
            ref={iframeRef}
            onLoad={syncIframeTheme}
            srcDoc={VITAL_STATS_PORTAL_HTML}
            title="VitalStats Clinical Supplement Analytics Portal"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
};
