/*** Chapter 1: this: introduction ***/
function identify() {
    console.log("identify:", this);  // identify: { name: 'Hector' }, identify: { name: 'Arwel' }
    return this.name.toUpperCase();
}

function speak() {
    console.log("speak:", this);    // speak: { name: 'Hector' }, speak: { name: 'Arwel' }
    let greeting = `Hello I'm ${identify.call(this)}`;
    console.log(greeting);
}

let me = {
    name: "Hector"
};

let you = {
    name: "Arwel"
};

console.log(identify.call(me));
console.log(identify.call(you));

speak.call(me);     // Hello I'm HECTOR
speak.call(you);    // Hello I'm ARWEL

// identify() and speak() functions can be re-used on multiple context (me / you) objects. Rather than needing a separate version of the object.

// using this, referincing to itself
function foo(num) {
    console.log("foo: " + num); // foo: 6 foo: 7 foo: 8 foo: 9
    this.count++;
}

foo.count = 0;

for (let index = 0; index < 10; index++) {
    if (index > 5) {
        foo.call(foo, index);
    }
}

console.log(foo.count); // 4

// 'this' is NOT a reference to the function itself
// 'this' is NOT a reference to the function lexical scope
// 'this' is a binding that is made when a function is invoked, and what it references is determiend entirely by the call-site where the funciton was called