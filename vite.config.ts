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
          // React MUST be in its own chunk so it initializes first
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Heavy UI libraries in separate chunks
          "vendor-ui": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-popover",
            "@radix-ui/react-sheet",
          ],
          // Supabase / data layer
          "vendor-data": ["@supabase/supabase-js", "@tanstack/react-query"],
          // Cal.com (known duplicate React offender — isolated)
          "vendor-cal": ["@calcom/embed-react"],
        },
      },
    },
  },
}));
