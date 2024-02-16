// You can press the green "run" button to execute the lesson from above
// Feel free to experiment with the code by changing some values here or "open in repl.it button" on the right

// You can press the green "run" button to execute the lesson from above
// Feel free to experiment with the code by changing some values here or "open in repl.it button" on the right

// Strings
console.log('---------------');
console.log('Strings lesson');
console.log('-');

// Edit below
var text1 = "Hello there";
var text2 = "Hello, spaces are also OK!";
var text3 = 'Single quotes are valid too.';

var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';

// a single console.log()
console.log(text1);
// Or combine the variables separated by commas in a single console.log()
console.log(text2, text3);
console.log(escapedText1, escapedText2);

console.log('---------------');

// Numbers
console.log('Numbers lesson:');
console.log('-');
var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

console.log(numberInteger); // try console.logging the next two numbers
console.log('change me to a number!'); // try it out
console.log('I\'m feeling kinda blank :(');

console.log('---------------');

var { thisVariableDoesntExist, doesntExist } = require('./helpers'); // don't mind me I'm just a helper.
// Booleans
console.log('Booleans lesson:');
console.log('-');

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; // This is just the string "false", not false!

console.log(boolean1);
console.log(boolean2);

console.log(notABoolean);

console.log('---------------');

// Null and Undefined
console.log('Null and Undefined lesson:');
console.log('-');

console.log(thisVariableDoesntExist); // Will output undefined

var emptyVariable = null;
var notNullButAString = "null";
console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!

console.log('---------------');

// Objects
console.log('---------------');
console.log('Objects lesson');
console.log('-');

var person = {
  name: "John",
  age: 39
};

console.log(person);
console.log('-');

// or nested
console.log('------ nested ------');
var age = 39;
var name = "John";
var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sara"
  }
};

console.log(personParent);
console.log('-');

// access via dot-notation:
console.log('------ dot-notation ------');
personParent.name = "Anne"; // Set the name property to "Anne"
personParent.child.size = 175; // Set new values that weren't set before
console.log(personParent.child.name); // Output "Sara" to the console
console.log(personParent.child); // Output child Object to the console
console.log('-');

// access using bracket notation:
console.log('------ bracket notation ------');
console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age
console.log('-');

// one lined objects
console.log('------ one lined objects ------');
var shortObject = { name: "John", age: 31};
console.log(shortObject); 
var emptyObject = {}; // Objects can be empty. You can add properties later
console.log('I\'m an empty object: ', emptyObject);

delete shortObject.name; // Will remove the "name" property
console.log('name property removed: ', shortObject); // note that the name property is now removed


console.log('---------------');