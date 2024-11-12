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
// No need to type out function()
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
// Zero Parameters:
const functionName = () => {};
// One Parameter:
const functionName1 = (paramOne) => {};
// Two + Parameters:
const functionName2 = (paramOne, paramTwo) => {};
// Return is Implicit and {}'s not needed for single line blocks:
const squareNum = (num) => {
  return num * num;
};
// Can look like:
const squareNum = (num) => num * num;
// Another iE:
const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);
//rockPaperScissors
console.log("hi");
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("error: check spelling(ROCK, PAPER, SCISSORS)");
  }
};
const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else if (randomNum === 2) {
    return "scissors";
  } else {
    return "error: computer malfunction";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "it's a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer wins";
    } else {
      return "player wins";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "computer wins";
    } else {
      return "player wins";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer wins";
    } else {
      return "player wins";
    }
  }
};
function playGame() {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("The user rolled: " + userChoice);
  console.log("The computer rolled: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
// Arrays declared with const remain mutable like any let variable
let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
console.log(secretMessage.length); // 24
secretMessage.pop();
console.log(secretMessage.length); // 23
secretMessage.push("to", "program");
secretMessage[7] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.splice(6, 5, "know");
console.log(secretMessage.join(" ")); // Prints: Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to program
// For Loop
// A for loop contains three expressions separated by ; inside the parentheses:
// an initialization starts the loop and can also be used to declare the iterator variable.
// a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
// an iteration statement is used to update the iterator variable on each loop.
// The for loop syntax looks like this:
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
} // 0, 1, 2, 3
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
} // 3, 2, 1, 0
// Looping throgh Arrays
const vacationSpots = ["Bali", "Paris", "Tulum"];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
} // prints each phrase with Bali, Paris, Tulum, in order.
// nested loops... jesus...
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    // runs for each myArray.length
    if (myArray[i] === yourArray[j]) {
      // runs for each yourArray.length
      console.log("Both arrays have the number: " + yourArray[j]);
    }
  }
}
// nested string
const bobsFollowers = ["billy", "tilly", "tammy", "sammy"];
const tinasFollowers = ["billy", "gene", "tammy"];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[j]);
    }
  }
}
console.log(mutualFollowers);
//
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
  console.log(counterOne);
}
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
// do...while .. use to run a code block at least once, then while a condition.
let countString = "";
let i = 0;
do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString); // prints 01234
// Another one
const cupsOfSugarNeeded = 2;
let cupsAdded = 0;
do {
  cupsAdded++;
} while (cupsOfSugarNeeded > cupsAdded);
console.log(cupsAdded);
// Functions as parameters
const addTwo = (num) => {
  return num + 2;
};
const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return func(val);
  } else {
    console.log("inconsitent results");
  }
};
console.log(checkConsistentOutput(addTwo, 4)); // Prints 6
// Methods on Arrays
//forEach
const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((fruit) => console.log(`I want to eat a ${fruit}`));
// .map() takes an argument of a callback function and returns a new array
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map((num) => {
  return num / 100;
});
console.log(smallNumbers); // Prints [1, 2, 3, 4, 5]
// .filter() returns an array of elements after filtering out certain elements from the original array.
//  The callback function for the .filter() method should return true or false depending on the element that
// is passed to it. The elements that cause the callback function to return true are added to the new array.
const words = ["chair", "music", "pillow", "brick", "pen", "door"];
const shortWords = words.filter((word) => {
  return word.length < 6;
});
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
// .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});
console.log(lessThanTen); // Output: 3
console.log(jumbledNums[3]); // Output: 5
// .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
// example with a second argmument (10), so set th einital accumulator value
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);
// Prints:
/*
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26*/

// Objects - one of the eight data types in JS
// Containers storing related data and functionality
// Declaring an object
let spaceship1 = {};
// An object literal with two key-value pairs
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
  'Fuel Type': 'Turbo Fuel',
};
// Accessing
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
// Using Bracket Notation
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
// bracket Notation with Functions
let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
// use either dot notation, .,
// or bracket notation, [],
// and the assignment operator, =
// to add new key-value pairs to an object or change an existing property.
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};
let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil"
};
let remotelyDisable = obj => {
  obj.disabled = true;
}
greenEnergy(spaceship)
remotelyDisable(spaceship)
console.log(spaceship)
// Methods in Object literals (key: Value) //  retreat: function () - Looks like: // becsause we can ommit the function keyword
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat()
alienShip.takeOff()
// More access objects
let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};
for (let i in spaceship.crew) {
  console.log(`${i} : ${spaceship.crew[i].name}`)
}
for (let i in spaceship.crew) {
  console.log(`${spaceship.crew[i].name} : ${spaceship.crew[i].degree}`)
}
//
// Using the this keyword - use to access the object itself
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
console.log(robot.provideInfo())

// Getters are methods that get and return the internal properties of an object.
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
person.fullName; // 'John Doe'
// Setter methods which reassign values of existing properties within an object.
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      return "Pass in a number that is greater than or equal to 0";
    }
  },

};
robot.numOfSensors._numOfSensors = 100;
console.log(robot.numOfSensors) // Prints 15
//
// Factory Functions
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
// More Example
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
// Property Value Shorthand aka destructuring
const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age
  }
};
// TURNS INTO THIS:
const monsterFactory = (name, age) => {
  return {
    name,
    age
  }
};
// Further destrucuring and extracting properties as variables
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'
// More Destructuring
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const { functionality } = robot;
functionality.beep()
// Review get/set
const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
  get todaysSpecial() {
    if (this._meal && this.menu) {
      return "Today's special is pineapple!";
    } else {
      return "Menu or price was not set correctly!";
    }
  },
};
menu.meal = "pizza";
menu.price = 20;
console.log(menu)
console.log(menu.todaysSpecial)
// More Review
const team = {
  _players: [
    { firstName: "jon", lastName: "snow", age: 20 },
    { firstName: "theon", lastName: "greyjoy", age: 19 },
    { firstName: "ron", lastName: "burgandy", age: 40 },
  ],
  _games: [
    { opponent: "iceking", teamPoints: 10, opponentPoints: 9 },
    { opponent: "sister", teamPoints: 69, opponentPoints: 70 },
    { opponent: "news", teamPoints: 9, opponentPoints: 9 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};
team.addPlayer("sara", "conor", 29);
team.addGame("terminators", 100, 98);
console.log(team._players);
console.log(team._games);
