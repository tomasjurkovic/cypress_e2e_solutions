// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text() === productName) {
      cy.wrap($el).click();
    }
  });
});

// example of how it looks with export:
export function outsmartNewTabOpening(element) {
  // mine solution:
  // cy.get(element).as("element");
  // cy.get("@element").then(($el) => {
  //   $el.removeAttr("target");
  // });

  // cy.get("@element").click({ force: true });

  // easier with cypress invoke in one line:
  cy.get(element).invoke("removeAttr", "target").click({ force: true });
}

// how it looks as cypress custom command:
Cypress.Commands.add("outsmartNewTabOpening", (linkEl) => {
  cy.get(linkEl).invoke("removeAttr", "target").click({ force: true });
});

Cypress.Commands.add(
  "fillContactUsFormWebUni",
  (firstName, lastName, email, note) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    if (!note) return;
    cy.get("textarea.feedback-input").type(note);
  }
);

Cypress.Commands.add("submitContactUsFormWebUni", () => {
  cy.get('[type="submit"]').click({ force: true });
});

Cypress.Commands.add(
  "fillAndSubmitContactUsFormWebUni",
  (firstName, lastName, email, note, $selector, $textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    if (note) cy.get("textarea.feedback-input").type(note);
    cy.submitContactUsFormWebUni();
    cy.get($selector).should("have.text", $textToLocate);
  }
);

Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text() === productName) {
      cy.log($el.text());
      cy.get(".productcart").eq(index).click();
    }
  });
});

Cypress.Commands.add("navigateTo_WebDriverUni_HomePage", (productName) => {
  cy.visit("/");
});

Cypress.Commands.add("navigateTo_WebDriverUni_Checkbox_Page", (productName) => {
  cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
});
