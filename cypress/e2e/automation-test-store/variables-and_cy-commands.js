describe("Verifying variables, cypress commands and jquerry commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");

    // this will work:
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    // makeupLink.click();

    // const skincareLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    //   skincareLink.click();

    // recommended approach:
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']")
      .contains("Makeup")
      .click()
      .then(($headerText) => {
        const headerText = $headerText.text().trim();
        cy.log(`Found header text: ${headerText}`);
        expect(headerText).is.eq("Makeup");
      });
  });
});
