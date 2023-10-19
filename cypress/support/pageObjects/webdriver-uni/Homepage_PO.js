import { outsmartNewTabOpening } from "../../commands";

class HomePage_PO {
  // commands:
  visitHomePage() {
    cy.visit(Cypress.env("webdriveruni_homepage"));
  }

  clickOn_ContactUs_Button() {
    outsmartNewTabOpening("#contact-us");
  }
}

export default HomePage_PO;
