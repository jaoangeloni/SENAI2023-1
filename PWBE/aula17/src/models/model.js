class Usuario {
    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.email = i.email
        this.senha = i.senha
        this.nascimento = i.nascimento
        this.cpf = i.cpf
        this.endereco = i.endereco
        this.telefone = i.telefone
    }

    autenticar() {
        return `SELECT id, nome, email, nascimento, cpf, endereco, telefone FROM usuario WHERE email = '${this.email}' AND senha = password('${this.senha}')`
    }

    listar() {
        if (this.id == undefined)
            return `SELECT id, nome, email, nascimento, cpf, endereco, telefone FROM usuario`
        else
            return `SELECT id, nome, email, nascimento, cpf, endereco, telefone FROM usuario WHERE id = ${this.id}`
    }

    alterar() {
        return `UPDATE usuario SET nome = '${this.nome}', email = '${this.email}', endereco = '${this.endereco}', telefone = '${this.telefone}' WHERE id = ${this.id}`
    }

}

module.exports = Usuario