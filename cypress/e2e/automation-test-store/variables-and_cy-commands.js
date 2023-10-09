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

  it.only("Validate correct text names", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Using cypress commans and chaining:
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");
    // here I can check if it has specific ID and correct name in one placr:
    // inside of it I found specific ID of a DIV
    // and check that it contains 'First name' text label

    // Using JQuerry:

    // Embedded commands (closures):
  });
});
