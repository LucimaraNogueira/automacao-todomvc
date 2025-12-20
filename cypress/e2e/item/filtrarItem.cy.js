import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação  após adição de itens', () => {

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

    telaInicial.concluirItem()
  })


  /**
   * Clicar no filtro
   * O item ser exibido
   * E o contador deve bater com a informação 
   */

  it('Filtrar intens ativos', () => {
    telaInicial.filtrarItem("Active")

  });

  it.skip('Filtrar intens concluídos', () => {

  });

})

