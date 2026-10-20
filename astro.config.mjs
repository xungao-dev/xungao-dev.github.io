import { defineConfig } from 'astro/config';

// For the repository xungao-dev.github.io, no `base` setting is required.
// If you deploy from a different repository name (e.g. portfolio), set base: '/portfolio'.
export default defineConfig({
  site: 'https://xungao-dev.github.io',
  trailingSlash: 'always',
});
