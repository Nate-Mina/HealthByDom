import React from 'react';
import { ShieldCheck, ArrowRight, Dna, AlertTriangle, Activity, Bot, Sparkles } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/imageAssets';

interface HeroSectionProps {
  onExploreClick: (tab: string) => void;
  openProtocolModal: () => void;
  openGeminiChatbot?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, openProtocolModal, openGeminiChatbot }) => {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-emerald-800/40">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-20 mixing-blend-overlay">
          <img 
            src={IMAGE_ASSETS.heroBanner} 
            alt="Clinical Laboratory"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Clinical Evidence & Systematic Synthesis
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
            Unlocking Your <span className="text-amber-400 underline decoration-amber-500/40 underline-offset-8">Innate</span> Biological Peak.
          </h1>

          <p className="text-emerald-100/90 text-lg sm:text-xl font-light leading-relaxed mb-8">
            <span className="font-semibold text-white">Dom-I-Nately Health</span> dismantles marketing hype, proprietary blends, and misleading online reviews by anchoring every recommendation in peer-reviewed RCTs, meta-analyses, and FDA safety databases.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={openProtocolModal}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-amber-500/20 transition transform active:scale-95"
            >
              <span>Build Evidence Protocol</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {openGeminiChatbot && (
              <button
                onClick={openGeminiChatbot}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-2xl shadow-md transition transform active:scale-95"
              >
                <Bot className="w-4 h-4 text-emerald-950" />
                <span>Ask Gemini Clinical AI</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-950" />
              </button>
            )}

            <button
              onClick={() => onExploreClick('ed')}
              className="flex items-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-700/60 font-semibold px-6 py-3.5 rounded-2xl transition"
            >
              <Dna className="w-4 h-4 text-amber-300" />
              <span>Explore Vascular Science</span>
            </button>

            <button
              onClick={() => onExploreClick('safety')}
              className="flex items-center gap-2 text-stone-300 hover:text-white px-4 py-3 rounded-2xl text-xs font-bold transition"
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Adulteration & Quality Audit</span>
            </button>
          </div>
        </div>

        {/* Quick KPI Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-800/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-emerald-900/40 backdrop-blur-xs p-4 rounded-2xl border border-emerald-800/50">
            <div className="flex items-center justify-between text-amber-400 mb-1">
              <span className="text-2xl font-black font-serif">+0.43</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs font-bold text-white">Max IIEF-5 Delta (SMD)</p>
            <p className="text-[10px] text-emerald-300/80 mt-0.5">Ginseng & L-Arginine RCTs</p>
          </div>

          <div className="bg-emerald-900/40 backdrop-blur-xs p-4 rounded-2xl border border-emerald-800/50">
            <div className="flex items-center justify-between text-amber-400 mb-1">
              <span className="text-2xl font-black font-serif">97%</span>
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-xs font-bold text-white">SUCRA Top Ranking</p>
            <p className="text-[10px] text-emerald-300/80 mt-0.5">Carnitine + PDE5 Synergy</p>
          </div>

          <div className="bg-emerald-900/40 backdrop-blur-xs p-4 rounded-2xl border border-emerald-800/50">
            <div className="flex items-center justify-between text-amber-400 mb-1">
              <span className="text-2xl font-black font-serif">+14.7%</span>
              <Dna className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs font-bold text-white">Serum T Elevation</p>
            <p className="text-[10px] text-emerald-300/80 mt-0.5">KSM-66 Ashwagandha</p>
          </div>

          <div className="bg-emerald-900/40 backdrop-blur-xs p-4 rounded-2xl border border-emerald-800/50">
            <div className="flex items-center justify-between text-red-400 mb-1">
              <span className="text-2xl font-black font-serif">65.7%</span>
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <p className="text-xs font-bold text-white">Retail Adulteration Rate</p>
            <p className="text-[10px] text-emerald-300/80 mt-0.5">Undeclared PDE5 Inhibitors</p>
          </div>
        </div>
      </div>
    </section>
  );
};
