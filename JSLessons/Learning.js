// Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
// BigInt: Any number, greater than 253-1 or less than -(253-1), with n appended to the number: 1234567890123456n.
// String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
// Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
// Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
// Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.
// Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
// Object: Collections of related data.
// Add: +
// Subtract: -
// Multiply: *
// Divide: /
// Remainder: %
console.log("Teaching the world how to code".length); // Prints 30
console.log("hello".toUpperCase()); // Prints 'HELLO'
console.log("Hey".startsWith("H")); // Prints true
console.log("    Remove whitespace   ".trim()); // <- Does exactly that
console.log(Math.random()); // Prints a random number between 0 and 1
Math.floor(Math.random() * 50); // Round down (from decimal) a random # between 0 and 50
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50
// Mathematical Assignments
let levelUp = 10;
levelUp += 5;
let powerLevel = 9001;
powerLevel -= 100;
let multiplyMe = 32;
multiplyMe *= 11;
let quarterMe = 1152;
quarterMe /= 4;
// Increment operator (++) and decrement operator (--).
// The increment operator will increase the value of the variable by 1.
// The decrement operator will decrease the value of the variable by 1.
let a = 10;
a++;
console.log(a); // Output: 11
let b = 20;
b--;
console.log(b); // Output: 19
// String Interpolation with *USE BACKTICKS (NEXT TO THE 1 KEY)* ` ${VARIABLE} `
const myPet = "cat";
console.log(`I own a pet ${myPet}.`); // Output: I own a pet cat. REMEMBER THE BACKTICKS
//
// if / else if / switch / ternary /  Statements.Etc
if (true) {
  console.log("This message will print!");
} else {
  console.log("No printing!");
} // Prints: This message will print! if true, else...
if (stopLight === "green" && pedestrians === 0) {
  console.log("Go!");
} else {
  console.log("Stop");
}
// Truthy Falsy... This section below can be condesned
let username = "";
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = "Stranger";
}
console.log(defaultName); // Prints: Stranger
// This section above is condensed into:
let username = "";
let defaultName = username || "Stranger";
console.log(defaultName); // Prints: Stranger
// or similarly
let tool = "marker";
let writingUtensil = tool || "pen";
console.log(`The ${writingUtensil} is mightier than the sword.`);
// Ternary Operator
let isNightTime = true;
if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}
// Is condensed into:
let isNight = true;
isNight
  ? console.log("Turn on the lights!")
  : console.log("Turn off the lights!");
//
let favoritePhrase = "Love That!";
favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");
// Switch Statments
let groceryItem = "papaya";
if (groceryItem === "tomato") {
  console.log("Tomatoes are $0.49");
} else if (groceryItem === "papaya") {
  console.log("Papayas are $1.29");
} else {
  console.log("Invalid item");
}
// turns into:
let groceryItem1 = "papaya";
switch (groceryItem1) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}
// Eight Ball
let userName = "guFF";
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");
let userQuestion = "Will tomorrow be sunny?";
console.log(`${userName} has asked: "${userQuestion}"`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}
console.log(eightBall);
// Racing Registration
// let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 38;
let isAdult = runnerAge >= 18;
if (!registeredEarly && isAdult) {
  raceNumber += 1000;
}
if (registeredEarly && isAdult) {
  console.log("Your race begins at 9:30 am." + ` Your number is ${raceNumber}`);
} else if (!registeredEarly && isAdult) {
  console.log(`Your race begins at 11:00am and your number is ${raceNumber}`);
} else {
  console.log("Youth registrants run at 12:30 pm (regardless of registration)");
}
// Functions
function calculateArea(width, height) {
  console.log(width * height);
}
calculateArea(3, 10); // prints: 30
function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business.",
  );
}
sayThanks("Cole"); // Prints: Thank you for your purchase Cole! We appreciate your business.
// Default Parameters
function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}
greeting("Nick"); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!
//
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "You need positive integers to calculate area!";
  }
  return width * height;
}
// Function Expression, defining a functions inside a variable
const calculateArea2 = function (width, height) {
  return width * height;
};
// Arrow Functions
// No need ot type out function()
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
