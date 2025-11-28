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