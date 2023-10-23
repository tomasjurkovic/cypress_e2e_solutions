/// <reference types="Cypress"/>

describe("Test Contact Us page form via Automation test store", () => {
  before(() => {
    // using change of viewport size:
    // cy.viewport(550, 750);
    // cy.viewport("iphone-xr");
    // using alias in the same logic as I used it in another contact us test for webdriveruni
    cy.fixture("userDetails").as("user");
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get(".info_links_footer a").contains("Contact Us").click();
    // alternative version>
    // cy.get(
    //   'a[href="https://automationteststore.com/index.php?rt=content/contact"]'
    // ).click();
    // optimaized:
    cy.get('a[href$="contact"]')
      .click()
      .then(function (linkText) {
        console.log(`Headline of this link is following: ${linkText.text()}`);
      });

    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("Just some text message");

    // xpath using unique ID:
    // x path using text and html element
    // cy.get("//a[text()='Contact Us']").click();
    // cy.get(".btn").contains("Submit").click();
    // alternative verion>
    cy.get('button[title = "Submit"]').click();

    // first assertion to verify if text message is correct:
    cy.get(".contentpanel p:nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
