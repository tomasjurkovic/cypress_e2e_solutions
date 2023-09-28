/// <reference types="Cypress"/>

describe("Test Contact Us page form viac webdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").click({ force: true });
  });

  it("Should not be able to submit a successful submission via contact us form ass all fields are required", () => {
    // negative scenario code
  });
});
