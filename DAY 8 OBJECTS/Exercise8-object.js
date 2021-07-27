//Creating an empty object 
const bag = {};

//creating objects with values.
const rectangle = {
    length: 20,
    width: 20,
}
console.log(rectangle);

//Creating human objects
const person = {
    firstName: "Adedeji",
    lastName: "Taiwo",
    age: 20,
    country: "Nigeria",
    city: "Lagos",
    skills: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node",
        "MongoDB",
        "Python",
        "D3.js",
    ],
    isMarried: true,
    getFullName: function() {
        return (`${this.firstName} ${this.lastName}`)
    },
    "phone number": "+2349065199898",
}
console.log(person);

//Getting values from an object
//Accessing values using dot.
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.city)

//Accessing values using square brackets
console.log(person["firstName"]);
console.log(person["country"]);
console.log(person["phone number"]) //we can only acess phone number with square brackets.

//Accessing object method 
console.log(person.getFullName());

//Setting a new keys in an object
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("Sass");
person.isMarried = false;
person.getPersonInfo = function() {
    let skillsWithoutLastSkills = this.skills.splice(0, this.skills.length - 1).join(", ")
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = (`${skillsWithoutLastSkills}, and ${lastSkill}`) // the last skill "sass" was isolated so as to accomondate "and" and the "," from the item before it.

    let fullName = this.getFullName()

    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement;

}

console.log(person);
console.log(person.getPersonInfo());


//Objects Methods
//Object.assign- to copy
const personae = {
    firstName: "Wale",
    age: 23,
    country: "England",
    city: "Lagos",
    skill: ["HTML", "CSS", "JS"],
    title: "engineer",
    address: {
        street: "21, Adeyinka Karounwi",
        town: "Igando",
    },
    getPersonInfo: function() {
        return(`I am ${this.firstName} and i live in ${this.city}, ${this.country}. I am ${this.age}.`);
    }
}

const copyPerson = Object.assign({}, personae)
console.log(copyPerson);

//Getting object keys using Object.keys()
const keys = Object.keys(copyPerson);
console.log(keys);

const address = Object.keys(copyPerson.address);
console.log(address);

//Getting object values using Object.values()
const values = Object.values(copyPerson)
console.log(values);

//Getting object keys and values using Object.entries()
const enteries = Object.entries(copyPerson);
console.log(enteries);

//Checking properties using hasOwnProperty()
console.log(copyPerson.hasOwnProperty("firstName"));
console.log(copyPerson.hasOwnProperty("score"));


//Exercises
//Create an empty object called dog
const dog = {};
//Print the the dog object on the console
console.log(dog);
//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Missy";
dog.legs = 4;
dog.color = "black and brown";
dog.age = 3;
dog.bark = function() {
        return ("woof woof");
}

//Get name, legs, color, age and bark value from the dog object
console.log(dog);
console.log(dog.bark());

//Set new properties the dog object: breed, getDogInfo
dog.breed = "alsatian"
dog.getDogInfo = function() {
    return (`Dog name: ${this.name}.\nAge: ${this.age}.\nColor: ${this.color}.\nDog barks: ${this.bark()}`);
} 
console.log(dog);
console.log(dog.getDogInfo());

//Find the person who has many skills in the users object.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
      },
      Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    
}

//list out all users
for (const item in users) {
  console.log(item);
}

//Find the person who has many skills in the users object.
Object.entries(users).map(item => {
  if (item[1].skills.length == 8) {
    console.log(`${item[0]} has most skills in the users' object`);
  }
})

//Count number of logged-in users,
console.log(`Logged in users is: ${Object.keys(users).length}`)
//or
function countUsers (obj) {
  var count = 0;
  for (var property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      count++;
    }
  }
  return count;
}
console.log(countUsers(users));
//or
let countt = 0;
for (let key in users) {
  ++countt;
}
console.log(countt);

//count logged in users
Object.entries(users).map(item => {
  if (item[1].isLoggedIn >= true) {
    console.log(item[0])
  }
})

//count users having greater than equal to 50 points from the following object.
Object.entries(users).map(item => {
  if (item[1].points >= 50) {
    console.log(item[0])
  }
})
//or
const usersArray = Object.entries(users);
console.log(usersArray)
//person with most skills
const mostSkilledUser = usersArray.sort((a,b) => (a[1].skills.length < b[1].skills.length) ? 1 :
(a[1].skills.length > b[1].skills.length) ? -1 : 0)[0];
console.log("Most Skilled User:");
console.log(mostSkilledUser);

//Count logged in users
const loggedInUsers = usersArray.filter(item => item[1].isLoggedIn).length;
console.log(`Logged in users count: ${loggedInUsers}`);

//Count users having greater than equal to 50 points from the following object.
const usersWith50Points = usersArray.filter(item => item[1].points >= 50).length;
console.log(`Users with greater or equal to 50 points: ${usersWith50Points}`);


//Find people who are MERN stack developer from the users object
Object.entries(users).map(item => {
  if (item[1].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
    console.log(item[0]);
  }
})

//Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users);
copyUsers.Mike = {};
copyUsers.Mike.email = "dtaiwo45@gmail.com";
copyUsers.Mike.skills = ["HTML", "CSS", "JavaScript"];
copyUsers.Mike.age = 28;
copyUsers.Mike.isLoggedIn = true;
copyUsers.Mike.points = 35;
console.log(copyUsers)

//Get all keys or properties of users object
console.log(Object.keys(users));
//or
Object.entries(users).map(item => {
  console.log(item[0], Object.keys(item[1]))

})

//Get all the values of users object
console.log(Object.values(users));
//or
Object.entries(users).map(item => {
  console.log(item[1], Object.values(item[1]))
});


//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAcct = {
  firstName: "Adedeji",
  lastName: "Taiwo",
  incomes: {
  Salary: 12000, 
  Bonus: 3000
  },
  expenses: {food: 2500,
     transport: 1500,
     education: 5000,
     miscellanous: 2000
  },
totalIncome: function() {
  return(`${this.incomes.Salary + this.incomes.Bonus}NGN`)
},

totalExpenses: function() {
    return(`${this.expenses.food + this.expenses.transport + this.expenses.education +  this.expenses.miscellanous}NGN`)
},

accountInfo: function() {
  return(`First Name: ${this.firstName}.\n
Last Name: ${this.lastName}.\n
Total Income: ${this.totalIncome()}.\n
Total Expenses: ${this.totalExpenses()}.`);
},

addIncome: function(arg, amount) {
  personAcct.incomes[arg] = amount;
  return(this.incomes);
},

addExpenses: function(arg, amount) {
  personAcct.expenses[arg] = amount;
  return(this.expenses);
},

accountBalance: function() {
  return(`Name: ${this.lastName} ${this.firstName}\n
Total income: ${this.totalIncome()}\n
Total expenses incurred: ${this.totalExpenses()}\n
Account Balance: ${parseInt(this.totalIncome()) - parseInt(this.totalExpenses())}NGN`)
}

}
console.log(personAcct);
console.log(personAcct.totalIncome());
console.log(personAcct.totalExpenses());
console.log(personAcct.accountInfo());
console.log(personAcct.addIncome("freelance", 5000));
console.log(personAcct.addIncome("inheritance", 10000));
console.log(personAcct.addExpenses("bills", 5000));
console.log(personAcct);
console.log(personAcct.accountBalance())

//Imagine you are getting the users collection below from a MongoDB database. 
//(a). Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const userz = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  


  //alert("Welcome to Teedy!!  Please sign Up."); 
  //function was set up to take 3 input parameters while signing up.
  function signUp(username, password, email) {
  
  //an empty object is set up to take the users info as properties and values.
  let z = {};


  //this function generates new ID for every new users signing up.
  let userIdGenerator = function() {
    let keys = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (j = 0; j < 6; j++) {
      id += keys.charAt(Math.floor(Math.random() * 37));
    }
    return (id);
 }

 //Function returns the time and date user account is set up.
 let createdAt =  function() {
  let today = new Date();
  return(`${today.toLocaleDateString()} ${today.toLocaleTimeString()}`);
}

//properties and values added to the object z to hold the new user information.
z._id = userIdGenerator();
z.username = username;
z.email = email;
z.password = password;
z.createdAt = createdAt(); 
z.isLoggedIn = true;


//console.log(userz)
//console.log(z._id)


//new user's username and password are checked against the database.
for (m = 0; m < userz.length ; m++) { 
  if (userz[m].password == z.password && userz[m].username == z.username && z.email === z.email) { 
     return("You already registered on this platform; Simply Log on")  
  } 
  else {
    userz.push(z);
    return(`Sign up complete!! Welcome to Teedy! ${z.username.toUpperCase()}\nYour new userID is: ${z._id}\nAccount created at:${z.createdAt}\nYou are logged in!!!`)
  }
  }
}
console.log(signUp('Mike', '123321', 'mike@mike.com'));
console.log(signUp('Steph', '543210', 'ary@ary.com'));
console.log(signUp('Wale', '224455', 'wale@gmail.com'));
console.log(userz);



  
//b. Create a function called signIn which allows user to sign in to the application.
const signIn = (username, password) => {

let sign = userz.some(exist => exist.username === username && exist.password === password)
if (sign === true) {
  return ("You are signed in");
}
else {
  return ("Account do not exist")
}
}
console.log(signIn('Brook', '123111'));



//The products array below  has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
  ]

//The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product
function rateProduct(product_num, rate) {
  //this function produces user Id.
  let userId = function () {
    let data = "abcdefghijklmnopqrstuvwxyz0123456789"
    id = "";
    for (let zz = 0; zz < 6; zz++) {
    id += data.charAt(Math.floor(Math.random() * 37))
  }
  return id;
}

//Object which returns rating is created and its 2 properties added.
 p = {};
 p.userId = userId();
 p.rate = rate;
 products[product_num].ratings.push(p)
 return products[product_num];
}
console.log(rateProduct(1, 4));
console.log(products)



//Create a function called averageRating which calculate the average rating of a product
function averageRating (product_num) {
  let sum = 0;
for (let g = 0; g < products[product_num].ratings.length; g++) {
  sum += products[product_num].ratings[g].rate;
}
return (sum/products[product_num].ratings.length);
}
console.log(averageRating (0));



//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
 function likeProduct(product_num) {

  let userId = function () {
  let keys = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  
    do {
      id += keys.charAt(Math.floor(Math.random() * 37));
      new Set(id);  
    }
    while (id.length < 6)
    return id;
  }
 

//for (let n =0; n < products[product_num].likes.length; n++) {
  //(products[product_num].likes[n] !== userId()) ? 
  products[product_num].likes.push(userId())
  //products[product_num].likes.pop(userId());
//}
return products;
}
console.log(likeProduct(2));
//console.log(products[1].likes[0]);




