const tcorpo = document.querySelector("#tcorpo");
const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const addCarrinho = document.querySelector("#addCarrinho");

function preencherTabela() {
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
      document.querySelector("#id").innerHTML = cardapio[i].id;
      document.querySelector("#nome").innerHTML = cardapio[i].nome;
      document.querySelector("#descricao").innerHTML = cardapio[i].descricao;
      document.querySelector("#preco").innerHTML = cardapio[i].preco;
      window.scrollTo(0, 0);
}

function adicionar(){
    const confirma = confirm("Adicionar ao carrinho?")
    if(confirma == true){
        const item = {
            id : document.querySelector("#id").innerHTML,
            nome: document.querySelector("#nome").innerHTML,
            preco: document.querySelector("#preco").innerHTML
        }
        const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []
        produtos.push(item)
        window.localStorage.setItem("produtos",JSON.stringify(produtos))
        window.location.reload()
    }
}