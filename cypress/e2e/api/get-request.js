/// <reference types="cypress" />

describe("Get request - GET Gin Tonic open API", () => {
  let result;
  it("Validate status code of the /gin%20tonic API", () => {
    result = cy.request(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin%20tonic"
    );
    result.its("status").should("equal", 200);
  });
});
