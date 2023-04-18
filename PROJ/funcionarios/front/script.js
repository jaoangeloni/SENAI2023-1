const iNome = document.querySelector("#nome")
const iData = document.querySelector("#data")
const iSalario = document.querySelector("#salario")
const iDesempenho = document.querySelector("#desempenho")
const tabela = document.querySelector("#tabela")

function calcular(){
    let funcionario = { 
        "nome_completo": iNome.value,
        "data_admissao":iData.value,
        "salario":iSalario.value,
        "desempenho":iDesempenho.value
    }
    api.post("/criar", funcionario)
    .then(resp => {
        alert("Cadastrado com sucesso")
        window.location.reload()
    })
} 

api.get("/listar")
.then(resp => {
    montarTabela(resp.data);
})

function montarTabela(func) {
    func.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        let col6 = document.createElement('td')
        let col7 = document.createElement('td')
        let col8 = document.createElement('td')
        let del = document.createElement('button')

        del.id = "apagar"
        del.setAttribute('onclick', `excluir('${e.matricula}')`)

        col1.innerHTML = e.matricula
        col2.innerHTML = e.nome_completo
        col3.innerHTML = new Date(e.data_admissao).toLocaleDateString()
        col4.innerHTML = "R$" + e.salario.toFixed(2)
        col5.innerHTML = new Date(e.data_pagto).toLocaleDateString()
        col6.innerHTML = e.desempenho
        col7.innerHTML = "R$" + e.bonificacao.toFixed(2)

        col8.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        linha.appendChild(col6)
        linha.appendChild(col7)
        linha.appendChild(col8)
        tabela.appendChild(linha)
    });
}

function excluir(matricula) {
    if (confirm('Valida Exclusao'))
       api.delete("/excluir/" + matricula)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}