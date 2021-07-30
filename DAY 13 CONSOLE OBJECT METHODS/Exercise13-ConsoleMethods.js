//console.log() Functions
//Showing Outputs on Browser Console
console.log("30 Days of JavaScript")

//Subtitution
console.log("%d %s of JavaScript", 30, "Days")

//CSS
console.log("%c30 Days of JavaScript", "color:green")
console.log(
    "%c30 Days%c %cof%c %cJavaScript%c",
    "color: green",
    "",
    "color: red",
    "",
    "color: yellow")

//CSS is often referred to as custom console.
const spacing = "10px";
const styles = (`padding: ${spacing}; 
                background-color: white; 
                color: green; 
                font-style:italic; 
                border: 1px solid black; 
                font-size: 2em;`);
console.log("%cGeeks for Geeks", styles)

//console.warn()
console.warn("This is a warning")
console.warn('You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!')
console.warn("Warning is different from error");

//console.error()
console.error("This is an error message");
console.error("We all make mistakes");

//console.table();
const names = ["Asabeneh", "Brook", "David", "John"]
console.table(names);


const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)

  const counteries = [
      ["Finland", "Helsinki"],
      ["Sweden", "Stockholm"],
      ["Norway", "Oslo"]
  ]
  console.table(counteries);


  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'Malmo',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)




//console.time();
  const countriez = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

  console.time("Regular for loop")
  for (let i = 0; i <countriez.length; i++){
      console.log(countriez[i][0], countriez[i][1])
  } 
  console.timeEnd("Regular for loop");





console.time("for of loop")
for (const [name, city] of countriez) {
    console.log(name, city)
}
console.timeEnd("for of loop")




console.time("forEach loop")
countriez.forEach(([names, city]) => {
    console.log(names, city)
})
console.timeEnd("forEach loop")


//console.info()
console.info("30 Days of JavaScript challenge is trending on Github")
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

//console.assert()
console.assert(4 > 3, "4 is greater than 3")
console.assert(3 > 4, '3 is not greater than 4')

for (let j = 0; j <= 10; j += 1) {
    let errorMessage = (`${j} is not even`)
    console.log(`the # is ${j}`)
    console.assert(j % 2 === 0, {number: j, errorMessage: errorMessage})
}

//console.group()
const namez = ['Asabeneh', 'Brook', 'David', 'John']
console.group("Names");
console.log(namez)
console.groupEnd();



const country = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.group("Countries")
  console.log(country)
  console.groupEnd();


  const userr = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }

  console.group("User")
  console.log(userr)
  console.groupEnd();



  const userss = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]

  console.group("Users")
  console.log(userss)
  console.groupEnd("Users");


  //console.count()
  const func = () => {
      console.count("Function has been called")
  } 
  func();
  func()





  //Exercise
  //Display the countries array as a table
  import {countryz} from "./allCountries.js"
  console.table(countryz)

  //Use console.group() to group logs
  console.group("Countries")
  console.log(countryz);
  console.groupEnd;

  //10 > 2 * 10 use console.assert()
  console.assert(10 > 2 * 10, "10 is less than 20")

  //Write a warning message using console.warn()
  console.warn("console.assert() only returns a feedback if assertion is wrong")

  //Write an error message using console.error()
  console.error("TypeError: arr.match is not a function")


  //Check the speed difference among the following loops: while, for, for of, forEach
  const arr = [1, 2, 3, 4, 5]
  //for
  console.time("for loop")
  let sum = 0;
  for (let a = 0; a <= arr.length; a++ ) {
      sum += a;
  }
  console.log(sum)
  console.timeEnd("for loop");

  //for of
  console.time("for of loop")
  let summ = 0;
  for (const add of arr) {
      summ += add;
  }
  console.log(summ);
  console.timeEnd("for of loop");

  //while loop
  console.time("while loop")
  let b = 0;
  let sums = 0;
  while (b < arr.length) {
    sums += b;
    b++;
  }
  console.log(sum);
  console.timeEnd("while loop");

  