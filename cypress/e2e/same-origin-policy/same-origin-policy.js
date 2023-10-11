describe("Cypress web security", () => {
  it.skip("Validate visiting two different domains", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
    cy.get(".welcome_msg h4")
      .invoke("text")
      .should("contain", "Welcome to the Automation Test Store!");
  });

  it("Validate visiting two different domains via user actions", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
    cy.get(".welcome_msg h4")
      .invoke("text")
      .should("contain", "Welcome to the Automation Test Store!");
  });

  it("Different origins", () => {
    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });
    cy.origin("webdriveruniversity.com", () => {
      cy.visit("/");
    });
  });
});
