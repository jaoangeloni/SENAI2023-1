class Compra{
    id
    data
    produto
    cliente
    totalParcelas
    preco
    quantidade
    total
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade, total){
        this.id = id
        this.data = new Date(data)
        this.produto = produto
        this.cliente = cliente
        this.totalParcelas = totalParcelas
        this.preco = preco
        this.quantidade = quantidade
        this.total = this.preco * this.quantidade
    }
}

const Compras = [
    new Compra(1, "2022-03-25", "TV LCD 4K 50' LG", "Jair Santana", 4, 2800, 2),
    new Compra(2, "2022-05-12", "TV LCD 4K 50' Sansung", "Jurema Santana", 2, 3100, 1),
    new Compra(3, "2022-06-08", "TV LCD 4K 50' LG", "Mariana Silva", 3, 2850, 2),
    new Compra(4, "17/02/2023", "TV LCD 4K 50' Sansung", "Marta Oliveira", 5, 2899.90, 1)
] 
    

console.log(Compras)

class Parcela{
    id
    compra
    dataVencimento
    dataPagamento
    valorParcela
    juros
    constructor(id, compra, dataVencimento, dataPagamento, valorParcela, juros){
        this.id = id
        this.compra = compra
        this.dataVencimento = new Date(dataVencimento).toLocaleDateString()
        this.dataPagamento = new Date(dataPagamento).toLocaleDateString()

        this.valorParcela = Compras[this.compra].total / Compras[this.compra].totalParcelas

        let atraso = new Date(dataPagamento).getDate() - new Date(dataVencimento).getDate()

        if(atraso <= 0)
            this.juros = 0 
        else
            this.juros = (this.valorParcela * 0.01) * atraso
    }
}

const Parcelas = [
    new Parcela(1, 1, "2022-04-25", "2022-04-23"),
    new Parcela(2, 1, "2022-05-25", "2022-05-24"),
    new Parcela(3, 2, "2022-06-12", "2022-06-12"),
    new Parcela(4, 2, "2022-07-12", "2022-07-15")
] 

console.log(Parcelas)