import { defineConfig, devices } from '@playwright/test';

declare const process: any;

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // 1. Reintentos: 2 en CI para mitigar intermitencias, 0 en local
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // 2. Base URL centralizada
    baseURL: 'https://www.demoblaze.com',
    // Ahora 'on-first-retry' tiene sentido porque en CI sí hay reintentos
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});