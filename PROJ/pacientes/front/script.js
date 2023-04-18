const iNome = document.querySelector("#nome")
const iData = document.querySelector("#data")
const iPeso = document.querySelector("#peso")
const iAltura = document.querySelector("#altura")
const tabela = document.querySelector("#tabela")

function calcular(){
    let funcionario = { 
        "nome": iNome.value,
        "nascimento":iData.value,
        "peso":iPeso.value,
        "altura":iAltura.value
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
        let col9 = document.createElement('td')
        let del = document.createElement('button')

        del.id = "apagar"
        del.setAttribute('onclick', `excluir('${e.id}')`)

        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = new Date(e.nascimento).toLocaleDateString()
        col4.innerHTML = e.peso
        col5.innerHTML = e.altura
        col6.innerHTML = e.idade
        col7.innerHTML = e.imc.toFixed(2)
        col8.innerHTML = e.diagnostico

        col9.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        linha.appendChild(col6)
        linha.appendChild(col7)
        linha.appendChild(col8)
        linha.appendChild(col9)

        tabela.appendChild(linha)
    });
}

function excluir(id) {
    if (confirm('Valida Exclusao'))
       api.delete("/excluir/" + id)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}