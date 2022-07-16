function definirArray() {

    console.log("Para criar um Array basta let nome=[]");
    console.log("Para criar um Array com itens basta let nome=[5,13,2,10,3]");

    let listaVazia = []

    console.log(listaVazia);
    let nomes = ["Rafael", "TimeGreen"]
    console.log(nomes);

}

definirArray()

function alertar(mensagem) {

    alert(mensagem)
}

var lista = ["Rafael","Rafael Macedo","Rafael Silva", "Rafael da Silva Macedo"]

function inserirArray(novoNome) {

    lista.push(novoNome)
    console.log(lista);
}

function listarFor() {
    for (let contador = 0; contador < lista.length; contador++) {
        console.log("Repetindo com o FOR o indice " + contador + " = " + lista[contador]);

    }
    console.log("-------");
    for (const item of lista) {
        console.log("Repetindo com FOR inteligente, sem contar o indice " + item);
    }

    console.log("-------");
    lista.forEach(item => {
        console.log("Outro FOR, dessa vez o ForEach, sem contar o indice "+item);
    });
}

