/** Natives: Object wrappers around primitve values. JS automatically wraps the primitve value around the value in order to use the methods. **/
let myName = "Hector";
console.log(myName.length);
console.log(myName.toUpperCase());

// myName doesn't own any method, however JS wraps the primitive value to use those methods.

// Natives as Constructors
// Array(...) bad idea, easy to forget the number of arguments. Easier syntax with array literal [].
// Object(...) bad idea, force to add properties one by one.
// RegExp(...) bad idea, literal form (/^a*b+/g) has an easier syntax and better performance since its cached by JS engine.

// Date(...), since there are no literal form, it is the only way to declare them.
// Declaring polyfill ES6
if (!Date.now) {
  Date.now = function() {
    return new Date().getTime();
  };
}

// Error(...), good idea since it captures the executing context inside the object.
function returnParam(param) {
  if (!param) {
    throw new Error("param wasn't provided");
  }
 return param;
}

// Symbol(...), created via native, they provide a good primitive to make private values.
//Hector and person and not the same since they´re unique
const hector = Symbol('Hector');
const person = Symbol('Hector');

//Good for storing private data
const classRoom = {
  [Symbol('Mark')]: { grade: 50, gender: 'male' },
  [Symbol('Olivia')]: { grade: 70, gender: 'female' },
  [Symbol('Mark')]: { grade: 88, gender: 'male' }
};

//Loop over the symbols
const syms = Object.getOwnPropertySymbols(classRoom);
const data = syms.map(sym => classRoom[sym]);