procedimento() //CHAMADA
//Essa função está sendo chamada e não precisa de argumentos

bemVindo("Rafael")
bemVindo(true)
bemVindo(30)
bemVindo(bemVindo)
bemVindo(27.11)

login("Rafael", "*******")


maiorDeIdade(27)


let resultado = maiorDeIdade(16)
console.log(resultado)
console.log(maiorDeIdade(18));

let concatenado = maiorDeIdade(10) + maiorDeIdade(20)
console.log(concatenado);

console.log(calcularMedia(5, 8, 9))
verificarSituacaoColor(calcularMedia(4, 5, 8));
verificarSituacaoColor(calcularMedia(7, 10, 9));
console.log(verificarSituacao(calcularMedia(5, 8, 9)));


function procedimento() { //DECLARAÇÃO

    console.log("Esse tipo de função sempre executa da mesma forma, porque não tenho parâmetros para deixar dinâmico");

    console.warn("Essa função também não retorna nada");

}

function bemVindo(nome) {

    console.log(typeof (nome));
    console.warn("Bem-vindo " + nome);
    console.warn("Bem-vindo", nome);
    console.warn(`Bem-vindo ${nome}`);
}

function login(userName, password) {

    console.error("O usuário " + userName + " cuja a senha é: " + password + " está inadimplente")


}

function maiorDeIdade(idade) {

    if (idade < 18) {
        return "Menor de idade"

    } else {
        return "Maior de idade"

    }
}


function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3

}

function verificarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";


}

function verificarSituacaoColor(media) {
    if (media >= 7) {
        return console.warn("Aprovado");

    } else {
        return console.error("Reprovado");

    }
}

function soma(a,b){return a+b;}


function subtrair(a,b){return a-b}


function multiplicacao(a,b){return a*b}


function divisao(a,b){return a/b}



console.log(soma(1,10));

console.log(subtrair(10,1));

console.log(multiplicacao(10,10));

console.log(divisao(100,10));