var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/farm-manager');

var Animal = require('./models/animal');
var Farm   = require('./models/farm');

var ourFarm = new Farm({
  name: "Bridge Farm",
  farmer: "David Archer",
  contact: {
    website: "www.bridgefarm.co.uk",
    address: "1 Ambridge Road",
    country: "UK"
  }
});

ourFarm.save(function(err){
  if(err) console.log(err);
  console.log("New farm created");
});

//********************************************************//

var ourFarm = new Farm({
  name: "River Farm",
  farmer: "Hugh Stanley-Warner",
  contact: {
    website: "www.riverfarm.co.uk",
    address: "1 River Road",
    country: "UK"
  }
});

ourFarm.save(function(err){
  if(err) console.log(err);
  console.log("New farm created");
});
