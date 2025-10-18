const dog = {};
// console.log(dog);

dog.name = "Husky";
dog.legs = 4;
dog.color = "White";
dog.age = 2;
dog.bark = function () {
    return "woof woof";
}

// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.bark());

dog.breed = "American";
dog.getDogInfo = function () {
    console.log(this.name);
    console.log(this.legs);
    console.log(this.color);
    console.log(this.age);
    console.log(this.bark());

    return "Dog information is shown successfully";
}

console.log(dog.getDogInfo());

