// 'this' is bound to the object that is calling the function

const jim = {
  name: 'Jim',
  sayName: function() {
    console.log(this.name);
  },
  mother: {
    name: 'Jane',
    sayName: function() {
      console.log(this.name);
    }
  }
}

jim.sayName(); // Jim
jim.mother.sayName(); // Jane