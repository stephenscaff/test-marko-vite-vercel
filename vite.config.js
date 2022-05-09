import { defineConfig } from "vite";
import marko from "@marko/vite";
import path from "path";

export default defineConfig({
  plugins: [marko()],
  build: {
    outDir: ".vercel/output/static", // Server and client builds should output assets to the same folder.
    emptyOutDir: false // Avoid server / client deleting files from each other.
  },
  resolve: {
    alias: {
      "/@pages": path.resolve(__dirname, "src/pages"),
      "/@styles": path.resolve(__dirname, "src/styles")
    },
  },
});
