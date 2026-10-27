import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    use: {
        baseURL: 'https://www.demoblaze.com/',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        video: 'retain-on-failure',
    },
    reporter: [
        ['html', { open: 'never' }],
        ['list']

    ],
}); 