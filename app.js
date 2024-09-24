const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const Cust = require('./models/cust.js');

//testing prompt
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
//end prompt testing

const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  
    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runQueries()
  
    // Disconnect our app from MongoDB after our queries run.
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  
    // Close our app, bringing us back to the command line.
    process.exit();
  };
  
  const runQueries = async () => {
    console.log('Queries running.')
    // The functions calls to run queries in our db will go here as we write them.
    // await createTodo();
    const todos = await Todo.find({});
    // console.log(todos)
    const todoById = await Todo.findById('66f2dc3369b539f92c1eea2d');
    // console.log(todoById);
    const todoFindOne = await Todo.find({ text: "Learn VIM" });
    console.log(todoFindOne)
  };
  
  connect()