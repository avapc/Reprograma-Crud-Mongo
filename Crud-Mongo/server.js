const express = require('express')
const app = express()

const db = require('./src/data/database')
db.connect()

app.use(express.json())

const livrosRouter = require('./src/routes/livros.routes')
app.use('/livros',livrosRouter)
app.listen(3333, ()=> console.log('Servidor rodando'))