import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      types: "/src/types",
      constants: "/src/constants",
      helpers: "/src/helpers",
    },
  },
})
