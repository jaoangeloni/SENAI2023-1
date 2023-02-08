var body = document.querySelector("body")

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

for(let i = 0; i < destinos.length; i++){
    let destino = destinos[i]
    
    let banner = document.createElement("div")
    banner.className = "banner"
    banner.style.backgroundImage = `url(${destino.imagem})`
    let dest = document.createElement("p")
    dest.innerHTML = destino.destino
    let desc = document.createElement("p")
    dest.innerHTML = destino.descricao

    banner.appendChild(dest)
    banner.appendChild(desc)
    
    body.appendChild(banner);
}