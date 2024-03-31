import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import {CommonPage} from "../Pages/commonPage";
import {MainPage} from "../Pages/mainPage"

let commonPage = new CommonPage();
let mainPage = new MainPage();

When("I type {string} on the input with placeholder {string}", (text, placeholderName) => {
  mainPage.typeSomething(text, placeholderName)
});

Then("I should be redirected to the board detail", () => {
  cy.location("pathname").should('match', /\/board\/\d/);
});