// Printing out text to the console
console.log("Hi, my name is Samon");

// Creating a variable and assigning a string value
let name = "markuptitan";
console.log(name + " is my username on all socials");

// Exploring other data types
let age = 22; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "basketball", "cooking"]; // Array

// Printing out the text
console.log("I am " + age + " years old");
console.log("Am I a student? " + isStudent);
console.log("My hobbies are: " + hobbies.join(", ") + ".");

// String manipulation
let greeting = "Hello, " + name + "!";
console.log(greeting.toUpperCase());

// Simple calclulator
let firstNum = 10;
let secondNum = 5;
console.log("The sum is: " + (firstNum + secondNum));
console.log("The difference is: " + (firstNum - secondNum));
console.log("The product is: " + firstNum * secondNum);
console.log("The quotient is: " + firstNum / secondNum);

// Simple function
function greetUser(username) {
  console.log("Hello, " + username + "!");
}

// simple arrow function
const greetUserArrow = (username) => {
  console.log("Hello, " + username + "!");
};

// Calling the functions
greetUser(name);
greetUserArrow(name);
