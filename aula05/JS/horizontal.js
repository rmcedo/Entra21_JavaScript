console.group('Criando Página Horizontal');


$("body").attr("class", "container-fluid bg-secondary mt-2");

$("<header>", { class: "row" }).append(
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body" }).append(
                $("<h1>", {
                    class: "display-6 text-center fw-bold",
                    text: "Título da Página"
                })
            ),
            $("<div>", { class: "text-center card-footer" }).append(
                $("<a>", {
                    class: "btn btn-lg btn-outline-success fw-lighter",
                    href: "/vertical.html",
                    text: "Página Vertical"
                }),
                $("<a>", {
                    class: "m-2 btn btn-lg btn-outline-success fw-lighter",
                    href: "/crud.html",
                    text: "Crud"
                }),
            )
        )
    )).appendTo("body")


$("<main>", { class: "mt-2 row" }).append(
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body" }).append(
                $("<table>", {class:"mt-2 table table-bordered table-hover table-dark"}).append(
                    $("<thead>",{class:"bg-dark"}).append(
                        $("<th>", {text:"Nome"}),
                        $("<th>", {text:"Idade"}),
                        $("<th>", {text:"Cidade"})
                    ),
                    $("<tbody>").append(
                        $("<tr>").append(
                            $("<td>",{text:"Rafael"}),
                            $("<td>",{text:"28"}),
                            $("<td>",{text:"Brusque"}),
                        ),
                        $("<tr>").append(
                            $("<td>",{text:"Daiane"}),
                            $("<td>",{text:"27"}),
                            $("<td>",{text:"Brusque"}),
                        ),
                        $("<tr>").append(
                            $("<td>",{text:"Vitor"}),
                            $("<td>",{text:"30"}),
                            $("<td>",{text:"Pelotas"}),
                        )
                    )
                )

            ), $("<div>", { class: "mt-1 text-center card-footer", 
            text: "© rmcedo - Página criada totalmente com jQuery",
        style:"font-size: 12px" })
        )
    )
).appendTo("body")


console.groupEnd();



