const container = document.querySelector("#container")

const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []

function preencherCards() {
    pedidos.forEach((e, i) => {
        const card = document.createElement("div");
        card.classList.add("card")
        const id = document.createElement("p");
        const data = document.createElement("p")
        const nome = document.createElement("p");
        const preco = document.createElement("p");
        const status = document.createElement("p")
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        data.innerHTML = `Data: ${new Date().toLocaleString()}`;
        preco.innerHTML = e.preco;
        status.innerHTML = "Status: Pedido no forno"
        card.appendChild(data);
        card.appendChild(id);
        card.appendChild(nome);
        card.appendChild(preco);
        card.appendChild(status);
        container.appendChild(card)
    })
}

function limparDados(){
    window.localStorage.removeItem("pedidos");
    window.location.reload();
}