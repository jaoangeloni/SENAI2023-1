var banner = document.querySelector(".banner")
var destino = document.querySelector("#destino")
var descricao = document.querySelector("#descricao")

var destinos = [
    {
        "imagem" : "https://www.eztec.com.br/wp-content/uploads/campanhas/jardins-do-brasil/campanh-reserva-jb-osasco-complexo.jpg",
        "destino" : "Osasco",
        "descricao" : "Planos a partir de R$ 120,00"
    },
    {
        "imagem" : "https://www.metrorio.com.br/Content/Upload/ImgConteudo/navegue_o_rio_0008_ipanema.jpg",
        "destino" : "Ipanema",
        "descricao" : "Curta as férias em familia"
    },
    {
        "imagem" : "http://i.mlcdn.com.br/portaldalu/fotosconteudo/20466_01.jpg",
        "destino" : "Londres",
        "descricao" : "Conheça as pirâmides"
    }
]

let indice = gerarNumero(destinos.length)

destino.innerHTML = destinos[indice].destino
descricao.innerHTML = destinos[indice].descricao
banner.style.backgroundImage = `url(${destinos[indice].imagem})`

function gerarNumero(size) {
    let num = Math.floor(Math.random() * size)
    return num
}