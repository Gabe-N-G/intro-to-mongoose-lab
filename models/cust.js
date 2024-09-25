const mongoose = require('mongoose');
//new syntax import mongoose from mongoose

const custSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//model const shold be first letter caps. lowercase plural, 

const Cust = mongoose.model("customers", custSchema);

//old syntax without module 
module.exports = Cust;

//new syntax
//export default moongoose.model("customers", customerSchema)