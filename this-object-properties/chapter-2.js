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
  console.log(this.a);  // 2
}

let objectX = {
  a: 2,
  implicit: implicit
};

let objectY = {
  a: 3,
  implicit: implicit
}

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

explicit.call(sumX);  // 4
explicit.call(sumY);  // 6