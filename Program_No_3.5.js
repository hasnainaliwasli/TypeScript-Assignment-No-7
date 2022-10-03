// 3.5. Write a ts program to check whether a number is even or odd using switch case.
var userInput = prompt("Enter a number: ");
var num1 = Number(userInput);
switch (num1 % 2 == 0) {
    case true:
        console.log("Number is Even");
        break;
    case false:
        console.log("Number is Odd");
        break;
    default:
        console.log("Something went wrong");
        break;
}
