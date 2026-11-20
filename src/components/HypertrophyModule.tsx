import React from 'react';
import { CLINICAL_COMPOUNDS } from '../data/clinicalData';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Dumbbell, Zap, Flame, ExternalLink, Activity } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/imageAssets';

interface HypertrophyModuleProps {
  isDark?: boolean;
}

export const HypertrophyModule: React.FC<HypertrophyModuleProps> = ({ isDark = false }) => {
  const fitnessCompounds = CLINICAL_COMPOUNDS.filter(c => c.domain === 'Fitness');

  const chartData = [
    { name: 'Citrulline Malate', score: 19.1, metric: 'Rep Volume Increase', color: isDark ? '#10b981' : '#064e3b' },
    { name: 'Creatine Mono', score: 14.2, metric: 'Max Strength Increase', color: isDark ? '#34d399' : '#047857' },
    { name: 'Beta-Alanine', score: 12.4, metric: '60-240s High-Intensity Capacity', color: '#d97706' },
    { name: 'Dietary Nitrate', score: 5.2, metric: 'Peak Power / O2 Efficiency', color: isDark ? '#60a5fa' : '#2563eb' },
  ];

  return (
    <section className="mb-16 space-y-12">
      {/* Section Header with Biomechanical Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xs transition-colors">
        <div className="md:col-span-2 border-l-4 border-amber-500 pl-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full mb-2">
            <Dumbbell className="w-3.5 h-3.5" />
            Module III • Hypertrophy & Ergogenic Aids
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Physical Output, ATP Resynthesis & Muscle Building
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base mt-2 max-w-3xl leading-relaxed">
            Bridging endocrine optimization with physical training output. Evaluating gold-standard ergogenic aids that have survived decades of clinical scrutiny for increasing strength, rep volume, and anaerobic capacity.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-xs h-48 md:h-full max-h-56">
          <img 
            src={IMAGE_ASSETS.hypertrophyImg} 
            alt="Biomechanical Muscle Fiber ATP Energy Resynthesis" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Chart & Protocol Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Delta Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xs transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Clinical Performance Delta over Baseline Control (%)</span>
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Standardized percentage improvements in strength, repetition volume, and peak power.
              </p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
                <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 600, fill: isDark ? '#e7e5e4' : '#292524' }} />
                <YAxis domain={[0, 25]} tick={{ fontSize: 12, fill: isDark ? '#a8a29e' : '#78716c' }} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-lg text-xs space-y-1 border border-stone-700">
                          <p className="font-bold text-amber-300">{data.name}</p>
                          <p><span className="text-stone-400">Delta:</span> <span className="font-mono font-bold text-emerald-400">+{data.score}%</span></p>
                          <p><span className="text-stone-400">Target Metric:</span> {data.metric}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-xs text-stone-500 dark:text-stone-400 mt-4 pt-4 border-t border-stone-100 dark:border-stone-800 italic">
            Primary Sources: JISSN Position Stand • Amino Acids Meta-Analysis • JSCR Crossover RCT.
          </p>
        </div>

        {/* Training Protocol Box */}
        <div className="bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-950 text-white p-6 sm:p-8 rounded-3xl border border-stone-800 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Training Protocol Synergy</span>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 leading-snug">
              ATP + Intracellular Buffering + Substrate Expansion
            </h3>
            <div className="text-xs text-stone-300 leading-relaxed space-y-2">
              <p>
                <strong className="text-white">1. Creatine (5g/day):</strong> Saturates phosphocreatine stores for rapid ATP resynthesis during 1-10s maximal explosive sets.
              </p>
              <p>
                <strong className="text-white">2. Citrulline Malate (8g pre-WO):</strong> Elevates nitric oxide and accelerates ammonia/lactate clearance during rep volume sets.
              </p>
              <p>
                <strong className="text-white">3. Beta-Alanine (3.2g/day):</strong> Saturates muscle carnosine to buffer H+ ions during 60-240s high-intensity sets.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-emerald-800/80 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs text-stone-300">
            <span className="font-bold text-amber-400 block mb-1">Timing Standard:</span>
            Creatine & Beta-Alanine require <strong className="text-white">daily chronic saturation</strong> regardless of workout timing; Citrulline Malate is taken <strong className="text-white">45-60 min pre-workout</strong>.
          </div>
        </div>
      </div>

      {/* Fitness Compound Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {fitnessCompounds.map((compound) => (
          <div
            key={compound.id}
            className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xs hover:shadow-md hover:border-amber-500/50 transition group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition leading-snug">
                  {compound.name}
                </h4>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shrink-0 ${
                  compound.evidenceGrade === 'High'
                    ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                }`}>
                  {compound.evidenceGrade}
                </span>
              </div>

              <div className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-100 dark:border-amber-900/50 mb-3">
                Target Protocol: <span className="text-stone-900 dark:text-stone-100 font-mono">{compound.evaluatedDose}</span>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                <strong className="text-stone-800 dark:text-stone-100">Mechanism:</strong> {compound.mechanism}
              </p>

              <div className="bg-stone-50 dark:bg-stone-800/70 p-3 rounded-xl border border-stone-100 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-200 mb-3">
                <strong className="text-emerald-900 dark:text-emerald-400 block mb-0.5">Ergogenic Impact:</strong>
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
    </section>
  );
};
