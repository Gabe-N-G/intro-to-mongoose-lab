const mongoose = require('mongoose');

const custSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Cust = mongoose.model('Cust', custSchema);

/*
const Todo = mongoose.model('Todo', {
  text: String,
  isComplete: Boolean,
});
*/

module.exports = Cust;