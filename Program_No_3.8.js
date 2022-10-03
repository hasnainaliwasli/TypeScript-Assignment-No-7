// 3.8. Write a ts program to create Simple Calculator using switch case.
var userInput = prompt("Enter 1st number: ");
var num1 = Number(userInput);
var userInput = prompt("Enter 2nd number: ");
var num2 = Number(userInput);
var opt = prompt("Enter an operator: ");
switch (opt) {
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "+":
        console.log(num1 + num2);
        break;
}
