const calcular = (req,res) => {
    const {vali, valii} = req.query;
    const {operacao} = req.params;

    let resultado;

    switch (operacao) {
      case 'somar':
        resultado = Number(vali) + Number(valii);
        break;
      case 'subtrair':
        resultado = Number(vali) - Number(valii);
        break;
      case 'multiplicar':
        resultado = Number(vali) * Number(valii);
        break;
      case 'dividir':
        resultado = Number(vali) / Number(valii);
        break;
      default:
        return res.status(400);
    }
    res.status(200).json({ "resultado" : resultado }).end();
};


module.exports = {
    calcular
};