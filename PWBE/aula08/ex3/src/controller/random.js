const random = (req, res) => {
    const {limite} = req.query;

    let num = Math.floor(Math.random() * limite);

    res.status(200).json({"random":num}).end()
}

module.exports = {
    random
}