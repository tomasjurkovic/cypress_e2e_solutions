class AutoStore_HairCare_PO {
  constructor() {
    this.basketEl = ".dropdown-toggle > .fa";
  }

  addHairCareProductsToBasket() {
    globalThis.data.productNames.forEach(function (element) {
      cy.addProductToBasket(element);
      //   .then(() => {
      //   // debugger;
      //   // this is how to use debugger with then command
      // });
    });
    // cy.get(this.basketEl).click().debug();
    // it is possible to use it as a command in chain
    cy.get(this.basketEl).click();
  }
}

export default AutoStore_HairCare_PO;
