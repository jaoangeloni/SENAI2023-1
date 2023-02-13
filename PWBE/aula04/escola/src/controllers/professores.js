const Prof = require('../models/professor');
var professores = []

const criar = (req, res) => {
    let {nome, especialidade} = req.body;
    let id = 1;
    if(professores.length > 0) {
        id = professores[professores.length-1].id + 1;
    }
    const prof = new Prof(id, nome, especialidade);
    professores.push(prof);
    res.status(201).end();
}

const criarVarios = (req, res) => {
    let data = req.body;
    let id = 1;
    if(professores.length > 0) {
        id = professores[professores.length-1].id + 1;
    }

    data.forEach((item, index) => {
        let prof = new Prof(id, item.nome, item.especialidade);
        professores.push(prof);
        id++;
    })
    res.status(201).end();
}

const listar = (req, res) => {
    res.status(200).json(professores).end()
}

const buscar = (req, res) => {
    let { id } = req.params;

    professores.forEach((prof, index) => {
        if(prof.id == id) {
            res.status(200).json(prof).end();
        }
    });
    res.status(404).end();
}

const atualizar = (req, res) => {
    let {nome,especialidade} = req.body;
    let { id } = req.params;

    professores.forEach((prof, index) => {
        if(prof.id == id) {   
            professores[index] = new Prof(id, nome, especialidade);
            res.status(200).json(professores[index]).end();
        }
    })
    res.status(404).end();
}

const deletar = (req, res) => {
    let {id} = req.params;

    professores.forEach((prof, index) => {
        if(prof.id == id) {
            professores.splice(index, 1);
        }
    });
    res.status(200).json(professores).end();
}

module.exports={
    criar,
    listar,
    buscar,
    atualizar,
    deletar,
    criarVarios
}