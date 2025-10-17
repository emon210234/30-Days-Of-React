// 1. Declare an empty array
const empty_array = Array();
console.log(empty_array);
// 2. Declare an array with more than 5 number of elements
const more_than_five = Array(8).fill('X');
console.log(more_than_five);

// 3. Find the length of your array
const length_array = more_than_five.length;
console.log(length_array);

// 4. Get the first item, the middle item and the last item of the array
const first_item = more_than_five.shift();
const last_item = more_than_five.pop();
const middle_item = more_than_five[length_array / 2];

console.log(first_item, last_item, middle_item);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
// The array size should be greater than 5
const mixedDataTypes = [
    'Emon',
    24,
    'Khulna University',
    6.2,
    {country: "Bangladesh", city: "Khulna"},
    {Skills: ["HTML", "CSS", "TailwindCSS", "JavaScript"]}
]

// 6. Declare an array variable named itCompanes and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and 
// Amazon

const itCompanes = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using console.log()
console.log(itCompanes);

// 8. Print the number of companies in the array
console.log(itCompanes.length);

// 9. Print the first, last and the middle company
console.log(itCompanes[0], itCompanes[4], itCompanes[itCompanes.length - 1]); // Fix the magic number here

// 10. Print out each company
for (var i = 0; i < itCompanes.length; i++){
    console.log(itCompanes[i]);
}

// 11. Change each company name to uppercase one by one and print them out
for (var i = 0; i < itCompanes.length; i++){
    console.log(itCompanes[i].toUpperCase());
}

// 12. Print the array like as a sentence: 

console.log(itCompanes.toString(), 'are big IT companies.');

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
search_Company = "Facebook";
company_exists = itCompanes.indexOf(search_Company);
if(company_exists != -1){
    console.log(search_Company);
}
else{
    console.log("Company does not exist");
}
// 14. Filter out companies which have more than one 'o' without the filter method
console.log("Printing companies with more than one 'o'");
for(let i = 0; i < itCompanes.length; i++){
    let count = 0;
    for(let j = 0; j < itCompanes[i].length; j++){
        if(itCompanes[i][j] == 'o'){
            count += 1;
        }
    }
    if (count > 1){
        console.log(itCompanes[i]);
    }
}

// 15. Sort the array using sort() method
console.log(itCompanes.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanes.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanes.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanes.slice(-3, ));

// 19. Slice out the middle IT company or companies
console.log(itCompanes.slice(itCompanes.length/2, itCompanes.length/2 + 1))

// 20. Remove the first IT company from the array
console.log(itCompanes.shift());

// 21. Remove the middle IT company from the array
console.log(itCompanes.shift(itCompanes.length));

// 22. Remove the last IT company from the array 
console.log(itCompanes.pop());

// 23. Remove all IT companies
console.log(itCompanes.splice());




