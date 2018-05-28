/* Chapter 1: What is Scope? */
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

/* Chapter 2: Lexical Scope */
// Lexical Scope
function one(a) {
  let b = a * 2;

  function two(c) {
    console.log({a, b, c});
  }

  two(b * 3);
}

one(2); // { a: 2, b: 4, c: 12 }
// scope of 'two' function. Line 25. Identifiers: c
// scope of 'one' function. Line 21-28. Identifiers: a, b, two (func)
// scope of global function. Rest of the file. Identifiers: one (func)

// NOTE: Bubbles of the Scopes are strictly nested. The 'two' is a subset of 'one'. And 'one' is a subset of global.
// NOTE 2: Scope-lookups (searching for identifiers) stops once it finds the first match.