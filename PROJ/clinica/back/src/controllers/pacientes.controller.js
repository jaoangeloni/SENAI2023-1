const con = require("../dao/connection");

const cadastrar = (req, res) => {
    const {nome, nascimento} = req.body;

    const query = `INSERT INTO pacientes VALUES (DEFAULT, '${nome}', '${nascimento}')`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao cadastrar paciente"}).end();
        }else {
            res.status(200).json(result).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM pacientes`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({error: "Erro ao listar pacientes"}).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

module.exports = {
    cadastrar,
    listar
}