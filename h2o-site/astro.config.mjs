// @ts-check
import { defineConfig } from 'astro/config';

// Set `site` to the live address once the domain is chosen (used for share images).
export default defineConfig({
  site: 'https://h2o-house.example',
  output: 'static',
  trailingSlash: 'always',
});
