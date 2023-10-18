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
