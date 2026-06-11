import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** `/` = Firebase o dominio propio. `/FabioBalanzas-Web/` = GitHub Pages. */
const base = process.env.VITE_BASE_PATH ?? '/';

export default defineConfig({
  plugins: [react()],
  base,
});
