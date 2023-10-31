/// <reference types="cypress" />

describe("XHR Requests", () => {
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
            expect(request.headers).to.have.property('origin', 'https://example.cypress.io');
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
});
