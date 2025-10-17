import { countries } from './level2/countries.js';

// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - 
// Sort the array and find the min and max age - Find the median age(one middle item or two middle items 
// divided by two) - Find the average age(all items divided by number of items) - Find the range of 
// the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(ages[0]);
console.log(ages[ages.length - 1]);

// 2. Find the middle country(ies) in the countries array
console.log(countries.slice(0, 10));

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , 
// one more country for the first half.

const array1 = [];
const array2 = [];

console.log(countries.length);

if(countries.length % 2 == 0){
    for(let i = 0; i < countries.length; i++){
        if(i < 5){
            array1.push(countries[i]);
        }
        else{
            array1.push(countries[i]);
        }
    }
}
else{
    countries.push('Bangladesh');
}

console.log(countries);
console.log(array1);
console.log(array2);

console.log(countries.length);

if(countries.length % 2 == 0){
    for(let i = 0; i < countries.length; i++){
        if(i < countries.length / 2){
            array1.push(countries[i]);
        }
        else{
            array2.push(countries[i]);
        }
    }
}
else{
    countries.push('Bangladesh');
}

console.log(array1);
console.log(array2);