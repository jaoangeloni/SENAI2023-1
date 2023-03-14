const contatenar = (req, res) => {
    const {nome, sobrenome} = req.body;
    const nomeCompleto = `${nome} ${sobrenome}`

    res.status(200).json({"Nome Completo" : nomeCompleto}).end();
}

module.exports = {
    contatenar
}