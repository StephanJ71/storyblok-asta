import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'omSILGUwNq9bhm2rvqAi5gtt',
    }),
  ],
});