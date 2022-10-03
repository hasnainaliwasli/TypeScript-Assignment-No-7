// 2.2. Write a ts program to find maximum between three numbers using conditional operator.
var userInput1 = prompt("Enter 1st number: ");
var x = Number(userInput1);
var userInput2 = prompt("Enter 1st number: ");
var y = Number(userInput2);
var userInput3 = prompt("Enter 1st number: ");
var z = Number(userInput3);
var max;
max = x > y && (x > z) ? "1st number is Maximum Number" : (y > x && y > z) ? "2nd number is Maximum" : (z > x && z > y) ? "3rd is Maximum Number" : "All Numbers are equal";
console.log(max);
