// JavaScript is a programming language used to make web pages interactive and dynamic.
// It runs in the browser (frontend) and can also run on servers using Node.js.


// Key Features of JavaScript____________________________________
// Interpreted and lightweight
// Client-side and server-side language
// Dynamically typed (no need to declare data types)
// JavaScript is case-sensitive.
// Statements end with a semicolon ; (optional but recommended).
// Supports Object-Oriented, Functional, and Event-driven programming



// Types of JavaScript Based on Execution_________________________

// 1. Synchronous JavaScript
// Definition: Code is executed line by line, in the exact order it's written.
// Each operation must complete before the next starts.
// If one line takes time (e.g., heavy calculation), it blocks the rest of the code.

// 2. Asynchronous JavaScript
// Definition: Code that does not wait for previous lines to finish.
// Some tasks (like fetching data from an API) run in the background, allowing the rest of the code to continue.
// Helps in non-blocking execution.
// Ex: setTimeout() / setInterval(), fetch()











// Declaring Variables
let name = "Alice";         // block-scoped, allows you to change the value later
const num = 25;             // block-scoped, used for values that should not change
var country = "India";      // function-scoped, 'var' is hoisted, Old way, avoid using 'var'









// 1. Primitive Data Types_____________________________________
// Primitive data types are basic, immutable types. When you assign or copy them, you work with actual values, not references.

let num1 = 25;                      // Number: Used for all types of numbers: integers, floats, negatives, etc.
let fname = "Alice";                // String: Represents a sequence of characters enclosed in quotes.
let isOnline = true;                // Boolean: Represents logical values - true or false.
let p;                              // Undefined: A variable declared but not assigned a value yet.
let data = null;                    // Null: Represents an intentional absence of value.
let big = 12345609098901234567890n; // BigInt: Used for storing large integers beyond the safe integer limit.
let id = Symbol("id");              // Symbol: Represents a unique and immutable identifier.



// 2. Non-Primitive (Reference) Data Types_____________________
// These are complex types and are mutable. When copied or assigned, they are passed by reference, not by value.

// Object: A collection of key-value pairs, used to store structured data.
let person = { name: "John", age: 30 };     

// Array: An ordered list of elements, indexed numerically starting from 0.
let fruits = ["apple", "banana", "mango"];  

// Function: A reusable block of code designed to perform a specific task.
function greet(name) {
  return "Hello " + name;
}                                           

// Date: Built-in object used for working with dates and times.
let today = new Date();                     

// RegExp: Regular Expression object used for pattern matching in strings.
let pattern = /hello/i;                     











// JavaScript Output Methods
// 1. console.log() : Prints output to the browser console (used mainly for debugging).
// console.log("This is a message");

// 2. alert() : Shows a popup alert box with a message.
// alert("Welcome to JavaScript!");

// 3. document.write() : Directly writes content to the HTML document (used mostly for testing).
// document.write("Hello, World!");

//  4. innerHTML : Used to insert or change HTML content dynamically in the browser.
// document.getElementById("demo").innerHTML = "This is dynamic content!";















// Arithmetic Operators______________________
let x = 10;
let y = 3;
console.log(x + y);      // 13
console.log(x - y);      // 7
console.log(x * y);      // 30
console.log(x / y);      // 3.333...
console.log(x % y);      // 1 (remainder)


// Comparison Operators_____________________
console.log(5 == '5');   // true (compares value only)
console.log(5 === '5');  // false (compares value and type)
console.log(5 != 4);     // true
console.log(5 !== '5');  // true
console.log(5 > 3);      // true
console.log(5 <= 5);     // true


// Logical Operators _______________________
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)


// Assignment Operators_____________________
let a = 10;
a += 5;                 // same as a = a + 5
console.log(a);         // 15
a *= 2;                 // a = a * 2 → 30
console.log(a);         // 30


// String Operators (+ for concatenation) _____________________
let age = 7;
"Tommy is " + age + " years old.";      // String concatenation
`Tommy is ${age} years old.`;           // String interpolation


// Conditional (Ternary) Operator _______________________
let myage = 20;
let canVote = (myage >= 18) ? "Yes" : "No";  
console.log(canVote);                   // "Yes" (if condition true, returns first value, else second)


// Type Operators _______________________
let val = 100;
console.log(typeof val);            // "number"
console.log(typeof 123);            // "number" (returns the data type of the operand)
console.log(typeof "hello");        // "string"
console.log(typeof {});             // "object"
console.log(typeof []);             // "object" (arrays are objects)















// Control Flow in JavaScript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}


// Switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day.");
}












// Loops: Loops you run the same block of code multiple times.

// for loop
for (let i = 0; i < 5; i++) {
  console.log("Count: ", i);
}

// while loop ( If you forget to update i, it could loop forever.)
let i = 0;
while (i < 5) {
  console.log("While loop:", i);
  i++;
}

// do while loop
let j = 10;
do {
  console.log("Do while loop:", i);    // Prints 0,1,2,3,4
  j++;
} while (j < 5);


// Loop Control: break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;       // skips this loop when i is 3
  }
  if (i === 4) {
    break;          // exits loop completely when i is 4
  }
  console.log("Number:", i);
}




