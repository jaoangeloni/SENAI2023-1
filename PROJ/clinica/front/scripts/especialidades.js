const corpo_especialidade = document.querySelector('#corpo_especialidade')
const cadastro_especialidade = document.querySelector('#cadastro_especialidade');

fetch(uri + '/especialidades', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => tabelaEspecialidade(resp))
    .catch(err => console.error(err));

    cadastro_especialidade.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "especialidade": cadastro_especialidade.nome_especialidade.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/especialidade', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201){
                window.location.href = "#especialidades"
                window.location.reload();
            }
            else alert('Erro ao enviar dados')
        })
})

function tabelaEspecialidade(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        col3.setAttribute("class","delete")
        let del = document.createElement('button')
        del.setAttribute('onclick', `excluirItem('${e.id}')`)

        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.appendChild(del)

        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        corpo_especialidades.appendChild(linha)
    });
}

// function excluirItem(i) {
//     if (confirm('Excluir item?'))
//         fetch(uri + '/atendimento/' + i, { method: 'DELETE' })
//             .then(resp => resp.status)
//             .then(resp => {
//                 if (resp == 204) window.location.reload()
//                 else alert('Erro ao excluir')
//         })
// }
