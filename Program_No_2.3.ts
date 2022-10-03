// 2.3. Write a ts program to check whether a number is even or odd using conditional operator.

var userInput:string|null=prompt(`Enter a Number: `);
var num1:number=Number(userInput)
var evenOrOdd:String;
evenOrOdd = num1%2==0 ? `Number is Even`: `Number is Odd`;

console.log(evenOrOdd);
