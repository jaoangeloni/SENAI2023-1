const con = require("../DAO/connect");

const cadastrar = (req, res) => {
    const {nome, nascimento, peso, altura } = req.body;

    const query = `INSERT INTO pacientes VALUES (DEFAULT, '${nome}', '${nascimento}', ${peso}, ${altura}, "", "", "")`;

    con.query(query, (err, result) => {
        if(err){
            res.status(500).json(err).end();
        }else{
            res.status(201).json(result).end();
        }
    });
};

const listar = (req, res) => {
    const {nome, nascimento, peso, altura } = req.query;
    const query = `SELECT '${nome}' FROM pacientes`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao listar atendimentos"}).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

const alterar = (req, res) => {
    const { nome, nascimento, peso, altura } = req.body;
    const { id } = req.params;
    const query = `UPDATE pacientes SET nome = "${nome}", nascimento = "${nascimento}", peso = ${peso}, altura = ${altura} WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao alterar atendimento"}).end();
        }else {
            res.status(200).json({message: "Atendimento alterado com sucesso"}).end();
        }
    });
}

const remover = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM pacientes WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao alterar atendimento"}).end();
        }else {
            res.status(204).json({message: "Atendimento removido com sucesso"}).end();
        }
    });
}

module.exports = {
    cadastrar,
    alterar,
    listar,
    remover
}