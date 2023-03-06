const body = document.querySelector("body");
const {imoveis, nome} = JSON.parse(localStorage.getItem("corretor"));
const comissao = document.querySelector("comissao")

const welcome = document.querySelector("#welcome");
welcome.innerHTML += nome;


imoveis.forEach(imovel => {
    createCard(imovel);
});

function createCard(imovel) {
    const endereco = imovel.endereco
    const valor = imovel.valor

    let card = document.createElement("div");
    let pEndereco = document.createElement("p");
    let pValor = document.createElement("p");
    let button = document.createElement("button");
    
    button.innerHTML = "Vender";
    button.addEventListener("click", () => {
        let total = 0;
        total += parseFloat(valor);
        console.log(total)

    })

    pEndereco.innerHTML = endereco;
    pValor.innerHTML = valor
    card.appendChild(pEndereco);
    card.appendChild(pValor);
    card.appendChild(button);
    body.appendChild(card);
}
