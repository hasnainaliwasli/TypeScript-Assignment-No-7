// 2. Write a ts program to copy one string to another string.

var userInputString:string|null = prompt(`Enter a String: `)
var string:string =String(userInputString);

console.log(`Your entered String: `,string);

var newString:string= string.slice(0,string.length);

console.log(`String after copied to another string: `,newString);
