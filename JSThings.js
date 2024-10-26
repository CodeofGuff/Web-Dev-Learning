// hello world

// Random Number Function
function number(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rnumber = number(1, 999999);
console.log(rnumber);

function greet(user) {
  console.log("Hello there" + " " + user);
  console.log("Welcome back!");
}
let david = greet("David");
console.log(david);

// fizzbuzz
// for (let i = 1; i <= 100; i++) {
//   console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
// }
