import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        zorune: resolve(__dirname, 'projects/zorune/index.html'),
        semantic: resolve(__dirname, 'projects/semantic-compliance-review-agent/index.html'),
        meeting: resolve(__dirname, 'projects/meeting-preparation-assistant/index.html'),
      },
    },
  },
})
