/*** Chapter 1: What is Scope? ***/
// Function Scope, start looking for variables inside our function scope
function multiply(a) {
	let b = 2;
	return a * b;
}

console.log(multiply(3)); // 6

// Nested Scope: Start looking 'b' from sumAPlusB function scope, moves up to global scope since it didn't find 'b'
function sum(a) {
	return a + b;
}

let b = 2;
console.log(sum(3)); // 5
// NOTE: Scopes are resoluted from bottom to top. From the most inner function to the most outer one (global).

/*** Chapter 2: Lexical Scope ***/
// Lexical Scope
function one(a) {
	let b = a * 2;

	function two(c) {
		console.log({ a, b, c });
	}

	two(b * 3);
}

one(2); // { a: 2, b: 4, c: 12 }
// scope of 'two' function. Line 25. Identifiers: c
// scope of 'one' function. Line 21-28. Identifiers: a, b, two (func)
// scope of global function. Rest of the file. Identifiers: one (func)

// NOTE: Bubbles of the Scopes are strictly nested. The 'two' is a subset of 'one'. And 'one' is a subset of global.
// NOTE 2: Scope-lookups (searching for identifiers) stops once it finds the first match.

/*** Chapter 3: Function vs Block Scope ***/
// Scope From Functions: All variables belong to the function, can be used and reused throughout the entire
// function (even accessible at nested scopes).∫∫
function displayInfo(name) {
	let age = 25;
	let gender = "M";

	function displayName() {
		return name;
	}
}
// console.log(age, gender, name); // All three fail
// displayName(); // ReferenceError: displayName is not defined

// Hiding in Plain Scope: "hide" variables and functions by enclosing them in the scope of a function
function converter(number) {
	function multiplyNumber(number) {
		return number * 2;
	}

	let b = 5 + multiplyNumber(number);
	return b;
}

console.log(converter(2)); // 9
// console.log(number, b);        // ReferenceError: number is not defined
// console.log(multiplyNumber(2)); // ReferenceError: multiplyNumber is not defined

// number, multiplyNumber, b are not accesible by any outside influence.
// Note: This design keeps details private between functions. Good Software.
// [Principle of Least Privilege]: you should expose only what is minimally necessary, and "hide" everything else.

// IIFE (immediately-invoked function expression): Call automatically a function, to not populate the space
let x = 2;

(function executeThisNow() {
	let x = 3;
	console.log("x value from the executeThisNow function: ", x);
})();

console.log("x value from the global scope function: ", x);

// NOTE: function declarations have keyword 'function' as the first token of the statement

// Anonymous vs. Named
// anonymous function expression
setTimeout(function() {
	console.log("Waiting for 1 second");
}, 1000);

// named function expression
setTimeout(function timeOutHandler() {
	console.log("Waiting fot 1.5 seconds");
}, 1500);

// Note: inline function expressions are a good practice. Since the name can be used to stack trace, makes more readable/understandable code (self-documenting), can be refer to itseld. No drawbacks.

// Block As Scopes
// Function are not the only unit of scope. Refers to the idea that variables and functions can belong to an arbitrary block an ({...})
(function letScopeThis() {
  var x = 1;
  let y = 2;
  const PI = 3.14159265359;

  if(true) {
    let z = 3;
    const PI = 3.1416;

    console.log('Inside the if:', {x, y ,z});
    console.log('Inside the if:', {PI});
  }

  // console.log('Outside the if statement block::' {x, y ,z}); // ReferenceError: z is not defined, since it has been declared with 'let' keyword
  // console.log('Outside the if statement block:' {PI}); // ReferenceError: PI is not defined, since it has been declared with 'const' keyword

})();