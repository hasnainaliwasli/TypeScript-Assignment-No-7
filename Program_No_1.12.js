// 12. Write a ts program to check whether a string is palindrome or not.
function plindrom(str) {
    var revers = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revers = revers + str[i];
    }
    if (revers == str) {
        console.log("It is Plindrom");
    }
    else {
        console.log("it is not plindrom");
    }
}
var userInput12 = prompt("Enter a string to check wheather it is Plindrom or Not: ");
var hh = String(userInput12);
plindrom(hh);
