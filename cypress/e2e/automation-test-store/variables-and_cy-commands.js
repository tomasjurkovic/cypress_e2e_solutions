describe("Verifying variables, cypress commands and jquerry commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");

    makeupLink.click();
    skincareLink.click();
  });
});
