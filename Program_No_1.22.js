// 22. Write a ts program to remove last occurrence of a character from string.
function lastOccurence(str, char) {
    for (var i = str.length - 1; i >= 0; i--) {
        var occure = str[i].search(char);
        if (occure == 0) {
            var afterRemoved1 = str.slice(0, i);
            var afterRemoved2 = str.slice(i + 1, str.length);
            var newOccure = afterRemoved1.concat(afterRemoved2);
            console.log(newOccure);
            break;
        }
    }
}
lastOccurence("hasnain", "s");
