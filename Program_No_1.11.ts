// 11. Write a ts program to find reverse of a string.

function reverseFunction(str:string){
var reverseString:string = ""

for(var i=str.length-1;i>=0;i--){

    reverseString = reverseString + str[i];
}
console.log(reverseString);

}
var userInput11:string|null = prompt(`Enter a string: `);
var hh:string = String(userInput11);
reverseFunction(hh)


