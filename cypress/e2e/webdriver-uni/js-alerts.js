const { outsmartNewTabOpening } = require("./contact-us");

describe("Handling javaScript alerts", () => {
  it.only("Basic alert handling", () => {
    cy.visit("https://webdriveruniversity.com/");
    outsmartNewTabOpening("#popup-alerts");
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
});
