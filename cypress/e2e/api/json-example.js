describe("JSON object", () => {
  it("JSON Object Examples", () => {
    const exampleObject = {
      key: "Tim",
      key2: "Jones",
    };

    // two options how to extract JSON objects
    cy.log(exampleObject.key, exampleObject.key2);
    cy.log(exampleObject["key"], exampleObject["key2"]);
  });
});
