/*** Chapter 4: Coercion: type conversions ***/

// Explicit coercion vs Implicit coercio
let age = 25;
let impCoercion = age + "";
let expCoercion = String(age);

console.log(typeof impCoercion, typeof expCoercion);    // string, string

// Explicit Coercion: type conversion that are obvious and explicit. (Making code explicit and more understandable)
// Strings <-> Numbers
let a = 26;
let aToString = String(a);

let b = "3.1523";
let bToNumber = Number(b);

console.log(typeof aToString, typeof bToNumber);    // string, number

// Other forms
let aToString2 = a.toString();  // box primitive value to object wrapper, and call toString() to the object
let bToNumber2 = +b;            // unary operator

console.log(typeof aToString, typeof bToNumber);    // string, number

// Explictly Boolean
// !! also works replacing Boolean(...)
let zeroString = "0";
let array = [];
let emptyObj = {};

let empty = "";
let zeroNum = 0;
let valueNull = null;
let undefinedX;

console.log(Boolean(zeroString));   // true
console.log(Boolean(array));        // true
console.log(Boolean(emptyObj));     // true

console.log(Boolean(empty));        // false
console.log(Boolean(zeroNum));      // false
console.log(Boolean(valueNull));    // false
console.log(Boolean(undefinedX));   // false

// Implicit Coercion: type conversions that are hidden to the developer. Making code harder to understand.
// Strings <-> Numbers
(function () {
    let a = 42;
    let b = a + "";     // (+ ""), converts to a string

    let _PI = "3.14";
    let PI = _PI - 0;   // (- 0), converts to a number

    console.log(typeof b, typeof PI);  // string, number
}());

// Loose Equals vs. Strict Equals
// == allows coercion
// === disallows coercion 
(function () {
    let a = 42;
    let b = "42";

    console.log(a === b);	    // false, no coercion is allowed. 42 and "42" are different values
    console.log(a == b);		// true
})();

(function () {
    let a = 42;
    
    // good enough (works implicitly)
    if (a) {
        console.log("Hi");
    }

    // better (works exp)
    if (!!a) {
        console.log("Hello");
    }

    // better (works exp)
    if (Boolean(a)) {
        console.log("Hola");
    }

})();