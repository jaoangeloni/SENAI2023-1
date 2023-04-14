const main = document.querySelector("main")
const listar = document.querySelector('#lista')
const itens = document.querySelector('#listaCardapio')
const formAvaliacao = document.querySelector("#formAvaliacao")
const bemVindo = document.querySelector("#bemVindo")
const nota = document.querySelector("#nota")
const descricao = document.querySelector("#descricao")
const avaliacoes = document.querySelector("#avaliacoes")
const dadosCliente = JSON.parse(localStorage.getItem("cliente"));

var idRestaurante = 0;

function carregar() {
    bemVindo.innerHTML = dadosCliente.nome;
    restaurantes();    
}

function logoff() {
    localStorage.removeItem("corretor");
    window.location.href = "./login.html";
}

function categorias() {
    api.get("/categorias")
    .then(resp => {
        resp.data.forEach(e => {
            let card = document.createElement('div')
            card.classList.add("categoria")
            
            let pCategoria = document.createElement('p')

            pCategoria.innerHTML = e.nome

            card.appendChild(pCategoria)
            main.appendChild(card)


            card.setAttribute('onclick', `restaurantes('${e.id}')`)
        });
    })
}

function restaurantes(id) {
    let endpoint = '/restaurante';

    if(id != undefined) endpoint += '/categoria/' + id;

    api.get(endpoint)
    .then(resp => {        

        listar.innerHTML = "<p>Restaurantes</p>"

        resp.data.forEach(e => {
            let item = document.createElement('div')
            item.id = e.id;
            item.classList.add("restaurante")

            let pNome = document.createElement('p')
            let cardapio = document.createElement('button')
            cardapio.classList.add("cardapio")
            let pEndereco = document.createElement('p')

            cardapio.id = item.id
            cardapio.innerHTML = "Conferir cardápio"
            pNome.innerHTML = e.nome
            pEndereco.innerHTML = e.endereco

            item.appendChild(pNome)
            item.appendChild(pEndereco)
            item.appendChild(cardapio)
            listar.appendChild(item)
            
            cardapio.setAttribute('onclick', `cardapio('${e.id}'); listaAvaliacoes()`)
        })
    })
}

function cardapio(id) {
    idRestaurante = id;

    let endpoint = '/cardapio';

    if(id != undefined) endpoint += '/restaurante/' + id;
    api.get(endpoint)

    
    .then(resp => {
        listar.classList.toggle("sumiu")
        itens.classList.toggle("sumiu")

        itens.innerHTML = "<p>Cardápio</p>"
        resp.data.forEach(e => {
            let item = document.createElement('div')
            item.classList.add("restaurante")

            let div = document.createElement('p')
            div.innerHTML = "Voltar"
            div.setAttribute("id", "fechar")
            div.setAttribute('onclick', `fechar()`)

            
            let pNome = document.createElement('p')
            let pPreco = document.createElement('p')
            pNome.innerHTML = e.descricao
            pPreco.innerHTML = e.valor
            
            
            item.appendChild(pNome)
            item.appendChild(pPreco)
            item.appendChild(div)
            itens.appendChild(item)
            
        })
        let avaliar = document.createElement('button')
        avaliar.setAttribute("id", "avaliacao")
        avaliar.setAttribute('onclick', `formAvaliacao.classList.toggle("sumiu")`)
        avaliar.innerHTML = "Avaliar Restaurante"
        itens.appendChild(avaliar)
    })
}

function fechar(){
    listar.classList.toggle("sumiu")
    itens.classList.toggle("sumiu")
}


function avaliar() {
    console.log(idRestaurante)

    let avaliacao = { 
        "restauranteId": idRestaurante,
        "clienteId": dadosCliente.id,
        "data" : new Date(),
        "nota": nota.value,
        "descricao": descricao.value
    }
    api.post("/avaliar", avaliacao)
    .then(resp => {
        alert("Obrigado pelo FeedBack!")
        nota.value = ""
        descricao.value = ""
    })
} 

function listaAvaliacoes() {
    avaliacoes.classList.toggle("sumiu")
    api.get("/avaliacao/restaurante/"+ idRestaurante)
    .then(resp => {
        console.log(resp.data)
        avaliacoes.innerHTML = "<p>Lista de avaliações</p>"
        resp.data.forEach(e => {
            let item = document.createElement('div')
            item.classList.add("restaurante")
            
            let pNome = document.createElement('p')
            let pPreco = document.createElement('p')

            pNome.innerHTML = "Nota: " + e.nota
            pPreco.innerHTML = e.descricao
            
            
            item.appendChild(pNome)
            item.appendChild(pPreco)
            avaliacoes.appendChild(item)
        })
    })

}
