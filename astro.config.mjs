import { defineConfig } from "astro/config";
import react from '@astrojs/react';

export default defineConfig({
  base: '/parametr-to-niewola/',
  integrations: [react()]
});