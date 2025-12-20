import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens na minha lista de ToDo', () => {

    /**
     * DADO -  BEFORE - ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - ANTES DE CADA TESTE
     */

    beforeEach(() => {
        cy.visit('/')

        var todoItens = ["Maçã", "Banana", "Cenorura"]

        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item)

        })
    })

    it('Concluir um item da lista de toDo', () => {
        telaInicial.concluirItem()

    });
})

