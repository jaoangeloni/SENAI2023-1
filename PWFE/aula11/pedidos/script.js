const container = document.querySelector("#container")
const lista = document.querySelector("#lista")
const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []

function preencherCards() {
    pedidos.forEach((e, i) => {
        var pedidoId = 1;
        const produtos = pedidos[i].produtos;
        const card = document.createElement("div");
        card.classList.add("card");
        
        const id = document.createElement("p");
        const data = document.createElement("p");
        const preco = document.createElement("p");
        const status = document.createElement("p");
        let total = 0;
        
        data.innerHTML = `Data: ${pedidos[i].data}`
        id.innerHTML = `Id do pedido: ${pedidoId}`
        status.innerHTML = "Status: Pedido no forno";
        
        card.appendChild(id);
        card.appendChild(data);

        produtos.forEach((e, i) => {
            const pedido = document.createElement("ul")
            pedido.classList.add("ul")
            const nomePizza = document.createElement("li")
            nomePizza.classList.add("li")
            const precoPizza = document.createElement("li")
            precoPizza.classList.add("li")
            
            pedido.innerHTML = `Item ${i + 1}:`
            nomePizza.innerHTML = `Sabor: ${produtos[i].nome}`
            precoPizza.innerHTML = `Valor: R$${produtos[i].preco}`
            
            pedido.appendChild(nomePizza)
            pedido.appendChild(precoPizza)
            card.appendChild(pedido)
            total += parseFloat(produtos[i].preco)
        })

        preco.innerHTML = `Total: R$${total.toFixed(2)}`
        card.appendChild(preco);
        card.appendChild(status);
        lista.appendChild(card);
        pedidoId++
    })
}

function limparDados(){
    let confirma = confirm("Limpar pedidos?")
    if(confirma == true){
        window.localStorage.removeItem("pedidos");
        window.location.reload();
    }
}