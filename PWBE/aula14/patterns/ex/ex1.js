class Veiculo{
    placa
    modelo
    marca
    ano
    idade
    diaria
    constructor(placa, modelo, marca, ano, idade, diaria){
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.idade = new Date().getFullYear() - this.ano
        this.diaria = diaria
    }
}

const Veiculo1 = new Veiculo("ABC-1234", "Monza", "Chevrolet", 1999, "", 20)

console.log(Veiculo1)

class Aluguel{
    id
    veiculo
    dataRetirada
    dataDevolucao
    dias
    valorAluguel
    constructor(id, veiculo, dataRetirada, dataDevolucao, valorAluguel){
        this.id = id
        this.veiculo = veiculo
        this.dataRetirada = dataRetirada
        this.dataDevolucao = dataDevolucao
        this.dias = (new Date(dataDevolucao) - new Date(dataRetirada)) / (1000 * 60 * 60 * 24)
        this.valorAluguel = this.veiculo.diaria * this.dias
    }
}

const Aluguel1 = new Aluguel(1, Veiculo1, "2023-04-01", "2023-04-06")

console.log(Aluguel1)

