console.group("Ler conteúdos com jQuery")

console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());

console.groupEnd()




console.group("Alterar conteudos com jQuery")

$("#paragrafo_2").text("Conteúdo escrito com jQuery")
console.log($("#paragrafo_2").text());

console.groupEnd()

console.group("Ler vários conteúdos com jQuery")

let lista = $("p")

console.log(lista);
console.log(lista.text());

$("p").each(function () {
    console.log(this.textContent);
})
console.groupEnd()

console.group("Escrever vários conteúdos com jQuery")

$("li").text("li escrito com jQuery")
console.groupEnd()

console.group("Criar elementos com jQuery")

$("<button>", {
    text: "Clique aqui",
    class: "fw-semibold mt-2 btn btn-sm btn-outline-info"

}).appendTo("#aqui")

$("#aqui").append(
    $("<br>"),
    $("<br>"),
    $("<b>", { text: "Texto em Negrito" }),
    $("<br>"),
    $("<i>", { text: "Texto em Itálico" })
)

console.groupEnd()

console.group('Mais de um item com jQuery');

console.groupEnd();

console.log('==================');
console.group('Exercício criar vários conteúdos com jQuery');

//One table
//Thead
//th
//th
//th

//Tbody
//tr
//td
//td
//td
//tr
//td
//td
//td


$("<table>", { class: "mt-2 table table-bordered table-hover table-dark" }).append(
    $("<thead>", { class: "bg-dark" }).append(
        $("<th>", { text: "Nome" }),
        $("<th>", { text: "Idade" }),
        $("<th>", { text: "Cidade" }),

    ),
    $("<tbody>").append(
        $("<tr>").append(
            $("<td>", { text: "Rafael" }),
            $("<td>", { text: "28" }),
            $("<td>", { text: "Brusque" }),
        ),
        $("<tr>").append(
            $("<td>", { text: "Beltrano" }),
            $("<td>", { text: "99" }),
            $("<td>", { text: "Palhoça" }),
        ),
        $("<tr>").append(
            $("<td>", { text: "Ciclano" }),
            $("<td>", { text: "27" }),
            $("<td>", { text: "Pelotas" }),
        ),
    )
).appendTo("body")

console.groupEnd();

console.log("====================");

console.group('Eventos de click em qualquer lugar');

// $("button").on("click",function(){

//     alert("Fala meu bom!!")
// })

$("li").on("click", function () {

    console.warn("CUIDADO MEU BOM!!")
})

$("#ok").on("click", function () {

    alert("It's OK")
})
console.groupEnd();


console.group('Exercício Button with Alert ');

$("#add").on("click", function () {

    $("<p>", { text: "Isso foi um teste criando um ALERT", class: "alert alert-danger" }).appendTo("body")
})

$("#limpar").on("click", function () {

    $(".alert").remove()
})

console.groupEnd();