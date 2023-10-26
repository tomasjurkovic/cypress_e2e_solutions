describe("JSON object", () => {
  it("JSON Object Examples", () => {
    const exampleObject = {
      key: "Tim",
      key2: "Jones",
    };

    const exampleArrayOfValues = ["Sophie", "Rose", "Howard"];

    const users = {
      firstName: "Joe",
      lastName: "Blogs",
      age: 30,
      students: [
        {
          firstName: "Jim",
          lastName: "Blogs",
        },
        {
          firstName: "Sarah",
          lastName: "Parker",
        },
      ],
    };

    const exampleArrayOfObjects = [
      { key: "Luke" },
      { key: "Granit" },
      { key: "Fabio" },
    ];
    // two options how to extract JSON objects
    cy.log(exampleObject.key, exampleObject.key2); // Tim, Jones
    cy.log(exampleObject["key"], exampleObject["key2"]); // Tim, Jones

    // extract data from array:
    cy.log(exampleArrayOfValues[0], exampleArrayOfValues[1]); // Sophie, Rose

    // extract from more complex object:
    cy.log(users.lastName); // Blogs
    cy.log(users.students[1].lastName); // Parker
    cy.log(`${users.students[0].firstName} ${users.students[0].lastName}`); // Jim Blogs

    // extracting all values from array of objects:
    cy.log(
      exampleArrayOfObjects[0].key,
      exampleArrayOfObjects[1].key,
      exampleArrayOfObjects[2].key
    ); // prints Luke, Granit, Fabio
  });
});
