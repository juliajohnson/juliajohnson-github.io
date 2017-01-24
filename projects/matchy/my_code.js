
var animal = {};
animal.species = 'Snake';
animal['name'] = 'Curtis';
animal['noises'] = [];
console.log(animal);

var noises = [];
noises[0] = 'Hiss';
noises.push('SSS');
noises.unshift('Slither');
noises[noises.length - 1] = 'Shedding';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal["noises"] = noises;
noises.push('Screech');
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var lion = { species: 'feline', name: 'Julia', noises: ['roar', 'meow'] };
animals.push(lion);
var beaver = { species: 'badger', name: 'Beavis', noises: ['build', 'blah'] };
animals.push(beaver);

//I chose an array because an array is a list of values//
var friends = [];

function random(match) {
   var randomValue = Math.floor(Math.random() * animals.length);
    return match[randomValue];
}
friends.push(random(animals)['name']);
console.log(friends);
animals[1]['friends'] = friends;

function search(name) {
    for (var i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
            return animals[i];
        }  
        
    } return null;
}

function edit(name, obj) {
    for (var i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
         return animals[i] = obj;  
            }
        }
    }
function remove(name) {
    for (var i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
          animals.splice(i, 1); 
        }
    }
}

function create(obj) {
    for (var i = 0; i < animals.length; i++) {
        if(animals[i].name === obj.name) return;
        
    }
    
    if(obj.name.length > 0 && obj.species.length > 0)  {
      animals.push(obj);  
    }
      
}
// I AM INSIDE UR COMPUTER AHAHAHAHAHAHAHAH