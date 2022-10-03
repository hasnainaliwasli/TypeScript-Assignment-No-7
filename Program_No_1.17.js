// 17. Write a ts program to count occurrences of a character in given string.
function findOccurence(str1, char) {
    var occur = 0;
    for (var i = 0; i < str1.length; i++) {
        var occurence = str1[i].search(char);
        if (occurence == 0) {
            occur = occur + 1;
        }
    }
    console.log(occur);
}
findOccurence("Hasnain", "n");
