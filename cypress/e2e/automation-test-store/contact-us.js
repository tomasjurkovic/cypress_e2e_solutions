/// <reference types="Cypress"/>

describe("Test Contact Us page form via Automation test store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer a").contains("Contact Us").click();
    cy.get("#ContactUsFrm_first_name").type("Tomas");
    cy.get("#ContactUsFrm_email").type("tomas@jurkovic.sk");
    cy.get("#ContactUsFrm_enquiry").type("Just some text message");
    cy.get(".btn").contains("Submit").click();
  });
});
