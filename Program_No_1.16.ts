// 16. Write a ts program to search all occurrences of a character in given string.



function findOccurence(str1:string,char:string){

    for(var i=0;i<str1.length;i++){   

        var occurence:number = str1[i].search(char);

        if(occurence==0){
            
    console.log(i);
        }
        
    }

}

findOccurence(`Hasnainiii`,`i`)