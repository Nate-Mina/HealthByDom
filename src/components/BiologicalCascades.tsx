import React, { useState } from 'react';
import { Activity, ShieldAlert, Zap, ArrowRight, Dna, CheckCircle2, ChevronRight } from 'lucide-react';

export const BiologicalCascades: React.FC = () => {
  const [activeCascade, setActiveCascade] = useState<'vascular' | 'hpg'>('vascular');
  const [highlightStep, setHighlightStep] = useState<number | null>(null);
  const [lockedStep, setLockedStep] = useState<number | null>(null);

  const activeHighlight = lockedStep ?? highlightStep;

  const toggleStep = (step: number) => {
    setLockedStep((prev) => (prev === step ? null : step));
  };

  const handleCascadeSwitch = (cascade: 'vascular' | 'hpg') => {
    setActiveCascade(cascade);
    setLockedStep(null);
    setHighlightStep(null);
  };

  return (
    <section className="mb-16 bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-xs transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full border border-amber-200/60 dark:border-amber-800/60">
            Mechanistic Science
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-2">
            Physiological Signaling Cascades
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-sm mt-1 max-w-2xl">
            Understand how dietary compounds interact with cellular enzymes, endothelial receptors, and endocrine feedback loops.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex p-1 bg-stone-100 dark:bg-stone-800 rounded-2xl border border-stone-200/80 dark:border-stone-700 self-start md:self-auto">
          <button
            onClick={() => handleCascadeSwitch('vascular')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeCascade === 'vascular'
                ? 'bg-emerald-900 text-amber-300 shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Vascular NO / cGMP Cascade</span>
          </button>
          <button
            onClick={() => handleCascadeSwitch('hpg')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeCascade === 'hpg'
                ? 'bg-emerald-900 text-amber-300 shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            <Dna className="w-3.5 h-3.5" />
            <span>Endocrine HPG / StAR Cascade</span>
          </button>
        </div>
      </div>

      {activeCascade === 'vascular' ? (
        <div className="space-y-6">
          <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-800">
            <h3 className="font-serif font-bold text-lg text-amber-300 mb-2">
              Vascular Cavernous Smooth Muscle Relaxation (Erectile Mechanics)
            </h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Penile erection requires endothelial nitric oxide release, cGMP generation, and cavernous veno-occlusion. Nutraceuticals work by supplying precursor substrate, upregulating eNOS transcription, or scavenging ROS free radicals.
            </p>
          </div>

          {/* Interactive Step Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div 
              role="button"
              tabIndex={0}
              aria-pressed={activeHighlight === 1}
              onClick={() => toggleStep(1)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(1); } }}
              onMouseEnter={() => setHighlightStep(1)}
              onMouseLeave={() => setHighlightStep(null)}
              className={`p-5 rounded-2xl border transition cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeHighlight === 1 
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 dark:border-amber-500/70 shadow-md ring-2 ring-amber-400/20' 
                  : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-900 text-amber-300">
                  Step 01 • Endothelium
                </span>
                <span className="text-xs font-mono text-stone-400">eNOS</span>
              </div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1">L-Arginine + eNOS</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-3">
                Endothelial nitric oxide synthase converts L-arginine into Nitric Oxide (NO).
              </p>
              <div className="bg-white dark:bg-stone-900 p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-[11px] text-stone-700 dark:text-stone-200 font-medium">
                <span className="text-amber-700 dark:text-amber-400 font-bold">Nutraceutical Interventions:</span>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-stone-600 dark:text-stone-300">
                  <li>L-Arginine (Substrate)</li>
                  <li>Ginseng (eNOS Upregulation)</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              role="button"
              tabIndex={0}
              aria-pressed={activeHighlight === 2}
              onClick={() => toggleStep(2)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(2); } }}
              onMouseEnter={() => setHighlightStep(2)}
              onMouseLeave={() => setHighlightStep(null)}
              className={`p-5 rounded-2xl border transition cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeHighlight === 2 
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 dark:border-amber-500/70 shadow-md ring-2 ring-amber-400/20' 
                  : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-900 text-amber-300">
                  Step 02 • Diffusion
                </span>
                <span className="text-xs font-mono text-stone-400">sGC</span>
              </div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1">NO + Soluble Guanylyl Cyclase</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-3">
                NO diffuses into cavernous smooth muscle cell and activates sGC to convert GTP → cGMP.
              </p>
              <div className="bg-white dark:bg-stone-900 p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-[11px] text-stone-700 dark:text-stone-200 font-medium">
                <span className="text-amber-700 dark:text-amber-400 font-bold">ROS Scavengers:</span>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-stone-600 dark:text-stone-300">
                  <li>Saffron (Crocin / Safranal)</li>
                  <li>Pycnogenol (OPCs)</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              role="button"
              tabIndex={0}
              aria-pressed={activeHighlight === 3}
              onClick={() => toggleStep(3)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(3); } }}
              onMouseEnter={() => setHighlightStep(3)}
              onMouseLeave={() => setHighlightStep(null)}
              className={`p-5 rounded-2xl border transition cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeHighlight === 3 
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 dark:border-amber-500/70 shadow-md ring-2 ring-amber-400/20' 
                  : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-900 text-amber-300">
                  Step 03 • Accumulation
                </span>
                <span className="text-xs font-mono text-stone-400">cGMP / PKG</span>
              </div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1">cGMP Accumulation & PKG</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-3">
                cGMP activates Protein Kinase G (PKG), triggering intracellular Ca2+ efflux and muscle relaxation.
              </p>
              <div className="bg-white dark:bg-stone-900 p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-[11px] text-stone-700 dark:text-stone-200 font-medium">
                <span className="text-emerald-800 dark:text-emerald-400 font-bold">Synergy Strategy:</span>
                <p className="mt-0.5 text-stone-600 dark:text-stone-300">Combining L-Arginine expands raw cGMP pool.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div 
              role="button"
              tabIndex={0}
              aria-pressed={activeHighlight === 4}
              onClick={() => toggleStep(4)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(4); } }}
              onMouseEnter={() => setHighlightStep(4)}
              onMouseLeave={() => setHighlightStep(null)}
              className={`p-5 rounded-2xl border transition cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeHighlight === 4 
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 dark:border-amber-500/70 shadow-md ring-2 ring-amber-400/20' 
                  : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-900 text-amber-300">
                  Step 04 • Termination
                </span>
                <span className="text-xs font-mono text-stone-400">PDE5</span>
              </div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1">PDE5 Enzymatic Clearance</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-3">
                Phosphodiesterase-5 breaks cGMP → inactive 5'-GMP, ending erection.
              </p>
              <div className="bg-white dark:bg-stone-900 p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-[11px] text-stone-700 dark:text-stone-200 font-medium">
                <span className="text-blue-800 dark:text-blue-400 font-bold">Pharmacotherapy:</span>
                <p className="mt-0.5 text-stone-600 dark:text-stone-300">Sildenafil / Tadalafil block PDE5 degradation.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-800">
            <h3 className="font-serif font-bold text-lg text-amber-300 mb-2">
              Hypothalamic-Pituitary-Gonadal (HPG) Steroidogenesis & Aromatization
            </h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Endogenous testosterone production is dictated by GnRH pulsatility, LH receptor binding on Leydig cells, and enzymatic conversion (17β-HSD). Stress/Cortisol suppresses GnRH, while Fenugreek modulates aromatase clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              role="button"
              tabIndex={0}
              aria-pressed={activeHighlight === 1}
              onClick={() => toggleStep(1)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(1); } }}
              onMouseEnter={() => setHighlightStep(1)}
              onMouseLeave={() => setHighlightStep(null)}
              className={`p-5 rounded-2xl border transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeHighlight === 1
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 dark:border-amber-500/70 shadow-md ring-2 ring-amber-400/20'
                  : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-400 uppercase">01. Hypothalamus & Cortisol</span>
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-2">HPA Axis Suppression</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                Chronic elevated Cortisol directly suppresses GnRH release from the hypothalamus, causing secondary hypogonadism.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-950/60 p-3 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-200 font-semibold">
                <span className="font-bold">Ashwagandha (KSM-66):</span> Lowers serum Cortisol by ~27%, restoring GnRH pulsatility.
              </div>
            </div>

            <div
              role="button"
              tabIndex={0}
              aria-pressed={activeHighlight === 2}
              onClick={() => toggleStep(2)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(2); } }}
              onMouseEnter={() => setHighlightStep(2)}
              onMouseLeave={() => setHighlightStep(null)}
              className={`p-5 rounded-2xl border transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeHighlight === 2
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 dark:border-amber-500/70 shadow-md ring-2 ring-amber-400/20'
                  : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-400 uppercase">02. Testicular Leydig Cells</span>
                <Dna className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-2">StAR Protein & 17β-HSD</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                Luteinizing Hormone (LH) triggers cholesterol transport via StAR protein. 17β-HSD converts precursors to testosterone.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-950/60 p-3 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-200 font-semibold">
                <span className="font-bold">Zinc & Tongkat Ali:</span> Zinc is an essential cofactor for 17β-HSD; Tongkat Ali enhances Leydig cell output.
              </div>
            </div>

            <div
              role="button"
              tabIndex={0}
              aria-pressed={activeHighlight === 3}
              onClick={() => toggleStep(3)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(3); } }}
              onMouseEnter={() => setHighlightStep(3)}
              onMouseLeave={() => setHighlightStep(null)}
              className={`p-5 rounded-2xl border transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeHighlight === 3
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 dark:border-amber-500/70 shadow-md ring-2 ring-amber-400/20'
                  : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-400 uppercase">03. Enzymatic Clearance</span>
                <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-2">Aromatase & 5α-Reductase</h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                Free testosterone is converted into Estradiol by Aromatase and into DHT by 5α-Reductase, or bound by SHBG.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-950/60 p-3 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-200 font-semibold">
                <span className="font-bold">Fenugreek Extract:</span> Inhibits aromatase/5α-reductase, retaining more active Bioavailable Free T.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
