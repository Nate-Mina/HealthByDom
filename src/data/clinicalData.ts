export interface ClinicalStudy {
  id: string;
  agent: string;
  domain: 'ED' | 'Testosterone' | 'Fitness' | 'Safety';
  study: string;
  design: string;
  result: string;
  pmid: string;
  url: string;
  evidenceGrade: 'High' | 'Moderate' | 'Low' | 'Insufficient';
}

export interface SupplementCompound {
  id: string;
  name: string;
  domain: 'ED' | 'Testosterone' | 'Fitness';
  activeIngredients: string;
  evaluatedDose: string;
  mechanism: string;
  metaResult: string;
  smdScore?: number; // Standardized Mean Difference if applicable
  evidenceGrade: 'High' | 'Moderate' | 'Low' | 'Insufficient';
  clinicalSummary: string;
  keyTrial: string;
  pmid: string;
}

export interface SucraRanking {
  regimen: string;
  etiology: 'Organic Vascular ED' | 'Psychogenic / Non-Organic ED' | 'General' | 'General / Organic';
  sucraScore: number;
  outcome: string;
  conclusion: string;
  synergyType: 'Monotherapy' | 'Nutraceutical Combo' | 'Drug + Nutraceutical Synergy';
}

export const CLINICAL_COMPOUNDS: SupplementCompound[] = [
  // ED & Vascular
  {
    id: 'panax-ginseng',
    name: 'Panax Ginseng (Korean Red Ginseng)',
    domain: 'ED',
    activeIngredients: 'Ginsenosides (Rb1, Rg1, Rg3)',
    evaluatedDose: '900mg TID (2.7g/day)',
    mechanism: 'Crosses vascular membranes to upregulate eNOS transcription and stimulate endothelial nitric oxide liberation in cavernous sinusoids.',
    metaResult: 'SMD +0.43 IIEF improvement over placebo (p < 0.001)',
    smdScore: 0.43,
    evidenceGrade: 'High',
    clinicalSummary: 'Rigorously evaluated in multi-center RCTs. Demonstrates consistent standardized improvements across erectile function, orgasmic capability, and sexual satisfaction.',
    keyTrial: 'Int. Journal of Impotence Research / PMC10490034',
    pmid: '30141203'
  },
  {
    id: 'l-arginine',
    name: 'L-Arginine',
    domain: 'ED',
    activeIngredients: 'Free Form L-Arginine Amino Acid',
    evaluatedDose: '2.5g – 5.0g Daily',
    mechanism: 'Direct substrate for endothelial Nitric Oxide Synthase (eNOS) to catalyze nitric oxide (NO) generation and cGMP accumulation.',
    metaResult: 'Significant IIEF score improvement (SMD +0.39) across 10 RCTs',
    smdScore: 0.39,
    evidenceGrade: 'Moderate',
    clinicalSummary: 'Effective substrate donor in vascular ED. Best combined with antioxidants or low-dose PDE5 inhibitors to prevent rapid NO oxidative breakdown.',
    keyTrial: 'Sex Med Rev / 10 RCT Meta-Analysis',
    pmid: '30770070'
  },
  {
    id: 'saffron',
    name: 'Saffron (Crocus sativus)',
    domain: 'ED',
    activeIngredients: 'Crocin, Safranal, Picrocrocin',
    evaluatedDose: '30mg Daily',
    mechanism: 'Potent carotenoid antioxidants neutralize superoxide radicals in microvascular tissue, preserving endogenously synthesized nitric oxide.',
    metaResult: 'SMD +0.31 IIEF score enhancement; marked satisfaction gains',
    smdScore: 0.31,
    evidenceGrade: 'Moderate',
    clinicalSummary: 'Improves erectile function, intercourse satisfaction, and orgasmic domain scores without systemic cardiovascular adverse effects.',
    keyTrial: 'Psychopharmacology Double-Blind RCT',
    pmid: '31100342'
  },
  {
    id: 'pycnogenol',
    name: 'French Maritime Pine Bark (Pycnogenol)',
    domain: 'ED',
    activeIngredients: 'Oligomeric Proanthocyanidins (OPCs)',
    evaluatedDose: '120mg Daily',
    mechanism: 'Stimulates eNOS enzymatic expression while reducing vascular oxidative stress and inflammatory signaling.',
    metaResult: '92.5% restoration of erectile scores when co-administered with L-Arginine',
    smdScore: 0.28,
    evidenceGrade: 'Moderate',
    clinicalSummary: 'Exhibits strong therapeutic synergy with L-arginine by combining increased eNOS enzymatic expression with expanded precursor substrate.',
    keyTrial: 'Journal of Sex & Marital Therapy',
    pmid: '12851125'
  },
  {
    id: 'carnitines',
    name: 'Propionyl-L-Carnitine + Acetyl-L-Carnitine',
    domain: 'ED',
    activeIngredients: 'PLC (2g) + ALC (2g)',
    evaluatedDose: '2g Daily Each',
    mechanism: 'Enhances endothelial fatty acid beta-oxidation, improves cellular energy energetics, and restores vascular smooth muscle reactivity.',
    metaResult: 'Achieves 97% SUCRA ranking in organic ED when combined with Sildenafil',
    smdScore: 0.35,
    evidenceGrade: 'High',
    clinicalSummary: 'Top-ranked adjunctive nutraceutical for organic/diabetic vascular ED when combined with prescription PDE5 inhibitors.',
    keyTrial: 'Nutraceutical Network Meta-Analysis 2024',
    pmid: '39279185'
  },
  {
    id: 'tribulus',
    name: 'Tribulus terrestris',
    domain: 'ED',
    activeIngredients: 'Steroidal Saponins (Protodioscin)',
    evaluatedDose: '750mg – 1500mg Daily',
    mechanism: 'May increase central androgen receptor density or subjective libido perception, but fails to stimulate eNOS or vascular smooth muscle.',
    metaResult: 'No statistically significant improvement in IIEF scores vs placebo',
    smdScore: 0.08,
    evidenceGrade: 'Insufficient',
    clinicalSummary: 'Despite heavy commercial marketing, human RCTs show no meaningful increase in penile erection mechanics or circulating serum testosterone.',
    keyTrial: 'Maturitas / Systematic Review',
    pmid: '25888206'
  },

  // Testosterone & Endocrine
  {
    id: 'ashwagandha',
    name: 'Ashwagandha (Withania somnifera KSM-66)',
    domain: 'Testosterone',
    activeIngredients: 'Withanolides (Standardized >5%)',
    evaluatedDose: '600mg Daily (300mg BID)',
    mechanism: 'Attenuates HPA axis hyperactivity, reducing serum cortisol by 27%, thereby removing stress-mediated inhibition of LH and GnRH release.',
    metaResult: '+14.7% to +18% increase in serum Total Testosterone; +96 ng/dL in resistance trial',
    evidenceGrade: 'High',
    clinicalSummary: 'Gold standard botanical for stress-related androgen decline. Improves serum T, muscle strength, and recovery metrics in stressed or active males.',
    keyTrial: 'Am J Mens Health / J Int Soc Sports Nutr',
    pmid: '30854977'
  },
  {
    id: 'fenugreek',
    name: 'Fenugreek Seed Extract (Testofen / Furosap)',
    domain: 'Testosterone',
    activeIngredients: 'Furostanolic Saponins (Protodioscin, Diosgenin)',
    evaluatedDose: '500mg – 600mg Daily',
    mechanism: 'Mildly inhibits 5alpha-reductase and aromatase enzymes, attenuating clearance of bioavailable free testosterone into DHT and estradiol.',
    metaResult: 'Up to +46% increase in bioavailable Free Testosterone in 12-week RCTs',
    evidenceGrade: 'Moderate',
    clinicalSummary: 'Supports circulating free testosterone fractions and subjective sexual energy without causing pathological estrogenic or prostate spikes.',
    keyTrial: 'Phytotherapy Research Meta-Analysis',
    pmid: '32048710'
  },
  {
    id: 'tongkat-ali',
    name: 'Tongkat Ali (Eurycoma longifolia / Physta)',
    domain: 'Testosterone',
    activeIngredients: 'Eurycomanone, Glyco-saponins',
    evaluatedDose: '200mg – 400mg Daily',
    mechanism: 'Enhances testicular Leydig cell steroidogenesis and decreases Sex Hormone-Binding Globulin (SHBG) binding affinity.',
    metaResult: '+37% increase in salivary Testosterone in hypogonadal/stressed men',
    evidenceGrade: 'Moderate',
    clinicalSummary: 'Effectively restores eugonadal baseline in mildly hypogonadal or overtrained individuals. Minimal impact in young, eugonadal elite athletes.',
    keyTrial: 'J Int Soc Sports Nutr',
    pmid: '23754792'
  },
  {
    id: 'zinc',
    name: 'Elemental Zinc (Picolinate / Citrate)',
    domain: 'Testosterone',
    activeIngredients: 'Zinc Ions (Zn2+)',
    evaluatedDose: '30mg Elemental Daily',
    mechanism: 'Essential rate-limiting cofactor for 17beta-hydroxysteroid dehydrogenase (17beta-HSD) during androgen steroidogenesis.',
    metaResult: 'Normalizes serum T in deficient men; 0 effect in zinc-replete men',
    evidenceGrade: 'High',
    clinicalSummary: 'Critical mineral foundation. Reverses hypogonadism caused by dietary insufficiency, heavy sweating, or high metabolic strain.',
    keyTrial: 'Nutrition Journal Clinical Review',
    pmid: '8875519'
  },
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3 (Cholecalciferol)',
    domain: 'Testosterone',
    activeIngredients: '1,25-dihydroxyvitamin D3',
    evaluatedDose: '3000 IU – 5000 IU Daily',
    mechanism: 'Binds Vitamin D Nuclear Receptors (VDR) expressed in testicular Leydig cells and germinal epithelium.',
    metaResult: '+20% Total Testosterone increase in men with baseline hypovitaminosis D (<20 ng/mL)',
    evidenceGrade: 'Moderate',
    clinicalSummary: 'Essential hormone precursor. Elevates testosterone only when correcting clinical deficiency (<20 ng/mL). No additive benefit if replete.',
    keyTrial: 'Horm Metab Res RCT',
    pmid: '21154195'
  },
  {
    id: 'd-aspartic-acid',
    name: 'D-Aspartic Acid (DAA) Paradox ⚠️',
    domain: 'Testosterone',
    activeIngredients: 'D-Aspartate Amino Acid',
    evaluatedDose: '3g vs 6g Daily',
    mechanism: 'Triggers transient GnRH/LH burst, but high doses upregulate testicular D-aspartate oxidase (DDO), suppressing endogenous T production!',
    metaResult: '3g: transient initial spike then baseline; 6g: -12.5% STATISTICAL DECREASE in T',
    evidenceGrade: 'Low',
    clinicalSummary: 'CAUTIONARY LESSON: High-dose exogenous DAA activates negative feedback via DDO enzyme upregulation, resulting in REDUCED testosterone in resistance-trained men.',
    keyTrial: 'J Int Soc Sports Nutr / PMC5571970',
    pmid: '25884294'
  },

  // Fitness & Muscle
  {
    id: 'creatine',
    name: 'Creatine Monohydrate',
    domain: 'Fitness',
    activeIngredients: 'Creatine Monohydrate (200 mesh)',
    evaluatedDose: '5g Daily Maintenance',
    mechanism: 'Rapid phosphocreatine resynthesis for ATP generation during high-intensity anaerobic contraction; induces cellular osmotic hydration.',
    metaResult: '+14.2% maximal strength increase; +8% rep capacity over placebo',
    evidenceGrade: 'High',
    clinicalSummary: 'Gold standard ergogenic aid in exercise science. Decades of safety data confirming increases in lean body mass, peak power, and cognitive resilience.',
    keyTrial: 'J Int Soc Sports Nutr Position Stand',
    pmid: '28615996'
  },
  {
    id: 'beta-alanine',
    name: 'Beta-Alanine',
    domain: 'Fitness',
    activeIngredients: 'Beta-Alanine Amino Acid',
    evaluatedDose: '3.2g – 6.4g Daily',
    mechanism: 'Rate-limiting precursor to intracellular carnosine synthesis, buffering H+ accumulation and delaying metabolic acidosis during 60-240s bouts.',
    metaResult: '+12.4% endurance performance in sustained high-intensity efforts',
    evidenceGrade: 'High',
    clinicalSummary: 'Highly validated buffer for anaerobic capacity. Requires daily chronic dosing (4+ weeks) to saturate muscle carnosine stores.',
    keyTrial: 'Amino Acids Systematic Review & Meta-Analysis',
    pmid: '22270375'
  },
  {
    id: 'citrulline-malate',
    name: 'Citrulline Malate',
    domain: 'Fitness',
    activeIngredients: 'L-Citrulline + DL-Malate (2:1)',
    evaluatedDose: '8g Pre-Workout',
    mechanism: 'Bypasses hepatic splanchnic metabolism to elevate plasma arginine levels higher than arginine itself, fueling eNOS and ammonia clearance.',
    metaResult: '+19.1% increase in resistance training repetitions; -40% post-exercise soreness',
    evidenceGrade: 'Moderate',
    clinicalSummary: 'Superior nitric oxide booster for training performance. Elevates muscle hyperemia (pump), rep volume, and lactate clearance.',
    keyTrial: 'J Strength Cond Res',
    pmid: '20386132'
  },
  {
    id: 'beetroot-nitrate',
    name: 'Dietary Nitrate (Beetroot Extract)',
    domain: 'Fitness',
    activeIngredients: 'Inorganic Nitrate (NO3-)',
    evaluatedDose: '500mg Inorganic Nitrate (approx 70ml juice)',
    mechanism: 'Enters nitrate-nitrite-nitric oxide pathway via oral commensal nitrate reductases, reducing ATP cost of muscle contraction.',
    metaResult: '+5.2% peak power output; improved time-to-exhaustion in aerobic trials',
    evidenceGrade: 'Moderate',
    clinicalSummary: 'Improves mitochondrial efficiency (P/O ratio) and lowers muscle oxygen cost during submaximal and maximal aerobic work.',
    keyTrial: 'Sports Medicine Meta-Analysis',
    pmid: '23899751'
  }
];

export const SUCRA_RANKINGS: SucraRanking[] = [
  {
    regimen: 'Propionyl-L-Carnitine + Acetyl-L-Carnitine + Sildenafil',
    etiology: 'Organic Vascular ED',
    sucraScore: 97,
    outcome: 'Maximum IIEF score enhancement (+8.4 pts vs placebo)',
    conclusion: 'Highest comparative efficacy in organic/diabetic vascular ED by combining mitochondrial energy substrate with PDE5 protection.',
    synergyType: 'Drug + Nutraceutical Synergy'
  },
  {
    regimen: 'L-Arginine (5g) + Tadalafil (5mg daily)',
    etiology: 'Organic Vascular ED',
    sucraScore: 84,
    outcome: 'Significant improvement over Tadalafil monotherapy (+4.2 pts extra)',
    conclusion: 'Strong therapeutic synergy via eNOS substrate expansion feeding cGMP pool protected by PDE5 inhibitor.',
    synergyType: 'Drug + Nutraceutical Synergy'
  },
  {
    regimen: 'Sildenafil Monotherapy (50mg as needed)',
    etiology: 'General / Organic',
    sucraScore: 79,
    outcome: 'Established first-line prescription response',
    conclusion: 'Standard gold-standard medical therapy for vascular erectile dysfunction.',
    synergyType: 'Monotherapy'
  },
  {
    regimen: 'Tadalafil Monotherapy (5mg daily)',
    etiology: 'General / Organic',
    sucraScore: 72,
    outcome: 'Sustained daily microvascular cGMP maintenance',
    conclusion: 'Provides continuous vasodilation and spontaneous erection readiness.',
    synergyType: 'Monotherapy'
  },
  {
    regimen: 'L-Arginine Monotherapy (5g daily)',
    etiology: 'Organic Vascular ED',
    sucraScore: 52,
    outcome: 'Moderate improvement over placebo (+2.8 pts)',
    conclusion: 'Useful monotherapy in mild vascular ED or patients ineligible for PDE5 inhibitors.',
    synergyType: 'Monotherapy'
  },
  {
    regimen: 'Nutraceutical Adjunct in Psychogenic ED',
    etiology: 'Psychogenic / Non-Organic ED',
    sucraScore: 31,
    outcome: 'No statistically significant additive benefit over Tadalafil alone',
    conclusion: 'In psychogenic ED, dysfunction stems from central sympathetic tone rather than peripheral microvascular failure; nutraceuticals offer no extra benefit.',
    synergyType: 'Nutraceutical Combo'
  }
];

export const REVIEWMETA_DATA = {
  strengthDrop: 77,
  maintenanceDrop: 83,
  satisfactionDrop: 90,
  enjoymentDrop: 88,
  confidenceDrop: 89,
  sampleSize: '4,200 Consumer Reviews across Top 15 Amazon Male Enhancers',
  fdaTaintedTotal: 776,
  fdaSexualEnhancementTainted: 353,
  fdaTaintedPercentage: 45.5,
  retailAdulterationRate: 65.7, // Sacramento Study
  multiDrugRate: 44.5
};

export const CLINICAL_CITATIONS: ClinicalStudy[] = [
  {
    id: 'ref-1',
    agent: 'Panax Ginseng',
    domain: 'ED',
    study: 'Int. Journal of Impotence Research',
    design: 'Systematic Review & Meta-Analysis of RCTs',
    result: 'Significant improvement in ED symptoms and IIEF erectile scores (p < 0.001) vs placebo.',
    pmid: '30141203',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30141203/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-2',
    agent: 'L-Citrulline',
    domain: 'ED',
    study: 'Urology (Gold Journal)',
    design: 'Double-Blind RCT',
    result: 'Erection hardness score improved from 3 (mild ED) to 4 (normal) in 50% of men.',
    pmid: '21195829',
    url: 'https://pubmed.ncbi.nlm.nih.gov/21195829/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-3',
    agent: 'Pycnogenol + L-Arginine',
    domain: 'ED',
    study: 'Journal of Sex & Marital Therapy',
    design: 'Clinical Trial',
    result: '92.5% of men achieved normal erectile function after 3 months combination therapy.',
    pmid: '12851125',
    url: 'https://pubmed.ncbi.nlm.nih.gov/12851125/',
    evidenceGrade: 'Moderate'
  },
  {
    id: 'ref-4',
    agent: 'Saffron (Crocus sativus)',
    domain: 'ED',
    study: 'Psychopharmacology',
    design: 'Double-Blind Placebo RCT',
    result: 'Statistically significant improvement in IIEF erectile function & satisfaction scores.',
    pmid: '31100342',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31100342/',
    evidenceGrade: 'Moderate'
  },
  {
    id: 'ref-5',
    agent: 'L-Arginine Meta-Analysis',
    domain: 'ED',
    study: 'Sexual Medicine Reviews (10 RCTs)',
    design: 'Systematic Review & Meta-Analysis (N=540)',
    result: 'Significant ED score improvement (SMD +0.39; p < 0.0001) at 1.5g-5g daily dosages.',
    pmid: '30770070',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30770070/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-6',
    agent: 'Nutraceutical NMA (SUCRA)',
    domain: 'ED',
    study: 'Nutraceutical Interventions Network Meta-Analysis',
    design: 'Network Meta-Analysis of Combination Regimens',
    result: 'Carnitines + Sildenafil (97%) and L-Arginine + Tadalafil (84%) demonstrated top clinical synergy.',
    pmid: '39279185',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39279185/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-7',
    agent: 'Ashwagandha (KSM-66)',
    domain: 'Testosterone',
    study: 'American Journal of Mens Health',
    design: 'Double-Blind Placebo RCT',
    result: '14.7% increase in serum Total Testosterone and 18% increase in DHEA-S vs control.',
    pmid: '30854977',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30854977/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-8',
    agent: 'Fenugreek Extract (Testofen)',
    domain: 'Testosterone',
    study: 'Phytotherapy Research',
    design: 'Meta-Analysis of RCTs',
    result: 'Significant effect on free serum testosterone levels via dual 5-alpha reductase & aromatase inhibition.',
    pmid: '32048710',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32048710/',
    evidenceGrade: 'Moderate'
  },
  {
    id: 'ref-9',
    agent: 'Tongkat Ali (Eurycoma longifolia)',
    domain: 'Testosterone',
    study: 'Journal of the Int. Society of Sports Nutrition',
    design: 'Clinical Stress Trial',
    result: '37% increase in salivary Testosterone and 16% reduction in cortisol in stressed subjects.',
    pmid: '23754792',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23754792/',
    evidenceGrade: 'Moderate'
  },
  {
    id: 'ref-10',
    agent: 'D-Aspartic Acid High-Dose Paradox',
    domain: 'Testosterone',
    study: 'J. Int. Soc. Sports Nutr. (6g DAA Trial)',
    design: 'Randomized Controlled Trial in Resistance-Trained Men',
    result: '6g daily DAA resulted in a statistically significant 12.5% DECREASE in total & free testosterone due to DDO enzyme upregulation.',
    pmid: '25884294',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25884294/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-11',
    agent: 'Creatine Monohydrate',
    domain: 'Fitness',
    study: 'J. Int. Soc. Sports Nutr.',
    design: 'Position Stand & Meta-Analysis',
    result: 'Increases maximal strength (+8-14%), sprint performance, and lean body mass via ATP resynthesis.',
    pmid: '28615996',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28615996/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-12',
    agent: 'Citrulline Malate Ergogenics',
    domain: 'Fitness',
    study: 'Journal of Strength & Conditioning Res.',
    design: 'Randomized Crossover Trial',
    result: '52.9% increase in resistance training repetitions and 40% reduction in muscle soreness.',
    pmid: '20386132',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20386132/',
    evidenceGrade: 'Moderate'
  },
  {
    id: 'ref-13',
    agent: 'Beta-Alanine Carnosine Buffering',
    domain: 'Fitness',
    study: 'Amino Acids',
    design: 'Systematic Review & Meta-Analysis',
    result: 'Enhances high-intensity exercise performance for efforts lasting 60-240 seconds.',
    pmid: '22270375',
    url: 'https://pubmed.ncbi.nlm.nih.gov/22270375/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-14',
    agent: 'Supplement Adulteration Audit',
    domain: 'Safety',
    study: 'Journal of Pharmaceutical & Biomedical Analysis',
    design: 'Lab Contamination Audit & FDA Database Analysis',
    result: 'High prevalence of unapproved PDE-5 inhibitor analogues in over-the-counter male supplements.',
    pmid: '28283893',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28283893/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-15',
    agent: 'FDA Tainted Supplement Audit',
    domain: 'Safety',
    study: 'JAMA Network Open / FDA Tainted Database',
    design: 'Cross-Sectional Audit (2007-2016)',
    result: '45.5% (353 of 776) of tainted supplements were male enhancement products spiked with active pharmaceuticals.',
    pmid: '30326062',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30326062/',
    evidenceGrade: 'High'
  },
  {
    id: 'ref-16',
    agent: 'Online Review Manipulation Analysis',
    domain: 'Safety',
    study: 'Journal of Sexual Medicine / ReviewMeta Study',
    design: 'Automated Filtration Audit (N=4,200 Reviews)',
    result: 'Efficacy reports dropped 77%-90% after filtering disingenuous, paid, or bot-generated consumer reviews.',
    pmid: '31036522',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31036522/',
    evidenceGrade: 'High'
  }
];
