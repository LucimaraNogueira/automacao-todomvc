import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista de ToDo', () => {

  /**
   * DADO -  BEFORE - ANTES DO PRIMEIRO TESTE
   * BEFORE EACH - ANTES DE CADA TESTE
   */

  beforeEach(() => {
    cy.visit('/')
  })


  it('Adicionar um item na lista', () => {
    telaInicial.inputText("dado1")

  })

  it('Adicionar mais de um item a lista', () => {

    var todoItens = ["Maçã", "Banana", "Cenorura"]

    todoItens.forEach(function (item, indice, array) {
      telaInicial.inputText(item)

    })

  });
})

