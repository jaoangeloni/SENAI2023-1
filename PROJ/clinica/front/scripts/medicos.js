const corpo_medico = document.querySelector('#corpo_medico')
const cadastro_medico = document.querySelector('#cadastro_medico');

fetch(uri + '/medicos', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => tabelaMedico(resp))
    .catch(err => console.error(err));

    cadastro_medico.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "nome": cadastro_medico.nome_medico.value,
        "especialidade_id": cadastro_medico.id_esp.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/medico', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201){
                window.location.href = "#medicos"
                window.location.reload();
            }
            else alert('Erro ao enviar dados')
        })
})

function tabelaMedico(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        col4.setAttribute("class","delete")
        let del = document.createElement('button')
        del.setAttribute('onclick', `excluirItem('${e.id}')`)

        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.especialidade
        col4.appendChild(del)

        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        corpo_medico.appendChild(linha)
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
