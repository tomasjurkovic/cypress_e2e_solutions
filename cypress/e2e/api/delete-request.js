/// <reference types="cypress" />

describe("Put Request", () => {
    it("Updating an existing post via /posts/12 api", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/12",
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    });

    it("Validate that post was deleted", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/12",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            expect(response.status).to.eql(404)
        })
    })
});
