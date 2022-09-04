const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
  name: String,
  email: String,
  salary: Number,
  active: Boolean,
})

module.exports = Person