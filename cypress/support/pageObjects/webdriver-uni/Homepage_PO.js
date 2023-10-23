import { outsmartNewTabOpening } from "../../commands";

class HomePage_PO {
  // selectors:
  constructor() {
    this.contactUsLink = "#contact-us";
  }
  // commands:
  visitHomePage() {
    cy.visit(Cypress.env("webdriveruni_homepage"), { timeout: 60000 });
    // here we override default settings where timeout is set to 2 minutes
  }

  clickOn_ContactUs_Button() {
    outsmartNewTabOpening(this.contactUsLink);
  }
}

export default HomePage_PO;
