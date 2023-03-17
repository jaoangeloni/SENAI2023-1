const uri = 'http://localhost:3000';
const corpo_atendimento = document.querySelector('#corpo_atendimento')
const cadastro_atendimento = document.querySelector('#cadastro_atendimento');

fetch(uri + '/atendimentos', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => tabelaAtendimento(resp))
    .catch(err => console.error(err));

cadastro_atendimento.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "data": cadastro_atendimento.nome.value,
        "id_medico": cadastro_atendimento.id_medico.value,
        "id_paciente": cadastro_atendimento.id_paciente.value,
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

function tabelaAtendimento(vetor) {
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
        corpo_atendimento.appendChild(linha)
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
