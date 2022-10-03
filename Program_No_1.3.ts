// 3. Write a ts program to concatenate two strings.

var userInputString1:string|null=prompt(`Enter 1st string: `);
var string1:string = String(userInputString1);

var userInputString2:string|null=prompt(`Enter 2nd string: `);
var string2:string= String(userInputString2);

var concatedString:string = string1.concat(string2);

console.log(`Your Concated String: `,concatedString);
