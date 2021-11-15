/// <reference types="cypress" />
import HomePage from '../support/page_objects/home.page'
import DetalhesProdutoPage from '../support/page_objects/detalhesProduto.page'
import CarrinhoPage from '../support/page_objects/carrinho.page'
import Checkout from '../support/page_objects/checkout.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // Primeiro produto
        HomePage.adicionarProduto(0)
        DetalhesProdutoPage.selecionarTamanho()
        DetalhesProdutoPage.selecionarCor()
        DetalhesProdutoPage.validarEstoque()
        DetalhesProdutoPage.adicionarQuantidadeProdutosCompra(1)
        DetalhesProdutoPage.clicarComprarProduto()
        HomePage.clicarLogoEbacShop()

        // Segundo produto
        HomePage.adicionarProduto(1)
        DetalhesProdutoPage.selecionarTamanho()
        DetalhesProdutoPage.selecionarCor()
        DetalhesProdutoPage.validarEstoque()
        DetalhesProdutoPage.adicionarQuantidadeProdutosCompra(1)
        DetalhesProdutoPage.clicarComprarProduto()
        HomePage.clicarLogoEbacShop()

        // Terceiro produto
        HomePage.adicionarProduto(2)
        DetalhesProdutoPage.selecionarTamanho()
        DetalhesProdutoPage.selecionarCor()
        DetalhesProdutoPage.validarEstoque()
        DetalhesProdutoPage.adicionarQuantidadeProdutosCompra(1)
        DetalhesProdutoPage.clicarComprarProduto()
        HomePage.clicarLogoEbacShop()

        // Quarto produto
        HomePage.adicionarProdutoPeloNome('Stellar Solar Jacket')
        DetalhesProdutoPage.selecionarTamanhoComParametro('S')
        DetalhesProdutoPage.selecionarCorComParamentro('Blue')
        DetalhesProdutoPage.adicionarQuantidadeProdutosCompra(1)
        DetalhesProdutoPage.clicarComprarProduto()
        
        DetalhesProdutoPage.clicarVerCarrinho()
        CarrinhoPage.clicarConcluirCompra()
        Checkout.preecherDetalhesFaturamento()
        Checkout.selecionarPagamento('Cheque')
        Checkout.aceitarTermosCondicoes()
        Checkout.finalizarCompra()
        Checkout.mensagemPedidoRecebido()
});


})