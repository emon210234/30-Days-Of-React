// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait 
// for the number of years he needs to turn 18.

const prompt = require('prompt-sync')({sigint: true});

let age = parseInt(prompt("Enter your age: "));

if(age > 18){
    console.log("You are old enough to drive");
}
else{
    console.log(`You are left ${18 - age} left to drive`);
}

// 2. Compare the values of myAge and yourAge using if...else. Based on the comparison and log the result 
// to console stating who is older (me or you ). Use prompt("Enter your age: ") to get the age as input

const yourAge = parseInt(prompt("Enter your age: "));
const myAge = 24;

if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me`);
}
else{
    console.log(`You are ${myAge - yourAge} years younger than me`);
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement it in two ways

const a = 4;
const b = 3;

if(a > b){
    console.log(`${a} is graeter than ${b}`);
}
else{
    console.log(`${b} is greater than ${a}`);
}

a > b
?   console.log(`${a} is graeter than ${b}`)
:   console.log(`${b} is greater than ${a}`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, 
// if a number is even or not using JavaScript?

const number = parseInt(prompt("Enter a number: "));

number % 2 == 0
? console.log(`${number} is an even number`)
: console.log(`${number} is an odd number`);

