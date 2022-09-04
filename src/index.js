const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler json / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

//rota inicial /endpoint
app.get('/', (req, res) => {
  //mostrar req

  res.json({message: 'ola, funcionou'})
})

const DB_USER = 'richard_paratestes'
// ajusta /
const DB_PASSWORD = encodeURIComponent('DD0hFVJYmIc9AuZU')


//entregar uma porta
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.okphesi.mongodb.net/test`
  )
  .then(() => {
    console.log('MongoDB conectado')
  })
  .catch((err)=>console.log(err))

app.listen(3000)


//mongodb+srv://richard_paratestes:<password>@cluster0.okphesi.mongodb.net/test
//DD0hFVJYmIc9AuZU