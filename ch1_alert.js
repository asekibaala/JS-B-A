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
