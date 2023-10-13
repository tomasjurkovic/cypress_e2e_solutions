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

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get(".traversal-pagination").find("a").should("have.length", 7);

    // find can get us multiple elements which are located inside the DOM tree under previously selected element
    // actual test just checks if there 7 a links elements in pagination
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get(".traversal-table tbody > tr > td")
      .first()
      .invoke("text")
      .should("eq", "Andy");
    // .traversal-table tbody > tr > td has 6 matches in 3 table rows
    // first() only returns the first of 6 elements
    // which is Andy

    cy.get(".traversal-table tbody > tr")
      .first()
      .invoke("text")
      .should("include", "Andy")
      .and("include", "Otto");
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get(".traversal-table tbody > tr > td")
      .last()
      .invoke("text")
      .should("eq", "Scott");
    // .traversal-table tbody > tr > td has 6 matches in 3 table rows
    // last() only returns the last of 6 elements
    // which is Scott
    // it is just opposite of first()

    cy.get(".traversal-table tbody > tr")
      .last()
      .invoke("text")
      .should("include", "Scott")
      .and("include", "Larry");
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    // we can use nextAll() for verifying remaining siblings of an element that are located under the elemnt in the DOM tree
    // challenge is to assert number of elements located under the 'Tea' list item>
    // it has its own ID, so it's easy to locate
    cy.get("#tea").nextAll().should("have.length", 3);
    // it should include espresso in the list
    cy.get("#tea").nextAll().invoke("text").should("include", "Espresso");
    // next sibling element should be 'Milk'
    cy.get("#tea").next().should("have.text", "Milk");
  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get("#coffee")
      .nextUntil("#milk")
      .should("have.length", 1)
      .and("have.text", "Tea");
    // next until runs until meets specified condition
    // so only 'Tea' list item is listed back
    // not including provided element, that's why only 1 is returnd in this case
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    // using not to lacate all buttons that are not disabled:
    cy.get(".traversal-button-states")
      .find(".btn")
      .not(".disabled")
      .should("have.length", 3)
      .and("not.have.class", "disabled");
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get(".traversal-mark")
      .parent()
      .should("contain", "Lorem ipsum dolor sit amet")
      .and("contain", "quisque sagittis purus sit amet volutpat consequat.");
  });

  it("parents() to get parents DOM element of elements", () => {
    cy.get(".traversal-cite").parents().should("match", "blockquote");
    // assertion that blockquote is located as one of the paremnts of cite element
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    // challenge: check if previous list item in UL is Espresso if actual is Sugar:
    cy.get("#sugar").prev().should("contain", "Espresso");
  });

  it.only("prevAll() to get all previous sibling DOM elements within elements", () => {
    // challenge: assert types of jobs and veridy number of previous jobs if sales is selected
    cy.get(".sales").prevAll().should("have.length", 2);
    // there are 2, because actual element it does not count
    cy.get(".sales")
      .prevAll()
      .invoke("text")
      .should("include", "Finance")
      .and("include", "Technology");
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {});

  it("siblings() To get all sibling DOM elements of elements", () => {});
});
