import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [".."],
    },
  },
  build: {
    rollupOptions: {},
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  base: '/SkillSphere/'
});
