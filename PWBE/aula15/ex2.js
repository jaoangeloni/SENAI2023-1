class Compra{
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

class Parcela{
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
class Componente {
    constructor(obj) {
        this.obj = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
    print() { }
}

class Folha extends Componente {
    constructor(obj) {
        super(obj);
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
    }
}

class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.filhos = [];
    }
    add(componente) {
        this.filhos.push(componente);
    }
    remove(componente) {raiz
        const index = this.filhos.indexOf(componente);
        this.filhos.splice(index, 1);
    }
    getfilho(index) {
        return this.filhos[index];
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
        this.filhos.forEach(filho => {
            filho.print();
        });
    }
}

const composicao = new Composite(Compras[0]);
composicao.add(new Folha(Parcelas[0]));
composicao.print();

const composicao1 = new Composite(Compras[1]);
composicao1.add(new Folha(Parcelas[1]));
composicao1.print();

const composicao2 = new Composite(Compras[2]);
composicao2.add(new Folha(Parcelas[2]));
composicao2.print();

const composicao3 = new Composite(Compras[3]);
composicao3.add(new Folha(Parcelas[3]));
composicao3.print();
