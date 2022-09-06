require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const axios = require('axios');

app.use(cors())
//forma de ler json / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

//rotas da api

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

//rota inicial /endpoint
app.get('/', (req, res) => {
  //mostrar req

  res.json({ message: 'ola, funcionou' })
})

const DB_USER = process.env.DB_USER
// ajusta /
const DB_PASSWORD = process.env.DB_PASSWORD


//entregar uma porta
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.okphesi.mongodb.net/test`
  )
  .then(() => {
    console.log('MongoDB conectado')
  })
  .catch((err) => console.log(err))

app.listen(3000)

