import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "my-library",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  plugins: [dts()],
});
