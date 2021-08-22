//HTML5 WEB STORAGES TYPES 1.)Local Storage  2.)Session Storage

//SETTING ITEM TO THE LOCAL STORAGE - to store data, takes a key and value
//CASE 1: if value is string, no need to stringify;
localStorage.setItem("firstName", "Adedeji")
console.log(localStorage);

//CASE 2: storing number in a local storage;
localStorage.setItem("age", 200);
console.log(localStorage);

//CASE 3: Storing an array or object. In this case, we should stringify them first just like JSON objects that are server-bound;
//Array
const skills = ["HTML", "CSS", "JS", "React"]
const skillsJSON = JSON.stringify(skills)
localStorage.setItem("skills", skillsJSON);
console.log(localStorage);

//Array of Objects
let skillz = [
    {tech: "HTML", level: 10},
    {tech: "CSS", level: 9},
    {tech: "js", level: 8},
    {tech: "React", level: 9},
    {tech: "Redux", level: 10},
    {tech: "Node", level: 8},
    {tech: "MongoDB", level: 8}
]

let JSONskillz = JSON.stringify(skillz)
localStorage.setItem("skillx", JSONskillz)
console.log(localStorage);

//Objects 
const user = {
    fiirstName: "Adedeji",
    age: 250,
    skills: ["HTML", "CSS", "JS", "React"]
}

const userJSON = JSON.stringify(user, undefined, 4)
localStorage.setItem("user", userJSON)
console.log(localStorage);



//Getting item from localStorage    - takes key as parameter.
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skils = localStorage.getItem('skills')

console.log(firstName, age, skils)   //skill is returned in string format(JSON), so we parse to normal array.

let skil = localStorage.getItem("skills")
let skilo = JSON.parse(skil, undefined, 4)
console.log(skilo);

//Removing item from localStorage  - takes key as parameter.
localStorage.removeItem("age");
console.log(localStorage);

//Displaying/Retrieving item from local storage   -takes index as parameter. 
console.log(localStorage.key(3));

//clearing the localStorage
localStorage.clear()
console.log(localStorage)


//Exercises
//Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("myName", "ADEDEJI");
localStorage.setItem("lastName", "TAIWO");
localStorage.setItem("age", 25);
localStorage.setItem("country", "Nigeria");
localStorage.setItem("city", "Lagos");
console.log(localStorage);

localStorage.clear()   //to clear the storage for subsequent questions.

//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstname: "Adewale",
    lastName: "Taiwo",
    age:20,
    skills: ["HTML", "CSS"],
    country: "Nigeria"
}

const studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem("student", studentJSON)
console.log(localStorage);


localStorage.clear();   //for next question


//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
//Store the personAccount object in your browser localStorage.
const personAccount =  {
    firstName: "Adedeji",
    lastName: "Taiwo",
    incomes: {salary: 5000, bonus: 2000},
    expenses: {food: 500, transport: 1000},


    totalIncome: function() {
       return (Object.values(this.incomes)).reduce((acc, cur) => acc + cur, 0)
    },

    totalExpense: function() {
        return (Object.values(this.expenses)).reduce((acc, cur) => acc + cur, 0)
    },

    accountInfo: function() {
        return (`First Name: ${this.firstName}\nLast Name: ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpense()}`)
    },

    addIncome: function(argz, amount) {
        return (this.incomes[argz] = amount)
    },

    addExpense: function(argz, amount) {
        return (this.expenses[argz] = amount)
    },
    accountBalance: function() {
        return (`Total Balance: ${this.totalIncome() - this.totalExpense()}`)
    }
}

console.log(personAccount.accountInfo());
console.log(personAccount.addIncome("savings", 1500))
console.log(personAccount.incomes)
console.log(personAccount.addExpense("education", 3500))
console.log(personAccount.expenses)
console.log(personAccount.accountBalance());

const personAccountJSON = JSON.stringify(personAccount, undefined, 4)
localStorage.setItem("personAccount", personAccountJSON)
console.log(localStorage);

 
localStorage.clear();   //affected future usage


