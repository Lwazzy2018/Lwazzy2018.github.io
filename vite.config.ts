import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// './' keeps every asset path relative, so the same build works on
// https://Lwazzy2018.github.io/ and in any preview folder.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'dist', assetsInlineLimit: 0 },
})
