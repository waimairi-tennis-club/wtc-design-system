// @ts-check
// The design system's reference site: every logo, colour, type style, icon and component on one site.
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Same font set-up as the website, so type looks identical in both.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Barlow',
      cssVariable: '--font-barlow',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});
