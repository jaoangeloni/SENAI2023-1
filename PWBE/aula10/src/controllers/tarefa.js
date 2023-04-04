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

module.exports = {
    app
}