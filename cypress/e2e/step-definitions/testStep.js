import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../Pages/commonPage"

let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
  commonPage.visitGoogle(url);
});

When('I close google', () => {
cy.get('button').contains('Rechazar todo').click();
});
