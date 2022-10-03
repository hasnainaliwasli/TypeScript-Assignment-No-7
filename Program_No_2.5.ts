// 2.5. Write a ts program to check whether character is an alphabet or not using conditional operator.
var userInput:string|null=prompt(`Enter a character: `)
var number:string=String(userInput);

var ifChar:string;

ifChar= number>=`a` || number<=`z`|| number>=`A` || number<=`Z`? `You enterd an Alphabet ` : `This is not Alphabet`;

console.log(ifChar);
