/// <reference types="cypress" />

describe("Put Request", () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests');
    });

    it("GET request", () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/*"
        }).as("getComment");
        // intercept GET comments API with wildcards that contains '/commnets/' in URL

        cy.get(".network-btn").click();
        cy.wait("@getComment").its("response.statusCode").should('eq', 200)
    });
});
