/// <reference types="Cypress"/>

const { outsmartNewTabOpening } = require("../../support/commands");

describe("Validate webdriveruni homepage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    cy.visit("https://webdriveruniversity.com/");
    outsmartNewTabOpening("#contact-us");
    cy.url().should("include", "/Contact-Us/contactus.html");

    cy.go("back");
    cy.url().should("eq", "https://webdriveruniversity.com/");
    cy.reload();
    cy.url().should("eq", "https://webdriveruniversity.com/");

    cy.go("forward");
    cy.url().should("include", "/Contact-Us/contactus.html");

    // cy.reload(true); // without using cache
    cy.go("back");

    outsmartNewTabOpening("#login-portal");
    cy.url().should("include", "/Login-Portal/index.html");
    cy.go("back");
    cy.url().should("eq", "https://webdriveruniversity.com/");

    // challenge:
    // click on to do list, verify if correct URL, go back and verify if user is on homepage
    outsmartNewTabOpening("#to-do-list");
    cy.url().should("include", "/To-Do-List");
    cy.go("back");
    cy.url().should("eq", "https://webdriveruniversity.com/");
  });
});
