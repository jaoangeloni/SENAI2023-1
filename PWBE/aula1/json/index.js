const express = require("express");

const raiz =(req,res) =>{
    res.send("Alô mundo")
}

const interacao = (req,res) =>{
    let nome = req.query.nome;
    res.send(`Olá ${nome}, seu nome possui ${nome.length} letras`);
}

const app = express();
app.get("/",raiz)
app.get("/interacao", interacao);

app.listen(3000,()=>{
    console.log("respondendo na porta 3000.")
})