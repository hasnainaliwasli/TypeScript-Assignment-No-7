// 15. Write a ts program to find last occurrence of a character in a given string.
var userInput15 = "Hasnain";
var char = "a";
for (var i = userInput15.length - 1; i >= 0; i--) {
    var hhs = userInput15[i].search(char);
    if (hhs == 0) {
        console.log(i);
        break;
    }
}
