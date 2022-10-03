// 2.4. Write a ts program to check whether year is leap year or not using conditional operator.
var year = 1900;
var ifYear;
ifYear = year / 4 == 0 && year / 100 != 0 || year / 400 == 0 ? "".concat(year, " is leap year") : "".concat(year, " is not a leap year");
console.log(ifYear);
if ((year / 400 == 0) || (year / 100 != 0) && (year / 4 == 0)) {
    console.log("".concat(year, " is a leap year"));
}
else if (year / 400) {
    console.log("".concat(year, " is not a leap year"));
}
else {
    console.log("".concat(year, " is not a leap year"));
}
