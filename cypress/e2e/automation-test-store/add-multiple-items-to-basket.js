import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";

describe("Adding multiple items to the basket", () => {
  const autostore_homepage_PO = new AutoStore_Homepage_PO();
  const autostore_haircare_PO = new AutoStore_HairCare_PO();
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    autostore_homepage_PO.navigateToHomepage();
    autostore_homepage_PO.clickOn_HairCare_Link();
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific items to basket", () => {
    autostore_haircare_PO.addHairCareProductsToBasket();
  });
});
