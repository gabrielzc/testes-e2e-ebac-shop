class DetalhesProdutoPage {
    
    selecionarTamanho() {
        cy.get('[data-attribute_name="attribute_size"] > [role="radio"]')
            .then(($lis) => {
                const qtdTamanho = ($lis.length - 1)
                cy.get('[data-attribute_name="attribute_size"] > [role="radio"]').eq(qtdTamanho).click()
            })
    }

    selecionarTamanhoComParametro(tamanho) {
        cy.get('.button-variable-item-'+ tamanho).click()
    }

    selecionarCor() {
        cy.get('[data-attribute_name="attribute_color"] > [role="radio"]')
            .then(($lis) => {
                const qtdTamanho = ($lis.length - 1)
                cy.get('[data-attribute_name="attribute_color"] > [role="radio"]').eq(qtdTamanho).click()
            })
    }

    selecionarCorComParamentro(cor) {
        cy.get('.button-variable-item-'+ cor).click()
    }

    validarEstoque() {
        cy.get('.stock').then($estoque => {            
        if ($estoque.text() == 'Fora de estoque') {
            cy.get('[data-attribute_name="attribute_size"] > [role="radio"]')
                .then(($lis) => {
                    let contador = ($lis.length - 2)
                        cy.get('[data-attribute_name="attribute_size"] > [role="radio"]').eq(contador).click()
                })           
            cy.get('[data-attribute_name="attribute_color"] > [role="radio"]')
                .then(($lis) => {
                    const contador = ($lis.length - 2)
                    cy.get('[data-attribute_name="attribute_color"] > [role="radio"]').eq(contador).click()
                })
        }
        else cy.log("Com estoque - Não faz nada")
    })

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