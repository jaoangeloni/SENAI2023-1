
// console.log(paragrafo)

var paragrafo = document.querySelector("p")
var inpNome = document.querySelector("#nome")

var foto =  document.querySelector("#foto")
var descricao = document.querySelector("#descricao")

function mostrarNome() {
    let valor = inpNome.value
    alert(valor)

    let data = {
        "nome" : valor
    }

    console.log(data)
    paragrafo.innerHTML = data.nome
}

function atualizarDados() {
    let info = {
       "descricao" : "Um panda",
       "imagem" : ["https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic2496740.jpg?w=1600&h=900",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ailurus_fulgens_-_Kang_5.jpg/220px-Ailurus_fulgens_-_Kang_5.jpg",
        "https://greensavers.sapo.pt/wp-content/uploads/2020/07/panda1-1024x678.jpg"]
    }
    descricao.innerHTML = info.descricao
    foto.src = info.imagem[gerarNumero()]
}

function gerarNumero() {
    let num = Math.floor(Math.random() * 3);
    return num
}