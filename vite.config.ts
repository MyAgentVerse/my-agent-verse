import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react-router-dom"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React in its own chunk — loads before any app code
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Supabase / query layer
          "vendor-data": ["@supabase/supabase-js", "@tanstack/react-query"],
        },
      },
    },
  },
}));
