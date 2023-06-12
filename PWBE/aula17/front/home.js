function carregar() {
    let perfil = document.querySelector("#perfil");
    let dados = JSON.parse(localStorage.getItem("Dados"));
    perfil.id.value = dados[0].id;
    perfil.nome.value = dados[0].nome;
    perfil.cpf.value = dados[0].cpf;
    perfil.email.value = dados[0].email;
    perfil.nascimento.value = new Date(dados[0].nascimento).toLocaleDateString();
    perfil.endereco.value = dados[0].endereco
    perfil.telefones.value = dados[0].telefone;
}