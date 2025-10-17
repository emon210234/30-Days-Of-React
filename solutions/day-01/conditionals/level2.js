const prompt = require('prompt-sync')({sight: true});
// 1. Write a code which can give grades to students according to theirs scores: 

    // 80-100, A
    // 70-89, B
    // 60-69, C
    // 50-59, D
    // 0-49, F

const grade_number = parseInt(prompt("Enter your number: "));

switch(true){
    
    case grade_number >= 80 && grade_number <= 100:
        console.log('A');
        break

    case grade_number >= 70 && grade_number <= 79:
        console.log('B');
        break

    case grade_number >= 60 && grade_number <= 69:
        console.log('C');
        break

    case grade_number >= 50 && grade_number <= 59:
        console.log('D');
        break

    case grade_number >= 0 && grade_number <= 49:
        console.log('F');
        break

}

// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer

let month = prompt("Enter the month:").toLowerCase();

if (["september", "october", "november"].includes(month)) {
  console.log("The season is Autumn.");
} else if (["december", "january", "february"].includes(month)) {
  console.log("The season is Winter.");
} else if (["march", "april", "may"].includes(month)) {
  console.log("The season is Spring.");
} else if (["june", "july", "august"].includes(month)) {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month.");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt("Enter the day:").toLowerCase();

if (["saturday", "sunday"].includes(day)) {
  console.log(`${day} is a weekend.`);
} else if (
  ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)
) {
  console.log(`${day} is a working day.`);
} else {
  console.log("Invalid day.");
}
