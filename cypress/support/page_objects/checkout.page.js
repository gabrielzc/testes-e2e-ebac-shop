const dadosEndereco = require('../../fixtures/endereco.json')
var faker = require('faker');

class Checkout {

    preecherDetalhesFaturamento() {
        let nome = faker.name.firstName()
        let sobrenome = faker.name.lastName()
        let email = faker.internet.email(nome)

        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(dadosEndereco[0].empresa)
        cy.get('#select2-billing_country-container').click().type(dadosEndereco[0].pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(dadosEndereco[0].endereco)
        cy.get('#billing_address_2').clear().type(dadosEndereco[0].numero)
        cy.get('#billing_city').clear().type(dadosEndereco[0].cidade)
        cy.get('#select2-billing_state-container').click().type(dadosEndereco[0].estado + '{enter}')
        cy.get('#billing_postcode').clear().type(dadosEndereco[0].cep)
        cy.get('#billing_phone').clear().type(dadosEndereco[0].telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#order_comments').type('Entregar para o porteiro')

    }

    selecionarPagamento(formaPagamento) {
        cy.get('.wc_payment_method').contains(formaPagamento).click()
    }

    aceitarTermosCondicoes() {
        cy.get('#terms').click()
    }

    finalizarCompra() {
        cy.get('#place_order').click()
    }

    mensagemPedidoRecebido() {
        cy.wait(4000)
        cy.get('.woocommerce-notice').contains('Obrigado. Seu pedido foi recebido.')
    }

}

export default new Checkout