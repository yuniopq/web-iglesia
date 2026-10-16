import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yuniopq.github.io',
  base: '/web-iglesia',
  integrations: [tailwind()],
});
