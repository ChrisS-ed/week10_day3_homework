var Farm = require('../models/farm.js');
var Animal = require('../models/animal.js');
var assert = require('assert');

var ourFarm = new Farm({
  name: "Bridge Farm",
  farmer: "David Archer",
  contact: {
    website: "www.bridgefarm.co.uk",
    address: "1 Ambridge Road",
    country: "UK"
  }
});

var fluffy = new Animal({
  name: "Fluffy",
  type: "Sheep",
  noise: "Baaa",
  vetReport: {
    health: 10,
    outlook: "Exellent"
  }
});

var john = new Animal({
  name: "John",
  type: "Pig",
  noise: "Oink!",
  vetReport: {
    health: 2,
    outlook: "Not good"
  }
});

describe('Farm: ', function() {
  it("Fluffy should say Baaa", function(){
    assert.equal("Baaa", fluffy.speak());
  });

  it("John should say Oink!", function(){
    assert.equal("Oink!", john.speak());
  });

  it("Fluffy should be added to first element of the animals array", function(){
    ourFarm.addAnimal(fluffy);
    assert.equal(fluffy._id, ourFarm.animals[0]);
  });

  it("John should be added to second element of the animals array", function(){
    ourFarm.addAnimal(john);
    assert.equal(fluffy._id, ourFarm.animals[0]);
    assert.equal(john._id, ourFarm.animals[1]);
  });

  it("John should be removed from the animals array", function(){
    ourFarm.removeAnimal(john);
    assert.equal(fluffy._id, ourFarm.animals[0]);
    assert.equal(1,ourFarm.animals.length);
  });

});