import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react")) {
            return "react";
          }

          if (id.includes("node_modules/recharts")) {
            return "charts";
          }

          if (
            id.includes("node_modules/react-markdown") ||
            id.includes("node_modules/remark-gfm")
          ) {
            return "markdown";
          }

          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
