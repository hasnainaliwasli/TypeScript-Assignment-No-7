// 2. Write a ts program to copy one string to another string.
var userInputString = prompt("Enter a String: ");
var string = String(userInputString);
console.log("Your entered String: ", string);
var newString = string.slice(0, string.length);
console.log("String after copied to another string: ", newString);
