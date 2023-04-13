const main = document.querySelector("main")
const listar = document.querySelector('.lista')

const bemVindo = document.querySelector("#bemVindo")

function carregar() {
    let dadosCliente = JSON.parse(localStorage.getItem("cliente"));
    
    bemVindo.innerHTML = dadosCliente.nome;

    restaurantes();    
}

function logoff() {
    localStorage.removeItem("corretor");
    
    window.location.href = "./login.html";
}

function restaurantes(id) {
    let endpoint = '/restaurante';

    if(id != undefined) endpoint += '/categoria/' + id;

    api.get(endpoint)
    .then(resp => {        
        listar.innerHTML = "<p>Restaurantes</p>"

        resp.data.forEach(e => {
            let res = document.createElement('div')
            res.id = e.id;
            res.classList.add("restaurante")

            let pNome = document.createElement('p')
            let pEndereco = document.createElement('p')

            pNome.innerHTML = e.nome
            pEndereco.innerHTML = e.endereco

            res.appendChild(pNome)
            res.appendChild(pEndereco)
            listar.appendChild(res)

        })
    })
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

