import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
  base: './',
  plugins: [
    {
      // Stamps the package.json version into dist/index.html so a build can be identified.
      name: 'app-version-meta',
      transformIndexHtml: () => [
        { tag: 'meta', attrs: { name: 'app-version', content: pkg.version }, injectTo: 'head' },
      ],
    },
  ],
});
