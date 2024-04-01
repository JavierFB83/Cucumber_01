@regression
Feature: Curso automatización con Cypress

    Background: login y visita de pagina

    @smoke
    Scenario: Smoke1
        Given I visit "https://example.cypress.io/todo"
        And I type "prueba" on the input with placeholder "What needs to be done?"

    Scenario: Uso de Gherkin
        Given I visit "https://example.cypress.io/todo"
        And I type "prueba" on the input with placeholder "What needs to be done?"
    @smoke
    Scenario: Smoke2
        Given I visit "https://example.cypress.io/todo"
        And I type "prueba" on the input with placeholder "What needs to be done?"