describe("Verifying variables, cypress commands and jquerry commands", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Iterating over element to show indexes in the log", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log(`Index: ${index} : ${$el.text()}`);
    });
  });

  it("Iterating over element with Eau Parfumee au The Vert Shampoo", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });

  it("Iterating over element with Pantene Pro-V Conditioner, Classic Care", () => {
    cy.selectProduct("Pantene Pro-V Conditioner, Classic Care");
  });

  it("Iterating over element with Curls to straight Shampoo, Classic Care", () => {
    cy.selectProduct("Curls to straight Shampoo, Classic Care");
  });
});
