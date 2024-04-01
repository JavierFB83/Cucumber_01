import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { MainPage } from "../Pages/mainPage"

//Instancias de clase
let mainPage = new MainPage();

//Steps
When("I type {string} on the input with placeholder {string}", (text, placeholderName) => {
  mainPage.typeSomething(text, placeholderName)
});

Then("I should be redirected to the board detail", () => {
  cy.location("pathname").should('match', /\/board\/\d/);
});