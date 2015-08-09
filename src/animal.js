function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function() {
  this.age ++;
  // a method that increases the age of the animal by one
  return "The animal is now 1 year older";
};

Animal.prototype.feed = function() {
  // if the animal is awake, return "NOM NOM NOM"
  if (this.awake){
    return 'NOM NOM NOM';
  }
  else {
    return "animal is not awake";
  }
};

Animal.prototype.wakeUp = function() {
  // a method that changes the awake property to `true`
  this.awake = true;
  return "The animal is awake now";
};

Animal.prototype.sleep = function() {
  // a method that changes the awake property to `false`
  this.awake = false;
  return "The animal is now sleeping";
};

module.exports = Animal;