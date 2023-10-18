describe("Handling uploading files", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");

    // using function for repeating step:
    cy.outsmartNewTabOpening("#file-upload");
  });
  it("Validate file upload", () => {
    cy.get("#myFile").selectFile("cypress/fixtures/example.json"); // providing real route to file
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.include("Your file has now been uploaded!");
    });
  });
  it("Validate no file upload", () => {
    // negative scenario when clicking on submit button before file is attached
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.include("You need to select a file to upload!");
    });
  });
});
