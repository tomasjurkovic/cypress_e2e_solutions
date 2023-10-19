/// <reference types="Cypress"/>
// import { outsmartNewTabOpening } from "../../support/commands";
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

describe("Test Contact Us page form viac webdriverUni", () => {
  before(function () {
    // no need to even use example.json
    cy.fixture("example").then(function (data) {
      // this.data = data; // not working so I replaced it with following:
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    const homepage_PO = new HomePage_PO();
    homepage_PO.visitHomePage();
    homepage_PO.clickOn_ContactUs_Button();
    // cy.visit(
    //   Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html"
    // );
    // cy.visit("/" + "/Contact-Us/contactus.html");

    // it replaced this:
    // cy.visit("/");
    // // using function for repeating step:
    // outsmartNewTabOpening("#contact-us");
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    // possitive scenario code
    // NOW JUST FAKE ACCESS THE OPENED TAB:
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy dokument, title and url examples:
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "/Contact-Us/contactus.html");

    cy.fillContactUsFormWebUni(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      data.body
    );
    cy.submitContactUsFormWebUni();
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
    cy.fillContactUsFormWebUni(
      data.first_name,
      data.last_name,
      data.email_invalid,
      undefined
    );

    // not included comment, but all fields are required
    cy.submitContactUsFormWebUni();
    cy.get("body").contains("Error: all fields are required");
    cy.get("body").should(
      "have.text",
      "\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n"
    );
  });

  it("Should be able to submit a successful submission via contact us form in one custom command", () => {
    // possitive scenario code
    cy.fillAndSubmitContactUsFormWebUni(
      data.first_name,
      data.last_name,
      data.email,
      data.body,
      "#contact_reply h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form ass all fields are required in one custom command", () => {
    // possitive scenario code
    cy.fillAndSubmitContactUsFormWebUni(
      data.first_name,
      data.last_name,
      data.email_invalid,
      undefined,
      "body",
      "\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n"
    );
  });
});
