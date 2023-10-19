class Contact_Us_PO {
  // constructor and selectors:
  constructor() {
    this.firstNameInput = '[name="first_name"]';
    this.lastNameInput = '[name="last_name"]';
    this.emailInput = '[name="email"]';
    this.noteInput = "textarea.feedback-input";
    this.submitBtn = '[type="submit"]';
  }

  // commands:
  fillContactUsForm(firstName, lastName, email, note) {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.emailInput).type(email);
    if (!note) return;
    cy.get(this.noteInput).type(note);
  }

  submitContactUsForm() {
    cy.get(this.submitBtn).click({ force: true });
  }

  fillAndSubmitContactUsForm(
    firstName,
    lastName,
    email,
    note,
    $selector,
    $textToLocate
  ) {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.emailInput).type(email);
    if (note) cy.get(this.noteInput).type(note);
    cy.get(this.submitBtn).click({ force: true });
    cy.get($selector).should("have.text", $textToLocate);
  }
}

export default Contact_Us_PO;
