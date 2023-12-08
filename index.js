const express = require("express")

const app = express()

const compradores = []

class Comprador {
    constructor(id) {
        this.id = id
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const comprador = new Comprador(id)

    compradores.push(comprador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
})