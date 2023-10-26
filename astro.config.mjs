import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://urban-analytics-technology-platform.github.io',
  integrations: [tailwind()]
});