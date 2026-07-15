import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // A linha crítica é esta abaixo. Certifica-te que é exatamente './'
  base: './', 
  plugins: [react()],
})
