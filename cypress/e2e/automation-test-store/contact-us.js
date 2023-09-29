/// <reference types="Cypress"/>

describe("Test Contact Us page form via Automation test store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get(".info_links_footer a").contains("Contact Us").click();
    // alternative version>
    // cy.get(
    //   'a[href="https://automationteststore.com/index.php?rt=content/contact"]'
    // ).click();
    // optimaized:
    cy.get('a[href$="contact"]').click();
    cy.get("#ContactUsFrm_first_name").type("Tomas");
    cy.get("#ContactUsFrm_email").type("tomas@jurkovic.sk");
    cy.get("#ContactUsFrm_enquiry").type("Just some text message");

    // xpath using unique ID:
    // x path using text and html element
    // cy.get("//a[text()='Contact Us']").click();
    // cy.get(".btn").contains("Submit").click();
    // alternative verion>
    cy.get('button[title = "Submit"]').click();
  });
});
