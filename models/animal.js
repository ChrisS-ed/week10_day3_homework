var mongoose = require('mongoose');

var vetReportSchema = new mongoose.Schema({ health: 'number', outlook: 'string' });

var animalSchema = new mongoose.Schema({
  name: String,
  type: String,
  noise: String,
  vetReport: vetReportSchema
});

animalSchema.methods.speak = function(){
  return this.noise;
}

var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;

