const mongoose = require("mongoose");

// Defining the persons schema

const personSchema = new mongoose.Schema({
    name: {
        type: String, require: true
    },
    age: Number,
    favouriteFood: [String],
})

//create the persons model
const persons = mongoose.model('persons', personSchema);

module.exports = persons;