import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuración de Astro adaptada para Vercel (servido en la raíz /)
export default defineConfig({
  integrations: [tailwind()],
});
