import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style/ui/reset";
          @import "./src/style/ui/variables";
          @import "./src/style/ui/fonts";
          @import "./src/style/ui/mixins";
          @import "./src/style/ui/buttons";
          @import "./src/style/ui/icons";
          @import "./src/style/ui/size";
        `,
      },
    },
  },
});
