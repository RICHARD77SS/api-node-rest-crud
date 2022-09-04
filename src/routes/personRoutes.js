const router = require('express').Router()
const Person = require('../models/Person')


router.post('/', async (req, res) => {
  //recebe req.body
  //{name: "richard", email: "richard_email@email.com", salary: 100, active: true }
  //desestruturação
  const { name, email, salary, active } = req.body
  // valida se tem nome 
  if (!name) {
    res.status(422).json({ error: 'O nome é o brigatorio' })
    return
  }
  const person = {
    name,
    email,
    salary,
    active
  }
  try {

    //criar dados
    await Person.create(person)

    res.status(201).json({ message: 'Pessoa inserida com sucesso' })

  } catch (error) {
    res.status(500).json({ error: error })
  }
})

// leaitura de dados
router.get('/', async (req, res) => {
  try {
    const people = await Person.find()

    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({error: error})
  }
})

router.get('/:id', async (req, res) => {
  // extrair o dado pelo id
  const id = req.params.id
  try {
    const person = await Person.findOne({ _id: id })
    if (!person) {
      res.status(422).json({ message: 'O ususario não foi encontrado' })
      return
    }
    res.status(200).json(person)

  } catch (error) {
    res.status(500).json({ error: error})
  }
})

// Atualizar dados

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const { name, email, salary, active } = req.body
  const person = {
    name,
    email,
    salary,
    active,
  }
  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person)
    
    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({ message: 'O usuario não foi encontrado!' })
      return
    }

    res.status(200).json(person)

  } catch(error) {
    res.status(500).json({error:error})
  }
})


//Delete deletar dados

router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const person = await Person.findOne({ _id: id })
  
  if (!person) {
    res.status(422).json({ message: 'O usuario não foi encontrado! ' })
    return
  }

  try {
    await Person.deleteOne({ _id: id })
    
    res.status(200).json({message: 'Usuário removido com sucesso!'})
  } catch (error) {
    res.status(500).json({error: error})
  }


})



module.exports = router