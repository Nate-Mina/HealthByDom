import React, { useState } from 'react';
import { CLINICAL_COMPOUNDS, SUCRA_RANKINGS, SupplementCompound } from '../data/clinicalData';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Dna, Activity, ShieldCheck, AlertCircle, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/imageAssets';

interface VascularEdModuleProps {
  isDark?: boolean;
}

export const VascularEdModule: React.FC<VascularEdModuleProps> = ({ isDark = false }) => {
  const [selectedEtiology, setSelectedEtiology] = useState<'Organic Vascular ED' | 'Psychogenic / Non-Organic ED'>('Organic Vascular ED');
  const [gradeFilter, setGradeFilter] = useState<string>('All');

  const edCompounds = CLINICAL_COMPOUNDS.filter(c => c.domain === 'ED');

  const filteredCompounds = edCompounds.filter(c => {
    if (gradeFilter === 'All') return true;
    return c.evidenceGrade === gradeFilter;
  });

  // Chart data for IIEF-5 SMD
  const chartData = edCompounds
    .filter(c => c.smdScore !== undefined)
    .map(c => ({
      name: c.name.split(' ')[0], // First word for short label
      fullName: c.name,
      smd: c.smdScore,
      dose: c.evaluatedDose,
      grade: c.evidenceGrade
    }));

  const filteredSucra = SUCRA_RANKINGS.filter(s => 
    s.etiology === selectedEtiology || s.etiology === 'General'
  );

  return (
    <section className="mb-16 space-y-12">
      {/* Section Header with Scientific Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xs transition-colors">
        <div className="md:col-span-2 border-l-4 border-amber-500 pl-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full mb-2">
            <Dna className="w-3.5 h-3.5" />
            Module I • Vascular Performance
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Erectile Mechanics & Nitric Oxide Science
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base mt-2 max-w-3xl leading-relaxed">
            Evaluating botanical and amino acid interventions that target cavernous endothelial nitric oxide synthesis (eNOS), cGMP accumulation, and microvascular blood flow using standardized IIEF-5 clinical outcome scores.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-xs h-48 md:h-full max-h-56">
          <img 
            src={IMAGE_ASSETS.vascularImg} 
            alt="Endothelial Nitric Oxide Microvascular Circulation" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Chart & Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* IIEF-5 Effect Size Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xs transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-800 dark:text-emerald-400" />
                <span>IIEF-5 Standardized Mean Difference (SMD)</span>
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Effect sizes derived from systematic reviews and placebo-controlled meta-analyses.
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-3 py-1 rounded-full self-start sm:self-auto">
              SMD vs Control
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                <XAxis type="number" domain={[0, 0.5]} tick={{ fontSize: 12, fill: isDark ? '#a8a29e' : '#78716c' }} />
                <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12, fontWeight: 600, fill: isDark ? '#e7e5e4' : '#292524' }} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-lg text-xs space-y-1 border border-stone-700">
                          <p className="font-bold text-amber-300">{data.fullName}</p>
                          <p><span className="text-stone-400">Effect Size:</span> <span className="font-mono font-bold text-emerald-400">+{data.smd} SMD</span></p>
                          <p><span className="text-stone-400">Protocol:</span> {data.dose}</p>
                          <p><span className="text-stone-400">Evidence:</span> {data.grade}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="smd" radius={[0, 8, 8, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.smd > 0.35 ? (isDark ? '#10b981' : '#064e3b') : entry.smd > 0.2 ? '#d97706' : '#9ca3af'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between text-xs text-stone-500 dark:text-stone-400 gap-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-emerald-900 dark:bg-emerald-500" /> High SMD (&gt;0.35)</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-amber-600" /> Moderate SMD (&gt;0.20)</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-md bg-stone-400" /> Low/Non-significant</span>
            </div>
            <p className="italic text-[11px]">Primary Source: PMC10490034 / Sex Med Rev</p>
          </div>
        </div>

        {/* Executive Takeaway Box */}
        <div className="bg-gradient-to-b from-stone-900 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl border border-stone-800 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Key Clinical Takeaway</span>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 leading-snug">
              Substrate Availability vs Enzymatic Inhibition
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed space-y-3">
              <span>
                Monotherapy with amino acid precursors (L-arginine) or botanicals (Ginseng) produces <strong className="text-white">statistically significant improvements in mild ED</strong>.
              </span>
              <span className="block mt-2">
                However, their true potential is unlocked when <strong className="text-amber-300">combined with PDE5 inhibitors</strong> in organic vascular ED, providing surplus nitric oxide substrate for protected cGMP pools.
              </span>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-emerald-800/80 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-400 font-semibold">AUA / EAU Guideline Rank:</span>
              <span className="font-bold text-amber-400">Adjunctive Second-Line</span>
            </div>
            <p className="text-[11px] text-stone-400 mt-1">
              Prescription PDE5 inhibitors remain standard first-line therapy.
            </p>
          </div>
        </div>
      </div>

      {/* SUCRA Network Meta-Analysis Synergy Tool */}
      <div className="bg-stone-50 dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
              Network Meta-Analysis (NMA)
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-2">
              SUCRA Regimen Synergy Analyzer
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 max-w-2xl">
              Surface Under the Cumulative Ranking Curve (SUCRA) evaluates the comparative probability of regimen efficacy across ED etiologies.
            </p>
          </div>

          {/* Etiology Selector Buttons */}
          <div className="flex p-1 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-2xs">
            <button
              onClick={() => setSelectedEtiology('Organic Vascular ED')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                selectedEtiology === 'Organic Vascular ED'
                  ? 'bg-emerald-900 text-amber-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Organic Vascular ED
            </button>
            <button
              onClick={() => setSelectedEtiology('Psychogenic / Non-Organic ED')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                selectedEtiology === 'Psychogenic / Non-Organic ED'
                  ? 'bg-emerald-900 text-amber-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Psychogenic / Non-Organic ED
            </button>
          </div>
        </div>

        {/* SUCRA Ranking Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSucra.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-stone-800/70 p-6 rounded-2xl border border-stone-200/80 dark:border-stone-700 shadow-2xs hover:border-amber-400 dark:hover:border-amber-500/70 transition"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase ${
                  item.synergyType.includes('Synergy')
                    ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                    : 'bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300'
                }`}>
                  {item.synergyType}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">SUCRA:</span>
                  <span className="text-lg font-black font-serif text-emerald-900 dark:text-emerald-400">{item.sucraScore}%</span>
                </div>
              </div>

              <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-2 leading-snug">
                {item.regimen}
              </h4>

              <div className="bg-stone-50 dark:bg-stone-900/80 p-3 rounded-xl text-xs text-stone-700 dark:text-stone-200 font-medium mb-3 border border-stone-100 dark:border-stone-700">
                <span className="text-amber-800 dark:text-amber-400 font-bold block mb-0.5">Clinical Outcome:</span>
                {item.outcome}
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {item.conclusion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Botanical & Nutraceutical Cards */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Validated Vascular & Botanical Interventions
          </h3>

          {/* Grade Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">Evidence Grade:</span>
            <div className="flex gap-1.5">
              {['All', 'High', 'Moderate', 'Insufficient'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGradeFilter(g)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    gradeFilter === g
                      ? 'bg-stone-900 dark:bg-emerald-900 text-white dark:text-amber-300'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompounds.map((compound) => (
            <div
              key={compound.id}
              className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xs hover:shadow-md hover:border-emerald-700/50 transition group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-emerald-900 dark:group-hover:text-emerald-400 transition leading-snug">
                    {compound.name}
                  </h4>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shrink-0 ${
                    compound.evidenceGrade === 'High'
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : compound.evidenceGrade === 'Moderate'
                      ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                      : 'bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}>
                    {compound.evidenceGrade} Evidence
                  </span>
                </div>

                <div className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50/80 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-100 dark:border-amber-900/50 mb-3">
                  Protocol Dosage: <span className="text-stone-900 dark:text-stone-100 font-mono">{compound.evaluatedDose}</span>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                  <strong className="text-stone-800 dark:text-stone-100">Mechanism:</strong> {compound.mechanism}
                </p>

                <div className="bg-stone-50 dark:bg-stone-800/70 p-3 rounded-xl border border-stone-100 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-200 mb-3">
                  <strong className="text-emerald-900 dark:text-emerald-400 block mb-0.5">Meta-Analytic Result:</strong>
                  {compound.metaResult}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                <span>{compound.keyTrial}</span>
                <a
                  href={`https://pubmed.ncbi.nlm.nih.gov/${compound.pmid}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 font-bold flex items-center gap-1 hover:underline"
                >
                  PMID: {compound.pmid} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
