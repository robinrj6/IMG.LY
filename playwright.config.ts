import { defineConfig } from '@playwright/test';

import { baseConfig } from './playwright.config.base';

// note: this is required for VSCode
export default defineConfig({
  ...baseConfig,
});
