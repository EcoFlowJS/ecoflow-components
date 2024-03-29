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
  css: {
    preprocessorOptions: {
      babel: {
        loaders: [
          { test: /\.tsx$/, loader: "babel", query: { compact: false } },
        ],
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.tsx"),
      name: "ecoflowLibrary",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "rsuite"],
      output: {
        globals: {
          react: "React",
          rsuite: "rsuite",
        },
      },
    },
    target: "esnext",
    sourcemap: true,
  },
});
