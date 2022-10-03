// 3.4. Write a ts program to find maximum between two numbers using switch case.
var userInput = prompt("Enter 1st number: ");
var num1 = Number(userInput);
var userInput2 = prompt("Enter the 2nd Number: ");
var num2 = Number(userInput2);
switch (num1 > num2) {
    case true:
        console.log("".concat(num1, " is greater number."));
        break;
    case false:
        console.log("".concat(num2, " is greater number."));
        break;
    default:
        console.log("Something Went Wrong");
        break;
}
