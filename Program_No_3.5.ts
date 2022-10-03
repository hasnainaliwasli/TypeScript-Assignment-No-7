// 3.5. Write a ts program to check whether a number is even or odd using switch case.

var userInput:string|null=prompt(`Enter a number: `);
var num1:number=Number(userInput);

switch(num1%2==0){
    case true:
        console.log(`Number is Even`);
        break;
    case false:
        console.log(`Number is Odd`);
        break;
    default:
        console.log(`Something went wrong`);
        break;
        
        
}