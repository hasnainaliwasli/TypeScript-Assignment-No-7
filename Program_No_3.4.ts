// 3.4. Write a ts program to find maximum between two numbers using switch case.

var userInput:string|null=prompt(`Enter 1st number: `);
var num1:number=Number(userInput);

var userInput2:string|null=prompt(`Enter the 2nd Number: `);
var num2:number=Number(userInput2)

switch(num1>num2){
    case true:
        console.log(`${num1} is greater number.`);
        break;
    case false:
        console.log(`${num2} is greater number.`);
        break;

        default:
            console.log(`Something Went Wrong`);
            break;
            

}