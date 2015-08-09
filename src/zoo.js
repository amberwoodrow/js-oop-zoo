var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation) {
  this.location = newLocation;
  return "The zoo moved to " + newLocation;
};

Zoo.prototype.open = function() {
  this.status = "open";
  return "You opened the zoo!";
};

Zoo.prototype.close = function() {
  this.status = "closed";
  return "You closed the zoo!";
};

Zoo.prototype.isOpen = function() {
  if (this.status === "open") {
    return true;
  }
  else {
    return false;
  }
};

Zoo.prototype.addAnimal = function(animal) {
  if (this.status === "open") {
    if (typeof(animal) === 'object') {
      if (this.animals.indexOf(animal) != -1) {
        return "We don't like your animal and won't be accepting it!";
      }
      else {
        this.animals.push(animal);
        return animal + " has been added!";
      }
    }
    else {
      return "animal is not an object.";
    }
  }
  else {
    return "The zoo is closed right now try again when it is open.";
  }
};

Zoo.prototype.removeAnimal = function(animal) {
  if (this.status === "open") {
    if ((index = this.animals.indexOf(animal)) != -1) {
      this.animals.splice(index, 1);
      return "the animal has been removed!";
    }
    else {
      return "animal doesn't exist";
    }
  }
  else {
    return "The zoo is closed right now try again when it is open.";
  }
};

module.exports = Zoo;