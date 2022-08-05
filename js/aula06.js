//$.ajax() // jQuery usando Ajax

// $.ajax(
//     { // configuração da chamada

//     }
// )
// $.ajax(
//     { // configuração da chamada
//        url:"aqui coloque a sua URL + variaveis",
//        type:"aqui o tipo da chama  GET , POST , PUT , DELETE , PATH",
//        success:function(variavel_de_retorno){
//         //use a variavel de retorno se der certo
//        },
//        error: function(variavel_de_retorno_ruim){
//         //use a variavel de retorno ruim para tentar acertar na proxima
//         // ou saber oq motivou o erro
//        }
//     }
// )



$("#meu_ip").on("click", function () {

    $.ajax(
        {
            url: "https://httpbin.org/ip",
            type: "get",
            success: function (retorno) {

                console.log("Funcionando", retorno);
            },
            error: function (motivo) {
                console.warn("ERRO", motivo);
            },

        }

    )

})

$("#eco_get").on("click", function () {


    console.log("https://httpbin.org/get?nome=Rafael&Idade=28");

    $.ajax({

        url: "https://httpbin.org/get?nome=Rafael&Idade=28",
        type: "get",
        success: function (retorno) {
            console.log("Correto", retorno);

        },

        error: function (erro) {

            console.warn("Erro", erro);


        }
    })

})


$('#delay_get').on("click", () => {

    let numero = $('#tempo').val()

    $.ajax(
        {
            url: encodeURI("https://httpbin.org/delay/" + numero),
            type: "get",

            success: (retorno) => {

                console.log("Correto", retorno);
            },

            error: (motivo) => {
                console.warn("Erro", motivo);

            }
        }
    )
})

$('#post').on("click", () => {

    var objeto ={

        nome: $("#nome").val(),
        idade:$("#idade").val()
    };

$.ajax({

    url:"https://httpbin.org/post",
    type:"post",

    headers:{
        'Accept':"application/json",
        'Content-type':'application/json',

    },

    data: JSON.stringify(objeto),
    success: (dados) =>{
        alert("Veja os dados retornados no console...")
        console.log(dados);
    },

    error: (erro)=> {
        alert("Opa... temos um erro, veja no console!")
        console.error(erro);

    }
}


)
})
