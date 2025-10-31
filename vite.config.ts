import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/days-of-tanvi/',   // <-- your repo name (including the trailing slash)
  plugins: [react()],
  // ... other config
});
