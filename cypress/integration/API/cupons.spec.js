/// <reference types="cypress" />

describe('[US-0003] – API de cupons', () => {

    it('Deve listar todos os cupons cadastrados', () => {
        cy.request({
            method: 'GET',
            url: '/wp-json/wc/v3/coupons',
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            }
        }).should((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.duration).to.be.lessThan(3000)
        })
    });


    it('Deve cadastrar novo cupom', () => {

        let cupom = `CUPOM${Math.floor(Math.random() * 1000)}`

        cy.request({
            method: "POST",
            url: "/wp-json/wc/v3/coupons",
            body: {
                "code": cupom,
                "amount": "50.0",
                "discount_type": "fixed_product",
                "description": "Cupom teste EBAC"
            },
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            }
        }).should((resposta) => {
            expect(resposta.status).to.equal(201)
            expect(resposta.requestBody).to.not.be.null
        });
    });

});