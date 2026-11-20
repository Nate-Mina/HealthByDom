import React, { useState } from 'react';
import { Calculator, ShieldCheck, Check, AlertTriangle, FileText, Copy, X, Sparkles, HeartPulse } from 'lucide-react';

interface ProtocolBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProtocolBuilder: React.FC<ProtocolBuilderProps> = ({ isOpen, onClose }) => {
  const [goal, setGoal] = useState<'ed' | 'testosterone' | 'fitness' | 'hybrid'>('hybrid');
  const [stressLevel, setStressLevel] = useState<'low' | 'high'>('high');
  const [isTrained, setIsTrained] = useState<boolean>(true);
  const [nitrateUser, setNitrateUser] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  // Protocol recommendations based on inputs
  const getProtocol = () => {
    const list = [];
    const warnings = [];

    if (nitrateUser) {
      warnings.push('CRITICAL: Never consume over-the-counter sexual enhancement supplements alongside nitrate medications due to severe refractory hypotension risk.');
    }

    if (goal === 'ed' || goal === 'hybrid') {
      list.push({
        agent: 'Panax Ginseng (Korean Red Ginseng)',
        dose: '900mg TID (2.7g/day)',
        timing: 'With meals (Breakfast, Lunch, Dinner)',
        rationale: 'Upregulates eNOS transcription and stimulates nitric oxide release (+0.43 IIEF SMD).',
        evidenceGrade: 'High'
      });
      list.push({
        agent: 'L-Arginine or L-Citrulline',
        dose: '2.5g – 5.0g L-Arginine or 1.5g L-Citrulline',
        timing: 'Daily split doses',
        rationale: 'Direct amino acid substrate for eNOS enzymatic cGMP production.',
        evidenceGrade: 'Moderate-High'
      });
    }

    if (goal === 'testosterone' || goal === 'hybrid') {
      if (stressLevel === 'high') {
        list.push({
          agent: 'Ashwagandha (KSM-66)',
          dose: '600mg Daily (300mg BID)',
          timing: 'Morning & Evening with food',
          rationale: 'Attenuates HPA axis hyperactivity, reducing cortisol by 27% and elevating total T (+14.7%).',
          evidenceGrade: 'High'
        });
      }
      list.push({
        agent: 'Elemental Zinc + Vitamin D3',
        dose: '30mg Zinc / 3000-5000 IU Vitamin D3',
        timing: 'With morning meal containing healthy fats',
        rationale: 'Essential cofactors for 17β-HSD enzyme and testicular VDR nuclear receptors.',
        evidenceGrade: 'High (if deficient)'
      });
    }

    if (goal === 'fitness' || goal === 'hybrid') {
      list.push({
        agent: 'Creatine Monohydrate',
        dose: '5g Daily Maintenance',
        timing: 'Daily consistent timing with carbohydrates',
        rationale: 'Accelerates phosphocreatine ATP resynthesis (+14.2% maximal strength).',
        evidenceGrade: 'High'
      });
      list.push({
        agent: 'Citrulline Malate',
        dose: '8g Pre-Workout',
        timing: '45-60 minutes before resistance training',
        rationale: 'Bypasses hepatic metabolism to boost plasma arginine and rep volume (+19.1%).',
        evidenceGrade: 'Moderate'
      });
    }

    if (isTrained) {
      warnings.push('Avoid D-Aspartic Acid (DAA) at >3g/day doses: Chronic high-dose DAA upregulates testicular DDO enzyme, resulting in a 12.5% decrease in serum testosterone.');
    }

    return { list, warnings };
  };

  const protocolData = getProtocol();

  const generateReportText = () => {
    let text = `DOM-I-NATELY HEALTH - CLINICAL EVIDENCE SUMMARY REPORT\n`;
    text += `Target Goal: ${goal.toUpperCase()} | Stress Profile: ${stressLevel.toUpperCase()} | Athlete: ${isTrained ? 'YES' : 'NO'}\n`;
    text += `--------------------------------------------------\n\n`;
    text += `EVIDENCE-BASED PROTOCOL RECOMMENDATIONS:\n`;
    protocolData.list.forEach((p, idx) => {
      text += `${idx + 1}. ${p.agent} - ${p.dose}\n   Timing: ${p.timing}\n   Rationale: ${p.rationale}\n   Evidence Grade: ${p.evidenceGrade}\n\n`;
    });
    if (protocolData.warnings.length > 0) {
      text += `CLINICAL CAUTIONS & CONTRAINDICATIONS:\n`;
      protocolData.warnings.forEach(w => text += `⚠️ ${w}\n`);
      text += `\n`;
    }
    text += `EVIDENCE-BASED LIFESTYLE FOUNDATIONAL MODIFICATIONS:\n`;
    text += `- Physical Activity: 150+ minutes of weekly aerobic exercise (reduces vascular resistance).\n`;
    text += `- Weight Optimization: 5-10% body weight reduction in obese males (lowers aromatase conversion).\n`;
    text += `- Dietary Pattern: Mediterranean diet rich in natural antioxidants & healthy fats.\n`;
    text += `- Sleep Hygiene: 7-9 hours of consistent nocturnal sleep.\n\n`;
    text += `Disclaimer: This synthesis is for health informatics & research education. Consult a qualified physician.`;
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReportText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-3xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-8">
        {/* Modal Header */}
        <div className="bg-emerald-950 text-white p-6 flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-serif font-bold text-lg text-white">Clinical Evidence Protocol Advisor</h3>
              <p className="text-[11px] text-emerald-200/80">Tailored dosage & timing calibrated to peer-reviewed RCTs</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-stone-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar">
          {/* User Input Choices */}
          <div className="space-y-4 bg-stone-50 dark:bg-stone-800/70 p-5 rounded-2xl border border-stone-200 dark:border-stone-700">
            <h4 className="font-bold text-stone-900 dark:text-stone-100 text-xs uppercase tracking-wider">Step 1: Define Patient Profile & Targets</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-stone-700 dark:text-stone-300 block mb-1">Primary Clinical Goal:</label>
                <select 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as any)}
                  className="w-full p-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-xl font-medium focus:outline-none focus:border-emerald-800 dark:focus:border-emerald-500"
                >
                  <option value="hybrid">Comprehensive Hybrid (Vascular + Hormone + Muscle)</option>
                  <option value="ed">Vascular ED & Erection Mechanics</option>
                  <option value="testosterone">Endocrine & Testosterone Modulation</option>
                  <option value="fitness">Hypertrophy & Physical Ergogenics</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-stone-700 dark:text-stone-300 block mb-1">HPA Stress & Cortisol Level:</label>
                <select 
                  value={stressLevel}
                  onChange={(e) => setStressLevel(e.target.value as any)}
                  className="w-full p-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-xl font-medium focus:outline-none focus:border-emerald-800 dark:focus:border-emerald-500"
                >
                  <option value="high">High Cortisol / Chronic Stress / Sleep Deficit</option>
                  <option value="low">Low Stress / Eugonadal Baseline</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input 
                  type="checkbox" 
                  id="trained"
                  checked={isTrained}
                  onChange={(e) => setIsTrained(e.target.checked)}
                  className="rounded text-emerald-800 focus:ring-emerald-800 w-4 h-4"
                />
                <label htmlFor="trained" className="font-bold text-stone-700 dark:text-stone-300">Resistance-Trained Athlete</label>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input 
                  type="checkbox" 
                  id="nitrate"
                  checked={nitrateUser}
                  onChange={(e) => setNitrateUser(e.target.checked)}
                  className="rounded text-red-600 focus:ring-red-600 w-4 h-4"
                />
                <label htmlFor="nitrate" className="font-bold text-red-800 dark:text-red-400">Takes Prescription Nitrates / Nitroglycerin</label>
              </div>
            </div>
          </div>

          {/* Generated Protocol Results */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Calibrated Evidence Protocol</span>
            </h4>

            {protocolData.warnings.length > 0 && (
              <div className="bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/80 p-4 rounded-2xl space-y-2">
                {protocolData.warnings.map((w, i) => (
                  <p key={i} className="text-xs font-bold text-red-800 dark:text-red-300 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
                    <span>{w}</span>
                  </p>
                ))}
              </div>
            )}

            <div className="space-y-3">
              {protocolData.list.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-stone-800/70 p-4 rounded-2xl border border-stone-200/80 dark:border-stone-700 shadow-2xs hover:border-emerald-700/40 transition">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h5 className="font-bold text-stone-900 dark:text-stone-100 text-sm">{item.agent}</h5>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-transparent dark:border-emerald-800">
                      {item.evidenceGrade}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-amber-800 dark:text-amber-300 font-mono mb-1">Dose: {item.dose} | Timing: {item.timing}</p>
                  <p className="text-xs text-stone-600 dark:text-stone-300">{item.rationale}</p>
                </div>
              ))}
            </div>

            {/* Lifestyle Foundation */}
            <div className="bg-emerald-950 text-white p-5 rounded-2xl text-xs space-y-2">
              <span className="font-serif font-bold text-sm text-amber-300 block">Foundational Lifestyle Mandates:</span>
              <ul className="list-disc list-inside text-emerald-100/90 space-y-1">
                <li><strong>150+ mins/week Aerobic Training:</strong> Lowers vascular endothelial resistance.</li>
                <li><strong>5-10% Body Weight Loss:</strong> Reduces peripheral aromatase conversion of testosterone into estradiol.</li>
                <li><strong>7-9 Hours Sleep:</strong> Preserves nocturnal testosterone production.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-stone-500 dark:text-stone-400 italic">
            All recommendations reflect published double-blind RCT threshold dosages.
          </p>
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-900 dark:bg-emerald-900 hover:bg-stone-800 dark:hover:bg-emerald-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary Report'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
