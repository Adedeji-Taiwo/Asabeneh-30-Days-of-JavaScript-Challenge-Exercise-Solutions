//Destructuring Arrays
const numbers =  [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);



const names = ["Deji", "Wale", "Jide", "Biodun"]
let [firstName, SecondName, ThirdName, FourthName] = names;

console.log(firstName, SecondName, ThirdName, FourthName)


const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"]
]

let [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

//skipping on values in the array.
const num = [1, 2, 3];
let [numOnee, , numThreee] = num;

console.log(numOnee, numThreee);

//
const namess = ["Asabeneh", "Brook", "David", "John"]
let [, secPerson, , forPerson] = namess;

console.log(secPerson, forPerson);

//
const nam = [undefined, "Brook", "David"]
let [first = "Adedeji", second, third, fourth = "Wale"] = nam;

console.log(first, second, third, fourth);

//Destructuring a few and getting rest as spread Opeartor.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

//Destructuring during iteration
const countryy = [["Finland", "Helsinki"], ["Sweden", "Stockholm"], ["Norway", "Oslo"]];
for (const [country, city] of countryy) {
    console.log(country, city);
}

//
const fullStackz = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"]
]

for (const [one, two, three] of fullStackz) {
    console.log(one, two, three)
}

//Destructuring Object
const rectangle = {width: 20, height: 10, area: 200}

let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);

//Renaming during structuring
let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p);

//Adding to object keys during destructuring
const rectangl = {widt: 20, heigh: 10, areaz: 200}

let {widt, heigh, areaz, perimete = 60} = rectangl;
console.log(widt, heigh, areaz, perimete);

//Object parameter without destructuring
const rect = {
    width: 20,
    height: 10
}

const calculatePerimeter = (rectangle) => {
   return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect));

//
const person = {
    firstName: "Adedeji",
    lastName: "Taiwo",
    age: 250,
    country: "Nigeria",
    job: "Instructor and Developer",
    skills: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Redux",
        "Node",
        "MongoDB",
        "Python",
        "D3.js"
    ],
    languages: ["Amharic", "English", "Suomi(Finnish)"]
}

// Lets create a function which give information about the person object without destructuring
const getPersonInfo = (obj) => {
    const skills = obj.skills;
    const formattedSkills = skills.slice(0, -1).join(", ")
    const languages = obj.languages;
    const formattedLanguages = languages.slice(0, -1).join(", ")

    let personInfo = (`${obj.firstName} ${obj.lastName} lives in ${obj.country}. 
    He is ${obj.age} years old. He is an ${obj.job}. 
    He teaches ${formattedSkills} and ${skills[skills.length - 1]}.
    He speaks ${formattedLanguages} and a little bit of ${languages[2]}`);

    return personInfo;

}
console.log(getPersonInfo(person));


//Object parameter with destructuring.
const calcPerimeter = ({width, height}) => {
    return 2 * (width + height) 
}
console.log(calcPerimeter(rect));

// Lets create a function which give information about the person object with destructuring
const getPersonInfos = ({firstName, lastName, age, country, job, skills, languages}) => {
    const formattedSkills = skills.slice(0, -1).join(", ")
    const formattedLanguages = languages.slice(0, -1).join(", ")

    let personInfos = (`${firstName} ${lastName} lives in ${country}. 
    He is ${age} years old. He is a ${job}. 
    He teaches ${formattedSkills} and ${skills[skills.length - 1]}. 
    He speaks ${formattedLanguages} and a liitle bit of ${languages[languages.length - 1]}.`)

    return personInfos;
}
console.log(getPersonInfos(person));


//Destructuring object during iteration
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
    
for (const {task, time, completed} of todoList) {
    console.log(task, time, completed);
}


//Spread or rest operators
//Spread operators to get the rest of array elements
const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [numss1, numss2, numss3, ...rests] = numss
console.log(numss1, numss2, numss3);
console.log(...rests);

const countriezz = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]

let [ger, fra, , ...norsemen] = countriezz;
console.log(ger, fra);
console.log(...norsemen);

//Spread operators to copy arrays.
const evens = [0, 2, 4, 6, 8, 10]
const evenNum = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNum = [...odds]

const wholeNum = [...evens, ...odds]

console.log(evenNum);
console.log(oddNum);
console.log(wholeNum);

const frontEn = ['HTML', 'CSS', 'JS', 'React']
const backEn = ['Node', 'Express', 'MongoDB']
const fullstac = [...frontEn, ...backEn]
console.log(fullstac)

//spread operators to copy objects
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }

  const copiedUser ={...user}
  console.log(copiedUser)

//Modifying or changing the object while copying
const userr = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUserr = {...userr, title: "developer"};
  console.log(copiedUserr)

  //spread operator with arrow function.
  const sumAllNum = (...args) => { //If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.
      console.log(args)
  }
  sumAllNum(1, 2, 3, 4, 5) 

//
  const sumAllNums = (...args) => {
      let sum = 0;
      for (const num of args) {
          sum += num;
      }
      return sum;
  }
console.log(sumAllNums(1, 2, 3, 4, 5));

//Exercises
//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constantz = [2.72, 3.14, 9.81, 37, 100]

let [ee, Pi, gravityy, bodyTem, boilingTem] = constantz;
console.log(ee, Pi, gravityy, bodyTem, boilingTem);

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countriesss = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, swe, den, nor] = countriesss;
console.log(fin, est, swe, den, nor);

//Destructure the rectangle object by its properties or keys.
const rectt = {
    wid: 20,
    hei: 10,
    are: 200,
    peri: 60
  }

let {wid, hei, are, peri} = rectt;
console.log(wid, hei, are, peri);

//Iterate through the users array and get all the keys of the object using destructuring
const userss = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]


for (const {name, scores, skills, age} of userss) {
    console.log(name, scores,skills, age);
}



//Find the persons who have less than two skills
for (const {name, scores, skills, age} of userss) {
     if (skills.length < 2){
        console.log(name, scores, skills, age)
     }
}


//Destructure the countries object print name, capital, population and languages of all countries
import {countryz} from "./allCountries.js"

for (const {name, capital, population, languages} of countryz) {
    console.log(name, capital, population, languages)
}


//A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, skills, , jsScore = 90, reactScore = 95] = student;
    console.log(name, skills, jsScore, reactScore);

//Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

const convertArrayToObject = (arr) => {
    let pal = [];
    for(let i = 0; i < arr.length; i++) {
    let pack = {};
    pack.name = arr[i][0]
    pack.skills = arr[i][1];
    pack.scores = arr[i][2];
    pal.push(pack);  
}
    return pal;    
}
console.log(convertArrayToObject(students))

//Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const studentt = {
    namee: 'David',
    age: 25,
    skillx: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const newStudent = {...studentt}
console.log(newStudent)

//Add Bootstrap with level 8 to the front end skill sets
studentt.skillx.frontEnd.push({skill: "Bootstrap", level: 8});
console.log(studentt)

//Add Express with level 9 to the back end skill sets
studentt.skillx.backEnd.push({skill: "Express", level: 9});
console.log(studentt)

//Add SQL with level 8 to the data base skill sets
studentt.skillx.dataBase.push({skill: "SQL", level: 8});
console.log(studentt)

//Add SQL without level to the data science skill sets
studentt.skillx.dataScience.push("SQL");
console.log(studentt)
