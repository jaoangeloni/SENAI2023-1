const uri = 'http://localhost:3000'
const enviar = document.querySelector("#enviar")
const perfil = document.querySelector("#perfil");
function carregar() {
    let dados = JSON.parse(localStorage.getItem("Dados"));
    perfil.id.value = dados[0].id;
    perfil.nome.value = dados[0].nome;
    perfil.cpf.value = dados[0].cpf;
    perfil.email.value = dados[0].email;
    perfil.nascimento.value = new Date(dados[0].nascimento).toLocaleDateString();
    perfil.endereco.value = dados[0].endereco
    perfil.telefones.value = dados[0].telefone;
}

enviar.addEventListener("click",() =>{
    let data = {
        "id": perfil.id.value,
        "nome": perfil.nome.value,
        "email": perfil.email.value,
        "endereco": perfil.endereco.value, 
        "telefone":perfil.telefone.value,
    }
    
    let options = {
        "method": "PUT",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }
    
    fetch(uri + '/atualizar', options)
    .then(resp => {
        console.log(resp)
        // if(resp.length != 0){
        //     alert("Alterado com sucesso")
        // }else{
        //     alert("MOIO");
        // }
    })
})


