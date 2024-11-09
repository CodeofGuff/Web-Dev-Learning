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
 