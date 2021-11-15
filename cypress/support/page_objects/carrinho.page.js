class CarrinhoPage {
    clicarConcluirCompra() {
        cy.get('.checkout-button').click()
    }
}

export default new CarrinhoPage