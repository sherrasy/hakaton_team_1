import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ai-friend_for_elderly/', 
  server: {
    port: 3000,
    open: true 
  },
  build: {
    outDir: 'build', 
  }
})