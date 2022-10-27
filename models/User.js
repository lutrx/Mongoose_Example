// require mongoose and destructor Schema and model from it
const { Schema, model } = require('mongoose');

//Create a viking schema here
//<================Schema=====================>
const vikingSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        required: true,
    },
    strength: Number,
    weapon: String
});

//create a model with two arguments ====> (the name of the collection, schema or shape of data)
//always make sure you export you model to use in other files
const VikingModel = model('viking', vikingSchema);
module.exports = VikingModel;
