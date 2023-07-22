import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: "https://rollupjs.org/configuration-options/#external"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@smartmed/ui/styles/local.scss';",
      },
    },
  }
})
