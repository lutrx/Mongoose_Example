//Make sure to require your model so you can connect to the DB
//This line of code connects to the Database
require("./db");
const mongoose = require('mongoose');
const VikingModel = require('./models/User');

//Iteration 2:
//create a user as an object
const viking = {
    firstName: 'Ragnar',
    familyName: 'Lothbrok',
    strength: 300,
    weapon: 'sword'
};

//Iteration 3:
//Insert the new user that you created into the Database
//Note: Make sure to close your DB connection afterwards

async function createViking () {
    try {
        const newViking = await VikingModel.create(viking);
        console.log('Viking was created')
    } catch (error) {
        console.log('There is an error', error);
    }
}
createViking();
async function disconnectDB () {
    try {
        await mongoose.disconnect();
        console.log('Disconnected');
    } catch (error) {
        console.log('cannot disconnect, error.', error);
    }
}

//Delete created viking:
async function deleteViking () {
    try {
        await VikingModel.deleteOne({firstName: 'Ragnar'});
        console.log('Viking deleted');
    } catch (error) {
        console.log('Cannot be deleted', error);
    }
}
deleteViking();

//Create Array of vikings:
let manyVikings = [
    {
        firstName: 'Ragnar',
        familyName: 'Lothbrok',
        strength: 300,
        weapon: 'sword'
    },
    {
        firstName: 'Björn',
        familyName: 'Ironside',
        strength: 200,
        weapon: 'dagger'
    },
    {
        firstName: 'Harald',
        familyName: 'Finehair',
        strength: 500,
        weapon: 'knife'
    },
];

async function createManyVikings () {
    try {
        const arrayVikings = await VikingModel.insertMany(manyVikings);
        console.log('vikings were created!');
    } catch (error) {
        console.log('Could not be created.', error);
    }
}

//createManyVikings();

//Iteration 4:
//Find the user that you created and update their name to something new
async function changeVikingName () {
    try {
        const newName = await VikingModel.updateOne(
        { firstName: "Harald" },
        { firstName: "Lagartha" },
        { new: true }
    );
        console.log("This is the new Harald", newName);
    } catch (error) {
        console.log('Name cannot be changed', error);
    }
}
changeVikingName();
disconnectDB();