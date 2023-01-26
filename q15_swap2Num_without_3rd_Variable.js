let a = 1;
let b = 2;

console.log("Before swap", a, b);
// swap without using 3rd variable
// let temp = a;
// a = b;
// b = temp;

// swap without using 3rd variable
a = a + b; // a = 3;
b = a - b; // b = 3-2 = 1
a = a - b; // a = 2

console.log("After swap", a, b);
