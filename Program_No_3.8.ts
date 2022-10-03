// 3.8. Write a ts program to create Simple Calculator using switch case.

var userInput:string|null=prompt(`Enter 1st number: `);
var num1:number=Number(userInput);

var userInput:string|null=prompt(`Enter 2nd number: `);
var num2:number=Number(userInput);

var opt:string|null=prompt(`Enter an operator: `)


switch(opt){

    case `*`:
        console.log(num1*num2);
        break;
    case `/`:
        console.log(num1/num2);
        break;
    case `-`:
        console.log(num1-num2);
        break;
    case `+`:
        console.log(num1+num2);
        break;
}