// 22. Write a ts program to remove last occurrence of a character from string.

function lastOccurence(str:string,char:string){

    for(var i=str.length-1; i>=0; i--){

        
    var occure = str[i].search(char);

    if(occure==0){

      var afterRemoved1:string = str.slice(0,i);
      var afterRemoved2:string = str.slice(i+1 , str.length);

      var newOccure:string= afterRemoved1.concat(afterRemoved2)
      console.log(newOccure);

      break;
    }
    }
}

lastOccurence(`hasnain`, `s`);