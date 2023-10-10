/// <reference types="Cypress"/>

describe("Test Contact Us page form viac webdriverUni", () => {
  function outsmartNewTabOpening(element) {
    // mine solution:
    // cy.get(element).as("element");
    // cy.get("@element").then(($el) => {
    //   $el.removeAttr("target");
    // });

    // cy.get("@element").click({ force: true });

    // easier with cypress invoke in one line:
    cy.get(element).invoke("removeAttr", "target").click({ force: true });
  }

  it("Should be able to submit a successful submission via contact us form", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#contact-us");
    // NOW JUST FAKE ACCESS THE OPENED TAB:
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy dokument, title and url examples:
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "/Contact-Us/contactus.html");

    cy.get('[name="first_name"]').type("Tomas");
    cy.get('[name="last_name"]').type("Jurkovic");
    cy.get('[name="email"]').type("tomas@jurkovic.sk");
    cy.get("textarea.feedback-input").type(
      "This is the comments section, so I put comment there."
    );
    cy.get('[type="submit"]').click({ force: true });
    cy.get("#contact_reply h1").should(
      "have.text",
      "Thank You for your Message!"
    );

    console.log("Test finished successfully");
    cy.log("This is equivalent of above, actually visible in Cypress console");
  });

  // it.only('only this test would ru', () => {
  //   // some random test which would be only run if it is outcommented
  // });

  it("Should not be able to submit a successful submission via contact us form ass all fields are required", () => {
    // negative scenario code
    cy.visit("https://webdriveruniversity.com/");
    outsmartNewTabOpening("#contact-us");

    cy.get('[name="first_name"]').type("Tomas");
    cy.get('[name="last_name"]').type("Jurkovic");
    // invalid email address:
    cy.get('[name="email"]').type("tomas@sk");
    // not included comment, but all fields are required
    cy.get('[type="submit"]').click({ force: true });
    cy.get("body").contains("Error: all fields are required");
    cy.get("body").should(
      "have.text",
      "\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n"
    );
  });
});
