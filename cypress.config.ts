import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'kny5bg',
  viewportWidth: 1280,
  viewportHeight: 660,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
