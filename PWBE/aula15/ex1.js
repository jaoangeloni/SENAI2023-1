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

class Aluguel{
    constructor(id, veiculo, dataRetirada, dataDevolucao, valorAluguel){
        this.id = id
        this.veiculo = veiculo
        this.dataRetirada = dataRetirada
        this.dataDevolucao = dataDevolucao
        this.dias = (new Date(dataDevolucao) - new Date(dataRetirada)) / (1000 * 60 * 60 * 24)
    }
    getDiaria(){
        return this.valorAluguel = this.veiculo.diaria * this.dias
    }
}

class Veiculo{
    constructor( placa, modelo, marca, ano, idade, diaria){
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.idade = new Date().getFullYear() - this.ano
        this.diaria = diaria
    }
}

const Veiculo1 = new Veiculo("ABC-1234", "Monza", "Chevrolet", 1999, "", 20)
const Aluguel1 = new Aluguel(1, Veiculo1, "2023-04-01", "2023-04-06")

const composicao = new Composite(Veiculo1);
composicao.add(new Folha(Aluguel1));

composicao.print();

