class Bolo{

    constructor(i){
        this.id = i.id
        this.nome = i.nome
        this.descricao = i.descricao
        this.valor = i.valor
    }
    
        create() {
            return `INSERT INTO bolos VALUE('${this.id}','${this.nome}','${this.descricao}',${this.valor})`
        }
    
        read() {
            if (this.id == undefined)
                return `SELECT * FROM bolos`
            else
                return `SELECT * FROM bolos WHERE id = '${this.id}'`
        }
    
        update() {
            return `UPDATE bolos SET nome = '${this.nome}', descricao = '${this.descricao}', valor = ${this.valor} WHERE id = '${this.id}'`
        }
    
        delete() {
            return `DELETE FROM bolos WHERE id = '${this.id}'`
        }
    }
    
module.exports = Bolo