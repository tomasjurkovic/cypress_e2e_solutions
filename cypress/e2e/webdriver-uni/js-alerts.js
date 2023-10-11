const { outsmartNewTabOpening } = require("./contact-us");

describe("Handling javaScript alerts", () => {
  it("Basic alert handling", () => {
    cy.visit("https://webdriveruniversity.com/");
    outsmartNewTabOpening("#popup-alerts");
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate js confirm alert box works correctly when clicking on 'Cancel'", () => {
    cy.visit("https://webdriveruniversity.com/");
    outsmartNewTabOpening("#popup-alerts");
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      // it has to be window:confirm if we wanted to simulate negative scenario of alert window
      expect(str).to.equal("Press a button!");
      return false;
      // it means, Cypress clicks on 'Cancel' button;
    });
    cy.get("#confirm-alert-text")
      .invoke("text")
      .should("eq", "You pressed Cancel!");
  });

  it("Validate js confirm alert box works correctly when clicking on 'OK'", () => {
    cy.visit("https://webdriveruniversity.com/");
    outsmartNewTabOpening("#popup-alerts");
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      // here it could be window:alert as well, but it has no chance to be false
      expect(str).to.equal("Press a button!");
      return true; // it means, Cypress clicks on 'OK' button;
    });
    cy.get("#confirm-alert-text")
      .invoke("text")
      .should("eq", "You pressed OK!");
  });

  it.only("Validate js confirm alert using stub", () => {
    cy.visit("https://webdriveruniversity.com/");
    outsmartNewTabOpening("#popup-alerts");

    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
        // expect(str).to.equal("Press a button!");
      })
      .then(() => {
        return true; // actually not needed, because false is not doing anything
      });
    cy.get("#confirm-alert-text")
      .invoke("text")
      .should("eq", "You pressed OK!");
  });
});
