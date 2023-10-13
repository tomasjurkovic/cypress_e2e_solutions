/// <reference types="Cypress" />

const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handle data table via WebdriverUni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    outsmartNewTabOpening("#data-table");
  });

  it("Calculate and assert the total age of all users mine solution", () => {
    let finalAge = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        const td = Number($el.text());
        if (td) {
          // litterally using truthy value
          cy.log(td);
          finalAge += td;
        }
      })
      .then(($el) => {
        expect(finalAge).is.eq(322);
      });
  });

  it("Calculate and assert the total age of all users mine solution", () => {
    let userDetails = [];
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        const td = Number($el.text());
        if (td) {
          // litterally using truthy value
          cy.log(td);
          finalAge += td;
        }
      })
      .then(($el) => {
        expect(finalAge).is.eq(322);
      });
  });
});
