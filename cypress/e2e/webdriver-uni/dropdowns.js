const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling dropdowns", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");
    outsmartNewTabOpening("#dropdown-checkboxes-radiobuttons");
  });

  it("Handle first dropdown", () => {
    cy.get("#dropdowm-menu-1").as("progLangDropdown");

    // check default value:
    cy.get("@progLangDropdown").should("have.value", "java");

    cy.get("@progLangDropdown").select("python");
    cy.get("@progLangDropdown").should("have.value", "python");
  });

  it("Handle second dropdown", () => {
    cy.get("#dropdowm-menu-2").as("secondDropdown");

    // check default value:
    cy.get("@secondDropdown").should("have.value", "eclipse");

    cy.get("@secondDropdown").select("testng");
    cy.get("@secondDropdown").should("have.value", "testng");

    // chalenge: select by text
    cy.get("@secondDropdown").select("JUnit");
    cy.get("@secondDropdown").should("have.value", "junit");
  });

  it("Handle third dropdown", () => {
    cy.get("#dropdowm-menu-3").as("thirdDropdown");

    // check default value:
    cy.get("@thirdDropdown").should("have.value", "html");

    cy.get("@thirdDropdown").select("javascript");
    cy.get("@thirdDropdown").should("have.value", "javascript");
  });

  it("Validate fourth dropdown has some disabled option", () => {
    cy.get("#fruit-selects").as("fruitsDropdown");

    // check default value:
    cy.get("@fruitsDropdown").should("have.value", "grape");

    // check if Orange value is disable
    cy.get("@fruitsDropdown")
      .find('option[value="orange"]')
      .should("be.disabled");

    // check if Pear value is enabled:
    cy.get("@fruitsDropdown").find('option[value="pear"]').should("be.enabled");
  });
});
