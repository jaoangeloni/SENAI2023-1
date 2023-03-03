const con = require('../dao/connect');
const Bolo = require('../models/bolo');

const criar = (req,res) => {
    let bolo = new Bolo(req.body)
    con.query(bolo.create(), (err, result) => {
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end();
    })
}

const listar = (req, res) => {
    let bolo = new Bolo(req.params)
    con.query(bolo.read(), (err, result) =>{
        if(err == null)
            res.json(result).end()
    })
}

const alterar = (req,res) => {
    let bolo = new Bolo(req.body);
    con.query(bolo.update(), (err,result) => {
        if(result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let bolo = new Bolo(req.body)
    con.query(bolo.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}