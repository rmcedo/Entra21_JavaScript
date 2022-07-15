// console.log("Hello World") // O console aceita parametros para exibir em log
// console.log("Rafael Macedo " + 27 + " anos"); // É possível concatenar texto e variáveis igual ao Java
// console.log("Rafael ", 27, " anos"); // O console aceita infinitos parametros, basta separar por vírgulas


// let nome = "Rafael"// LET cria uma variavel com escopo limitado
// var sobrenome = "Macedo" // VAR cria uma variavel que continua existindo mesmo depois do escopo
// console.log(nome)
// console.log("Meu nome é: " + nome);
// console.log("Meu nome é:", nome);
// console.log("Meu nome completo é: " + nome + " " + sobrenome);
// console.log(nome + " " + sobrenome);
// console.log(`Meu nome é ${nome}`);
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = 10
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = false
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = ""
// console.log("No momento nome é do tipo " + typeof (nome));


// let idade = 24
// let altura = 1.75
// console.log(`A variável idade é do tipo ${typeof (idade)} e a variável altura é ${typeof (altura)}`);

// // let mensagem=prompt("O que você está pensando?")
// // let interromper=prompt("Estou interrompendo?????")
// // console.log("Você está pensando em "+mensagem);
// // console.log("A informação capturada é do tipo "+typeof(mensagem));

// console.log("Os operadores aritméticos são os mesmos do Java: (+, -, *, /, %)");
// console.log("Somando " + (1 + 2));
// console.log("Subtraindo " + (1 - 2));
// console.log("Multiplicando " + (1 * 2));
// console.log("Dividindo " + (64 / 2));

// if (idade < 18) {

//         console.log("É menor de idade");

// } else {
//         console.log("É maior de idade");
// }
// if (altura < 1.5) {
//         console.log("Baixinho");

// } else if (altura < 1.7) {
//         console.log("Não tão baixo");
// } else {
//         console.log("Altura legal!!");
// }

// let resposta = (altura < 2 ? "Pessoa Normal" : "Gigante")

// console.log(resposta);

// switch (idade) {
//         case 1:
//                 console.log("1 aninho");
//                 break;
//         case 2:
//                 console.log("2 aninhos");
//                 break;

//         default:
//                 console.log("Tá ficando velho hein bixo");
//                 break;
// }

let resposta1 = prompt("Qual o seu nome?")
let resposta2 = prompt("Quantos anos você tem?")
let resposta3 = prompt("Onde você mora?")
console.log("Bem-vindo " + resposta1 + ", vejo que você tem " + resposta2 + " anos e mora em " + resposta3);

console.log("Somando sua idade: " + (27 + 27));
console.log("Subtraindo sua idade: " + (27 - 27));
console.log("Multiplicando sua idade: " + (27 * 27));
console.log("Dividindo sua idade: " + (27 / 27));

if (resposta2 > 18) {
        console.log("Você é maior de idade");

} else {
        console.log("Você é menor de idade");

}

if (resposta3 == "Blumenau") {
        console.log("Legal, aparentemente você mora em Blumenau");

} else {
        console.log("Bom... Você não mora em Blumenau");
}

let resposta4 = (resposta2 > 18 && resposta3 == "Blumenau" ? "Você é maior de idade e mora em Blumenau" : "Você não é maior de idade e não mora em Blumenau")
console.log(resposta4);