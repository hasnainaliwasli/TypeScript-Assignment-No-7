// 1. Write a ts program to find length of a string.
var userInput:string|null = prompt(`Enter a string: `)
var input:string = String(userInput);

function stringLength(s:string){

    return s.length;
}

console.log(stringLength(input));
