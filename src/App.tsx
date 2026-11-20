import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BiologicalCascades } from './components/BiologicalCascades';
import { VascularEdModule } from './components/VascularEdModule';
import { EndocrineModule } from './components/EndocrineModule';
import { HypertrophyModule } from './components/HypertrophyModule';
import { SafetyModule } from './components/SafetyModule';
import { BibliographySection } from './components/BibliographySection';
import { ProtocolBuilder } from './components/ProtocolBuilder';
import { MedicalDisclaimerSection } from './components/MedicalDisclaimerSection';
import { AboutMeModule } from './components/AboutMeModule';
import { VitalStatsPortalModule } from './components/VitalStatsPortalModule';
import { GeminiChatbot } from './components/GeminiChatbot';
import { Footer } from './components/Footer';
import { Bot, Sparkles } from 'lucide-react';

export type ThemeMode = 'auto' | 'light' | 'dark';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isProtocolModalOpen, setIsProtocolModalOpen] = useState<boolean>(false);
  const [isGeminiChatbotOpen, setIsGeminiChatbotOpen] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('dom-i-nately-theme');
      if (saved === 'auto' || saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore storage errors
    }
    return 'auto';
  });
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setSystemPrefersDark(e.matches);
    setSystemPrefersDark(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const isDark = themeMode === 'dark' || (themeMode === 'auto' && systemPrefersDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('dom-i-nately-theme', themeMode);
    } catch {
      // ignore storage errors
    }
  }, [isDark, themeMode]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-amber-200 selection:text-stone-900 dark:selection:bg-amber-500/30 dark:selection:text-amber-100 custom-scrollbar relative transition-colors duration-200">
      {/* Sticky Top Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={handleTabChange}
        openProtocolModal={() => setIsProtocolModalOpen(true)}
        openGeminiChatbot={() => setIsGeminiChatbotOpen(true)}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        isDark={isDark}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Render Overview Tab */}
        {activeTab === 'overview' && (
          <>
            <HeroSection 
              onExploreClick={handleTabChange} 
              openProtocolModal={() => setIsProtocolModalOpen(true)} 
              openGeminiChatbot={() => setIsGeminiChatbotOpen(true)}
            />
            <BiologicalCascades />
            <VascularEdModule isDark={isDark} />
            <EndocrineModule isDark={isDark} />
            <HypertrophyModule isDark={isDark} />
            <SafetyModule />
            <MedicalDisclaimerSection />
            <BibliographySection />
          </>
        )}

        {/* Render Specific Tab Focus */}
        {activeTab === 'vitalstats' && (
          <>
            <VitalStatsPortalModule isDark={isDark} />
            <MedicalDisclaimerSection />
          </>
        )}

        {activeTab === 'ed' && (
          <>
            <VascularEdModule isDark={isDark} />
            <BiologicalCascades />
            <MedicalDisclaimerSection />
            <BibliographySection />
          </>
        )}

        {activeTab === 'endocrine' && (
          <>
            <EndocrineModule isDark={isDark} />
            <BiologicalCascades />
            <MedicalDisclaimerSection />
            <BibliographySection />
          </>
        )}

        {activeTab === 'fitness' && (
          <>
            <HypertrophyModule isDark={isDark} />
            <MedicalDisclaimerSection />
            <BibliographySection />
          </>
        )}

        {activeTab === 'safety' && (
          <>
            <SafetyModule />
            <MedicalDisclaimerSection />
            <BibliographySection />
          </>
        )}

        {activeTab === 'references' && (
          <>
            <MedicalDisclaimerSection />
            <BibliographySection />
          </>
        )}

        {activeTab === 'about' && (
          <>
            <AboutMeModule />
            <MedicalDisclaimerSection />
          </>
        )}
      </main>

      {/* Floating Gemini Chatbot Quick Button */}
      <button
        onClick={() => setIsGeminiChatbotOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-emerald-950 text-amber-300 p-4 rounded-2xl border-2 border-amber-400/80 shadow-2xl hover:scale-105 active:scale-95 transition flex items-center gap-2.5 group"
        title="Ask Gemini Clinical AI"
      >
        <div className="relative">
          <Bot className="w-6 h-6 text-amber-300" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
        </div>
        <span className="font-bold text-xs pr-1 group-hover:inline hidden sm:inline text-white">
          Ask Clinical AI
        </span>
        <Sparkles className="w-4 h-4 text-amber-400" />
      </button>

      {/* Gemini Chatbot Modal */}
      <GeminiChatbot 
        isOpen={isGeminiChatbotOpen}
        onClose={() => setIsGeminiChatbotOpen(false)}
      />

      {/* Protocol Builder Modal */}
      <ProtocolBuilder 
        isOpen={isProtocolModalOpen}
        onClose={() => setIsProtocolModalOpen(false)}
      />

      {/* Footer */}
      <Footer 
        setActiveTab={handleTabChange}
        openProtocolModal={() => setIsProtocolModalOpen(true)}
      />
    </div>
  );
}
