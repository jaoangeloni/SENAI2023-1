const tcorpo = document.querySelector("#tcorpo");
const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const addCarrinho = document.querySelector("#addCarrinho");
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const pedidos = [];

function preecherTabela() {
    cardapio.forEach((e, i) => {
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const preco = document.createElement("td")
        const detalhes = document.createElement("td");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        preco.innerHTML = e.preco
        detalhes.innerHTML = `<button onclick="abrirModal('${i}')">Ver detalhes</button>`;
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(detalhes);
        tcorpo.appendChild(linha)
    })
}

btFechar.addEventListener('click', () => {
    detalhes.classList.toggle("oculto");
})

function abrirModal(i){
      detalhes.classList.toggle("oculto");
      document.querySelector("#id").innerHTML = `ID: ${cardapio[i].id}`;
      document.querySelector("#nome").innerHTML = `Sabor: ${cardapio[i].nome}`;
      document.querySelector("#descricao").innerHTML = `Ingredientes: ${cardapio[i].descricao}`;
      document.querySelector("#preco").innerHTML = `Valor: ${cardapio[i].preco}`;
}

function addCarrinho(){
   let pedido = {
      "nome": nome.innerHTML,
      "preco": preco.innerHTML
   }
   pedidos.push(pedido)
   console.log(pedidos)
}

