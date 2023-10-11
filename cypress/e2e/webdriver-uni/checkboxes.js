const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling checkboxes", () => {
  it("Validate checking checkbox", () => {
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

  it("Validate unchecking checkbox", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    // checkbox 3 is already chekced
    cy.get("#checkboxes input[value='option-3']").as("option3");
    cy.get("@option3").uncheck();
    cy.get("@option3").should("not.be.checked");
  });

  it.only("Validate checking multiple checkboxes at once", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    // checkbox 3 is already chekced
    cy.get("#checkboxes input").as("checkboxes");
    cy.get("@checkboxes").check();
    cy.get("@checkboxes").should("be.checked");
  });

  it.only("Validate that some checkboxes are checked and some not", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    // checkbox 3 is already chekced
    cy.get("#checkboxes input").check(["option-2", "option-4"]);

    // checking that 1. checkbox is not checked and all other are:
    cy.get("#checkboxes input[value='option-1']").should("not.be.checked");
    cy.get("#checkboxes input[value='option-2']").should("be.checked");
    cy.get("#checkboxes input[value='option-3']").should("be.checked");
    cy.get("#checkboxes input[value='option-4']").should("be.checked");
  });
});
