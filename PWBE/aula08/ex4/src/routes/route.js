const express = require ("express")

const router = express.Router();

const Nome = require("../controller/nome.js");

router.get("/nome", Nome.nomeAleatorio);

module.exports = router;