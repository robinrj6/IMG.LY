import { defineConfig } from '@playwright/test';

import { baseConfig } from './playwright.config.base';

export default defineConfig({
  ...baseConfig,

  webServer: {
    command: 'yarn test:start:umd',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
});
