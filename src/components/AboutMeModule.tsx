import React, { useState } from 'react';
import { 
  User, Mail, Github, Globe, ExternalLink, Code2, Terminal, ShieldCheck, 
  Cpu, FileText, CheckCircle2, Share2, Sparkles, Music, Video, Radio, 
  MessageSquare, Play, Heart, Layers, ArrowUpRight
} from 'lucide-react';

export const AboutMeModule: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'socials' | 'tech'>('all');

  const socialLinks = [
    {
      name: 'Portfolio & CV (Link-in-Bio)',
      category: 'Link-in-Bio & About Me',
      handle: 'nate-mina.github.io/Portfolio-CV',
      url: 'https://nate-mina.github.io/Portfolio-CV/',
      color: 'from-purple-600 to-indigo-600',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      description: 'Official all-in-one link-in-bio, CV, and about me portfolio hub',
      icon: (
        <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-black font-mono text-xs border border-purple-400/30">
          CV
        </div>
      )
    },
    {
      name: 'LinkedIn',
      category: 'Professional Network',
      handle: 'dom-i-nate',
      url: 'https://www.linkedin.com/in/dom-i-nate/',
      color: 'from-blue-600 to-sky-700',
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      description: 'Professional engineering background, business leadership & career updates',
      icon: (
        <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      category: 'Community',
      handle: 'NateMina',
      url: 'https://www.facebook.com/NateMina',
      color: 'from-blue-700 to-indigo-800',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
      description: 'Community outreach, personal updates, and network connections',
      icon: (
        <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 24 24">
          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      category: 'Content Creation',
      handle: '@dom_i_nater',
      url: 'https://www.tiktok.com/@dom_i_nater',
      color: 'from-slate-900 via-rose-950 to-cyan-950',
      badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
      description: 'Short-form AI tech, engineering breakdowns, and music snippets',
      icon: (
        <svg className="w-5 h-5 fill-current text-rose-400" viewBox="0 0 24 24">
          <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.5c.18 0 .36.02.53.05V9.81a5.672 5.672 0 0 0-.53-.02 5.68 5.68 0 1 0 5.68 5.68V9.13a7.35 7.35 0 0 0 4.28 1.35V7.39a4.27 4.27 0 0 1-3.22-1.57z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      category: 'Visual & Daily Life',
      handle: '@dom.i_nate',
      url: 'https://www.instagram.com/dom.i_nate/',
      color: 'from-pink-900 via-purple-900 to-amber-950',
      badgeColor: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
      description: 'Visual stories, behind the scenes, creative content, and updates',
      icon: (
        <svg className="w-5 h-5 fill-current text-pink-400" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Reddit',
      category: 'Community & Tech',
      handle: 'u/Dom-I-Nate',
      url: 'https://www.reddit.com/user/Dom-I-Nate/',
      color: 'from-orange-900 to-amber-950',
      badgeColor: 'bg-orange-500/10 text-orange-300 border-orange-500/30',
      description: 'Reddit discussions, tech threads, software insights, and posts',
      icon: (
        <svg className="w-5 h-5 fill-current text-orange-400" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.18 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.562-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-4.566 3.875c-.12 0-.226.072-.259.186a.256.256 0 0 0 .074.275c.706.697 1.83.89 2.996.89 1.168 0 2.29-.193 2.997-.89a.256.256 0 0 0 .073-.275.257.257 0 0 0-.258-.186c-1.082 0-2.164.332-2.812.332-.648 0-1.73-.332-2.811-.332z"/>
        </svg>
      )
    },
    {
      name: 'Threads',
      category: 'Social Updates',
      handle: '@dom.i_nate',
      url: 'https://www.threads.com/',
      color: 'from-stone-900 to-slate-950',
      badgeColor: 'bg-stone-500/10 text-stone-300 border-stone-500/30',
      description: 'Thoughts, updates, software discussions and creative notes',
      icon: (
        <svg className="w-5 h-5 fill-current text-stone-200" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    {
      name: 'Pinterest',
      category: 'Inspiration & Boards',
      handle: 'd0minater',
      url: 'https://www.pinterest.com/d0minater/',
      color: 'from-red-950 to-rose-900',
      badgeColor: 'bg-red-500/10 text-red-300 border-red-500/30',
      description: 'Design inspiration, technology concepts, visual moodboards & ideas',
      icon: (
        <svg className="w-5 h-5 fill-current text-red-400" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.17c-.08-.98-.15-2.5.03-3.58l.74-3.15s-.19-.38-.19-.94c0-.88.51-1.54 1.15-1.54.54 0 .8.41.8.9 0 .55-.35 1.37-.53 2.13-.15.63.32 1.15.94 1.15 1.13 0 2-1.19 2-2.91 0-1.52-1.09-2.58-2.65-2.58-1.8 0-2.86 1.35-2.86 2.75 0 .54.21 1.13.47 1.45.05.06.06.12.04.2l-.18.73c-.03.12-.1.15-.22.09-.82-.38-1.33-1.58-1.33-2.54 0-2.07 1.51-3.98 4.34-3.98 2.28 0 4.05 1.63 4.05 3.8 0 2.27-1.43 4.1-3.41 4.1-.67 0-1.29-.35-1.5-.76l-.41 1.57c-.15.58-.56 1.31-.83 1.76A12 12 0 1 0 12 0z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      category: 'Source Code & Repos',
      handle: 'Nate-Mina',
      url: 'https://github.com/Nate-Mina',
      color: 'from-amber-950 via-stone-900 to-emerald-950',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      description: 'Open-source software, full-stack applications, and algorithmic code repositories',
      icon: <Github className="w-5 h-5 text-amber-400" />
    },
    {
      name: 'Official Website (PureComp)',
      category: 'Primary Tech Platform',
      handle: 'www.purecomp.net',
      url: 'https://www.purecomp.net',
      color: 'from-emerald-950 via-slate-900 to-emerald-900',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      description: 'Central portal for AI tech, software applications, and engineering projects',
      icon: <Globe className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section className="mb-16 space-y-12">
      {/* Profile Header Banner */}
      <div className="bg-gradient-to-br from-stone-950 via-emerald-950 to-stone-900 rounded-3xl p-8 sm:p-12 text-white border border-stone-800 shadow-2xl relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold">
              <User className="w-4 h-4 text-amber-400" />
              <span>Nathaniel Mina • Official Profile Hub</span>
            </span>
            <a
              href="https://nate-mina.github.io/Portfolio-CV/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 border border-purple-500/40 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold hover:bg-purple-500/30 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>nate-mina.github.io/Portfolio-CV ↗</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Nathaniel Mina
              </h1>
              <p className="text-sm sm:text-base text-emerald-200/90 font-medium mt-1">
                AI Engineer • Entrepreneur • Learner • Teacher • Businessman • Content Creator • Musician
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://nate-mina.github.io/Portfolio-CV/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs font-mono transition shadow-md"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Portfolio & CV Hub</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-200" />
              </a>

              <a
                href="https://www.purecomp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 border border-emerald-700 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition shadow-xs"
              >
                <Globe className="w-4 h-4 text-amber-300" />
                <span>purecomp.net</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>

              <a
                href="https://github.com/Nate-Mina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition shadow-xs"
              >
                <Github className="w-4 h-4 text-amber-400" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>

              <a
                href="mailto:nate@purecomp.onmicrosoft.com"
                className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition shadow-xs"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Email Nate</span>
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
            Hi, I'm <strong className="text-white">Nathaniel Mina</strong> — an AI engineer, entrepreneur, learner, teacher, businessman, content creator, and musician. I specialize in building AI tech and other technology solutions, intelligent software systems, and modern web applications.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-800/80 text-xs font-mono">
            <div className="bg-stone-900/80 border border-stone-800 p-3 rounded-2xl">
              <span className="text-stone-400 text-[10px] uppercase block">Official Website</span>
              <a href="https://www.purecomp.net" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline font-bold text-sm">
                www.purecomp.net
              </a>
            </div>
            <div className="bg-stone-900/80 border border-stone-800 p-3 rounded-2xl">
              <span className="text-stone-400 text-[10px] uppercase block">Portfolio & Link-in-Bio</span>
              <a href="https://nate-mina.github.io/Portfolio-CV/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline font-bold text-sm truncate block">
                nate-mina.github.io/Portfolio-CV
              </a>
            </div>
            <div className="bg-stone-900/80 border border-stone-800 p-3 rounded-2xl">
              <span className="text-stone-400 text-[10px] uppercase block">Specialization</span>
              <span className="text-white font-bold text-sm">AI Tech & Other Tech</span>
            </div>
            <div className="bg-stone-900/80 border border-stone-800 p-3 rounded-2xl">
              <span className="text-stone-400 text-[10px] uppercase block">GitHub Profile</span>
              <a href="https://github.com/Nate-Mina" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline font-bold text-sm">
                Nate-Mina
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs for Subsections */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-800 dark:text-emerald-400" />
          <h2 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
            About Nathaniel Mina • Overview & Subsections
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveSubTab('all')}
            className={`px-4 py-2 rounded-xl transition font-bold ${
              activeSubTab === 'all'
                ? 'bg-stone-900 dark:bg-emerald-900 text-white dark:text-amber-300 shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            All Subsections
          </button>
          <button
            onClick={() => setActiveSubTab('socials')}
            className={`px-4 py-2 rounded-xl transition font-bold flex items-center gap-1.5 ${
              activeSubTab === 'socials'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Socials & Portfolio-CV</span>
          </button>
          <button
            onClick={() => setActiveSubTab('tech')}
            className={`px-4 py-2 rounded-xl transition font-bold flex items-center gap-1.5 ${
              activeSubTab === 'tech'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>AI Tech & PureComp</span>
          </button>
        </div>
      </div>

      {/* SUBSECTION 1: Social Links & Portfolio-CV Link-in-Bio Hub */}
      {(activeSubTab === 'all' || activeSubTab === 'socials') && (
        <div className="space-y-6 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 p-6 sm:p-8 rounded-3xl border border-purple-900/40 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-900/50 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span>Featured Subsection • Portfolio-CV Link-in-Bio & Social Networks</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white pt-1">
                Social Profiles, Content Channels & Portfolio Hub
              </h2>
              <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
                Connect with Nathaniel Mina across social media networks, video channels, business pages, and the official all-in-one link-in-bio and about me hub at <strong className="text-purple-300 font-mono">nate-mina.github.io/Portfolio-CV</strong>.
              </p>
            </div>

            <a
              href="https://nate-mina.github.io/Portfolio-CV/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold px-5 py-3 rounded-2xl text-xs transition shrink-0 shadow-lg"
            >
              <span>Visit Portfolio & CV (Link-in-Bio)</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Social Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/50 p-5 rounded-2xl transition duration-200 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:scale-110 transition duration-200">
                      {social.icon}
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${social.badgeColor}`}>
                      {social.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition flex items-center justify-between">
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-purple-400" />
                    </h3>
                    <span className="text-xs font-mono text-stone-400 block pt-0.5">
                      {social.handle}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">
                    {social.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono font-semibold text-purple-300 group-hover:text-purple-200">
                  <span>Open Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* SUBSECTION 2: AI Tech & Software Engineering */}
      {(activeSubTab === 'all' || activeSubTab === 'tech') && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Engineering & Systems */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-900 dark:text-emerald-300">
                <Globe className="w-5 h-5 text-emerald-800 dark:text-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Technology Platform
                </span>
                <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  AI Tech & Other Technology
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              I build AI technology and software solutions hosted at <a href="https://www.purecomp.net" target="_blank" rel="noopener noreferrer" className="text-emerald-900 dark:text-emerald-400 font-bold underline">www.purecomp.net</a>. As an AI engineer and entrepreneur, I design intelligent applications, software architectures, natural language processing pipelines, and web systems.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-stone-100 dark:border-stone-800 text-xs">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/70 border border-stone-100 dark:border-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 dark:text-stone-100 block font-semibold">AI Engineering & Intelligent Systems</strong>
                  <span className="text-stone-500 dark:text-stone-400">LLM integration, AI agent workflows, and automated reasoning pipelines.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/70 border border-stone-100 dark:border-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 dark:text-stone-100 block font-semibold">Software Architecture & Web Engineering</strong>
                  <span className="text-stone-500 dark:text-stone-400">Full-stack React, TypeScript, Node.js servers, microservices, and databases.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/70 border border-stone-100 dark:border-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 dark:text-stone-100 block font-semibold">PureComp Technology Hub</strong>
                  <span className="text-stone-500 dark:text-stone-400">Explore engineering tools and systems hosted at www.purecomp.net.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.purecomp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-bold px-5 py-3 rounded-2xl text-xs transition shadow-sm w-full justify-center"
              >
                <Globe className="w-4 h-4" />
                <span>Visit PureComp Platform (www.purecomp.net)</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>

          {/* Business & Creative Pursuits */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-900 dark:text-purple-300">
                <Sparkles className="w-5 h-5 text-purple-800 dark:text-purple-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                  Multidisciplinary Focus
                </span>
                <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  Learner, Teacher, Entrepreneur & Musician
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Beyond software engineering, I am passionate about lifelong learning, teaching technology concepts, business innovation, content creation, and music production.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 space-y-1">
                <span className="font-bold text-purple-950 dark:text-purple-200 block">Learner & Teacher</span>
                <span className="text-stone-500 dark:text-stone-400 text-[11px] leading-snug block">Continuous skill acquisition & educational tutorials.</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 space-y-1">
                <span className="font-bold text-purple-950 dark:text-purple-200 block">Entrepreneur</span>
                <span className="text-stone-500 dark:text-stone-400 text-[11px] leading-snug block">Building technology businesses & venture concepts.</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 space-y-1">
                <span className="font-bold text-purple-950 dark:text-purple-200 block">Content Creator</span>
                <span className="text-stone-500 dark:text-stone-400 text-[11px] leading-snug block">Short & long-form video content on AI & tech.</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 space-y-1">
                <span className="font-bold text-purple-950 dark:text-purple-200 block">Musician</span>
                <span className="text-stone-500 dark:text-stone-400 text-[11px] leading-snug block">Music composition, audio production, and artistry.</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://nate-mina.github.io/Portfolio-CV/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-900 hover:bg-purple-800 text-purple-100 font-bold px-5 py-3 rounded-2xl text-xs transition shadow-sm w-full justify-center"
              >
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span>Explore Portfolio-CV (Link-in-Bio & About Me)</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* General Footer Links Banner */}
      <div className="bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-800/50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Connect & Explore</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
            Explore Nathaniel Mina's Web Ecosystem
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            Visit my central technology portal at <a href="https://www.purecomp.net" target="_blank" rel="noopener noreferrer" className="text-emerald-900 dark:text-emerald-400 font-bold underline">www.purecomp.net</a>, my all-in-one link-in-bio & about me hub at <a href="https://nate-mina.github.io/Portfolio-CV/" target="_blank" rel="noopener noreferrer" className="text-purple-900 dark:text-purple-300 font-bold underline">nate-mina.github.io/Portfolio-CV</a>, or my GitHub repository at <a href="https://github.com/Nate-Mina" target="_blank" rel="noopener noreferrer" className="text-stone-900 dark:text-amber-300 font-bold underline">github.com/Nate-Mina</a>.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://nate-mina.github.io/Portfolio-CV/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-900 hover:bg-purple-800 text-white font-bold px-5 py-3 rounded-2xl text-xs transition shadow-sm flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-purple-200" />
            <span>Portfolio & CV Hub</span>
          </a>
          <a
            href="https://www.purecomp.net"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-bold px-5 py-3 rounded-2xl text-xs transition shadow-sm flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>purecomp.net</span>
          </a>
        </div>
      </div>
    </section>
  );
};
