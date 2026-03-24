import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({ 
      tsconfigPath: "./tsconfig.app.json",
      compilerOptions: { noEmit: false },
      include: ["src/icons", "src/types"] 
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/icons/index.ts"),
      name: "IconLibrary",
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "motion/react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "motion/react": "Motion",
        },
      },
    },
  },
});
