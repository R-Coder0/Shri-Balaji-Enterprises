import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const defineGlobal = {
  global: {},
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: defineGlobal,
})
