// 3.6. Write a ts program to check whether a number is positive, negative or zero using switch case.
var userInput = prompt("Enter a number: ");
var num1 = Number(userInput);
switch (num1 > 0) {
    case true:
        console.log("Number is Positive");
        break;
    case false:
        console.log("Number is Negative");
    default:
        console.log("Number is Zero");
        break;
}
