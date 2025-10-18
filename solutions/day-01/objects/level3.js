const prompt = require('prompt-sync')({ sight: true });
// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties
// and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "Emon",
  lastName: "Hossain",
  incomes: {
    jobIncome: {
      amount: 3000,
      desc: "Income that I get from job"
    },

    businessIncome: {
      amount: 5000,
      desc: "Income that I get from my business"
    }
  },
  expenses: {
    rent: {
      amount: 1000,
      desc: "Amount of money spent on house rent"
    },
    transportation: {
      amount: 2000,
      desc: "Amount of money spent on transportation"
    }
  },

  accountBalance: function(){
    console.log(`Total balance right now is: ${this.totalIncome() - this.totalExpense()}`);
  },

  totalExpense: function () {
    let total = 0;
    for(const expense in this.expenses){
      total += this.expenses[expense].amount;
    }
    return total;
  },

  totalIncome: function () {
    let total = 0;
    for (const income in this.incomes){
      total += this.incomes[income].amount;
    }
    return total;
  },

  accountInfo: function () {
    console.log(this.firstName);
    console.log(this.lastName);

    console.log(this.incomes);
    // for(const income in this.incomes){
    //   console.log(this.incomes[income]);
    // }

    console.log(this.expenses);
    // for(const expense in this.expenses){
    //   console.log(this.expenses[expense]);
    // }
  },

  addIncome: function(){
    let enterType = prompt("Enter the type of income you want to add: ");
    let amount = parseInt(prompt("Enter the amount of income: "));

    console.log(`Total income of ${enterType} type is ${this.incomes[enterType].amount + amount}`);
  },

  addExpense: function(){
    let enterType = prompt("Enter the type of expense you want to add: ");
    let amount = parseInt(prompt("Enter the amount of expense: "));

    console.log(`Total expense of ${enterType} type is ${this.expenses[enterType].amount + amount}`);

  } 
}


// personAccount.totalIncome();
// personAccount.totalExpense();
// personAccount.accountInfo();
// personAccount.addIncome();
// personAccount.addExpense();
// personAccount.accountBalance();


const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
  
]

signUp = function(){
  const username = prompt("Enter your name: ");
  const email = prompt("Enter your email: ");
  const password = prompt("Enter your password: ");
  
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const random_id = generateRandomString(6);
  let account = false;
  for(const user in users){
    if(users[user].email == email){
      console.log("You already have an account.");
      account = true;
    }
  }
  if(account == false){
    users.push(
      {
        _id: random_id,
        username: username,
        email: email,
        password: password,
        isLoggedIn: false
      }
    )
  }
  console.log(`signUp successful`);
}

signIn = function(){
  const email = prompt("Enter your email: ");
  const password = prompt("Enter your password: ");
  let isLoggedIn = false;
  let user_id;
  users.forEach(element => {
    if((element.email == email) && (element.password == password)){
      element.isLoggedIn = true;
      console.log("You are logged in successfully");
      isLoggedIn = true;
      user_id = element._id;
    }
  });
  if(isLoggedIn == false){
    console.log("Try again.");
    signIn();
  }
  return user_id;
}

// signUp();
// console.log(users);

// 3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates 
// the product b. Create a function called averageRating which calculate the average rating of a product

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

rateProduct = function(){
  console.log("Sign In to rate a product.");
  const id = signIn();

  const product = prompt("Enter the name of the product you want to review: ");

  products.forEach(element => {
    if(element.name == product){
      const rate = Number(prompt("Enter a number to rate: "));
      element.ratings.push(
        {
          userId: id,
          rate: rate
        }
      )
      console.log(element);
    }
  });

}

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

likeProduct = function(){
  console.log("Sign In to like a product.");
  const id = signIn();
  const name = prompt("Enter the name of the product to like: ");

  products.forEach(element => {
    if((element.likes.includes(id)) && (element.name == name)){
      element.likes.splice((element.likes.indexOf(id)), 1);
    }
    else if(!(element.likes.includes(id)) && (element.name == name)){
      element.likes.push(id);
    }
  });
  console.log(products);
}

likeProduct();
likeProduct();