// 9. Write a ts program to count total number of vowels and consonants in a string.
var userInput9 = prompt("Enter any string to see Vowels and Consonants: ");
var d = String(userInput9);
var vowel = 0;
var consonants = 0;
for (var i = 0; i <= d.length; i++) {
    var ascii9 = d.charCodeAt(i);
    if ((ascii9 == 65 || ascii9 == 97) || (ascii9 == 73 || ascii9 == 105) || (ascii9 == 101 || ascii9 == 69) || (ascii9 == 79 || ascii9 == 111) || (ascii9 == 85 || ascii9 == 117)) {
        vowel = vowel + 1;
    }
    else {
        consonants = consonants + 1;
    }
}
console.log("There are ".concat(vowel, " Vowels and ").concat(consonants, " Consonants in the string."));
