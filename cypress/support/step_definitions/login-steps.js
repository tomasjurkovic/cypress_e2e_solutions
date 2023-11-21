import {
  Before,
  Given,
  When,
  Then,
  And,
} from "cypress-cucumber-preprocessor/steps";

Given("I access the WebdriverUniversity Login Portal Page", () => {
  cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html");
});

When("I enter a username webdriver {word}", (userName) => {
  cy.get("#text").type(userName);
});

And("I enter a password webdriver123 {word}", (userPassword) => {
  cy.get("#password").type(userPassword);
});

And("I clicked on the login button", () => {
  cy.get("#login-button").click();
});

Then(
  "I should be presented with the following message validation succeeded {word} {word}",
  (message, message2) => {}
);
