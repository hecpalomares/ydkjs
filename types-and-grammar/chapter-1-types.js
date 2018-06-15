// JS has seven-built in types: null, undefined, boolean, number, string, object, symbol. All are primitives except object.

// typeof operator inspect the type of the given value
typeof undefined === "undefined";       // true
typeof true === "boolean";              // true
typeof 25 === "number";                 // true
typeof "25" === "string";               // true
typeof "Hello!" === "string";           // true
typeof { size: "large" } === "object";  // true
typeof Symbol() === "symbol";           // true, (added in ES6)

// Variables dont have types, the values of the variable have the type.
let x = 10;
console.log(typeof x);  // "number"

x = true;
console.log(typeof x);  // "boolean"

x = { size: "small", age: 25 }
console.log(typeof x);  // "object"

// "undefined" vs "undeclared":
// variables with no current value are "undefined"
let a;
console.log(typeof a); // undefined

let b = 15;
console.log(typeof b); // number

let c;
b = c;

console.log(typeof b); // undefined

// variables that were never declared are "undeclared", however broswers display "ReferenceError: variable is not defined". Confusing.
console.log(d);     // ReferenceError: d is not defined