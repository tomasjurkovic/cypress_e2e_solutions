/// <reference types="cypress" />

describe("XHR Requests", () => {
    let message = "Unable to find comment";
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

    it("POST request", () => {
        cy.intercept({
            method: "POST",
            url: "**/comments"
        }).as("postComment");
        // intercept GET comments API with wildcards that contains '/commnets' in URL

        cy.get(".network-post").click();
        // cy.wait("@postComment").its("response.statusCode").should('eq', 200);
        cy.wait("@postComment").should(({request, response}) => {
            expect(request.body).include('email');
            expect(response.body).to.have.property('name', "Using POST in cy.intercept()");
            expect(request.headers).to.have.property('content-type');
            expect(request.headers).to.have.property("host", "jsonplaceholder.cypress.io");
        });
    });

    it("POST request with mocked response ", () => {
        cy.intercept({
            method: "POST",
            url: "**/comments"
        }, {
            body: {
                name: "David Raya",
                email: "david.raya@arsenal.com",
                body: "First post done this way",
                id: 666
            }
        }).as("postComment");
        // intercept GET comments API with wildcards that contains '/commnets' in URL

        cy.get(".network-post").click();
        // cy.wait("@postComment").its("response.statusCode").should('eq', 200);
        cy.wait("@postComment").should(({request, response}) => {
            console.log(request);
            console.log(response);

            expect(request.body).include('email');
            expect(response.body).to.have.property('name', "David Raya")

        });
    });

    it("PUT request mocking there is no content: 404 status code", () => {
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        }, {

            statusCode: 404,
            body: {
                error: message
            },
            delay: 500
        }).as("putComment");
        // intercept GET comments API with wildcards that contains '/commnets' in URL

        cy.get(".network-put").click();
        cy.wait("@putComment").its("response.statusCode").should('eq', 404);
        cy.get('.network-put-comment').invoke('text').should('eq', message)

    });
});
