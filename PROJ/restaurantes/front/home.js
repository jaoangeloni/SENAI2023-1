const bemVindo = document.querySelector("#bemVindo")

function carregar() {
    let dadosCliente = JSON.parse(localStorage.getItem("cliente"));
    
    bemVindo.innerHTML = dadosCliente.email;
    
    // carregarImoveis(dadosCorretor.id);
}

function logoff() {
    localStorage.removeItem("corretor");

    window.location.href = "./login.html";
}


function restaurantes() {
    api.get("/restaurante")
    .then(resp => {
        localStorage.setItem("restaurantes",JSON.stringify(resp.data));
    })
}

function categorias() {
    api.get("/categorias")
    .then(resp => {
        localStorage.setItem("caregorias",JSON.stringify(resp.data));
    })
}