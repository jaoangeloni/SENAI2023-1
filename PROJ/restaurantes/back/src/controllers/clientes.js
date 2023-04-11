const con = require("../DAO/connect");

const adicionar = (req, res) => {
    const { nome, telefone, email, senha } = req.body;

    let query = `INSERT INTO clientes
                 VALUES (DEFAULT, '${nome}', '${telefone}', '${email}', '${senha}')`;

    con.query(query, (err, response) => {
        console.log(err, response);
        if(err == undefined) {
            res.status(201).json(response).end();
        }else {
            let { sqlMessage, sqlState } = err;
            res.status(400).json({ sqlMessage, sqlState }).end();
        }
    });
}

const listar = (req, res) => {
    let query = "SELECT * FROM clientes";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const excluir = (req, res) => {
    let id = req.params
    con.query(query, (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

const autenticar = (req, res) => {
    const {email, senha} = req.body;

    let query = `SELECT * FROM clientes WHERE email = '${email}' AND senha = '${senha}'`;

    con.query(query, (err, response) => {
        if(err == undefined){
            if(response.length == 0) {
                res.status(401).json({"msg":"email ou Senha Invalidos"}).end();
            }else {
                let cliente = response[0];
                delete cliente.senha;
                res.status(200).json(cliente).end();
            }
        }else {
            res.status(401).json(err).end();
        }
    });
}

module.exports = {
    adicionar,
    autenticar,
    listar,
    excluir
}
