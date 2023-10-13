/// <reference types="Cypress" />

const { outsmartNewTabOpening } = require("../../support/commands");

describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    outsmartNewTabOpening("#data-table");
  });

  it.only("children() to get the children of DOM elements", () => {
    cy.get(".traversal-breadcrumb")
      .children(".active")
      .should("contain", "Contact Us");
    // this should verify that contact us link has a .active class

    cy.get(".traversal-breadcrumb")
      .children(".breadcrumb-item")
      .should("contain", "About Us");
    // this is just mine addition which works fine.
    // all three links have this specific class, so it works for all of them
  });

  it("closest() to validate the closest ancestor DOM element", () => {});

  it("eq() to retrieve a specific element based on index", () => {});

  it("filter() to retrieve DOM elements that match a specific selector", () => {});

  it("find() to retrieve DOM elements of a given selector", () => {});

  it("first() to retrieve the first DOM element within elements ", () => {});

  it("last() to retrieve the last DOM element within elements", () => {});

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {});

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {});

  it("not() to remove DOM element(s) from the set of elements", () => {});

  it("parent() To get parent DOM element of elements", () => {});

  it("parents() to get parents DOM element of elements", () => {});

  it("prev() to get the previous sibling DOM element within elements", () => {});

  it("prevAll() to get all previous sibling DOM elements within elements", () => {});

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {});

  it("siblings() To get all sibling DOM elements of elements", () => {});
});
