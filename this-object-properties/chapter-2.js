/*** Chapter 2: this All Makes Sense Now! ***/
// 'this' depends on the call-site of the function (where the function is called). 4 rules apply.

// Default binding: in 'strict mode' the global object is not eligible for the default binding.
function defaulting() {
  // console.log(this.a); // undefined
}

let a = 2;

defaulting();

// Implicit Binding: the call-site uses the 'objectX' to reference the function. 'objectX' owns / contains the function reference at the time the function is called.
function implicit() {
  console.log(this.a); // 2
}

let objectX = {
  a: 2,
  implicit: implicit
};

let objectY = {
  a: 3,
  implicit: implicit
};

objectX.implicit(); // 2
objectY.implicit(); // 3

// Explicit Binding: via the apply() and call() methods you can specify the context on where to execute a function.
function explicit() {
  let sum = this.a + this.b;
  console.log(sum);
}

let sumX = {
  a: 2,
  b: 2
};

let sumY = {
  a: 3,
  b: 3
};

explicit.call(sumX); // 4, by using call we are forcing the 'this' line 33 to be sumX
explicit.call(sumY); // 6, by using call we are forcing the 'this' line 33 to be sumY

// 'new' Binding: point to the new instance of the object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(this.name);
  }

  sayAge() {
    console.log(this.age);
  }
}

let me = new Person("Hector", 25); // 'this' will point to my new instance

me.sayName(); // Hector
me.sayAge(); // 25

// Order of precedence.
// 1. function called with 'new'. 'this' points to the newly constructed object
let alice = new Person("Alice", 40);

// 2. function called with a (explicit binding) with 'call' or 'apply'. 'this' is the specified object
let objectZ = {
  a: 4,
  b: 4
};

explicit.call(objectZ);

// 3. function called with a context (implicit binding)
function calculatePrice() {
  console.log((this.price * 1.15).toFixed(2));
}

let computerX = {
  price: 1500,
  calc: calculatePrice
};

let computerY = {
  price: 1000,
  calc: calculatePrice
};

computerX.calc(); // 1725.00
computerY.calc(); // 1150.00

// 4. default the 'this'. In 'strict mode' is undefined, in 'no strict mode' is the global object

// Lexical 'this': ES6 arrow function. Adopt the 'this' of the enclosing function. Replace the self = this.
function PersonX() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);

  setInterval(() => {
    console.log(`Year ${this.age} passed`);
  }, 1000);
}

let meX = new PersonX();