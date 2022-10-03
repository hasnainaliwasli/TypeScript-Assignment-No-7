// 4. Write a ts program to compare two strings.
var userInputString1 = prompt("Enter 1st String:");
var string1 = String(userInputString1);
var userInputString2 = prompt("Enter 2nd String: ");
var string2 = String(userInputString2);
var comparison = string1.localeCompare(string2);
if (comparison == 1) {
    console.log("No Match, and the parameter value comes before the string objects's value in the locale srrt order.");
}
else if (comparison == 0) {
    console.log("String matched 100%");
}
else if (comparison < 0) {
    console.log("No Match, and the parameter value comes after the string objects's value in the locale srrt order.");
}
