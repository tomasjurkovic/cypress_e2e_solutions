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

  it("Validate correct text names", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Using cypress commans and chaining:
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");
    // here I can check if it has specific ID and correct name in one placr:
    // inside of it I found specific ID of a DIV
    // and check that it contains 'First name' text label

    // Using JQuerry:
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      // Embedded commands (closures):
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });

  it.only("Iterating over element", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log(`Index: ${index} : ${$el.text()}`);
    });
  });

  it.only("Iterating over element", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text() === "Eau Parfumee au The Vert Shampoo") {
        cy.wrap($el).click();
      }
    });
  });
});
