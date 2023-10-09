describe("Aliases and Invoke test suite", () => {
  it("Validate specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it.only("Validate hair care products quantity and add to cart button", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("products");
    cy.get("@products").should("have.length", 16);
    cy.get("@products")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
});
