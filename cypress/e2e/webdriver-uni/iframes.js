const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling iFrame and modals", () => {
  it("Handle webdriveruni iframe and modal", () => {
    // possitive scenario code
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#iframe");
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
    // close modal by btn containing text:
    cy.get("@modal").contains("Close").click();
  });
});
