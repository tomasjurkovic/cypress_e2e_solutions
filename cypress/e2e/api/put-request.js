/// <reference types="cypress" />

describe("Put Request", () => {
    it("Updating an existing post via /posts/2 api", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                title: "Where can I buy apples",
                author: "Tom Jones"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    });

    it("Validate title of updated post", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/2",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            expect(body.author).to.eq("Tom Jones");
            expect(body.title).to.eq("Where can I buy apples");
        })
    })
});
