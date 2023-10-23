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
    outsmartNewTabOpening(this.contactUsLink), { timeout: 8000 };
    // overwriting default timeout settings can be done
    // also on custom commands, page object's method or on every command we want
  }
}

export default HomePage_PO;
