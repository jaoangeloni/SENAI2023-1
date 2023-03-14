const express = require ("express")

const router = express.Router();

const Contatenar = require("../controller/contatenar.js");

router.post("/contatenar", Contatenar.contatenar);

module.exports = router;