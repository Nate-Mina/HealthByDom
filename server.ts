import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  // Initialize Gemini AI Client on the server
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    return new GoogleGenAI({
      apiKey: apiKey || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API Endpoint for Clinical AI Chat with Google Search Grounding
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, enableSearch = true } = req.body;

      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages array is required.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: 'GEMINI_API_KEY is not configured on the server. Please set your API key in Settings > Secrets.',
        });
      }

      const ai = getAiClient();

      const systemInstruction = `You are Dom-I-Nately Clinical AI, an expert health informatics assistant specializing in male performance, endocrine regulation, nitric oxide vascular mechanics, hypertrophy ergogenics, and supplement safety.

YOUR CORE MANDATES:
1. Provide accurate, peer-reviewed, double-blind RCT research facts, threshold dosages, mechanisms of action, and safety warnings.
2. Utilize real-time Google Search grounding to answer questions about the latest clinical trials, medical breakthroughs, PubMed studies, or health news.
3. CRITICAL LEGAL & CLINICAL DISCLAIMER: You MUST always maintain a clear clinical disclaimer. Remind the user that your answers are backed by published medical research and health informatics literature, BUT this is informational advice and research guidance only — it is NOT provided by a practicing doctor and does NOT constitute practicing medicine, personal diagnosis, or treatment. Users must consult a licensed healthcare provider for individual medical guidance.
4. Keep answers structured, highly readable, objective, and professional with key evidence points in bold.`;

      // Convert conversation messages format for Gemini
      const contents = messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      }));

      const tools = enableSearch ? [{ googleSearch: {} }] : [];

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents,
        config: {
          systemInstruction,
          tools,
        },
      });

      const candidate = response.candidates?.[0];
      const replyText = response.text || 'No response generated.';
      const rawChunks = candidate?.groundingMetadata?.groundingChunks || [];

      const groundingChunks = rawChunks
        .map((chunk: any) => ({
          title: chunk.web?.title || 'Web Search Citation',
          uri: chunk.web?.uri || '',
        }))
        .filter((c: any) => Boolean(c.uri));

      res.json({
        reply: replyText,
        groundingChunks,
      });
    } catch (err: any) {
      console.error('Error in /api/chat:', err);
      res.status(500).json({ error: err?.message || 'An error occurred while generating the AI response.' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', hasGeminiKey: Boolean(process.env.GEMINI_API_KEY) });
  });

  // Serve the uploaded VitalStats Clinical Supplement Analytics Portal
  app.get(['/vitalstats_portal.html', '/supplement_portal.html', '/supplement_usage_analytics_clinical_portal.html'], (req, res, next) => {
    if ('raw' in req.query || 'import' in req.query) {
      return next();
    }
    res.sendFile(path.join(process.cwd(), 'supplement_usage_analytics_clinical_portal.html'));
  });

  // Serve the compiled single standalone HTML application
  app.get(['/download-single-html', '/dom_i_nately_health_standalone.html'], (req, res) => {
    const standalonePath = path.join(process.cwd(), 'dom_i_nately_health_standalone.html');
    const distIndexPath = path.join(process.cwd(), 'dist', 'index.html');
    res.download(standalonePath, 'dom_i_nately_health_standalone.html', (err) => {
      if (err && !res.headersSent) {
        res.sendFile(distIndexPath, (distErr) => {
          if (distErr && !res.headersSent) {
            res.status(404).json({ error: 'Single HTML bundle not yet built. Run npm run build first.' });
          }
        });
      }
    });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.use((req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
