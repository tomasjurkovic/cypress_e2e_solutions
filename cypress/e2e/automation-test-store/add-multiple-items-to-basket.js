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
    // cy.get(".jumbotron").each(($el, index, $list) => {
    //   $el[index]
    //     .find("a[title$='Add to Cart']")
    //     .first()
    //     .then(($btnEl) => {
    //       cy.wrap($btnEl).click();
    //     });
    //   cy.log(`Index: ${index} : ${$el.text()}`);
    // });
  });
});
