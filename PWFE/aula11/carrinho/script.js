const tcorpo = document.querySelector("#tcorpo");

const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []

function preencherTabela() {
    produtos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const preco = document.createElement("td");
        const enviar = document.createElement("td")
        const remover = document.createElement("td")
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        preco.innerHTML = e.preco;
        enviar.innerHTML = `<button onclick="enviarPedido('${i}')">Confirmar pedido</button>`;
        remover.innerHTML = `<button onclick="removerItem('${i}')">Remover pedido</button>`;
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(enviar);
        linha.appendChild(remover);
        tcorpo.appendChild(linha)
    })
}

function enviarPedido(i) {
    const confirma = confirm("Enviar pedido?")
    if (confirma == true){
        const item = {
            id :produtos[i].id,
            nome: produtos[i].nome,
            preco: produtos[i].preco
        }
        const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []
        pedidos.push(item)
        window.localStorage.setItem("pedidos",JSON.stringify(pedidos))

        produtos.splice(i, 1)
        window.localStorage.setItem("produtos",JSON.stringify(produtos))
        window.location.reload()
    }
}

function limparDados(){
    const confirma = confirm("Limpar carrinho completo?")
    if (confirma == true){
        window.localStorage.removeItem("produtos");
        window.location.reload();
    }
}

function removerItem(i){
    const confirma = confirm("Excluir do carrinho?")
    if (confirma == true){
        produtos.splice(i, 1)
        window.localStorage.setItem("produtos",JSON.stringify(produtos))
        window.location.reload()
    }
}
