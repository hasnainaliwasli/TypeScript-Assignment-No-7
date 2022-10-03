// 9. Write a ts program to count total number of vowels and consonants in a string.

var userInput9:string|null = prompt(`Enter any string to see Vowels and Consonants: `);
var d:string=String(userInput9);

var vowel:number = 0;
var consonants:number=0;

for(var i=0; i<=d.length;i++){

    var ascii9:number = d.charCodeAt(i);
    if((ascii9==65 || ascii9==97)||(ascii9==73 || ascii9==105)||(ascii9==101 || ascii9==69)||(ascii9==79 || ascii9==111)||(ascii9==85 || ascii9==117)){
        vowel = vowel +1;
    }
    else{
        consonants = consonants+1;
    }

}

console.log(`There are ${vowel} Vowels and ${consonants} Consonants in the string.`);
