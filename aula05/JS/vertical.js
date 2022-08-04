console.group('Criando página menu vertical jQuery');

$("body").attr("class", "container-fluid bg-dark mt-2");

$("<header>", { class: "row" }).append(
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card" }).append(
            $("<div>", { class: "text-center card-body" }).append(
                $("<h1>", {
                    class: "display-6 fw-semibold",
                    text: "Página Menu Vertical"
                })
            )
        )
    )
)
    .appendTo("body")

$("<main>", { class: "mt-2 row" }).append(
    $("<section>", { class: "col-3" }).append(
        $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body text-center" }).append(
                $("<a>", { class: "col btn btn-large btn-outline-success", href: "/horizontal.html", text: "Página Horizontal" }),
                $("<a>", { class: "mt-1 btn btn-large btn-outline-success", href: "/crud.html", text: "CRUD" })
            )

        )

    ),
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body" }).append(
                $("<table>", { class: "mt-2 table table-bordered table-hover table-secondary" }).append(
                    $("<thead>", { class: "text-light bg-secondary" }).append(
                        $("<th>", { text: "Nome" }),
                        $("<th>", { text: "Idade" }),
                        $("<th>", { text: "Cidade" })
                    ),
                    $("<tbody>").append(
                        $("<tr>").append(
                            $("<td>", { text: "Rafael" }),
                            $("<td>", { text: "28" }),
                            $("<td>", { text: "Brusque" }),
                        ),
                        $("<tr>").append(
                            $("<td>", { text: "Daiane" }),
                            $("<td>", { text: "27" }),
                            $("<td>", { text: "Brusque" }),
                        ),
                        $("<tr>").append(
                            $("<td>", { text: "Vitor" }),
                            $("<td>", { text: "30" }),
                            $("<td>", { text: "Pelotas" }),
                        )
                    )
                )
            ),
            $("<div>", {
                class: "mt-1 text-center card-footer", text: "© rmcedo - Página criada totalmente com jQuery",
                style: "font-size: 12px"
            })

        )
    )
).appendTo("body")
console.groupEnd();

console.group('');

console.groupEnd();