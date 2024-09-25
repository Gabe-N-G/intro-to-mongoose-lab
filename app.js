const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const Cust = require('./models/cust.js');

// testing prompt
const prompt = require('prompt-sync')();
// const choice = prompt(`
//     What would you like to do?
    
//     (C)reate a customer
//     (R)ead all customers
//     (U)pdate a customer
//     (D)elete a customer
    
//     or quit
    
//     `)
// switch(choice){
//     case "C":
//         console.log("Create!")
//         let username = prompt('What is your name? ');
//         console.log(`Your name is ${username}`);
//         let userAge = prompt('how old are you? ')
//         console.log(`You are ${userAge} years old`) 
//         break 
//     case "R":
//         console.log("Read!")
//         break
//     case "U":
//         console.log("Update!")
//         break
//     case "D":
//         console.log("Delete!")
//         break 
//     default:
//         console.log(`Exiting...`);        
// }
//end prompt testing

/* working prompts for create
 let username = prompt('What is your name? ');
    console.log(`Your name is ${username}`);
    let userAge = prompt('how old are you? ')
    console.log(`You are ${userAge} years old`)
*/

const createCust = async () => {
    const custData = [
      {
        name: username,
        age: userAge,
      }, 
    ]
    const cust = await Cust.create(custData);
    console.log('New todo', cust);
  };


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
    //creates a new customer
    await createCust();

    /* reads all customers
    const Custs = await Cust.find({})
    console.log(Custs)
    */


  }


  /*
    find commands

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
  */

  connect()