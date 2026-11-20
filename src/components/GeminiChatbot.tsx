import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, Send, Sparkles, Globe, ShieldAlert, X, RefreshCw, ExternalLink, User, Check, Copy, Info 
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  groundingChunks?: { title: string; uri: string }[];
  timestamp: string;
}

interface GeminiChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content: `Hello! I am **Dom-I-Nately Clinical AI**, powered by Gemini with **Real-Time Google Search Grounding**.

I can answer your questions about:
- **Erectile Dysfunction & Nitric Oxide Science** (eNOS, Panax Ginseng, L-Arginine, Pycnogenol, PDE5 mechanics)
- **Serum Testosterone & Endocrine Modulation** (Cortisol, Ashwagandha KSM-66, Tongkat Ali, Zinc, Vitamin D3, DAA paradox)
- **Hypertrophy Ergogenic Aids** (Creatine ATP, Citrulline Malate, Beta-Alanine)
- **Supplement Safety & FDA Adulteration Audits** (Real-time recall checks and lab contamination data)

*Note: Answers are backed by medical literature & clinical trials, but this is an informational guide and NOT advice from a practicing doctor.* What would you like to ask?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enableSearch, setEnableSearch] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input.trim();
    if (!textToSend || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!customPrompt) setInput('');
    setIsLoading(true);

    try {
      // Prepare message format for server endpoint
      const payloadMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: payloadMessages,
          enableSearch,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to communicate with AI endpoint.');
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'No response returned from model.',
        groundingChunks: data.groundingChunks || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const isFileProtocol = typeof window !== 'undefined' && window.location.protocol === 'file:';
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: isFileProtocol
          ? `⚠️ **Standalone Offline HTML Notice:** You are viewing this single HTML file locally (\`file://\`). Live Gemini AI & Google Search Grounding requires the backend \`/api/chat\` server endpoint, while all clinical modules, interactive charts, Protocol Builder, and VitalStats Analytics work 100% offline.`
          : `⚠️ **Clinical AI Connection Notice:** ${err.message || 'Unable to complete request.'}\n\nPlease verify that your \`GEMINI_API_KEY\` is configured in Settings > Secrets.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const samplePrompts = [
    "What does the latest trial say about Panax Ginseng for eNOS?",
    "Compare Ashwagandha KSM-66 vs Tongkat Ali for testosterone",
    "Is Citrulline Malate better than L-Arginine for workout pump?",
    "What active adulterants were found in recent FDA supplement audits?",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-4xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden h-[90vh] flex flex-col my-auto">
        
        {/* Chat Header */}
        <div className="bg-emerald-950 text-white p-4 sm:p-5 flex items-center justify-between border-b border-emerald-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-stone-950 font-bold shadow-xs">
              <Bot className="w-5 h-5 text-emerald-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-base text-white">Dom-I-Nately Clinical AI</h3>
                <span className="text-[10px] bg-amber-400 text-emerald-950 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Gemini Real-Time
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/80 flex items-center gap-1.5 mt-0.5">
                <Globe className="w-3 h-3 text-amber-300" />
                <span>Google Search Grounding Enabled • NCBI PubMed & Clinical Trials</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setEnableSearch(!enableSearch)}
              title={enableSearch ? "Google Search Grounding ON" : "Search Grounding OFF"}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                enableSearch 
                  ? 'bg-emerald-900/80 text-amber-300 border-emerald-700' 
                  : 'bg-emerald-950/40 text-stone-400 border-emerald-900'
              }`}
            >
              <Globe className={`w-3.5 h-3.5 ${enableSearch ? 'text-amber-300 animate-pulse' : 'text-stone-500'}`} />
              <span>{enableSearch ? 'Live Web Search' : 'Offline Mode'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-stone-300 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Disclaimer Banner inside Chat */}
        <div className="bg-amber-50/90 dark:bg-amber-950/60 border-b border-amber-200/80 dark:border-amber-800/60 px-4 py-2.5 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200 shrink-0">
          <ShieldAlert className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong className="font-bold">Clinical Advice Notice:</strong> Backed by peer-reviewed RCTs and PubMed literature. This AI is an informational guide and is <strong className="underline">NOT provided by a practicing doctor</strong>. Consult a physician for medical diagnosis.
          </p>
        </div>

        {/* Message History Thread */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar bg-stone-50/50 dark:bg-stone-950/60">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-center gap-2 mb-1 px-1">
                <span className="text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider flex items-center gap-1">
                  {msg.role === 'user' ? (
                    <>
                      <User className="w-3 h-3 text-amber-700 dark:text-amber-400" /> You
                    </>
                  ) : (
                    <>
                      <Bot className="w-3 h-3 text-emerald-800 dark:text-emerald-400" /> Dom-I-Nately Clinical AI
                    </>
                  )}
                </span>
                <span className="text-[10px] text-stone-400 font-mono">{msg.timestamp}</span>
              </div>

              <div
                className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs relative ${
                  msg.role === 'user'
                    ? 'bg-stone-900 dark:bg-emerald-900 text-white rounded-tr-none'
                    : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 border border-stone-200/90 dark:border-stone-800 rounded-tl-none'
                }`}
              >
                {/* Message Text Formatting */}
                <div className="whitespace-pre-wrap font-sans">
                  {msg.content}
                </div>

                {/* Grounding Citations */}
                {msg.groundingChunks && msg.groundingChunks.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-stone-100 dark:border-stone-800 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                      <Globe className="w-3 h-3" /> Live Search Grounding Sources:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.groundingChunks.map((chunk, idx) => (
                        <a
                          key={idx}
                          href={chunk.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 px-2 py-1 rounded-md transition font-medium"
                        >
                          <span className="truncate max-w-[180px]">{chunk.title}</span>
                          <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Copy Button for Assistant */}
                {msg.role === 'assistant' && (
                  <button
                    onClick={() => handleCopy(msg.id, msg.content)}
                    className="absolute top-2.5 right-2.5 p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition"
                    title="Copy response"
                  >
                    {copiedId === msg.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1 px-1">
                <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                  <Bot className="w-3 h-3 text-emerald-800 dark:text-emerald-400" /> Clinical AI Analyzing PubMed & Google Search...
                </span>
              </div>
              <div className="bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 rounded-tl-none flex items-center gap-3">
                <RefreshCw className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-spin" />
                <span className="text-xs text-stone-600 dark:text-stone-300 font-medium">
                  Synthesizing clinical trial parameters & real-time grounding data...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Sample Prompts */}
        <div className="p-3 bg-stone-100/80 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 shrink-0">
          <p className="text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Info className="w-3 h-3 text-amber-700 dark:text-amber-400" /> Quick Clinical Queries:
          </p>
          <div className="flex overflow-x-auto space-x-2 custom-scrollbar pb-1">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => handleSend(prompt)}
                className="text-[11px] bg-white dark:bg-stone-900 hover:bg-emerald-950 hover:text-amber-300 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-stone-700 px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition shrink-0 disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Control Area */}
        <div className="p-4 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about clinical trials, dosages, or supplement mechanisms..."
              disabled={isLoading}
              className="flex-1 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl px-4 py-3 text-xs sm:text-sm font-medium text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-emerald-800 dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-stone-950 transition"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-emerald-950 hover:bg-emerald-900 disabled:bg-stone-300 dark:disabled:bg-stone-700 text-amber-300 font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm transition flex items-center gap-2 shrink-0"
            >
              <span>Ask AI</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
