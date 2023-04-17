class Funcionario {

    constructor(i) {
        this.matricula = i.matricula
        this.nome_completo = i.nome_completo
        this.data_admissao = i.data_admissao
        this.salario = i.salario
        this.data_pagto = i.data_pagto
        this.desempenho = i.desempenho
        this.bonificacao = i.bonificacao    

        let ano_admissao = new Date(this.data_admissao).getFullYear()
        let ano_atual = new Date().getFullYear()
        
        this.bonificacao =  this.desempenho * (ano_atual - ano_admissao) * (this.salario * 0.02);

    }
    create() {
        return `INSERT INTO funcionarios VALUE(default,'${this.nome_completo}','${this.data_admissao}',${this.salario}, CURDATE(),${this.desempenho}. ${this.bonificacao})`
    }

    read() {
        if (this.matricula == undefined)
            return `SELECT * FROM funcionarios`
        else
            return `SELECT * FROM funcionarios WHERE matricula = ${this.matricula}`
    }

    update() {
        return `UPDATE funcionarios SET nome_completo = '${this.nome_completo}', data_admissao = '${this.data_admissao}', salario = ${this.salario}, desempenho = ${this.desempenho} WHERE matricula = ${this.matricula}`
    }

    delete() {
        return `DELETE FROM funcionarios WHERE matricula = ${this.matricula}`
    }

}

module.exports = Funcionario