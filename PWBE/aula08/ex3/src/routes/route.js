const express = require ("express")

const router = express.Router();

const Random = require("../controller/random.js");

router.get("/random", Random.random);

module.exports = router;