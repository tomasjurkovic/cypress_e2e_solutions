/// <reference types="cypress" />

describe("Put Request", () => {
    const bodyText = "Hello world";
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
        cy.wait("@getComment").its("response.statusCode").should('eq', 200);
    });

    it("GET request with mocked response", () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/*"
        },
            {
                body: {
                    postId: 1,
                    id: 1,
                    name: "Test name 123",
                    email: 'joe.blogs@gmail.com',
                    body: bodyText
                }
            }).as("getComment");
        // intercept GET comments API with wildcards that contains '/commnets/' in URL

        cy.get(".network-btn").click();
        cy.wait("@getComment").its("response.statusCode").should('eq', 200);
        cy.get('.network-comment').invoke('text').should('contain', bodyText);
    });
});
