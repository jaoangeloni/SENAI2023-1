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
                res.status(401).json({"msg":"Email ou Senha Invalidos"}).end();
            }else {    
                res.json(modelarLista(result)).end()
            }
        }else{
            res.status(401).json(err).end();
        }
    })
}

module.exports = {
    listar,
    autenticar
}