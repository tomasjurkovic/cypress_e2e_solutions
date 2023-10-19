const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling iFrame and modals", () => {
  beforeEach(() => {
    cy.visit("/");
    outsmartNewTabOpening("#iframe");
  });

  it("Handle webdriveruni iframe and modal", () => {
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");
    cy.get("@modal")
      .find(".modal-header")
      .invoke("text")
      .should("contain", "Welcome to webdriveruniversity.com");
    cy.get("@modal")
      .find(".modal-body")
      .invoke("text")
      .should(
        "contain",
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras..."
      );
    // close modal by btn contain text:
    cy.get("@modal").contains("Close").click();
  });
});
