import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/frontend/dist/',  // Ensures correct relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
