// 2.1. Write a ts program to find maximum between two numbers using conditional operator.

var userInput:string|null=prompt(`Enter 1st number: `);
var x:number=Number(userInput);

var userInput1:string|null=prompt(`Enter 1st number: `);
var y:number=Number(userInput1);


var max:string;

max= x>y ? `${x} is Maximum`:`${y} is Maximum` ;

console.log(max);
