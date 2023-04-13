const cadastra = document.querySelector('#cadastra')
const iNome = document.querySelector('#nome')
const iTel = document.querySelector('#telefone')
const iEmail = document.querySelector('#cEmail')
const iSenha = document.querySelector('#cPassword')
const iLemail = document.querySelector('#email')
const iLsenha = document.querySelector('#password')

function cadastrar(){
    let cliente = { 
        "nome": iNome.value,
        "telefone":iTel.value,
        "email":iEmail.value,
        "senha":iSenha.value
    }
    api.post("/cliente", cliente)
    .then(resp => {
        alert("Cadastrado com sucesso")
        iNome.value = ""
        iTel.value = ""
        iEmail.value = ""
        iSenha.value = ""
    })
} 
function login(){
    let data = {
        "email": iLemail.value,
        "senha": iLsenha.value
    }
    api.post("/login", data)
    .then(resp => {
        if(data.email != undefined) {
            localStorage.setItem("cliente", JSON.stringify(resp.data));
            window.location.href="home.html";
        }else {
            alert(info.msg);
        }
    })
}
