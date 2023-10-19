import { outsmartNewTabOpening } from "../../commands";

class HomePage_PO {
  // selectors:
  constructor() {
    this.contactUsLink = "#contact-us";
  }
  // commands:
  visitHomePage() {
    cy.visit(Cypress.env("webdriveruni_homepage"));
  }

  clickOn_ContactUs_Button() {
    outsmartNewTabOpening(this.contactUsLink);
  }
}

export default HomePage_PO;
