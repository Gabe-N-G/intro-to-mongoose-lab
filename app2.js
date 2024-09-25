const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Cust = require('./models/cust.js');
const prompt = require('prompt-sync')();

 
function getStarted(){
    
    console.log(`            
            What would you like to do?
    
            (C)reate a customer
            (R)ead all customers
            (U)pdate a customer
            (D)elete a customer
    
            or (Q)uit`);

    const choice = prompt("Please put a letter in to choose")
    runQueries(choice)
  };

  async function createCustomer(){
    let username = prompt('What is your name? ');
    console.log(`Hello ${username}!`);
    let userAge = prompt('How old are you? ')

    
    const newCust = await Cust.create({
    name: username,
    age: userAge,
    });

  console.log("Customer created!",newCust);
  getStarted();

  }

  async function viewCustomers(){
    customers = await Cust.find()
    console.log(customers)

    getStarted()
  }

  async function runQueries(choice) {
    switch (choice) {
      case "C":
        console.log("Create!")
        await createCustomer();
        break;
      case "R":
        console.log("Read!")
        await viewCustomers();
        break;
      case "U":
        console.log("Update!")
        await updateCustomer();
        break;
      case "D":
        console.log("DESTROY")
        await deleteCustomer();
        break;
      case "Q":
        console.log("Quit!")
        console.log("Thank you! Have a great day.");
        await mongoose.disconnect();
        break;
      default:
        console.log("Invalid input please try again")
        getStarted()
    }
  }
  

  const connect = async () => {
    try
    {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Customer API");
        } catch {
    console.log("Oh god everything has gone wrong")
   }
    getStarted();
  };
  
  connect();
/*
    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runQueries()
  
    // Disconnect our app from MongoDB after our queries run.
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  
    // Close our app, bringing us back to the command line.
    process.exit();
*/