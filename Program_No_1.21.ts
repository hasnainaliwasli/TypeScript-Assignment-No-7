// 21. Write a ts program to remove first occurrence of a character from string.

function firstOccurenceRemove(str:string,char:string){

    var occure:number = str.search(char)

    if(occure>=0){
    
    var removed1:string = str.slice(0,occure);
    var removed2:string = str.slice(occure+1,str.length)

    var removesString:string = removed1.concat(removed2)

    // console.log(removesString); 
    
    console.log(`String after removing first occurrence of a character: `,removesString);     
    
}
else{

    console.log(`Entered Character is not found in the string.`);
     
}

    // console.log(occure);
    
}

firstOccurenceRemove(`Helo`, `e`)