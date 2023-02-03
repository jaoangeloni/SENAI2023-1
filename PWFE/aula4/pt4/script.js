var body = document.querySelector("body")
var imagem = document.querySelector("#produto")
var preco = document.querySelector("#preco")
var descricao = document.querySelector("#descricao")

var compras = [
    {
        "imagem" : "https://static.dafiti.com.br/p/Evoltenn-T%C3%AAnis-Masculino-Evoltenn-Easy-Style-Preto-Amarelo-1382-3414617-1-zoom.jpg",
        "descricao" : "Tênis chave preto e amarelo",
        "preco" : "R$499,99"
    },
    {
        "imagem" : "https://static.netshoes.com.br/produtos/tenis-olympikus-reverso-masculino/74/2I2-5011-274/2I2-5011-274_zoom1.jpg?ts=1658172163",
        "descricao" : "Tênis chave amarelo e rosa",
        "preco" : "R$699,99"
    },
    {
        "imagem" : "https://dovp37yeeddcw.cloudfront.net/Custom/Content/Products/13/65/1365478_tenis-verde-space-knit-salvia-58650400-013033089322647_s1_638101451215603874.jpg",
        "descricao" : "Tênis paia",
        "preco" : "R$199,99"
    }
]

// let indice = gerarNumero(compras.length)

// descricao.innerHTML = compras[indice].descricao
// preco.innerHTML = compras[indice].preco
// imagem.src = compras[indice].imagem

// function gerarNumero(size) {
//     let num = Math.floor(Math.random() * size)
//     return num
// }

for(let i = 0; i < compras.length; i++){
    let compra = compras[i]
    
    let card = document.createElement("div")
    card.className = "card"
    let img = document.createElement("img")
    img.id = "produto"
    img.src = compra.imagem
    let desc = document.createElement("p")
    desc.innerHTML = compra.descricao
    let preco = document.createElement("p")
    preco.innerHTML = compra.preco
    let botao = document.createElement("button")
    botao.id = "comprar"


    card.appendChild(img)
    card.appendChild(desc)
    card.appendChild(preco)
    card.appendChild(botao)
    
    body.appendChild(card);
}