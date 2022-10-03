// 2.1. Write a ts program to find maximum between two numbers using conditional operator.
var userInput = prompt("Enter 1st number: ");
var x = Number(userInput);
var userInput1 = prompt("Enter 1st number: ");
var y = Number(userInput1);
var max;
max = x > y ? "".concat(x, " is Maximum") : "".concat(y, " is Maximum");
console.log(max);
