/// <reference types="cypress" />

describe("Get request - GET Gin Tonic open API", () => {
  let result;
  it("Validate status code of the /gin%20tonic API", () => {
    result = cy.request(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin%20tonic"
    );
    result.its("status").should("equal", 200);
  });
  it("Validate correct keys and values of the /gin%20tonic API", () => {
    cy.request({
      method: "GET",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin%20tonic",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      expect(body.drinks[0].idDrink).to.eq("178365");
      expect(body.drinks[0]).has.property("strAlcoholic", "Alcoholic");
      expect(body.drinks[0]).has.property("strDrink", "Gin Tonic");
      expect(body.drinks[0]).has.property("strCategory", "Cocktail");
      expect(body.drinks).to.have.length(1); // there is only one object
    });
  });

  it("Validate status code of the /bloody API which finds 3 drinks", () => {
    cy.request({
      method: "GET",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=bloody",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      cy.log(body);
      console.log(body);
      expect(body.drinks).to.have.length(3); // there are 3
      const drinks = JSON.parse(JSON.stringify(response.body.drinks));
      // not working but
      //   drinks.forEach(function (item) {
      //     expect(item[0]).to.have.all.keys("idDrink", "dateModified");
      //   });
    });
  });
});
