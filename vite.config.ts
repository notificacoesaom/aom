import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aom/', // Garante que tem o nome do teu repositório
  plugins: [react()],
})
