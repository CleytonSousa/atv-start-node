const express = require("express");

const app = express();
const data = [];
app.use(express.json());

//um enpoint pra salvar seu objeto
app.post("/endpoint", (req, res) => {
    //no minino 5 campos
    const {nome, sobrenome, idade} = req.body;
    data.push({
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    })
    return res.send("Usuario cridado!")
})

app.get("/listUsers", (req, res) => {
    return res.send(data)
})

app.get("/getuser/:idadeUser", (req, res) => {
    const {idadeUser} = req.params;

    const inAgeUser = [];
    console.log(idadeUser)

    data.forEach(user => {
        if(user.idade == idadeUser){
            inAgeUser.push(user)
        } else {
            console.log("Idade incompativel")
        }
    })

    return res.send(inAgeUser);
})

app.listen(1234, () => {
    console.log("Pai tá on")
})