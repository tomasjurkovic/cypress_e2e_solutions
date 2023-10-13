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

  it("Calculate and assert the total age of all users suggested solution", () => {
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

  it("Validate 'Woods' age is correct mine", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const lastName = "Woods";
      const age = "80";
      const text = $el.text();
      if (text.includes(lastName)) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .invoke("text")
          .should("eq", age);
      }
    });
  });

  it.only("Calculate and assert the age of a given user based on last name by author", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
