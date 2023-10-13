/// <reference types="Cypress" />

const { outsmartNewTabOpening } = require("../../support/commands");

describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    outsmartNewTabOpening("#data-table");
  });

  it("children() to get the children of DOM elements", () => {
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

  it("closest() to validate the closest ancestor DOM element", () => {
    cy.get(".traversal-badge").closest("ul").should("have.class", "list-group");
    // it is good example of using closest when traversal up through document
  });

  it("eq() to retrieve a specific element based on index", () => {
    // example of using eq() command and assert if third item in the list is 'Milk'
    cy.get(".traversal-drinks-list")
      .find("li")
      .eq(2)
      .invoke("text")
      .should("eq", "Milk");

    // same with fourth 'esspresso', numbers are index based:
    cy.get(".traversal-drinks-list > *")
      .eq(3)
      .invoke("text")
      .should("eq", "Espresso");

    // this is without 'find('li') because there are only 5 li elements
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get(".btn-group-toggle > *")
      .filter(".active")
      .should("have.class", "active")
      .and("have.text", "Button-1")
      .and("have.css", "background-color")
      .and("eq", "rgb(40, 96, 144)");
    // using filter to specify element based on some condition
    // here it is that select only btns which has active class
    // only one btn is selected based on this filter
  });

  it.only("find() to retrieve DOM elements of a given selector", () => {
    cy.get(".traversal-pagination").find("a").should("have.length", 7);

    // find can get us multiple elements which are located inside the DOM tree under previously selected element
    // actual test just checks if there 7 a links elements in pagination
  });

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