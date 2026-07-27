import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Lighthouse flagged missing source maps for the large first-party bundle.
    sourcemap: true,
    rollupOptions: {
      output: {
        // framer-motion and the icon libraries are pulled in by almost every
        // home/layout component (so they can't be lazy-loaded away) and were
        // previously flattened into the single ~700KB main chunk alongside
        // all page code. Splitting them into their own vendor chunk lets the
        // browser cache them separately from app code that changes far more
        // often, and keeps the main chunk smaller.
        manualChunks: {
          "vendor-motion": ["framer-motion"],
          "vendor-icons": ["react-icons", "lucide-react"],
          "vendor-react": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
