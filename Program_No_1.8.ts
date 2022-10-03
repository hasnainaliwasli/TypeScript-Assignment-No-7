// 8. Write a ts program to find total number of alphabets, digits or special character in a string.

var userInput8:string|null = prompt(`Enter any String: `);
var Input8:string = String(userInput8);

var alphabet:number = 0;
    var digit:number =    0;
    var specialChar:number =0;

for(var i=0; i<Input8.length; i++){

    var asciiValue:number = Input8.charCodeAt(i);
    


    if((asciiValue>=65 && asciiValue<=90) ||(asciiValue>=97 && asciiValue<=122)){

       var alphabet:number = alphabet + 1;
    }
    else if(asciiValue>=48 && asciiValue<=57){

        var digit:number = digit +1
    }
    else if((asciiValue>=33 && asciiValue<=47) ||(asciiValue>=58 && asciiValue<=64) || (asciiValue>=91 && asciiValue<=96) || (asciiValue>=123 && asciiValue<=126)){

        var specialChar:number = specialChar+1;
    }
}


console.log(`There are ${alphabet} Alphbets, ${digit} Digits and ${specialChar} Special Characters in the String,`);





