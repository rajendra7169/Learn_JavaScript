// Primituve Data Types

/*
there are 7 primitive data types in JavaScript

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

reference data types(Objects/ non-premitive) are:
1. Array
2. Object
3. Function
4. Date


const id = symbol('123');
const id2 = symbol('123');
console.log(id === id2); // false

const bigInt = 1234567890123456789012345678901234567890n;

*/

const heros = ["Superman", "Batman", "Spiderman"];
let myObject = { name: "John", age: 30, city: "New York" };

function sayHello() {
  console.log("Hello World");
} // if we do not want to store a function in a variable

let myFunction = function () {
  console.log("Hello World"); // if we want to store a function in a variable
};

// console.log(typeof heros); // object
// console.log(typeof myObject); // object
// console.log(typeof sayHello); // function
// console.log(typeof myFunction); // function
