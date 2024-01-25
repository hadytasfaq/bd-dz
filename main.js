const express = require("express")
const app = express()
const port = 3000

const coach = [
    {
        id: 1,
        date: "25.02.1984",
        fullName: "Симонов Илья",
        seniority: "20",
    },
    {
        id: 2,
        date: "20.09.1994",
        fullName: "Соколовский Тимур",
        seniority: "12",
    },
    {
        id: 3,
        date: "12.12.1931",
        fullName: "Журиков Егор",
        seniority: "7",
    }
]

app.get('/', (req, res) => {
    res.set({
        "Content-Type": "application/json",
    })
    res.json(JSON.stringify(coach))
})

app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
})