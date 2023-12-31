import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    dts(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.tsx"),
      name: "ecoflowLibrary",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
    target: "esnext",
    sourcemap: true,
  },
});
