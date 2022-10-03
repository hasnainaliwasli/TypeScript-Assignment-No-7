// 11. Write a ts program to find reverse of a string.
function reverseFunction(str) {
    var reverseString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverseString = reverseString + str[i];
    }
    console.log(reverseString);
}
var userInput11 = prompt("Enter a string: ");
var hh = String(userInput11);
reverseFunction(hh);
