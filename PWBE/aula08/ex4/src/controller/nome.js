const nomes = [
    "Jao Angeloni",
    "Carlos moreira",
    "Jair Bolsonaro",
    "Lula Inácio",
  ];


const nomeAleatorio = (req, res) => {
    let aleatorio = Math.floor(Math.random() * nomes.length);

    let nome = nomes[aleatorio];

    res.status(200).json({"nome":nome}).end()
}

module.exports = {
    nomeAleatorio
}