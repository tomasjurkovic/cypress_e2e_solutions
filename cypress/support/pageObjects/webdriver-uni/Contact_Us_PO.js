class Contact_Us_PO {
  // commands:
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
    cy.submitContactUsFormWebUni();
    cy.get($selector).should("have.text", $textToLocate);
  }
}

export default Contact_Us_PO;
