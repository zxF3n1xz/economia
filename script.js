const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]
//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);

const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;

const limparCampos = () => obterElemento('valor').value = '';

//Obter valores do formulário
const obterValorInformado = () => obterElemento('valor');
const obterCategoriaInformada = () => obterElemento('categoria').value;

//Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item [0] === nomeCategoria);

//Atualizar valores da matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () => {

    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome)
        elemento.textContent = `${nome}: R${valor}`
    })

}


function adicionarGastos() {

/*
    1. pegar o valor informado
    2. pegar categoria informada
    3. impedir números negativos
    4. de acordo com a categoria, atualiza o valor
    4.1 criar variáveis para controlar ou armazenar os valores de cada uma das categorias
    5. atualizar interface
    6. limpar campos
*/

}

