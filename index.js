const express = require("express")
const todoRouter = require("./routes/todoRoute")
const app = express()
app.use(express.json())

app.use("/todo", todoRouter)

app.listen(3000, () => {
    console.log("listening onaa 3000")
})

module.exports = app;