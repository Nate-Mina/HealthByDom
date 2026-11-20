import React, { useState } from 'react';
import { CLINICAL_COMPOUNDS } from '../data/clinicalData';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ShieldCheck, AlertTriangle, Activity, Dna, Info, ExternalLink } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/imageAssets';

interface EndocrineModuleProps {
  isDark?: boolean;
}

export const EndocrineModule: React.FC<EndocrineModuleProps> = ({ isDark = false }) => {
  const [daaDose, setDaaDose] = useState<3 | 6>(3);

  const testosteroneCompounds = CLINICAL_COMPOUNDS.filter(c => c.domain === 'Testosterone');

  // Chart data for Testosterone trajectory over 12 weeks
  const timelineData = [
    { week: 'Baseline', Ashwagandha: 350, FenugreekFreeT: 100, TongkatAli: 320, Placebo: 350 },
    { week: 'Week 4', Ashwagandha: 382, FenugreekFreeT: 112, TongkatAli: 375, Placebo: 352 },
    { week: 'Week 8', Ashwagandha: 418, FenugreekFreeT: 128, TongkatAli: 420, Placebo: 349 },
    { week: 'Week 12', Ashwagandha: 446, FenugreekFreeT: 146, TongkatAli: 438, Placebo: 351 },
  ];

  return (
    <section className="mb-16 space-y-12">
      {/* Section Header with Endocrine Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xs transition-colors">
        <div className="md:col-span-2 border-l-4 border-emerald-700 pl-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Module II • Endocrine Modulation
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Serum Testosterone & Steroidogenesis Science
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base mt-2 max-w-3xl leading-relaxed">
            Critical evaluation of commercial "T-boosters". While most herbal formulas fail to raise serum levels in healthy eugonadal men, specific standardized extracts demonstrate significant efficacy in stressed or deficient cohorts.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-xs h-48 md:h-full max-h-56">
          <img 
            src={IMAGE_ASSETS.endocrineImg} 
            alt="Steroidogenesis and Testicular Leydig Cell Tissue Science" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Timeline Chart & Biological Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xs transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-800 dark:text-emerald-400" />
                <span>Serum Testosterone Trajectory (12-Week Clinical Trials)</span>
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Total serum testosterone (ng/dL) or relative free T index across standardized clinical cohorts.
              </p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: isDark ? '#a8a29e' : '#78716c' }} />
                <YAxis domain={[300, 500]} tick={{ fontSize: 12, fill: isDark ? '#a8a29e' : '#78716c' }} />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-stone-900 text-white p-3 rounded-xl shadow-lg text-xs space-y-1 border border-stone-700">
                          <p className="font-bold text-amber-300">{label}</p>
                          {payload.map((p, i) => (
                            <p key={i} style={{ color: p.color }}>
                              <span className="font-bold">{p.name}:</span> {p.value} {p.name === 'FenugreekFreeT' ? '% Index' : 'ng/dL'}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Line type="monotone" dataKey="Ashwagandha" name="Ashwagandha (KSM-66)" stroke={isDark ? '#10b981' : '#064e3b'} strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="FenugreekFreeT" name="Fenugreek Free T Index" stroke="#d97706" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="TongkatAli" name="Tongkat Ali (Physta)" stroke={isDark ? '#60a5fa' : '#2563eb'} strokeWidth={2} strokeDasharray="3 3" dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Placebo" name="Placebo Control" stroke="#a8a29e" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="text-xs text-stone-500 dark:text-stone-400 mt-4 pt-4 border-t border-stone-100 dark:border-stone-800 italic">
            Primary Data Sources: Am J Mens Health (PMID: 30854977) • Phytotherapy Res (PMID: 32048710) • JISSN (PMID: 23754792).
          </p>
        </div>

        {/* Essential Micronutrient Rate-Limiting Box */}
        <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-3xl border border-stone-800 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Dna className="w-4 h-4" />
              <span>Micronutrient Rate-Limiting Steps</span>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 leading-snug">
              Zinc, Vitamin D3, & Magnesium
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed space-y-2">
              <span>
                <strong className="text-amber-300">Zinc (30mg):</strong> Essential cofactor for 17β-HSD. Restores normal androgen synthesis in deficient men, but offers zero extra benefit in zinc-replete males.
              </span>
              <span className="block mt-2">
                <strong className="text-amber-300">Vitamin D3 (3000-5000 IU):</strong> Testicular Leydig cells express VDR nuclear receptors. Corrects deficiency (&lt;20 ng/mL) to restore baseline.
              </span>
              <span className="block mt-2">
                <strong className="text-amber-300">Magnesium (400mg):</strong> Decreases SHBG binding capacity, elevating un-bound Free Testosterone.
              </span>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-stone-800 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs text-stone-300">
            <span className="font-bold text-emerald-400 block mb-1">Clinical Diagnostic Rule:</span>
            Testosterone elevation via micronutrients occurs <strong className="text-white">exclusively when correcting nutritional deficiencies</strong>.
          </div>
        </div>
      </div>

      {/* D-Aspartic Acid Paradox Interactive Simulator */}
      <div className="bg-red-950/90 text-white p-6 sm:p-10 rounded-3xl border border-red-800/80 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-200 bg-red-900/80 px-3 py-1 rounded-full border border-red-700/60 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Endocrine Cautionary Lesson
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The D-Aspartic Acid (DAA) Paradox
            </h3>
            <p className="text-xs sm:text-sm text-red-100/90 mt-1 max-w-2xl leading-relaxed">
              Why high-dose DAA supplementation causes testicular negative feedback and <strong className="text-amber-300 underline">suppresses testosterone</strong> in trained athletes.
            </p>
          </div>

          {/* DAA Dosage Selector */}
          <div className="flex p-1 bg-red-900/60 rounded-2xl border border-red-700/80 self-start lg:self-auto">
            <button
              onClick={() => setDaaDose(3)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                daaDose === 3
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-red-200 hover:text-white'
              }`}
            >
              3g / Day Protocol (Untrained)
            </button>
            <button
              onClick={() => setDaaDose(6)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                daaDose === 6
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-red-200 hover:text-white'
              }`}
            >
              6g / Day Protocol (Trained) ⚠️
            </button>
          </div>
        </div>

        {/* Dynamic Simulation Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-red-900/40 p-6 rounded-2xl border border-red-800/60">
          <div className="bg-red-950/60 p-4 rounded-xl border border-red-800">
            <span className="text-[10px] font-bold text-red-300 uppercase block mb-1">Target Dosage</span>
            <p className="text-2xl font-black font-serif text-white">{daaDose}g / Day</p>
            <p className="text-xs text-red-200 mt-2">
              {daaDose === 3 ? 'Standard commercial dose' : 'High dose tested in resistance-trained RCT'}
            </p>
          </div>

          <div className="bg-red-950/60 p-4 rounded-xl border border-red-800">
            <span className="text-[10px] font-bold text-red-300 uppercase block mb-1">DDO Enzymatic Activity</span>
            <p className="text-2xl font-black font-serif text-amber-400">
              {daaDose === 3 ? 'Baseline Clearance' : 'Upregulated D-Aspartate Oxidase'}
            </p>
            <p className="text-xs text-red-200 mt-2">
              {daaDose === 3 
                ? 'Testicular DDO degrades exogenous DAA at normal pace.'
                : 'Testes adapt by rapidly producing DDO enzyme to degrade surplus amino acid.'}
            </p>
          </div>

          <div className="bg-red-950/60 p-4 rounded-xl border border-red-800">
            <span className="text-[10px] font-bold text-red-300 uppercase block mb-1">Endocrine Outcome</span>
            <p className={`text-2xl font-black font-serif ${daaDose === 3 ? 'text-emerald-400' : 'text-red-400'}`}>
              {daaDose === 3 ? '+42% Initial Burst (Transient)' : '-12.5% Decrease in Serum T'}
            </p>
            <p className="text-xs text-red-200 mt-2">
              {daaDose === 3 
                ? 'Temporary spike in untrained males over 12 days; normalizes thereafter.'
                : 'Statistically significant drop in total & free T in resistance-trained men due to negative feedback!'}
            </p>
          </div>
        </div>

        <p className="text-xs text-red-200/80 mt-4 italic text-right">
          Source: J Int Soc Sports Nutr (PMC5571970) • PMID: 25884294
        </p>
      </div>

      {/* Ingredient Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testosteroneCompounds.map((compound) => (
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

              <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-100 dark:border-emerald-900/50 mb-3">
                Evaluated Dose: <span className="text-stone-900 dark:text-stone-100 font-mono">{compound.evaluatedDose}</span>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                <strong className="text-stone-800 dark:text-stone-100">Mechanism:</strong> {compound.mechanism}
              </p>

              <div className="bg-stone-50 dark:bg-stone-800/70 p-3 rounded-xl border border-stone-100 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-200 mb-3">
                <strong className="text-emerald-900 dark:text-emerald-400 block mb-0.5">Clinical Outcome:</strong>
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
