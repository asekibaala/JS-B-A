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
