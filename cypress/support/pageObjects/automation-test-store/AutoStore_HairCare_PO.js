class AutoStore_HairCare_PO {
  addHairCareProductsToBasket() {
    globalThis.data.productNames.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default AutoStore_HairCare_PO;
