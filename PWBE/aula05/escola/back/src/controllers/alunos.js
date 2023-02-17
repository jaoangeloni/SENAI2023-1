const { query } = require('express')
const con = require('../dao/connect')

const teste = (req, res)=>{
    res.json("Escola Respondendo").end()
}
const listar = (req,res)=>{
    con.query('SELECT * FROM aluno',(result, err)=>{
        if(err == null){
            res.json(result).end();
        }else{
            res.json(err).end();
        }
    })
}

const cadastrar = (req,res) => {
    let ra = req.query.RA
    let nome = req.query.Nome
    let nascto = req.query.Data
    let turma = req.query.Turma
    let string = `insert into aluno value('${ra}','${nome}','${nascto}',${turma})` 
    con.query(string, (err,result)=>{
        if(err == null)
            res.status(201).json(result).end()
        else
            res.json(err).end()
    })
}

module.exports = {
    teste,
    cadastrar,
    listar
}