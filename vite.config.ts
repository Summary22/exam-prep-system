import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

/**
 * NOTE — why the `define: {'process.env.GEMINI_API_KEY': ...}` block is gone.
 *
 * The AI Studio export inlined the Gemini API key into the client bundle at build
 * time. That means every visitor could read the key out of the JS they downloaded,
 * which is fine inside AI Studio (it injects its own secret per-project) but is a
 * credential leak the moment the build is hosted publicly.
 *
 * The key is now supplied by the user at runtime and kept in localStorage — see
 * src/lib/userState.ts and src/components/Settings.tsx. Nothing secret is baked in.
 */
export default defineConfig({
  // Relative base so one build works both on a GitHub Pages project site
  // (https://<user>.github.io/exam-prep-system/) and at a domain root
  // (Cloudflare Pages / Netlify / any static host).
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    // The question bank is ~540 KB of TS source; keep it in one chunk so the app
    // opens offline from cache in a single request.
    chunkSizeWarningLimit: 1500,
  },
});
