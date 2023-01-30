import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import postcssNested from "postcss-nested";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer, postcssNested]
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    VitePWA({
      includeAssets: ["assets/*", "icons/*"],
      manifest: {
        name: "Wired Wizards 2023 Scouting",
        short_name: "Scouting",
        description: "WW 4534 Scouting, based on code from team 2834",
        theme_color: "#292929",
        background_color: "#292929",
        icons: [
          {
            src: "icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
});
