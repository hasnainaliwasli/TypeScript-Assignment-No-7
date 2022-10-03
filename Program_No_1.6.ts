// 6. Write a ts program to convert uppercase string to lowercase.

var userInputString1:string|null=prompt(`Enter a uppercase string: `);
var string:string = String(userInputString1);

var uppercaseString:string = string.toLowerCase();

console.log(uppercaseString);
