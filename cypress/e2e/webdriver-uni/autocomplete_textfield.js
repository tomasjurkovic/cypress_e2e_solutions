const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling autocomplete dropdown list", () => {
  it("Validate selecting specific product via autocomplete dropdown list", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#autocomplete-textfield");
    cy.get("#myInput").type("A");

    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const product = $el.text();
        const productToSelect = "Avacado";
        if (product === productToSelect) {
          $el.click();
          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
        // challenge to extend test and add check for grapes:
      })
      .then(() => {
        cy.get("#myInput").type("G");

        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const product = $el.text();
          const productToSelect = "Grapes";
          if (product === productToSelect) {
            $el.click();
            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
          // challenge to extend test and add check for grapes:
        });
      });
  });
});
