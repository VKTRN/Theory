// Using the 'new' keyword in a function invocation, an object is created and bound to 'this'.

const Person = function(name) {
  // this = {};
  this.name = name;
}

const jim = new Person('Jim');

console.log(jim.name); // Jim