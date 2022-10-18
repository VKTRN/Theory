// a generator generates objects. It is not an object itself.
// It is a function that returns an object.
// The iterator has an internal state that is used to keep track of the iteration.

function* generator(array) {
  
  for (let i = 0; i < array.length; i++) {
    yield array[i]*array[i];
  }
}

const iterator = generator([2,4,6]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//////////////////////////

function* generateIDs() {
  let i = 0; // internal state
  while (true) {
    yield i++;
  }
}

const idGenerator = generateIDs();

console.log(idGenerator.next());  
console.log(idGenerator.next());
console.log(idGenerator.next());
