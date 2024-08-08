const mongoose = require ('mongoose');
const connectDB = require('./database/database');
const persons = require('./model/persons');

// connect to database
connectDB();

// Creating a persons object
const danny = new persons({
    name: "Danny Walter",
    Age: 25,
    favouriteFood: ["rice", "beans", "indomie"]
})

// danny.save()

const arrayOfPersons = [
    {name: "Prince Wilson", age: 27, favouriteFood: ["sharwama", "chicken peppersoup", "afang soup and fufu"]},

    {name: "Cyprian Banks", age: 40, favouriteFood: ["fried rice", "smoked gizzard", "fresh fish peppersoup"]},

    {name: "Obim Ikenna", age: 34, favouriteFood: ["boiled plantain", "yam porridge", "chicken and chips"]},
]
 
// persons.create(arrayOfPersons)
    // .then(data => console.log("People created succesfully!", data))
    // .catch(err => console.log("Error creating people", err));

    // to find all persons in the database
persons.find()
// .then(data => console.log("People created succesfully!", data))
//     .catch(err => console.log("Error creating people", err));


// to find one person
persons.findOne({name: "Danny Walter"})
// .then(data => console.log("People created succesfully!", data))
//     .catch(err => console.log("Error creating people", err));

// finding by ID
persons.findById('66b4c71338ecd64b9ee4ee97')
// .then(data => console.log("People created succesfully!", data))
//     .catch(err => console.log("Error creating people", err));

// Performing Classic Updates by Running Find, Edit, then Save
persons.findById('66b4bf033b629fb8d2e7ac94')
    .then(persons => {
        if(!persons) {
            throw new error('Person not found');
        }
        persons.favouriteFood.push('hamburger');
        return persons.save();
    })
    .then(updatedPerson => {
        console.log('Person updated successfully', updatedPerson);
    })
    .catch(err => console.log('Error', err))

// Find one and update
persons.findOneAndUpdate({name: 'Jane Doe'}, {age: 25}, {new: true});

// Find and delete
persons.findByIdAndDelete('66b4bf033b629fb8d2e7ac93');

// Removing many documents
persons.remove();