// 5. Write a ts program to convert lowercase string to uppercase.

var userInputString1:string|null=prompt(`Enter a lowercase String: `)
var string1:string=String(userInputString1);

var uppercaseString:string= string1.toUpperCase();

console.log(`String after converting to uppercase: `,uppercaseString);
