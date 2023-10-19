class Contact_Us_PO {
  // commands:
  fillContactUsForm(firstName, lastName, email, note) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    if (!note) return;
    cy.get("textarea.feedback-input").type(note);
  }

  submitContactUsForm() {
    cy.get('[type="submit"]').click({ force: true });
  }

  fillAndSubmitContactUsForm(
    firstName,
    lastName,
    email,
    note,
    $selector,
    $textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    if (note) cy.get("textarea.feedback-input").type(note);
    cy.get('[type="submit"]').click({ force: true });
    cy.get($selector).should("have.text", $textToLocate);
  }
}

export default Contact_Us_PO;
