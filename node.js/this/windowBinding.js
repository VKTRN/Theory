// When there is no object to the left of the dot, the this keyword is bound to the global object.
// In the browser, the global object is the window object.

const sayName = function() {
  console.log(this.name);
}

window.name = 'global';

sayName(); // global