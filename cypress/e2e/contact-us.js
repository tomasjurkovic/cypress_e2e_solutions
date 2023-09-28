/// <reference types="Cypress"/>

describe("Test Contact Us page form viac webdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    // possitive scenario code
    // cy.visit("https://webdriveruniversity.com/");
    // cy.get("#contact-us").click({ force: true });

    // NOW JUST FAKE ACCESS THE OPENED TAB:
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get('[name="first_name"]').type("Tomas");
    cy.get('[name="last_name"]').type("Jurkovic");
    cy.get('[name="email"]').type("tomas@jurkovic.sk");
    cy.get("textarea.feedback-input").type(
      "This is the comments section, so I put comment there."
    );
    cy.get('[type="submit"]').click({ force: true });
  });

  it("Should not be able to submit a successful submission via contact us form ass all fields are required", () => {
    // negative scenario code
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Tomas");
    cy.get('[name="last_name"]').type("Jurkovic");
    // invalid email address:
    cy.get('[name="email"]').type("tomas@sk");
    // not included comment, but all fields are required
    cy.get('[type="submit"]').click({ force: true });
  });
});
