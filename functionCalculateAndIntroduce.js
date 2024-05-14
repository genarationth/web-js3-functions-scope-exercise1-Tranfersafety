// ## Exercise 1.1 Create function following below :</br>

// add(a, b)</br>
// subtract(a, b)</br>
// multiply(a, b)</br>
// divide(a, b)</br>

// ## Exercise 1.2 Create Function Inform---</br>

// console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const greeting = (firstName, location, hobby) =>
  console.log(
    "Hi, my name is " +
      firstName +
      " I live in " +
      location +
      "and enjoy " +
      hobby
  );

greeting("safe", "prathum", "play lol");
console.log(add(5,5));
console.log(subtract(5,5));
console.log(multiply(5,5)); 
console.log(divide(5,5));   
