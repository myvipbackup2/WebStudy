var Animal=require('./animal.js');
var Bird=require('./bird.js');
var duck=require('./duck.js');

var animal=new Animal();
animal.say();
animal.eat();

var bird=new Bird();
bird.say();
bird.eat();

//duck.say();
//duck.eat();
console.log(duck);