const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "khme5n",
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
    video: false,
    trashAssetsBeforeRuns: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    // videoCompression: true,
    // env. variables:
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://webdriveruniversity.com/",
    },
    baseUrl: "https://webdriveruniversity.com/",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
  },
});
