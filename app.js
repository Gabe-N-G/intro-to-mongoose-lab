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

  async function updateCustomer(){
    const findUserNamed = prompt("What is the customer name you are looking to update? ");
    foundUser = await Cust.findOne({name:findUserNamed})
    console.log("You are changing" + foundUser)

    const newUserName = prompt("What is the new name? ")
    const newUserAge = prompt("What is the new age? ")
    
    const updatedUser = await foundUser.updateOne({
        name: newUserName,
        age: newUserAge,
    })
    console.log("changed!")
    getStarted()
  }

  async function deleteCustomer(){
    const findUserID = prompt("Please type out the ID of the User you would like to delete (read all customers to get ids)")

    foundID = await Cust.findById(findUserID)
    console.log("Do you want to delete",foundID)
    const choice = prompt(`
        Hit Y to delete
        Or any other button to return
        `)
    if (choice === "Y"){
        console.log("customer deleted!")
        await foundID.deleteOne()
    } else {
        getStarted()
    }
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
        getStarted()
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