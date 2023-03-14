const con = require("../DAO/connect");

const criar = (req, res) => {
    const{ tarefa } = req.body;
    let query = `INSERT INTO tarefas VALUES ("", '${tarefa}')`;

    con.query(query, (err, result) => {
      if (err) {
        res.status(400).json(err).end();
      }
      res.status(201).json("Deu Certo").end();
    });
  };

const listar = (req, res) => {
    let query = `SELECT * FROM tarefas`;

    con.query(query, (err, result) => {
        if (err) {
          res.status(400).json(err).end();
        }
        res.status(200).json({"tarefas":result}).end();
      });
    };

module.exports = {
    criar,
    listar
}