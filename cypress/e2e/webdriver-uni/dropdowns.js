const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling dropdowns", () => {
  it("Handle first dropdown", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    cy.get("#dropdowm-menu-1").as("progLangDropdown");

    // check default value:
    cy.get("@progLangDropdown").should("have.value", "java");

    cy.get("@progLangDropdown").select("python");
    cy.get("@progLangDropdown").should("have.value", "python");
  });

  it("Handle second dropdown", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    cy.get("#dropdowm-menu-2").as("secondDropdown");

    // check default value:
    cy.get("@secondDropdown").should("have.value", "eclipse");

    cy.get("@secondDropdown").select("testng");
    cy.get("@secondDropdown").should("have.value", "testng");
  });

  it("Handle third dropdown", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");

    cy.get("#dropdowm-menu-3").as("thirdDropdown");

    // check default value:
    cy.get("@thirdDropdown").should("have.value", "html");

    cy.get("@thirdDropdown").select("javascript");
    cy.get("@thirdDropdown").should("have.value", "javascript");
  });
});
