Feature: Curso automatización con Cypress

Background: login y visita de pagina

  Scenario: Uso de Gherkin
    Given I visit "https://example.cypress.io/todo"
    And I type "prueba" on the input with placeholder "What needs to be done?"
