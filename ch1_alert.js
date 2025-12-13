alert("Saying hi from external JS file!");

let empty = null;
let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2 , typeof strToNr2 ); // NaN

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2 , typeof strToBool2 ); // true

let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool , typeof strToBool ); // false

let nr1 = 123;
let nr2 = 456;
let sum = nr1 + nr2;
console.log("The sum is: " + sum); // The sum is: 579

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName); // Full Name: John Doe

const distanceInMiles = 130;
const distanceInKilometers = distanceInMiles * 1.60934;
console.log(`The distance of ${distanceInKilometers.toFixed(4)} kms is equal to ${distanceInMiles} miles`);

const heightInInches = 70;
const weightInPounds = 160;
const heightInCentimeters = heightInInches * 2.54;
const weightInKilos = weightInPounds / 2.2046;
console.log(`Height: ${heightInCentimeters.toFixed(2)} cm`);
console.log(`Weight: ${weightInKilos.toFixed(2)} kg`);
const heightInMeters = heightInCentimeters / 100;
const bmi = weightInKilos / (heightInMeters ** 2);
console.log(`BMI: ${bmi.toFixed(2)}`);

let nr3 = 4;
let str1 ="Hi";
let result = str1 - nr3;
console.log("The result is: " + result); // The result is: NaN

let result3 = str1 * nr3;
console.log("The result3 is: " + result3); // The result3 is: NaN

const sideA = Number(prompt("Enter the length of side a:"));
const sideB = Number(prompt("Enter the length of side b:"));
const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
console.log("Hypotenuse length: " + hypotenuse);

let a = 10;
let b = 5;
let c = 3;
a += b;
a /= c;
c %= b;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Practice exercise 3.1 - shopping list operations
const shoppingList = ["Milk", "Bread", "Apples"]; // starting list
console.log("List length:", shoppingList.length);
shoppingList[1] = "Bananas"; // replace Bread at index 1
console.log("Updated list:", shoppingList);

// Practice exercise 3.2 - extended shopping list manipulation steps
const shoppingListTwo = []; // start with empty list
shoppingListTwo.push("Milk", "Bread", "Apples");
shoppingListTwo.splice(1, 1, "Bananas", "Eggs"); // swap Bread with Bananas and Eggs
const removedItem = shoppingListTwo.pop(); // remove last item
console.log("Removed item:", removedItem);
shoppingListTwo.sort();
console.log("Sorted list:", shoppingListTwo);
const milkIndex = shoppingListTwo.indexOf("Milk");
console.log("Index of Milk:", milkIndex);
const bananasIndex = shoppingListTwo.indexOf("Bananas");
shoppingListTwo.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
const drinksList = ["Juice", "Pop"];
const combinedList = shoppingListTwo.concat(drinksList, drinksList);
console.log("Final list:", combinedList);
const lastPopIndex = combinedList.lastIndexOf("Pop");
console.log("Last index of Pop:", lastPopIndex);

// Practice exercise 3.3 - nested arrays with repeated values
const baseArray = [1, 2, 3];
const nestedArray = [baseArray, baseArray, baseArray]; // nest original array three times
console.log("Value 2 from nested array:", nestedArray[0][1]);

// Practice exercise 3.4 - working with object properties dynamically
const myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    color: "Blue",
    mileage: 45000,
};
let propertyName = "color";
myCar[propertyName] = "Red"; // change color using bracket notation
propertyName = "forSale";
myCar[propertyName] = true; // add forSale property dynamically
console.log(`Car: ${myCar.make} ${myCar.model}`);
console.log("For sale:", myCar.forSale);

// Practice exercise 3.5 - storing friends inside object array
const people = {
    friends: [],
};
const friendOne = { firstName: "Alice", lastName: "Johnson", id: 1 };
const friendTwo = { firstName: "Bob", lastName: "Smith", id: 2 };
const friendThree = { firstName: "Carol", lastName: "Lee", id: 3 };
people.friends.push(friendOne, friendTwo, friendThree);
console.log("Friends array:", people.friends);

// Practice exercise 3.6 - manipulating arrays to match specific layout
const theList = [
    "Laurence",
    "Svekis",
    true,
    35,
    null,
    undefined,
    { test: "one", score: 55 },
    ["one", "two"],
];
theList.shift(); // remove first item
theList.pop(); // remove last item
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
console.log("Manipulated list:", theList);

// Company product catalog - building inventory and querying
const inventory = [];
const itemOne = { name: "Laptop", model: "L-200", cost: 899.99, quantity: 12 };
const itemTwo = { name: "Smartphone", model: "S-50", cost: 499.5, quantity: 30 };
const itemThree = { name: "Headphones", model: "H-10", cost: 79.99, quantity: 50 };
inventory.push(itemOne, itemTwo, itemThree);
console.log("Inventory:", inventory);
console.log("Quantity of third item:", inventory[2].quantity);
inventory.push({ name: "Charger", model: "C-5", cost: 19.99, quantity: 100 });
console.log("Updated inventory count:", inventory.length);

// Self-check quiz answers with console explanations
console.log("1. Can const arrays be updated?", "Yes, we can change their contents.");
console.log("2. Property for array length:", "length");
const myArr1 = [1, 3, 5, 6, 8, 9, 15];
console.log("3a.", myArr1.indexOf(0)); // -1 since 0 not present
console.log("3b.", myArr1.indexOf(3)); // 1 because 3 at index 1
const myArr = [1, 3, 5, 6, 8, 9, 15];
myArr[1] = 4; // replace second element
console.log("4. Updated myArr:", myArr);
const myArr2 = [];
myArr2[10] = "test";
console.log("5a.", myArr2);
console.log("5b.", myArr2[2]); // undefined because slot empty
const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
myArr3.sort();
myArr3.length = 0; // clear array
console.log("6.", myArr3[0]); // undefined since array cleared

// Boolean check practice - using simple if statements and negation
let isAvailable = true;
console.log("Initial availability:", isAvailable);
if (isAvailable) {
    console.log("The item is available!");
}
if (!isAvailable) {
    console.log("The item is not available.");
}

// Practice exercise 4.2 - age prompt and venue permissions
const ageInput = Number(prompt("How old are you?"));
let ageMessage;
if (ageInput >= 21) {
    ageMessage = "Welcome in! You may purchase alcohol.";
} else if (ageInput >= 19) {
    ageMessage = "Welcome in! Alcohol purchases are not permitted.";
} else {
    ageMessage = "Sorry, entry denied.";
}
console.log(ageMessage);
isAvailable = false;
console.log("Updated availability:", isAvailable);
if (isAvailable) {
    console.log("The item is available!");
}
if (!isAvailable) {
    console.log("The item is not available.");
}


// Practice exercise 4.3 - ternary with ID validity check
const hasValidId = true;
const idMessage = hasValidId ? "ID accepted, welcome!" : "ID invalid, entry denied.";
console.log(idMessage);

// Practice exercise 4.4 - random response generator using switch
let randomNumber = Math.floor(Math.random() * 6);
const userQuestion = prompt("Ask your question:");
let responseMessage;
switch (randomNumber) {
    case 0:
        responseMessage = "Definitely yes.";
        break;
    case 1:
        responseMessage = "Looks promising.";
        break;
    case 2:
        responseMessage = "Ask again later.";
        break;
    case 3:
        responseMessage = "I am not so sure.";
        break;
    case 4:
        responseMessage = "Better not tell you now.";
        break;
    case 5:
        responseMessage = "Absolutely not.";
        break;
    default:
        responseMessage = "Hmm, something went wrong.";
}
console.log(`You asked: ${userQuestion}`);
console.log(`Answer: ${responseMessage}`);

// Practice exercise 4.5 - user-selected prize via switch cases
const prizeInput = Number(prompt("Pick a number between 0 and 10:"));
let prizeMessage = "My Selection: " + prizeInput + " - ";
let prize;
switch (prizeInput) {
    case 0:
        prize = "No prize this time.";
        break;
    case 1:
    case 2:
        prize = "You win a sticker!";
        break;
    case 3:
    case 4:
        prize = "Enjoy a keychain!";
        break;
    case 5:
        prize = "You earned a mug.";
        break;
    case 6:
    case 7:
        prize = "Take home a T-shirt.";
        break;
    case 8:
    case 9:
        prize = "You won a backpack!";
        break;
    case 10:
        prize = "Grand prize: gift card!";
        break;
    default:
        prize = "Invalid selection.";
}
console.log(prizeMessage + prize);

// Evaluating a number game - compare user input against dynamic target
const targetNumber = Math.floor(Math.random() * 50) + 1; // random number between 1-50
const userGuess = Number(prompt("Guess a number between 1 and 50:"));
if (userGuess > targetNumber) {
    console.log(`Your guess (${userGuess}) is greater than the target (${targetNumber}).`);
} else if (userGuess === targetNumber) {
    console.log(`Spot on! Both you and the target are ${targetNumber}.`);
} else {
    console.log(`Your guess (${userGuess}) is less than the target (${targetNumber}).`);
}

// Friend checker game using switch cases
const friendName = prompt("Enter a friend's name:");
let friendMessage;
switch (friendName) {
    case "Alice":
    case "Bob":
    case "Carol":
        friendMessage = `${friendName} is on the friend list!`;
        break;
    case "Dave":
        friendMessage = "Dave is an acquaintance, not a close friend.";
        break;
    default:
        friendMessage = `I don't know ${friendName}.`;
}
console.log(friendMessage);

// Rock Paper Scissors game - random selections and result evaluation
const rpsOptions = ["Rock", "Paper", "Scissors"];
const playerPickIndex = Math.floor(Math.random() * rpsOptions.length);
const computerPickIndex = Math.floor(Math.random() * rpsOptions.length);
const playerPick = rpsOptions[playerPickIndex];
const computerPick = rpsOptions[computerPickIndex];
let gameResult;
if (playerPick === computerPick) {
    gameResult = "It's a tie!";
} else if (
    (playerPick === "Rock" && computerPick === "Scissors") ||
    (playerPick === "Paper" && computerPick === "Rock") ||
    (playerPick === "Scissors" && computerPick === "Paper")
) {
    gameResult = "You win!";
} else {
    gameResult = "Computer wins!";
}
console.log(`Player chose ${playerPick}, Computer chose ${computerPick}. ${gameResult}`);

// Practice exercise 5.1 - number guessing game with feedback loop
const maxGuessValue = 5;
const solutionNumber = Math.floor(Math.random() * maxGuessValue) + 1;
console.log(`[Dev] Solution number: ${solutionNumber}`); // comment out after testing
let guessCorrect = false;
while (!guessCorrect) {
    const guessInput = Number(prompt(`Enter a number between 1 and ${maxGuessValue}:`));
    if (Number.isNaN(guessInput) || guessInput < 1 || guessInput > maxGuessValue) {
        console.log("Please enter a valid number within the range.");
        continue;
    }
    if (guessInput === solutionNumber) {
        console.log(`Correct! ${guessInput} is the solution.`);
        guessCorrect = true;
    } else if (guessInput < solutionNumber) {
        console.log("Too low, try again.");
    } else {
        console.log("Too high, try again.");
    }
}
// Practice exercise 5.2 - increment counter with step using do-while loop
let counter = 0;
const counterStep = 5;
do {
    console.log(`Counter value: ${counter}`);
    counter += counterStep;
} while (counter <= 100);

// Practice exercise 5.3 - build lessons array with alternating availability
const myWork = [];
for (let lessonNumber = 1; lessonNumber <= 10; lessonNumber++) {
    const lessonStatus = lessonNumber % 2 !== 0 ? true : false;
    const lessonEntry = {
        name: `Lesson ${lessonNumber}`,
        status: lessonStatus,
    };
    myWork.push(lessonEntry);
}
console.log("Lesson plan:", myWork);

// Practice exercise 5.x - dynamic table generator with nested loops
const myTable = [];
const totalRows = 3;
const totalColumns = 4;
let cellCounter = 0;
for (let currentRow = 0; currentRow < totalRows; currentRow++) {
    const tempTable = [];
    for (let currentColumn = 0; currentColumn < totalColumns; currentColumn++) {
        cellCounter++;
        tempTable.push(cellCounter);
    }
    myTable.push(tempTable);
}
console.table(myTable);



// Practice exercise 5.5 - grid builder using single loop with row tracking
const grid = [];
const gridCells = 64;
const gridColumns = 8;
let currentRow;
for (let mainCounter = 0; mainCounter < gridCells; mainCounter++) {
    if (mainCounter % gridColumns === 0) {
        if (currentRow && currentRow.length) {
            grid.push(currentRow);
        }
        currentRow = [];
    }
    const cellValue = mainCounter;
    currentRow.push(cellValue);
}
if (currentRow && currentRow.length) {
    grid.push(currentRow);
}
console.table(grid);

// Practice exercise 5.6 - array build with multiple output iterations
const incrementArray = [];
for (let x = 0; x < 10; x++) {
    incrementArray.push(x);
}
console.log("Full increment array:", incrementArray);
for (let i = 0; i < incrementArray.length; i++) {
    console.log(`indexed loop -> ${i}: ${incrementArray[i]}`);
}
for (const value of incrementArray) {
    console.log(`for...of loop -> value: ${value}`);
}

// Practice exercise 5.7 - iterate over objects and arrays
const simpleObject = {
    firstItem: "Notebook",
    secondItem: "Pencil",
    thirdItem: "Eraser",
};
for (const propertyName in simpleObject) {
    console.log(`Object property ${propertyName}: ${simpleObject[propertyName]}`);
}
const simpleArray = ["Notebook", "Pencil", "Eraser"];
for (let index = 0; index < simpleArray.length; index++) {
    console.log(`Array index ${index}: ${simpleArray[index]}`);
}

// Math multiplication table generator with nested loops
const multiplicationTable = [];
const multiplicationRange = 10;
for (let row = 1; row <= multiplicationRange; row++) {
    const rowValues = [];
    for (let column = 1; column <= multiplicationRange; column++) {
        rowValues.push(row * column);
    }
    multiplicationTable.push(rowValues);
}
console.table(multiplicationTable);

// Practice exercise 6.1 - basic addition function usage examples
function addTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
const valueA = 12;
const valueB = 30;
console.log(`Sum of ${valueA} and ${valueB}: ${addTwoNumbers(valueA, valueB)}`);
console.log(`Sum of 7 and 18: ${addTwoNumbers(7, 18)}`);


// Practice exercise 6.2 - random description generator based on name input
const descriptors = [
    "brilliant",
    "adventurous",
    "creative",
    "kind-hearted",
    "determined",
    "energetic",
];
function describePerson() {
    const nameInput = prompt("Enter a person's name:");
    const descriptorIndex = Math.floor(Math.random() * descriptors.length);
    const randomDescriptor = descriptors[descriptorIndex];
    console.log(`${nameInput} is ${randomDescriptor}!`);
}
describePerson();

// Practice exercise 6.3 - basic calculator supporting add/subtract operations
function basicCalculator(firstValue, secondValue, operator = "+") {
    if (operator === "-") {
        return firstValue - secondValue;
    }
    return firstValue + secondValue;
}
const calcValueOne = 50;
const calcValueTwo = 20;
const calcOperator = "+";
console.log(
    `${calcValueOne} ${calcOperator} ${calcValueTwo} = ${basicCalculator(
        calcValueOne,
        calcValueTwo,
        calcOperator,
    )}`,
);
const secondOperator = "-";
console.log(
    `${calcValueOne} ${secondOperator} ${calcValueTwo} = ${basicCalculator(
        calcValueOne,
        calcValueTwo,
        secondOperator,
    )}`,
);
console.log(`Default operator result: ${basicCalculator(5, 8)}`);

let basicCalculatorF = (firstValue, secondValue, operator = "+") => {
    if (operator === "-") {
        return firstValue - secondValue;
    }
    return firstValue + secondValue;
}

console.log(`Arrow function result: ${basicCalculatorF(10, 4, "-")}`);

// Practice exercise 6.4 - looped calculator storing results in array
function loopAddition(firstValue, secondValue) {
    return firstValue + secondValue;
}
const loopResults = [];
for (let counterValue = 0; counterValue < 10; counterValue++) {
    const multipliedValue = counterValue * 5;
    const squaredValue = counterValue * counterValue;
    const loopSum = loopAddition(multipliedValue, squaredValue);
    loopResults.push(loopSum);
}
console.log("Loop addition results:", loopResults);

// Practice exercise 6.5 - exploring IIFE behavior and scope
let scopedValue = "1000";
(function () {
    let scopedValue = "Local scope value inside IIFE A";
    console.log(`IIFE A local value: ${scopedValue}`);
})();
const scopedResult = (function () {
    let scopedValue = "Local scope value inside IIFE B";
    return scopedValue;
})();
console.log(`Global scopedValue after IIFEs: ${scopedValue}`);
console.log(`Returned scopedResult value: ${scopedResult}`);
(function (newValue) {
    scopedValue = newValue;
    console.log(`Anonymous function updated scopedValue to: ${scopedValue}`);
})("Anonymous scope assignment");

// Practice exercise 6.6 - recursive factorial calculator
function factorial(value) {
    if (value === 0) {
        return 1;
    }
    return value * factorial(value - 1);
}
const factorialInput = 7;
console.log(`Factorial of ${factorialInput}: ${factorial(factorialInput)}`);
console.log(`Factorial of 10: ${factorial(10)}`);

// Practice exercise 6.7 - recursive countdown implementations
const countdownStart = 10;
function countdown(value) {
    console.log(`Countdown value: ${value}`);
    if (value < 1) {
        return;
    }
    countdown(value - 1);
}
countdown(countdownStart);
function countdownGreaterThanZero(value) {
    console.log(`Second countdown value: ${value}`);
    if (value > 0) {
        return countdownGreaterThanZero(value - 1);
    }
    return;
}
countdownGreaterThanZero(countdownStart);

// Practice exercise 6.8 - function expression vs declaration
const logValueExpression = function (input) {
    console.log(`Function expression output: ${input}`);
};
logValueExpression("Expression argument");
function logValueDeclaration(input) {
    console.log(`Function declaration output: ${input}`);
}
logValueDeclaration("Declaration argument");

// Chapter project - recursive function counting up to 10
function countUpToTen(startValue) {
    console.log(`Count value: ${startValue}`);
    if (startValue >= 10) {
        return startValue;
    }
    return countUpToTen(startValue + 1);
}
countUpToTen(3);
countUpToTen(8);

// Chapter project - orchestrating console order with setTimeout
const outputOne = () => console.log("One");
const outputTwo = () => console.log("Two");
const outputThree = () => {
    console.log("Three");
    outputOne();
    outputTwo();
};
const outputFour = () => {
    console.log("Four");
    setTimeout(outputThree, 0);
    setTimeout(outputOne, 0);
};
outputFour();

// Practice exercise 7.1 - Person class and friend greetings.
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const friendAnna = new Person("Anna", "Kwan");
const friendMarcus = new Person("Marcus", "Diaz");
console.log(`Hello, ${friendAnna.getFullName()}!`);
console.log(`Hello, ${friendMarcus.getFullName()}!`);

// Practice exercise 7.2 - generate full names via class method
const person1 = new Person("Lena", "Nguyen");
const person2 = new Person("Arman", "Singh");
console.log(`Friend one: ${person1.getFullName()}`);
console.log(`Friend two: ${person2.getFullName()}`);

// Practice exercise 7.3 - animal class with sounds and actions
class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    speak() {
        console.log(`${this.species} says "${this.sound}"`);
    }
}
Animal.prototype.perform = function (activity) {
    console.log(`${this.species} ${activity}.`);
};
const tiger = new Animal("Tiger", "Grrr");
const dolphin = new Animal("Dolphin", "Eee-eee");
tiger.speak();
dolphin.speak();
tiger.perform("prowls through the jungle");
dolphin.perform("leaps over the waves");
console.log("Tiger object:", tiger);
console.log("Dolphin object:", dolphin);