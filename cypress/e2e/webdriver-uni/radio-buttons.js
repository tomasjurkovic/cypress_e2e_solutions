const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling radio buttons", () => {
  it("Handle radio button", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    // cy.get("#radio-buttons input[value='blue']").as("radioBlue");
    //   cy.get("@radioBlue").check();
    // could be replaced:
    cy.get("#radio-buttons").find("input[type='radio']").eq(1).as("radioBlue");
    cy.get("@radioBlue").check();
    cy.get("@radioBlue").should("be.checked");

    cy.get("#radio-buttons input[value='yellow']").as("radioYellow");
    cy.get("@radioYellow").check();
    cy.get("@radioYellow").should("be.checked");
    cy.get("@radioBlue").should("not.be.checked");
  });

  it("Validate disabled radio button", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    cy.get("#radio-buttons-selected-disabled input[value='cabbage']").as(
      "radioDisabled"
    );
    cy.get("@radioDisabled").should("be.disabled");
  });

  it.only("Validate already checked radio button", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    cy.get("#radio-buttons-selected-disabled input[value='pumpkin']").as(
      "radioChecked"
    );

    // defaultly checked assertion:
    // pumpkin is checked by default
    cy.get("@radioChecked").should("be.checked");

    cy.get("#radio-buttons-selected-disabled input[value='lettuce']").as(
      "radioLettuce"
    );
    cy.get("@radioLettuce").check();
    cy.get("@radioLettuce").should("be.checked");
    cy.get("@radioChecked").should("not.be.checked");
  });
});
