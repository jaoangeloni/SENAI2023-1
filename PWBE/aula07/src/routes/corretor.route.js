const express = require("express");

const router = express.Router();

const Corretor = require("../controllers/corretor.controller");

router.post("/corretor", Corretor.adicionar);

module.exports = router;