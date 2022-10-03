// 38. Write a ts program to remove all extra blank spaces from given string.
function removeSpaces(str) {
    var spaces = str.split(" ").join("");
    console.log(spaces);
}
removeSpaces("My Name is");
