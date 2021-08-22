//JSON - stands for JavaScript Object Notation.  JSON is a light weight data format for storing and transporting. JSON is mostly used when data is sent from a server to a client. JSON is an easier-to-use alternative to XML.
//Example
`{
    "users": [
    {
        "firstName": "Asabeneh",
        "lastName": "Yetayeh",
        "age": 250,
        "email": "asab@asab.com"
    },
    {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    
]
}`


//Example:
/*`{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`*/
//The above JSON example is not much different for a normal object. The difference is the key of a JSON object should be with double quotes or it should be a string. JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.


//converting JSON to JavaScript object - JSON.parse()

//add replacer as filter but use undefined if you dont want to filter any keys
// add number which signifies number of space indentation

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, undefined, 4)
    console.log(usersObj)
    

//Using a reviver function with JSON.parse() - a callback used as formatter
const usersTextt = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

const userObjj = JSON.parse(usersTextt, (key, value) =>{
    let newVal =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value
    return newVal;
})
console.log(userObjj)


//Converting Object to JSON -JSON.string()
//When we want to change the object to JSON we use JSON.stringify(). The stringify method takes one required parameter and two optional parameters. The replacer is used as filter and the space is an indentations. If we do not want to filter out any of the keys from the object we can just pass undefined.

//Syntax => JSON.stringify(obj, replacer, space)
// json or text , the data
// replacer is an optional callback function

//example - convert object to text or string
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
      skills: [
        'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
const txt = JSON.stringify(users, undefined, 4)   //undefined helps to keep all keys and we have 4 space indentation
console.log(txt);


//Using a filter Array with JSON.stringify
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }

  const txtt = JSON.stringify(user, ["firstName", "lastName", "country", "city", "age"], 4)    //Now, we used the replacer as a filter. The user object has long list of keys but we are interested only in few of them. We put the keys we want to keep in array as show in the example and use it the place of the replacer.
  console.log(txtt);


  //Exercise
  //Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillsString = JSON.stringify(skills, undefined, 4)
console.log(skills)

//Stringify the age variable
let age = 250;
let ageJSON = JSON.stringify(age)
console.log(ageJSON)

//Stringify the isMarried variable
let isMarried = true
let JSONmarry = JSON.stringify(isMarried);
console.log(JSONmarry);

//Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const JSONstudent = JSON.stringify(student, undefined, 4);
console.log(JSONstudent);

//Stringify the students object with only firstName, lastName and skills properties
const students = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const stringg = JSON.stringify(students, ["firstName", "lastName", "skills"], 4);
console.log(stringg)

//Parse the txt JSON to object.
const txts = `{
  "Alex": {
      "email": "alex@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 30
  },
  "Asab": {
      "email": "asab@asab.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Redux",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 25,
      "isLoggedIn": false,
      "points": 50
  },
  "Brook": {
      "email": "daniel@daniel.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux"
      ],
      "age": 30,
      "isLoggedIn": true,
      "points": 50
  },
  "Daniel": {
      "email": "daniel@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Python"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "John": {
      "email": "john@john.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "Node.js"
      ],
      "age": 20,
      "isLoggedIn": true,
      "points": 50
  },
  "Thomas": {
      "email": "thomas@thomas.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "Paul": {
      "email": "paul@paul.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  }
}
`
let Obj = JSON.parse(txts, undefined, 4);
console.log(Obj);


//Find the the user who has many skills from the variable stored in txt.
let values = Object.values(Obj);
let mostSkilled = values.sort((a, b) => {
  if (a.skills.length > b.skills.length) return -1;
  if (a.skills.length < b.skills.length) return 1;
  return 0;
})[0];
console.log(mostSkilled);




