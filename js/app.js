
/* =====================================================
   BIBLIOTECA DE BRINCADEIRAS
   Arquivo: app.js

   Responsável por:
   - Criar os cards
   - Pesquisar brincadeiras
   ===================================================== */


/* -----------------------------------------------------
   Lista de brincadeiras
----------------------------------------------------- */

const brincadeiras = [

    {
        nome: "Pega-Pega",
        categoria: "Ao Ar Livre",
        descricao: "Uma criança tenta pegar as outras.",
        imagem: "assets/pega pega.jpg"
    },

    {
        nome: "Corrida do Saco",
        categoria: "Ao Ar Livre",
        descricao: "Pule até a linha de chegada.",
        imagem: "assets/corrida-do-saco.jpg"
    },

    {
        nome: "Cabo de Guerra",
        categoria: "Grupo",
        descricao: "Duas equipes disputam força.",
        imagem: "assets/cabo-de-guerra.jpg"
    },

    {
        nome: "Amarelinha",
        categoria: "Coordenação",
        descricao: "Pule seguindo os números.",
        imagem: "assets/amarelinha.png"
    }

];


/* -----------------------------------------------------
   Pegando elementos do HTML
----------------------------------------------------- */

const cards = document.getElementById("cards");

const pesquisa = document.getElementById("campoPesquisa");

const botaoBuscar = document.getElementById("botaoBuscar");


/* -----------------------------------------------------
   Função responsável por criar os cards
----------------------------------------------------- */

function mostrarBrincadeiras(lista) {

    // Limpa a tela antes de criar os cards
    cards.innerHTML = "";

    // Percorre todas as brincadeiras
    lista.forEach(brincadeira => {

        cards.innerHTML += `

            <div class="card">

                <img
                    src="${brincadeira.imagem}"
                    alt="${brincadeira.nome}"
                >

                <h2 class="nome-brincadeira">
                    ${brincadeira.nome}
                </h2>

                <p>${brincadeira.descricao}</p>

                <small>${brincadeira.categoria}</small>

            </div>

        `;

    });

}


/* -----------------------------------------------------
   Função responsável pela pesquisa
----------------------------------------------------- */

function realizarPesquisa() {

    // Texto digitado pelo usuário
    const texto = pesquisa.value.toLowerCase().trim();

    // Filtra pelo nome ou categoria
    const resultado = brincadeiras.filter(brincadeira =>

        brincadeira.nome.toLowerCase().includes(texto) ||

        brincadeira.categoria.toLowerCase().includes(texto)

    );

    // Atualiza os cards
    mostrarBrincadeiras(resultado);

}


/* -----------------------------------------------------
   Mostra todas as brincadeiras quando o site abre
----------------------------------------------------- */

mostrarBrincadeiras(brincadeiras);


/* -----------------------------------------------------
   Pesquisa em tempo real
----------------------------------------------------- */

pesquisa.addEventListener("input", realizarPesquisa);


/* -----------------------------------------------------
   Pesquisa ao clicar no botão
----------------------------------------------------- */

if (botaoBuscar) {

    botaoBuscar.addEventListener("click", realizarPesquisa);

}