class DetalhesProdutoPage {

    selecionarTamanho(tamanho) {
        cy.get('.button-variable-item-'+ tamanho).click()
    }

    selecionarCor(cor) {
        cy.get('.button-variable-item-'+ cor).click()
    }

    adicionarQuantidadeProdutosCompra(qtdProdutos) {
        cy.get('.input-text').clear()
        cy.get('.input-text').type(qtdProdutos)
    }

    clicarComprarProduto() {
        cy.get('.single_add_to_cart_button').click()
    }

    clicarVerCarrinho() {
        cy.get('.woocommerce-message > .button').click()
    }
}

export default new DetalhesProdutoPage()