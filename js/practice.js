
// Edit below
var text1 = "Hello there";
var text2 = "Hello, spaces are also OK!";
var text3 = 'Single quotes are valid too.';
var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';
var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;
// var { thisVariableDoesntExist, doesntExist } = require('./helpers'); // don't mind me I'm just a helper.
var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; // This is just the string "false", not false!
var emptyVariable = null;
var notNullButAString = "null";
var person = {
  name: "John",
  age: 39
};
var age = 39;
var name = "John";
var personParent = {
  name: "Anna",
  age: 35,
  child: {
    name: "Sara",
    age: "5"
  }
};
var weWantThisField = "age";
var shortObject = { name: "John", age: 31};
var emptyObject = {}; // Objects can be empty. You can add properties later
var weWantThisField = "age";
var shortArray = [1,2,3];
shortArray[0] = 100;
var mixedArray = [
  1, 
  "Helloe",
  {},
  ["nested array"]
]
var myArray = [1,2]
myArray.push(3);
myArray.push("Hellow");
var myName = "Bhumika Soam";
var myAge = '33 yrs';
var myHobbies = 'Dancing, sketching, etc..';

//add number
function add(number1, number2) {
  return number1 + number2;
}
var result = add(10,100); console.log(result);

// return number
function doMath(num){
  return num;
}
var customNum = doMath(300); console.log(customNum); 

//celcius to fahrenhiet
function cToF(cNum) {
  return (cNum * 1.8) + 32;
}
var zero = cToF(0); console.log(zero);
var twenty = cToF(20); console.log(twenty);

var age = 76;
function dosomething(){
  var addAge = 10;
  return (age + addAge);
}

if (age === 20) {
  console.log("You are 20 years old!");
} else {
  console.log("You are not 20 years old...");
}

var myCondition = true;
if (myCondition) {
  // do something
}

var condition = 10;
if (condition === 10) {
  return ("condition is 10");
} else {
  return ("condition is not 10")
}

var userInput = "";
if (userInput) {
  // Do something with the user input!
}


console.log(personParent.name); 
console.log(personParent[weWantThisField]);
console.log(emptyVariable)
console.log(shortArray)
console.log(mixedArray)
console.log(shortArray[0]);
console.log(mixedArray[3][0]);
console.log(myArray);
console.log(myName,",",myAge,",",myHobbies)
