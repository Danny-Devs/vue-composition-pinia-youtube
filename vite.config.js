
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
      host: 'dca1e070-3768-4489-af24-9b16f7f73f35-00-6jaruhnmzz5j.worf.replit.dev'
    }
  }
})
