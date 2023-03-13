///  <reference types="cypress" />


describe('[US-0001] – Adicionar item ao carrinho', () => {

    before(() => {
        cy.visit('produtos/')
    });

    it('Deve adicionar 3 produtos ao carrinho', () => {
        cy.addProdutos1('S', 'Red', 1)
        cy.addProdutos2('S','Blue',1)
        cy.addProdutos3('S','Orange',1)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '3')
    });
});
