// Regular add function
function add() {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5)); // Output: 15

// Arrow function add function
const addArrow = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(addArrow(1, 2, 3, 4, 5)); // Output: 15

// Function expression add function
const addExpression = function () {
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum;
};

console.log(addExpression(1, 2, 3, 4, 5)); // Output: 15

// Closures
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Higher order functions(Making coding simpler, one function at a time)

/*
map function -> 
Applies a function to each element
of a collection, like a list or set, 
and returns the results in a collection
of the same type 
*/
const numsArray = [1, 2, 3, 4, 5, 6];
const doubled = numsArray.map((num) => num * 2);
// If we were to do this using another empty array
const doubledArray = [];
for (const num of numsArray) {
  doubledArray.push(num * 2);
}
console.log(doubled);
console.log(doubledArray);

/*
forEach -> To keep the definition
simple, it works the same as map
but is more prefered for printing
instead of returning
*/
numsArray.forEach((num) => console.log(num * 2)); // Prints each number doubled, no new array returned

/*
filter function -> 
Creates a new array with all elements
that pass the test implemented by the
 provided function
*/
const anArrayOfIntegers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = anArrayOfIntegers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

/*
reduce function -> 
Applies a function against an accumulator 
and each element in the array 
(from left to right) as it iterates through
 the array,
*/
const sum = anArrayOfIntegers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
