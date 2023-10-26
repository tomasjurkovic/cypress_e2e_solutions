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
    // two options how to extract JSON objects
    cy.log(exampleObject.key, exampleObject.key2); // Tim, Jones
    cy.log(exampleObject["key"], exampleObject["key2"]); // Tim, Jones

    // extract data from array:
    cy.log(exampleArrayOfValues[0], exampleArrayOfValues[1]); // Sophie, Rose

    // extract from more complex object:
    cy.log(users.lastName); // Blogs
    cy.log(users.students[1].lastName); // Parker
    cy.log(`${users.students[0].firstName} ${users.students[0].lastName}`); // Jim Blogs
  });
});
