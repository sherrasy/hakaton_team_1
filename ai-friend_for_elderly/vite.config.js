import { defineConfig } from 'vite'

export default defineConfig({
  base: '/hakaton_team_1/', 
  server: {
    port: 3000,
    open: true 
  },
  build: {
    outDir: 'dist', 
  }
})