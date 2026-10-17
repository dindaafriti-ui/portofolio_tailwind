import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio-adinda/',
  plugins: [tailwindcss()],
})
