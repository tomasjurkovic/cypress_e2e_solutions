/// <reference types="Cypress"/>

describe("Validate webdriveruni homepage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "/Contact-Us/contactus.html");

    cy.go("back");
    cy.url().should("eq", "https://webdriveruniversity.com/");
    cy.reload();
    cy.url().should("eq", "https://webdriveruniversity.com/");

    cy.go("forward");
    cy.url().should("include", "/Contact-Us/contactus.html");

    // cy.reload(true); // without using cache
    cy.go("back");

    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "/Login-Portal/index.html");
    cy.go("back");
    cy.url().should("eq", "https://webdriveruniversity.com/");
  });
});
