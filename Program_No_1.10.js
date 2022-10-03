// 10. Write a ts program to count total number of words in a string.
function wordCts(str) {
    var words = 0;
    for (var i = 0; i <= str.length; i++) {
        if (str[i] == " ") {
            words = words + 1;
        }
    }
    words = words + 1;
    console.log(words);
}
var userInput10 = prompt("Enter a string value to count words: ");
var string = String(userInput10);
wordCts(string);
