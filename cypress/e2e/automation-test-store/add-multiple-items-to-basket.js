describe("Adding multiple items to the basket", () => {
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific items to the basket", () => {
    globalThis.data.productNames.forEach(function (element) {
      cy.addProductToBasket(data.productNames[element]);
    });
  });
});
