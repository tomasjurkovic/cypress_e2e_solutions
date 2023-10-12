const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling mouse action", () => {
  it("Handling scrolling into view event", () => {
    cy.visit("https://webdriveruniversity.com/");
    // this is the way how to scrollIntoView
    cy.get("#actions").scrollIntoView();
    // using function for repeating step:t
    outsmartNewTabOpening("#actions");
  });

  it("It should be able to drag and drop a dragable item", () => {
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:t
    outsmartNewTabOpening("#actions");

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    cy.get("#droppable").invoke("text").should("include", "Dropped!");
    cy.get("#droppable p")
      .should("have.css", "background-color")
      .and("eq", "rgb(244, 89, 80)");
  });

  it("It should be able to perform doubleclick event", () => {
    cy.visit("https://webdriveruniversity.com/");
    // using function for repeating step:t
    outsmartNewTabOpening("#actions");
    // check first color:
    cy.get("#double-click")
      .should("have.css", "background-color")
      .and("eq", "rgb(254, 196, 45)");
    cy.get("#double-click").dblclick();

    // verify color-change after doubleclick:
    cy.get("#double-click")
      .should("have.css", "color")
      .and("eq", "rgb(0, 0, 0)");
    cy.get("#double-click")
      .should("have.css", "background-color")
      .and("eq", "rgb(147, 203, 90)");
  });

  it.only("Validate holding a left mouse clickcbutton on a given element", () => {
    cy.visit("https://webdriveruniversity.com/");
    // using function for repeating step:t
    outsmartNewTabOpening("#actions");

    // assertion before action: black color and differen text
    cy.get("#click-box")
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 0, 0)");
    cy.get("#click-box").invoke("text").should("include", "Click and Hold!");
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        // validations for color and tex)t
        expect($element).to.have.text(
          "Well done! keep holding that click now....."
        );
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
