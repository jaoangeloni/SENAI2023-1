const con = require('../DAO/connect')
const Usuario = require('../models/model')

const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Usuario(lista[i])
    return lista
}

const listar = (req, res) => {
    let usuario = new Usuario(req.params)
    con.query(usuario.listar(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const autenticar = (req, res) => {
    let usuario = new Usuario (req.body)
    con.query(usuario.autenticar(), (err, result) => {
        if(err == undefined){
            if(result.length == 0) {
                res.status(401).end();
            }else {    
                res.json(modelarLista(result)).end()
            }
        }else{
            res.status(401).json(err).end();
        }
    })
}

const alterar = (req, res) => {
    let usuario = new Usuario (req.body)
    con.query(usuario.alterar(), (err, result) => {
        if (result.affectedRows != 0)
            res.status(202).end()       
        else
            res.status(404).end()
    })
}


module.exports = {
    listar,
    autenticar,
    alterar,
}