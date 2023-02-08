const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1980,
  e2e: {
    baseUrl: 'https://shop.demoqa.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
