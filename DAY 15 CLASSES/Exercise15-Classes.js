//Defining a class.
class Dogs {
    //code goes here
}

//Class Instantiation- means creatting an object out of a class.
class Human {

}
const man = new Human()
console.log(man)

//Class Constructor- used for passing different properties for the class.
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Persons()
console.log(person)

//Passing Values to the Object Created out of the Class
class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
}
const newGuy = new Person("Adedeji", "Taiwo")
console.log(newGuy);

//Creating many Objects out of the perons class
const person1 = new Person("Adewale", "Taiwo");
const person2 = new Person("Babajide", "Simeon");
const person3 = new Person("Biodun", "Gbolahan")

console.log(person1);
console.log(person2);
console.log(person3);

//Adding more properties to the class
class Personz {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    }
}
const personz1 = new Personz("Adedeji", "Yetayeh", "250", "Nigeria", "Helsinki");
console.log(personz1)


//Default values with constructor
class Personn {
    constructor(
        firstName = "Adedeji",
        lastName = "Taiwo",
        age = 250,
        country = "Nigeria",
        city = "Lagos"
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city
    }
}
const personn1 = new Personn();
const personn2 = new Personn("Stephanie", "Oloyede", 150, "USA", "Chicago");

console.log(personn1)
console.log(personn2);


//Class Methods
class Personx {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this,age = age;
        this.country = country;
        this.city = city
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName;
    }
}

const personx1 = new Personx("Adedeji", "Taiwo", 250, "Nigeria", "Lagos")
const personx2 = new Personx("lidya", "Tekle", 25, "England", "London")

console.log(personx1.getFullName());
console.log(personx2.getFullName());


//Properties with initial values.
class Personxx {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName;
    }
}

const personxx1 = new Personxx("Adedeji", "Taiwo", 250, "Nigeria", "Lagos")
console.log(personxx1.score);
console.log(personxx1.skills);


//Types of Method
//Getter- for accessing values from objects
class Personss {
    constructor(firstName, lastName, age, country, city) {
        this.firstName  = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const personss1 = new Personss("Adedeji", "Taiwo", 250, "USA", "New York")
console.log(personss1.getScore)
console.log(personss1.getSkills)


//Setter-for modifying values of properties.
class Personsx {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
    get getScore() {
        return this.score;
    }
    get getSkills() {
        return this.skills;
    }
    set setScore(score) {
        this.score += score;
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

const personsx1 = new Personsx("Adedeji", "Taiwo", 250, "Finland", "Helsinki")

personsx1.setScore = 3;
personsx1.setSkill = "HTML";
personsx1.setSkill = "CSS";
personsx1.setSkill = "JavaScript";

console.log(personsx1.getFullName());
console.log(personsx1.score);
console.log(personsx1.skills);


//Adding Regular Method 
class Personxs {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    getFullName() {
        const fullName = this.firstName  + " " + this.lastName;
        return fullName;
    }
    get getScore() {
        return this.score;
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score;
    }
    set setSkill(Skill) {
        this.skills.push(Skill);
    }
    getPersonInfo() {
        let fullName = this.getFullName();
        let skills = 
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length -1).join(", ") + 
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : " "
        
        let info = (`${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`)
        return info;
    }
}

const personxs1 = new Personxs('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const personxs2 = new Personxs('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const personxs3 = new Personxs('John', 'Doe', 50, 'Mars', 'Mars city')

personxs1.setScore = 1;
personxs1.setSkill = "HTML";
personxs1.setSkill = "CSS";
personxs1.setSkill = "JS"

personxs2.setScore = 2
personxs2.setSkill = 'Planning'
personxs2.setSkill = 'Managing'
personxs2.setSkill = 'Organizing'

console.log(personxs1.getScore)
console.log(personxs2.getScore)

console.log(personxs1.getSkills)
console.log(personxs2.getSkills)
console.log(personxs3.getSkills)

console.log(personxs1.getPersonInfo())
console.log(personxs2.getPersonInfo())
console.log(personxs3.getPersonInfo())


//Static Method
class Humans {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    getFullName() {
        const fullName = this.firstName  + " " + this.lastName;
        return fullName;
    }
    get getScore() {
        return this.score;
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score;
    }
    set setSkill(Skill) {
        this.skills.push(Skill);
    }
    getPersonInfo() {
        let fullName = this.getFullName();
        let skills = 
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length -1).join(", ") + 
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : " "
        
        let info = (`${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`)
        return info;
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'] 
        const index = Math.floor(Math.random() * skills.length)
        return skills[index];
    }
    static showDateTime() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date  = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        (hours < 10) ? "0" + hours : hours;
        (minutes < 10) ? "0" + minutes : minutes;
        let dateMonthYear = date + "." + month + "." + year;
        let time = hours + ":" + minutes;
        let fullTime = dateMonthYear + " " + time;
        return fullTime;
    }
}

console.log(Humans.favoriteSkill());
console.log(Humans.showDateTime());

//Inheritance
//Using the Personxs class as parent class. We will create a child class called student.
class Student extends Personxs {
    saySomething() {
        return ("I am a child of the person class")
    }
}
const s1   = new Student("Adedeji", "Taiwo", "Finland", 250, "Helsinki")
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());


//Overriding Methods
//super() function allows for accessing all properties from the parent class.
//Then modification can be done on the actual constructor.
class Pupil extends Personxs {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender 
    }
    saySomething() {
        return ("I am a child of the personxs class")
    }
    getPersonInfo() {
        let fullName = this.getFullName();
        let skills = 
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length -1).join(", ") + 
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? ` ${skills}` : " "
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
        
        let info = (`${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${pronoun} knows ${formattedSkills}`)
        return info;
    }
}

const s2 = new Pupil('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
const s3   = new Student("Adedeji", "Taiwo", 250, "Nigeria", "Helsinki", "Male")

s2.setScore = 2
s2.setSkill = "HTML"
s2.setSkill = 'CSS'
s2.setSkill = 'JavaScript'


s3.setScore = 1
s3.setSkill = 'Planning'
s3.setSkill = 'Managing'
s3.setSkill = 'Organizing'

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())

console.log(s3.saySomething())
console.log(s3.getFullName())
console.log(s3.getPersonInfo())

//Exercise
class Animals {
    constructor(type, name, age, color, legs) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.skills = []
        this.speed = 0;
    }

    breath() {
        return(`${this.name} breathes. Meaning It's alive.`)
    }

    get getSkill() {
        return this.skills;
    }

    get getSpeed() {
    return this.speed;
    }
    set setSkill(skill) {
        this.skills.push(skill);
    }
    set setSpeed(speed) {
        this.speed += speed;
    }


    getInfo() {
        let skills = 
        this.skills .length > 0 && this.skills.slice(0, -1).join(", ") + 
        ` and ${this.skills[this.skills.length - 1]}`


        let ability = (this.type === "fish") ? `swim` :  
        (this.type === "bird") ? `fly` : 
        (this.type === "reptile") ? `crawl` : `run`;
        
        let pronoun = ((this.color).includes("and")) ? 
        `Its colors are` : `its color is`; 

        let info = 
         `This is ${this.name}. 
         It is ${this.age} years old. 
         ${pronoun} ${this.color}. It possess ${this.legs} legs.
         ${this.name} has good ${skills} skills and ${ability} at a speed ${this.speed}.`
        return info;
    } 
}

const animal = new Animals("mammal", "Dog", 3, "black and white", 4)
console.log(animal);

animal.setSkill = "Jumping";
animal.setSkills = "tracking"
animal.setSpeed = 5;
console.log(animal.getSkill);
console.log(animal.getSpeed);
console.log(animal.breath());
console.log(animal.getInfo());
console.log(animal);


const animal1 = new Animals("bird", "Parrot", 2, "Orange, green and white", 2)
animal1.setSkill = "fly"
animal1.setSpeed = 3;
console.log(animal1.getInfo());

//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animals {
    saySomething() {
        return `I belong to the animal kingdom`
    }
    intro () {
        return `${this.saySomething()} and i bark "woof woof"`
    }
}
const dog1 = new Dog("mammal", "kain", 1, "brown", 4)
console.log(dog1);

dog1.setSpeed = 2.5;
dog1.setSkill = "jumping";
dog1.setSkill = "hopping";
console.log(dog1.getInfo())
console.log(dog1.intro())


//Create a Dog and Cat child class from the Animal Class.
class Cat extends Animals {
    attribute(){
        return ` I love staying out of sight and mews a lot`
    }
}

const cat1 = new Cat("mammal", "Cara", 2, "black", 4)
console.log(cat1);

cat1.setSkill = "jumping"
cat1.setSkill = "mice hunting"
cat1.setSpeed = 4;
console.log(cat1.getInfo());
console.log(cat1.attribute())

//Override the method you create in Animal class
class modifiedAnimal extends Animals {
    constructor(type, name, age, color, legs, gender) {
        super(type, name, age, color, legs)
        this.gender = gender;
        this.hobbies = [];
    }

    get getHobbies() {
        return this.hobbies;
    }

    set setHobbies(hobbies) {
        this.hobbies.push(hobbies);
    }
    
getInfos() {
    let pronoun = (this.gender == "male") ? `His` : `Her`;
    let oldInf = this.getInfo();

    let hobbies = 
    this.hobbies.length > 0 && this.hobbies.slice(0, -1).join(", ") + 
    ` and ${this.hobbies[this.hobbies.length - 1]}`;

    let formattedhobbies = hobbies ? 
    `${pronoun} hobbies include ${hobbies}` : "";

    let fullInfo = `${oldInf}. ${formattedhobbies}`
    return fullInfo;
}
}

const komodo = new modifiedAnimal("Reptile", "Ana", 2, "light-brown", 4, "female")
console.log(komodo);

komodo.setSpeed = 5;
komodo.setSkill = "gliding";
komodo.setSkill = "hunting";
komodo.setHobbies = "Sun basking";
komodo.setHobbies = "swimming";
komodo.setHobbies = "sleeping";
console.log(komodo.getSkill);
console.log(komodo.getSpeed);
console.log(komodo.getHobbies);
console.log(komodo.getInfos());
console.log(komodo);



//Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Statistics {
    count(arr) {
        return arr.length;
    }
    sum(arr) {
        return arr.reduce((acc, cur) => acc + cur, 0);
    }
    min(arr) {
        return Math.min(...arr);
    }
    max(arr) {
        return Math.max(...arr);
    }
    range(arr) {
        return (this.max(arr) - this.min(arr));
    }
    mean(arr) {
        return Math.round(this.sum(arr)/this.count(arr));
    }
    median(arr) {
        let arrs = arr.sort((a, b) =>
            {return a - b})
        if (arrs.length % 2 == 0) {
            return (((arrs[arrs.length/2]) - 1) + (arrs[arrs.length/2]))/2;
        }
        else{
            return arrs[Math.ceil(arrs.length/2) - 1];
        }
    }
    mode(arr) {
        let unique = new Set(arr);

        let countt = [];
        for (const num of unique) {
            let filterednum = arr.filter(item => item === num)
            countt.push({mode: num, count: filterednum.length});
            countt.sort((a, b) => {
                if (a.count > b.count) return -1;
                if (a.count < b.count) return 1;
                return 0;
            })
        }
        return countt.splice(0, 1)[0];  //[0] returns the only object in the array.
    }
    variance(arr) {
        let sorted = arr.sort((a, b) => {  
            return a - b });
        let deviation = sorted.map(num => (num -this.mean(sorted)) ** 2) //each element of the array is tsken from its mean and squared
        return ((deviation.reduce((acc, cur) => acc + cur, 0))/sorted.length).toFixed(1); //the squared array is summed up and divided by number of elements. this returns variance.
    }
    std(arr) {
        return Math.sqrt(this.variance(arr)).toFixed(1);
    }
    freqDist(arr) {
        let freq = arr.reduce((obj, num) => {
            if(!obj[num]) {
                obj[num] = 1; //if element is not found again, give it a count of one.
            }
            else{
                obj[num]++;
            }
            return obj;
        }, {}) 
        return freq;  
    }
}


ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics ();
console.log("Count:", statistics.count(ages))
console.log("Sum:", statistics.sum(ages))
console.log("Min:", statistics.min(ages))
console.log("Max:", statistics.max(ages))
console.log("Range:", statistics.range(ages))
console.log("Mean:", statistics.mean(ages));
console.log("Median:", statistics.median(ages))
console.log("Mode:", statistics.mode(ages))
console.log("Variance:", statistics.variance(ages))
console.log("Standard Deviation:", statistics.std(ages))
console.log("Frequency Distribution:", statistics.freqDist(ages))

//Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = {salary: 12000, bonus: 3000};
        this.expenses = {food: 2500, transport: 1500, education: 5000, miscellanous: 2000 };
    }

    totalIncome() {
        return (Object.values(this.incomes)).reduce((acc, curr) => acc + curr, 0)
    }
    totalExpense() {
        return (Object.values(this.expenses)).reduce((acc, curr) => acc + curr, 0)
    }
    AccountInfo() {
        return `First Name: ${this.firstName}.\n
                Last Name: ${this.lastName}}.\n
                Total Income: ${this.totalIncome()}.\n
                Total Expenses: ${this.totalExpense()}.\n`          
    }
    addIncome(arg, amount) {
           return this.incomes[arg] = amount;  
    }
    addExpense(arg, amount) {
        return this.expenses[arg] = amount;
    }
    accountBalance() {
        return this.totalIncome() - this.totalExpense()
    }
}


const per = new PersonAccount("Adedeji", "Taiwo");
console.log(per);
console.log(per.totalIncome())
console.log(per.totalExpense())
console.log(per.AccountInfo());
per.addIncome("freelance", 5000)
console.log(per.incomes);
per.addExpense("rent", 2500)
console.log(per.expenses)
console.log(per.accountBalance());
console.log(per);