import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // <---- ISSO AQUI RESOLVE O ERRO DO MIME TYPE
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
    },
  },
});
