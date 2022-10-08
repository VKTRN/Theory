const sayName = function() {
  console.log(this.name);
}

const sayNameAndNumbers = function(n1, n2, n3) {
  console.log(`${this.name}, ${n1}, ${n2} ${n3}`);
}

const jim = {
  name: 'Jim'
}

const jane = {
  name: 'Jane'
}

// using call() to set the 'this' to the object passed as the first argument

const numbers = [1, 2, 3];

sayName.call(jim); // Jim
sayName.call(jane); // Jane

// the call function when having arguments, the first argument is the context.

sayNameAndNumbers.call(jim, numbers[0], numbers[1], numbers[2]); // Jim, 1, 2, 3
sayNameAndNumbers.call(jim, ...numbers); // Jane, 1, 2, 3

// using apply() to set the 'this' to the object passed as the first argument. The difference is to call() that the second argument is an array of arguments.

sayNameAndNumbers.apply(jim, numbers); // Jim, 1, 2, 3

// using bind() to set the 'this' to the object passed as the first argument. 
// The difference to call() is that the function is not called, but a new function is returned with the 'this' set to the object passed as the first argument.

const sayJim = sayName.bind(jim);

sayJim(); // Jim

