const tcorpo = document.querySelector("#tcorpo");

const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []

function preencherTabela() {
    produtos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const preco = document.createElement("td");
        const remover = document.createElement("td")
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        preco.innerHTML = e.preco;
        remover.innerHTML = `<button onclick="removerItem('${i}')">Remover</button>`;
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(remover);
        tcorpo.appendChild(linha)
    })
}

function limparDados(){
    let confirma = confirm("Limpar carrinho?")
    if (confirma == true){
        window.localStorage.removeItem("produtos");
        window.location.reload();
    }
}

function removerItem(i){
    let confirma = confirm("Excluir do carrinho?")
    if (confirma == true){
        produtos.splice(i, 1)
        window.localStorage.setItem("produtos",JSON.stringify(produtos))
        window.location.reload()
    }
}


function enviarDados(){
    let confirma = confirm("Realizar compra?")
    if (confirma == true){
        const pedido = {
            data: new Date().toLocaleDateString(),
            produtos: produtos
        }
        pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []
        pedidos.push(pedido)
        window.localStorage.setItem("pedidos",JSON.stringify(pedidos))
        window.localStorage.removeItem("produtos");
        window.location.reload()
    }
}