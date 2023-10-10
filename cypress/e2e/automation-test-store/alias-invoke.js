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

  it("Validate hair care products quantity and add to cart button", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("products");
    cy.get("@products").should("have.length", 16);
    cy.get("@products")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total value of products", () => {
    let finalPrice = 0;
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("products");
    // cy.get("@products")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get("@products").find(".oneprice").invoke("text").as("itemPrice");
    let totalPrice = 0;
    cy.get("@itemPrice").then(($linkText) => {
      let itemPrice = $linkText.split("$");
      for (let i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        totalPrice += Number(itemPrice[i]);
        cy.log(totalPrice);
      }
    });
    cy.get("@products").find(".pricenew").invoke("text").as("actionPrice");
    cy.get("@actionPrice")
      .then(($linkText) => {
        let itemPrice = $linkText.split("$");
        for (let j = 0; j < itemPrice.length; j++) {
          cy.log(itemPrice[j]);
          totalPrice += Number(itemPrice[j]);
          cy.log(totalPrice);
        }
      })
      .then(() => {
        expect(totalPrice).to.equal(660.5);
      });
  });
});
