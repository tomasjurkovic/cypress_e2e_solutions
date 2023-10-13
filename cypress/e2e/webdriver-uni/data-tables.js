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

  it.only("Calculate and assert the total age of all users suggested solution", () => {
    let userDetails = [];
    let numOfAges = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            cy.log(userDetails[i]);
            numOfAges += Number(userDetails[i]);
          }
        }
        expect(numOfAges).to.eq(322);
      });
  });
});
