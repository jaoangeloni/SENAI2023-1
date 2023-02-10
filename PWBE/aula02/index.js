const express = require("express");

const app = express();

const router = require("./src/routes/routes");

app.use(express.json());


app.listen(3000,() => {
    console.log("Server on");
});