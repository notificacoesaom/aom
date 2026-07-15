import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Confirma que tens esta linha

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(), // <-- Confirma que tens isto aqui dentro
  ],
})
