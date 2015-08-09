var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;
var openZoo;

// general notes:
// you typically only want one assertion per test
// don't just check the message output

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
    openZoo = new Zoo("Denver CO");
    openZoo.open();
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      // check the beginning location and compare against the new location
      zoo.changeLocation("test denver");
      expect(zoo.location).toEqual("test denver");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      // check that the zoo is closed, then check if open() opens it
      zoo.open();
      expect(zoo.status).toEqual("open");
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      expect(openZoo.isOpen()).toEqual(true);
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual(false);
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      // check the length of the animals array or make sure it is empty.
      expect(zoo.animals).toEqual([]);
    });
  });

  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      var cow = new Animal("Betsy",57,"moo");
      // check that add animal did not actually add to the animals array, perhaps by 
      // checking the length of the array. if you just check the message you do not actually know if
      // the animal went into the array or not.

      // stores original length before addAnimals is called to compare the animals array to the
      // animals array after the addAnimal method is called.
      // not make the origLengths varibles global to spare their original integrity.
      var origLength = zoo.animals.length;
      zoo.addAnimal(cow);
      expect(zoo.animals.length).toEqual(origLength);
    });
    it('should add an animal to the animals array', function(){
      var origLength = openZoo.animals.length;
      openZoo.addAnimal(lion);
      // see if array is 1 longer
      expect(openZoo.animals.length).toEqual(origLength + 1);
    });

    it('should only add instances of animals', function(){
      //check the length of the animals array before and after like the other comments
      var origLength = openZoo.animals.length;
      openZoo.addAnimal("cow");
      expect(openZoo.animals.length).toEqual(origLength);
    });

    it('should not add duplicates', function(){
      openZoo.addAnimal(lion);
      var animalsLength = openZoo.animals.length;
      //check the length of the animals array
      openZoo.addAnimal(lion);
      expect(openZoo.animals.length).toEqual(animalsLength);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      //check the length of the animals array
      openZoo.addAnimal(lion);
      var animalsLength = openZoo.animals.length;
      openZoo.removeAnimal(lion);
      // see if animals array is one shorter
      expect(openZoo.animals.length).toEqual(animalsLength - 1);
    });
  });
});





