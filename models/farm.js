//Let's require mongoose.
var mongoose = require('mongoose');
var Animal  = require('./animal');

//create a new mongoose Schema
var farmSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  farmer: String,
  contact: {
    website: String,
    address: String,
    country: String,
  },
  animals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }]
});

farmSchema.methods.addAnimal = function(animal){
  this.animals.push(animal);
}

farmSchema.methods.removeAnimal = function(animalToRemove){
  this.animals = this.animals.filter(function(animal){
    return animal !== animalToRemove._id;
  });
}

//get a mongoose Model and save to variable Farm
var Farm = mongoose.model('Farm', farmSchema);


// Make the Farm available to our app
module.exports = Farm;

