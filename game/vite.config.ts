import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: "/catApp/",
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      types: "/src/types",
      constants: "/src/constants",
      helpers: "/src/helpers",
      providers: "/src/Providers",
      context: "src/Contexts",
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name?.split(".").at(1)
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img"
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
})
