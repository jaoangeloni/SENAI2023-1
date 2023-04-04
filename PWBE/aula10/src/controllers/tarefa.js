const con = require('../dao/connect')
const Tarefa = require('../models/tarefa')

const app = (req,res) =>{
    con.query(new Tarefa(req.body).read(),(err, result) =>{
        if(err == null){
            res.render('index', {titulo: "Tarefas a fazer", dados: result})
        }else{
            res.send("Erro"+err).end()
        }
    })
} 

const excluir = (req,res) =>{
    con.query(new Trefa(req.params).del(),(err,result) => {
        if(result.affectedRows > 0)
            res.redirect("/")
        else
            res.render('erro', {err: err})
    })
}

module.exports = {
    app,
    excluir
}