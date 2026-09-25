import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "127.0.0.1",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id))
            return "react-vendor";
          if (/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)) return "motion";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
