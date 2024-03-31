class commonPage{
    visitGoogle(url) {
        cy.visit(url);
    }
}
export default new commonPage();
