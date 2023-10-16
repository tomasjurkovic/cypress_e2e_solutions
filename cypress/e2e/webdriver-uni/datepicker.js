const { outsmartNewTabOpening } = require("../../support/commands");

describe("Handling radio buttons", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    outsmartNewTabOpening("#datepicker");
  });
  it.skip("Selecting dates examples", () => {
    let date = new Date();
    date.setDate(date.getDate()); // get current day / i.e. 16
    let datePlus5 = new Date();
    datePlus5.setDate(datePlus5.getDate() + 5); // get day that is five days from now i.e. 21
    cy.log(date.getDate()); // logs 16
    cy.log(datePlus5.getDate()); // logs 21
  });

  it("Filing datepicker with value with right amount of power", () => {
    const dateInString = "11-02-2024";
    cy.get("#datepicker input").invoke("val").should("eq", "10-16-2023");
    cy.get("#datepicker input")
      .clear({ force: true })
      .type(dateInString, { force: true });
    cy.get("#datepicker input").invoke("val").should("eq", dateInString);
  });

  it("Selecting future dates examples with assertion", () => {
    let date = new Date();
    date.setDate(date.getDate() + 365);

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleDateString("default", { month: "long" });
    let futureMonthNumber = date.getMonth() + 1; // it is index based for weird reason
    let futureDay = date.getDate();
    let completeFutureDateInString = `${futureMonthNumber}-${futureDay}-${futureYear}`;

    cy.log(
      `Future year to select: ${futureYear}.\nFuture month to select: ${futureMonth} (${futureMonthNumber}).\nFuture day to select: ${futureDay}.`
    );
    cy.get("#datepicker").click();

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear(); // this will keep going as a loop until it matches criteria
          }
        })
        .then((currentDate) => {
          if (!currentDate.text().includes(futureMonth)) {
            cy.get(".next").first().click({ force: true });
            selectMonthAndYear(); // this will keep going as a loop until it matches criteria
          }
        });
    }

    function selectFutureDay() {
      cy.get('[class="day"]').contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
    cy.get("#datepicker input")
      .invoke("val")
      .should("eq", completeFutureDateInString);
  });

  it.only("Selecting past dates examples with assertion", () => {
    let date = new Date();
    date.setDate(date.getDate() - 365);

    let pastYear = date.getFullYear();
    let pastMonth = date.toLocaleDateString("default", { month: "long" });
    let pastMonthNumber = date.getMonth() + 1; // it is index based for weird reason
    let pastDay = date.getDate();
    let completePastDateInString = `${pastMonthNumber}-${pastDay}-${pastYear}`;

    cy.log(
      `past year to select: ${pastYear}.\npast month to select: ${pastMonth} (${pastMonthNumber}).\npast day to select: ${pastDay}.`
    );
    cy.get("#datepicker").click();

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(pastYear)) {
            cy.get(".prev").first().click();
            selectMonthAndYear(); // this will keep going as a loop until it matches criteria
          }
        })
        .then((currentDate) => {
          if (!currentDate.text().includes(pastMonth)) {
            cy.get(".prev").first().click({ force: true });
            selectMonthAndYear(); // this will keep going as a loop until it matches criteria
          }
        });
    }

    function selectPastDay() {
      cy.get('[class="day"]').contains(pastDay).click();
    }
    selectMonthAndYear();
    selectPastDay();
    cy.get("#datepicker input")
      .invoke("val")
      .should("eq", completePastDateInString);
  });
});
