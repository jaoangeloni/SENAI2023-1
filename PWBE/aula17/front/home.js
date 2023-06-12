const uri = 'http://localhost:3000'
const perfil = document.querySelector("#perfil");

function carregar() {
    let dados = JSON.parse(localStorage.getItem("Dados"));
    perfil.id.value = dados[0].id;
    perfil.nome.value = dados[0].nome;
    perfil.cpf.value = dados[0].cpf;
    perfil.email.value = dados[0].email;
    perfil.nascimento.value = dados[0].nascimento.split('T')[0]
    perfil.endereco.value = dados[0].endereco
    perfil.telefones.value = dados[0].telefone;
}

perfil.addEventListener("submit", function(e){
    let senha = document.querySelector('#senha')
    let confirmacao = document.querySelector('#confirmacao')

    if(senha.value == "" || confirmacao.value == "")
        alert("Digite sua senha")
    else if (senha.value !== confirmacao.value) 
        Alert("Senhas estão diferentes")
    else {
        e.preventDefault();

        let data = {
            "id": perfil.id.value,
            "nome": perfil.nome.value,
            "email": perfil.email.value,
            "senha": perfil.senha.value,
            "endereco": perfil.endereco.value, 
            "telefone":perfil.telefones.value,
        }
        
        let options = {
            "method": "PUT",
            "headers": { "Content-Type":"application/json"},
            "body": JSON.stringify(data)
        }
        
        fetch(uri + '/atualizar', options)
        .then((resp) => {
            alert("Dados Alterados")
        })
        fetch(uri + '/listar')
        .then(resp => resp.json())
        .then(resp => {
            if(resp.length != 0){
                localStorage.removeItem("Dados")
                window.localStorage.setItem('Dados', JSON.stringify(resp));
                window.location.reload()
            }
        })
    }
})
