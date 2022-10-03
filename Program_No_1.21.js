// 21. Write a ts program to remove first occurrence of a character from string.
function firstOccurenceRemove(str, char) {
    var occure = str.search(char);
    if (occure >= 0) {
        var removed1 = str.slice(0, occure);
        var removed2 = str.slice(occure + 1, str.length);
        var removesString = removed1.concat(removed2);
        // console.log(removesString); 
        console.log("String after removing first occurrence of a character: ", removesString);
    }
    else {
        console.log("Entered Character is not found in the string.");
    }
    // console.log(occure);
}
firstOccurenceRemove("Helo", "e");
