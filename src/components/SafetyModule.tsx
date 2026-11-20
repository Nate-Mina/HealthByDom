import React, { useState } from 'react';
import { REVIEWMETA_DATA } from '../data/clinicalData';
import { AlertTriangle, ShieldAlert, HeartPulse, Filter, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/imageAssets';

export const SafetyModule: React.FC = () => {
  const [filterBotReviews, setFilterBotReviews] = useState<boolean>(true);

  return (
    <section className="mb-16 space-y-12">
      {/* Section Header with Laboratory Quality Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xs transition-colors">
        <div className="md:col-span-2 border-l-4 border-red-600 pl-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-800 dark:text-red-300 bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full mb-2">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            Module IV • Quality Control & Regulatory Audit
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Pharmaceutical Adulteration & Review Distortion
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base mt-2 max-w-3xl leading-relaxed">
            Exposing consumer fraud, FDA enforcement data, undisclosed prescription drug contamination, and the critical cardiovascular warning window.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-xs h-48 md:h-full max-h-56">
          <img 
            src={IMAGE_ASSETS.safetyLabImg} 
            alt="Pharmaceutical Mass Spectrometry Supplement Contamination Testing" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* ReviewMeta Distortion Simulator */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60 mb-2">
              <Eye className="w-3.5 h-3.5" />
              Consumer Review Manipulation Audit
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Online Marketplace Review Reality Simulator
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
              Applying ReviewMeta automated filtration software (N=4,200 consumer reviews across top 15 male enhancement products) to remove disingenuous, paid, or bot-generated claims.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex p-1 bg-stone-800 rounded-2xl border border-stone-700 self-start md:self-auto">
            <button
              onClick={() => setFilterBotReviews(false)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                !filterBotReviews
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Raw Marketplace Claims
            </button>
            <button
              onClick={() => setFilterBotReviews(true)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                filterBotReviews
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Filtered ReviewMeta Reality ✨
            </button>
          </div>
        </div>

        {/* Distortion Matrix Bar Display */}
        <div className="space-y-4 bg-stone-950/80 p-6 rounded-2xl border border-stone-800">
          {/* Item 1 */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-stone-300">Reported Erection Strength Improvement</span>
              <span className={filterBotReviews ? 'text-red-400 font-mono' : 'text-emerald-400 font-mono'}>
                {filterBotReviews ? 'Filtered Efficacy (-77% Drop)' : '100% Unfiltered Claims'}
              </span>
            </div>
            <div className="w-full bg-stone-800 h-3 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ${filterBotReviews ? 'bg-red-500 w-[23%]' : 'bg-emerald-500 w-[100%]'}`}
              />
            </div>
          </div>

          {/* Item 2 */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-stone-300">Reported Erection Maintenance Improvement</span>
              <span className={filterBotReviews ? 'text-red-400 font-mono' : 'text-emerald-400 font-mono'}>
                {filterBotReviews ? 'Filtered Efficacy (-83% Drop)' : '100% Unfiltered Claims'}
              </span>
            </div>
            <div className="w-full bg-stone-800 h-3 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ${filterBotReviews ? 'bg-red-500 w-[17%]' : 'bg-emerald-500 w-[100%]'}`}
              />
            </div>
          </div>

          {/* Item 3 */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-stone-300">Reported Overall Sexual Satisfaction</span>
              <span className={filterBotReviews ? 'text-red-400 font-mono' : 'text-emerald-400 font-mono'}>
                {filterBotReviews ? 'Filtered Efficacy (-90% Drop)' : '100% Unfiltered Claims'}
              </span>
            </div>
            <div className="w-full bg-stone-800 h-3 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ${filterBotReviews ? 'bg-red-500 w-[10%]' : 'bg-emerald-500 w-[100%]'}`}
              />
            </div>
          </div>

          {/* Item 4 */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-stone-300">Reported Intercourse Enjoyment</span>
              <span className={filterBotReviews ? 'text-red-400 font-mono' : 'text-emerald-400 font-mono'}>
                {filterBotReviews ? 'Filtered Efficacy (-88% Drop)' : '100% Unfiltered Claims'}
              </span>
            </div>
            <div className="w-full bg-stone-800 h-3 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ${filterBotReviews ? 'bg-red-500 w-[12%]' : 'bg-emerald-500 w-[100%]'}`}
              />
            </div>
          </div>
        </div>

        <p className="text-xs text-stone-400 mt-4 italic text-right">
          Clinical Source: Journal of Sexual Medicine / ReviewMeta Audit • PMID: 31036522
        </p>
      </div>

      {/* FDA Tainted Products Database & Retail Sampling Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FDA Audit Box */}
        <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between transition-colors">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-red-800 dark:text-red-300 bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full mb-4">
              <ShieldAlert className="w-3.5 h-3.5" />
              FDA Tainted Supplement Audit
            </div>

            <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100 mb-3">
              45.5% of Tainted Supplements target Sexual Enhancement
            </h3>

            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
              Out of 776 total tainted dietary supplements flagged by the FDA, <strong className="text-stone-900 dark:text-white">353 products</strong> were marketed specifically for sexual enhancement.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 dark:bg-red-950/40 p-4 rounded-2xl border border-red-100 dark:border-red-900/60 text-center">
                <p className="text-3xl font-black font-serif text-red-800 dark:text-red-400">65.7%</p>
                <p className="text-[10px] font-bold text-red-900 dark:text-red-200 uppercase mt-1">Retail Shelf Contamination Rate</p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/60 text-center">
                <p className="text-3xl font-black font-serif text-amber-800 dark:text-amber-400">44.5%</p>
                <p className="text-[10px] font-bold text-amber-900 dark:text-amber-200 uppercase mt-1">Spiked with 2+ Hidden Drugs</p>
              </div>
            </div>
          </div>

          <div className="bg-red-950 text-white p-4 rounded-2xl text-xs space-y-1">
            <p className="font-bold text-amber-300 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              Fatal Nitrate Contraindication Warning
            </p>
            <p className="text-red-100/90 text-[11px] leading-relaxed">
              Unknowingly consuming hidden PDE5 inhibitors alongside prescription sublingual nitroglycerin or nitrate medications triggers catastrophic refractory hypotension and cardiovascular collapse.
            </p>
          </div>
        </div>

        {/* Cardiovascular Sentinel Spotlight */}
        <div className="bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 rounded-3xl border border-emerald-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-amber-300 bg-emerald-900/80 px-3 py-1 rounded-full mb-4">
              <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
              Microvascular Cardiovascular Sentinel
            </div>

            <h3 className="font-serif font-bold text-2xl text-white mb-3">
              The Penile Artery as an Early Warning Indicator
            </h3>

            <p className="text-xs text-emerald-100/90 leading-relaxed mb-6">
              Because cavernous arteries are significantly smaller in lumen diameter than coronary or carotid arteries, systemic endothelial disease presents in penile vessels <strong className="text-amber-300 underline">years before cardiac symptoms occur</strong>.
            </p>

            {/* Vascular Diameter Gauge */}
            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10 mb-6 text-xs">
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Penile Cavernous Artery</span>
                  <span className="text-amber-300 font-mono">1.0 – 1.5 mm</span>
                </div>
                <div className="w-full bg-emerald-950 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[20%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Coronary Artery (Heart)</span>
                  <span className="text-stone-300 font-mono">3.0 – 4.0 mm</span>
                </div>
                <div className="w-full bg-emerald-950 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[50%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Carotid Artery (Neck)</span>
                  <span className="text-stone-300 font-mono">7.0 – 9.0 mm</span>
                </div>
                <div className="w-full bg-emerald-950 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-300 h-full w-[90%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/20 border border-amber-500/40 p-4 rounded-2xl text-xs text-amber-200">
            <strong className="text-white block font-serif text-sm mb-1">The 2 to 5 Year MACE Window:</strong>
            Erectile dysfunction precedes Major Adverse Cardiovascular Events (heart attack/stroke) by 2 to 5 years. Self-treating ED with OTC pills without a doctor's evaluation delays life-saving cardiovascular screening.
          </div>
        </div>
      </div>

      {/* Quality Audit Checklist */}
      <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xs transition-colors">
        <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-800 dark:text-emerald-400" />
          <span>Dom-I-Nately Quality Verification Protocol</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="flex items-start gap-3 bg-stone-50 dark:bg-stone-800/70 p-4 rounded-2xl border border-stone-100 dark:border-stone-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 dark:text-stone-100 block font-bold mb-0.5">3rd Party Batch Testing</strong>
              <p className="text-stone-600 dark:text-stone-300">Demand NSF Certified for Sport, Informed Sport, or USP certification seals on all bottles.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-stone-50 dark:bg-stone-800/70 p-4 rounded-2xl border border-stone-100 dark:border-stone-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 dark:text-stone-100 block font-bold mb-0.5">Full Label Transparency</strong>
              <p className="text-stone-600 dark:text-stone-300">Avoid "Proprietary Blends" that obscure individual ingredient milligram dosages.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-stone-50 dark:bg-stone-800/70 p-4 rounded-2xl border border-stone-100 dark:border-stone-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 dark:text-stone-100 block font-bold mb-0.5">Clinical Threshold Matching</strong>
              <p className="text-stone-600 dark:text-stone-300">Verify active ingredient quantities match verified dosages in published RCTs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
