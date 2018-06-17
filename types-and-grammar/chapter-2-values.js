/*** Chapter 2: Values ***/

/* Array: numerically indexed collections of any value-type. */
// It's not a great idea to add string keys/properties to arrays. Use objects for holding values in keys/properties, and save arrays for strictly numerically indexed values.
let array = [];
array[0] = 5;
array[1] = "a";
array[2] = ["hi", 2];

console.log(array);         // [ 5, 'a', [ 'hi', 2 ] ]
console.log(array.length);  // 3

/* Array-likes */
// DOM query operations return a DOM node-list. 
// Array.from(...) can make this array-like objects into real arrays.

/* Strings: Similar to an array of characters. With useful native methods. */
let string = "Kindle";
console.log(string.toUpperCase());
console.log(string.concat(" ").concat("Fire"));

let stringReversed = string.split("").reverse().join("");
console.log(stringReversed);  // 
// 1. Convert to an array via split(""), 
// 2. Use reverse() method native from Array.prototype
// 3. Convert the array back to a string via join("")

/* Numbers: Javascript has one numeric type. Includes both "integers" and "fractionals" */
let number = 25.7509;

// toFixed(), how many fractional decimal places the value has (round up)
console.log(number.toFixed(3));     // 25.751;

// toPrecision(), how many significant digits should be used to represent the valu
console.log(number.toPrecision(3)); // 25.8

// Special Values
// undefined values has one type, undefined
// null values has one type, null
let x = null;
let y;
console.log(typeof x);  // object (null)
console.log(typeof y);  // undefined
console.log(typeof z);  // undefined (undeclared)

// Value vs Reference: the type of data dictates how it should be assigned the value
// Simple values such as string, numbers, booleans.. are always copied as value
let me = "Hector";
let meCopiedValue = me;
me = "Gerardo";

console.log(me, meCopiedValue); // Gerardo Hector

// Compound values such as objects (including arrays an functions) are always copied as reference
let myHobbies = ["Programming", "Football", "Play Piano"];
let myFriendHobbies = myHobbies;

myFriendHobbies.push("Walk away the cats");

console.log(myHobbies); // [ 'Programming', 'Football', 'Play Piano', 'Walk away the cats' ]
console.log(myHobbies === myFriendHobbies); // true!

// Both myHobies and myFriendHobbies point to the same reference in memory that allocates the values of the array.