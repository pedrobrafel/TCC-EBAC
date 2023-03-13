///  <reference types="cypress" />


describe('[US-0001] – Adicionar item ao carrinho', () => {

    before(() => {
        cy.visit('produtos/')
    });

    it('Deve adicionar 3 produtos ao carrinho', () => {
        cy.addProduto1('S', 'Red', 1)
        cy.addProduto2('S','Blue',1)
        cy.addProduto3('S','Orange',1)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '3')
    });
});
