// 1. Creating countries and web_techs seperately and accessing them from main.js

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

console.log(countries);
console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let delimeters = [',', '.'];

let words = "";

for (let i = 0; i < delimeters.length; i++){
    words = text.split(delimeters[i]);
    words = words.toString();
    console.log(words);
}

words = words.split(' ');

console.log(words);
console.log(words.length);

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart);
console.log(shoppingCart.push('Sugar'));
console.log(shoppingCart);
console.log(shoppingCart);
console.log(shoppingCart.splice(shoppingCart.indexOf('Honey'), 1,));
console.log(shoppingCart)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array. If exists print "ETHIOPIA". If  it does not exist add to the countries list;

console.log(countries);

if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA');
}
else{
    countries.push('Ethiopia');
}

// In the webTechs array check if Sass exists in the array and if it exists print 
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

console.log(webTechs);

if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}
else{
    webTechs.push('Sass');
}

console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);