const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  timeout: 50 * 1000,
  expect: {
    timeout: 5000
  },
  testDir: './tests',
  reporter: 'html',
  retries : 0,
  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on',
    video: 'retain-on-failure',
  },
});

