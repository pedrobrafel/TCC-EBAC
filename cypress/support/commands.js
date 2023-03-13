// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addProdutos1', (tamanho, cor, quantidade) => {
    cy.get('.search').should('be.visible')
        .type('Abominable Hoodie', { delay: 50 })
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group')
        .click()
    cy.get('.product_title').should('be.visible')
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.')
})

Cypress.Commands.add('addProdutos2', (tamanho, cor, quantidade) => {
    cy.get('.search').should('be.visible')
        .type('Stellar Solar Jacket', { delay: 50 })
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group')
        .click()
    cy.get('.product_title').should('be.visible')
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Stellar Solar Jacket” foi adicionado no seu carrinho.')
})

Cypress.Commands.add('addProdutos3', (tamanho, cor, quantidade) => {
    cy.get('.search').should('be.visible')
        .type('Ingrid Running Jacket', { delay: 50 })
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group')
        .click()
    cy.get('.product_title').should('be.visible')
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Ingrid Running Jacket” foi adicionado no seu carrinho.')
})
