import React from 'react';
import { ShieldCheck, Activity, Dna, Dumbbell, AlertTriangle, BookOpen, Calculator, Bot, Sparkles, User, BarChart3, Sun, Moon, Monitor } from 'lucide-react';
import type { ThemeMode } from '../App';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openProtocolModal: () => void;
  openGeminiChatbot: () => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  isDark: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openProtocolModal,
  openGeminiChatbot,
  themeMode,
  setThemeMode,
  isDark,
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'vitalstats', label: 'Supplement Analytics', icon: BarChart3 },
    { id: 'ed', label: 'Vascular ED', icon: Dna },
    { id: 'endocrine', label: 'Testosterone', icon: ShieldCheck },
    { id: 'fitness', label: 'Muscle & Power', icon: Dumbbell },
    { id: 'safety', label: 'Safety & Quality', icon: AlertTriangle },
    { id: 'references', label: 'Clinical Studies', icon: BookOpen },
    { id: 'about', label: 'About Me', icon: User },
  ];

  const themeOptions: { mode: ThemeMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { mode: 'auto', label: 'Auto', icon: Monitor },
    { mode: 'light', label: 'Light', icon: Sun },
    { mode: 'dark', label: 'Dark', icon: Moon },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 shadow-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('overview')} 
            className="cursor-pointer group flex flex-col shrink-0"
          >
            <div className="flex items-baseline gap-1">
              <span className="text-emerald-950 dark:text-emerald-400 font-black text-2xl font-serif tracking-tight group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition">
                Dom-I-
              </span>
              <span className="text-amber-700 dark:text-amber-400 font-black text-2xl font-serif tracking-widest group-hover:text-amber-600 dark:group-hover:text-amber-300 transition">
                Nately
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-500 dark:text-stone-400">
              Health Informatics • Male Wellness
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-emerald-900 text-amber-300 shadow-xs'
                      : 'text-stone-600 dark:text-stone-300 hover:text-emerald-900 dark:hover:text-amber-300 hover:bg-stone-100 dark:hover:bg-stone-800/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-stone-400 dark:text-stone-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Top Theme Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Auto / Light / Dark Switch on Top */}
            <div
              className="flex items-center p-1 rounded-xl bg-stone-200/70 dark:bg-stone-900 border border-stone-300/70 dark:border-stone-700/80"
              role="group"
              aria-label="Color theme mode"
              title={`Theme: ${themeMode.toUpperCase()} (Currently ${isDark ? 'Dark' : 'Light'})`}
            >
              {themeOptions.map(({ mode, label, icon: Icon }) => {
                const active = themeMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setThemeMode(mode)}
                    title={`${label} mode${mode === 'auto' ? ` (follows system: ${isDark ? 'Dark' : 'Light'})` : ''}`}
                    aria-pressed={active}
                    className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-bold transition ${
                      active
                        ? 'bg-white dark:bg-emerald-900 text-stone-900 dark:text-amber-300 shadow-xs'
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={openGeminiChatbot}
              className="flex items-center gap-1.5 bg-emerald-950 hover:bg-emerald-900 text-amber-300 text-xs font-bold px-3 py-2.5 rounded-xl border border-emerald-800 shadow-xs transition transform active:scale-95"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              <span className="hidden md:inline">Ask Gemini AI</span>
              <Sparkles className="w-3 h-3 text-amber-400" />
            </button>

            <button
              onClick={openProtocolModal}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-xs transition transform active:scale-95"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-200" />
              <span className="hidden sm:inline">Protocol Advisor</span>
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Row */}
        <div className="xl:hidden flex overflow-x-auto py-2.5 space-x-2 border-t border-stone-100 dark:border-stone-800 custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                  isActive
                    ? 'bg-emerald-900 text-amber-300'
                    : 'bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-transparent dark:border-stone-800'
                }`}
              >
                <Icon className="w-3 h-3" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
