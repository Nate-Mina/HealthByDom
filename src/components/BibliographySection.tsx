import React, { useState } from 'react';
import { CLINICAL_CITATIONS, ClinicalStudy } from '../data/clinicalData';
import { BookOpen, Search, ExternalLink, Filter, CheckCircle2 } from 'lucide-react';

export const BibliographySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCitations = CLINICAL_CITATIONS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.domain === selectedCategory;
    const matchesSearch = 
      item.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.study.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.result.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pmid.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="mb-16">
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-xs transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Module V • Evidence Base
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Clinical Bibliography & Peer-Reviewed Citation Database
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-2xl">
              Every data point in Dom-I-Nately Health is derived from indexed double-blind clinical trials, systematic reviews, and FDA databases. Direct NCBI PubMed links provided for verification.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-4 py-2 rounded-2xl text-emerald-900 dark:text-emerald-200 text-xs font-bold self-start md:self-auto">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>100% Peer-Reviewed Transparency</span>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search PMID, ingredient, study name, outcome..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs font-medium text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-stone-900 transition"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {['All', 'ED', 'Testosterone', 'Fitness', 'Safety'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-2 rounded-xl font-bold transition ${
                  selectedCategory === cat
                    ? 'bg-stone-900 dark:bg-emerald-900 text-amber-300 shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {cat === 'All' ? 'All Studies' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Table Display */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-stone-200 dark:border-stone-800 text-stone-400 uppercase tracking-wider text-[10px] font-bold">
                <th className="pb-3">Intervention & Design</th>
                <th className="pb-3">Domain</th>
                <th className="pb-3">Journal / Trial</th>
                <th className="pb-3">Key Outcome</th>
                <th className="pb-3 text-right">PubMed Direct Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 dark:divide-stone-800 text-stone-700 dark:text-stone-300">
              {filteredCitations.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-stone-400 font-medium">
                    No matching clinical studies found for your search query.
                  </td>
                </tr>
              ) : (
                filteredCitations.map((item) => (
                  <tr key={item.id} className="hover:bg-stone-50/80 dark:hover:bg-stone-800/50 transition">
                    <td className="py-4 font-bold text-stone-900 dark:text-stone-100 pr-4">
                      {item.agent}
                      <p className="text-[10px] text-stone-400 font-normal mt-0.5">{item.design}</p>
                    </td>
                    <td className="py-4 pr-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${
                        item.domain === 'ED'
                          ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300'
                          : item.domain === 'Testosterone'
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300'
                          : item.domain === 'Fitness'
                          ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300'
                          : 'bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300'
                      }`}>
                        {item.domain}
                      </span>
                    </td>
                    <td className="py-4 text-stone-600 dark:text-stone-300 font-medium max-w-xs pr-4">{item.study}</td>
                    <td className="py-4 text-stone-600 dark:text-stone-300 max-w-md pr-4">{item.result}</td>
                    <td className="py-4 text-right whitespace-nowrap">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800 transition"
                      >
                        PMID: {item.pmid} <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
