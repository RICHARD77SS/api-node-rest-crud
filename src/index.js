const express = require('express')
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

//entregar uma porta

app.listen(3000)