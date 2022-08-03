
console.warn("READ");
let leitura = document.getElementById("paragrafo_ler")

console.log(leitura);

console.log("Apenas o conteudo ou textContent", leitura.textContent);
console.log("Apenas o conteúdo mais elementos internos com HTML", leitura.innerHTML);

let aprendendo_leitura = document.getElementById("test_01")

console.log(aprendendo_leitura.textContent);
console.log(aprendendo_leitura.innerHTML);

console.warn("READ MORE");

let paragrafos = [...document.getElementsByTagName("p")]

console.log("Lendo todos os paragrafos", paragrafos);

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.innerHTML);
});

console.warn("WRITE");

let escrita = document.getElementById("paragrafo_escrever")

escrita.textContent = "Esse paragrafo foi escrito com JavaScript"
escrita.title = "Olá gente!!! SENIOR ME CONTRATA"

document.getElementById("ta_aqui").textContent = "Botão alterado com JavaScript"
document.getElementById("alterar_1").textContent = "Texto ANTES Alterado"
document.getElementById("alterar_2").textContent = "TEXTO ANTES ALTERADO 2"

function mudarTexto(conteudo) {

    let elemento = document.getElementById("outro_id")
    elemento.title = conteudo
    elemento.textContent = conteudo

}

function addConteudo(conteudo) {
    let enter = document.createElement("br");

    document.body.append(enter);

    let elemento = document.createElement("div");
    elemento.textContent = conteudo;

    document.body.append(elemento);


}