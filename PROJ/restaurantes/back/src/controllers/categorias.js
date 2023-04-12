const con = require("../DAO/connect");

const listar = (req, res) => {
    let query = "SELECT * FROM categorias";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const buscar = (req, res) => {
    const { id } = req.params;

    let query = `SELECT * FROM categorias WHERE id LIKE '${id}'`;

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    listar,
    buscar
}
