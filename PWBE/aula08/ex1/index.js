const express = require ("express")
const cors = require("cors");

const route = require("./src/routes/route");

const app = express();
app.use(cors());
app.use(express.json());

app.use(route);

app.listen(3000, () => {
    console.log("Operando");
});