const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling checkboxes", () => {
  it("Handle checking checkbox", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");
    // with assertion as well
    cy.get("#checkboxes input[value='option-1']").as("option1");
    cy.get("@option1").check();
    cy.get("@option1").should("be.checked");
    // or use this:
    //cy.get('#checkboxes > :nth-child(1) input')
  });

  it("Handle unchecking checkbox", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    // checkbox 3 is already chekced
    cy.get("#checkboxes input[value='option-3']").as("option3");
    cy.get("@option3").uncheck();
    cy.get("@option3").should("not.be.checked");
  });
});
