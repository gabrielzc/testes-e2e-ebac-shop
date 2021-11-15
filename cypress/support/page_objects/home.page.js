class HomePage {

    clicarLogoEbacShop() {
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
    }

    adicionarProduto(produto) {
        cy.get('[class="product-block grid"]').eq(produto).click()
    }

    adicionarProdutoPeloNome(produto) {
        cy.get('[class="product-block grid"]').contains(produto).click()
    }
}

export default new HomePage()