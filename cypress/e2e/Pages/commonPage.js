export class CommonPage{
    visitGoogle(url) {
        cy.visit(url);
    }

    getInputByPlaceholder (placerholderName) {
    return cy.get(`[placeholder="${placerholderName}"]`);
    }
}
