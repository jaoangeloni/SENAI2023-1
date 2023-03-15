const uri = 'http://localhost:3000';
const corpo = document.querySelector('#corpo')
const cadastro = document.querySelector('#cadastro');

fetch(uri + '/atendimentos', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => montarTabela(resp))
    .catch(err => console.error(err));

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "data": cadastro.nome.value,
        "id_medico": cadastro.id_medico.value,
        "id_paciente": cadastro.id_paciente.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/atendimento', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201){
                window.location.href = "#atendimentos"
                window.location.reload();
            }
            else alert('Erro ao enviar dados')
        })
})

function montarTabela(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        col5.setAttribute("class","delete")
        let del = document.createElement('button')
        del.setAttribute('onclick', `excluirItem('${e.id}')`)

        col1.innerHTML = e.id
        col2.innerHTML = e.data
        col3.innerHTML = e.medico_id
        col4.innerHTML = e.paciente_id
        col5.appendChild(del)

        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        corpo.appendChild(linha)
    });
}

function excluirItem(i) {
    if (confirm('Excluir item?'))
        fetch(uri + '/atendimento/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao excluir')
        })
}
