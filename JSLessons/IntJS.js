// Intermediate JS Course on CC

// All Classes have constructors
// Sets Classes and Objects apart.
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
// An Instance is an object that contains the property names and
// methods of a class, but with unique values.
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
const halley = new Dog("Halley"); // Create new Dog instance
console.log(halley.name); // Print: 'Halley'
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
//
// Class method and getter syntax is the same as it is for objects
//  except you can not include commas between methods.
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");
surgeonRomero.takeVacationDays(3); // Calls the Method
console.log(surgeonRomero.remainingVacationDays); // Prints 17
//
// Class Inheritance
// You can create a Parent Class that has properties and methods shared by each Child Class
// Static Methods cannot be shared or access from sub or child classes.
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword() {
    // Static Method
    return Math.floor(Math.random() * 10000);
  }
}
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}
const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5); // The method is inherited from the parent class
nurseOlynyk.addCertification("Genetics"); // method added to the child class
console.log(nurseOlynyk.remainingVacationDays); // Prints: 15
console.log(nurseOlynyk.certifications); // Prints: [ 'Trauma', 'Pediatrics', 'Genetics' ]
//
//Review Project -- ADD WHAT YOU LIKE
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(checkedOut) {
    this._isCheckedOut = checkedOut;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    if (this._ratings.length === 0 || this._ratings.length === 6) return 0; // Handle empty ratings array
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0,
    );
    let lengthOfArray = this._ratings.length;

    return ratingsSum / lengthOfArray;
  }
  addRating(foo) {
    this._ratings.push(foo);
  }
}
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
class CD extends Media {
  constructor(title) {}
}
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544,
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // true
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating()); // 4.6666
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // true
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); // 2.33333
// MORE REVIEW
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(num) {
    if (typeof num === "number") {
      this._numberOfStudents = num;
    } else {
      console.log(
        `Invalid input: ${this._numberOfStudents} must be set to a Number.`,
      );
    }
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`,
    );
  }
  pickSubstituteTeacher(subList) {
    let subNum = Math.floor(subList.length * Math.random());
    return subList[subNum];
  }
}
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
}
class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13.",
);
console.log(lorraineHansbury); // Logs the PrimarySchool Class with above params
lorraineHansbury.quickFacts(); // Lorraine Hansbury educates 514 at the primary school level.
lorraineHansbury.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith.sportsTeams); // [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]
