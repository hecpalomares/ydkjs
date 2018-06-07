/*** Chapter 5: Prototypes ***/
// [[Prototype]]: Objects in JavaScript have an internal property that is the reference / link to another object.
let myObjectA = {
    a: 2
};

let myObjectB = Object.create( myObjectA );
console.log(myObjectB.a);   // 2

// It creates an new myObjectB linked by the [[Prototype]] to myObjectA.  (line 7)
// 1. Check if the property 'a' exists in myObjectB
// 2. Property 'a' doesn't exist, check the in the [[Prototype]] of there is a link
// 3. There is a link to [[Prototype]] of myObjectA
// 4. Check if the property 'a' exists in myObjectA
// 5. Property 'a' exist, retrieve the value

// This look-up on the [[Prototype]] chain stops once the property is found or the chain ends (linked to null)

// Setting & Shadowing Properties
// Shadowing: If the property ends up in multiple Objects itself it will start on the lowest [[Prototype]] chain.
console.log(myObjectA.a);   // 2
console.log(myObjectB.a);   // 2

console.log(myObjectA.hasOwnProperty("a"));  // true
console.log(myObjectB.hasOwnProperty("a"));  // false

myObjectB.a++;              // implict shadowing
console.log(myObjectA.a);   // 2
console.log(myObjectB.a);   // 3

console.log(myObjectB.hasOwnProperty("a"));  // true