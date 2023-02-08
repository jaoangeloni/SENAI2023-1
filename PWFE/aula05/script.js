var clientes = [
    {
        "funcionario":"Vitoria da Cruz",
        "matricula":"010203",
        "setor":"Eletronico",
        "comissao":5,
        "vendas":[
            {
                "data":"03/02/2023",
                "valor":1250.00
            },
            {
                "data":"03/02/2023",
                "valor":899.00
            },
            {
                "data":"04/02/2023",
                "valor":5999.90
            }
        ]
    },
    {
        "funcionario":"Cecilia Martins",
        "matricula":"124578",
        "setor":"Eletronico",
        "comissao":5,
        "vendas":[
            {
                "data":"15/01/2023",
                "valor":3290.90
            },
            {
                "data":"16/01/2023",
                "valor":1320.99
            },
            {
                "data":"16/02/2023",
                "valor":990.90
            }
        ]
    },
    {
        "funcionario":"Joaquim Souza",
        "matricula":"124578",
        "setor":"Moveis",
        "comissao":12,
        "vendas":[
            {
                "data":"08/01/2023",
                "valor":4500.00
            },
            {
                "data":"08/01/2023",
                "valor":599.99
            },
            {
                "data":"09/01/2023",
                "valor":259.90
            }
        ]
    }
]

function func(){
    let select = document.querySelector("select")
    let nome= select.options[select.selectedIndex].text
    let data = document.querySelector("#data").value
    let preco = document.querySelector("#preco").value

    ncliente = new clientes

    nome = ncliente.funcionario
    data = ncliente.vendas.data
    preco = ncliente.vendas.valor
}

var body = document.querySelector("body")
var table = document.querySelector("table")
var tbody = document.createElement("tbody")
table.appendChild(tbody)

for(let i = 0; i < clientes.length; i++){
    
    let cliente = clientes[i]
    let j = 0;
    let total = 0

    let tr = document.createElement("tr")
    
    let tdnome = document.createElement("td")
    tdnome.innerHTML = cliente.funcionario
    
    let tdmatricula = document.createElement("td")
    tdmatricula.innerHTML = cliente.matricula
    
    let tdsetor = document.createElement("td")
    tdsetor.innerHTML = cliente.setor
    
    let tdcomissao = document.createElement("td")
    
    let tdvenda = document.createElement("td")
    
    
    for(j = 0; j<cliente.vendas.length; j++){
        let venda = cliente.vendas[j]
        let valor = venda.valor
        total += valor
    }
    tdvenda.innerHTML = Math.floor(total)
    tdcomissao.innerHTML = Math.floor(total * cliente.comissao / 100)
    
    tr.appendChild(tdnome)
    tr.appendChild(tdmatricula)
    tr.appendChild(tdsetor)
    tr.appendChild(tdcomissao)
    tr.appendChild(tdvenda)
    tbody.appendChild(tr)

}
