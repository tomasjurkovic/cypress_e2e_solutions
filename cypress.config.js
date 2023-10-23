const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    video: false, // must be true if I want to record videos
    // videoCompression: true,
    trashAssetsBeforeRuns: true,
    // env. variables:
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://webdriveruniversity.com/",
    },
    baseUrl: "https://webdriveruniversity.com/",
  },
});
