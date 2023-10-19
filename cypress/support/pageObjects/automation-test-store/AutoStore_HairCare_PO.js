class AutoStore_HairCare_PO {
  constructor() {
    this.basketEl = ".dropdown-toggle > .fa";
  }

  addHairCareProductsToBasket() {
    globalThis.data.productNames.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get(this.basketEl).click();
  }
}

export default AutoStore_HairCare_PO;
