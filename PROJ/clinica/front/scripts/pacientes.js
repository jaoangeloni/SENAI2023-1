const corpo_paciente = document.querySelector('#corpo_paciente')
const cadastro_paciente = document.querySelector('#cadastro_paciente');

fetch(uri + '/pacientes', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => tabelaPaciente(resp))
    .catch(err => console.error(err));

    cadastro_paciente.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "nome": cadastro_paciente.nome_paciente.value,
        "data_nascimento": cadastro_paciente.data_nasc.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/paciente', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201){
                window.location.href = "#pacientes"
                window.location.reload();
            }
            else alert('Erro ao enviar dados')
        })
})

function tabelaPaciente(vetor) {
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
        col3.innerHTML = new Date(e.data_nascimento).toLocaleDateString('pt-BR')
        col4.appendChild(del)

        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        corpo_paciente.appendChild(linha)
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
