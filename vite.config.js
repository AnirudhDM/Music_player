import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // Exposes on 0.0.0.0 — required for Codility's VS Code webview preview
    port: 5173,
    strictPort: true,
  },
})
