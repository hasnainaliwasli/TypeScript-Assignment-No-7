// 10. Write a ts program to count total number of words in a string.


function wordCts(str:string) {
    var words:number = 0;

    for(var i=0; i<=str.length;i++){

        if(str[i]==" "){
            words=words+1;
        }
    }

    words=words+1;

console.log(words);

}
var userInput10:string|null=prompt(`Enter a string value to count words: `);
var string:string =String(userInput10)

wordCts(string)

