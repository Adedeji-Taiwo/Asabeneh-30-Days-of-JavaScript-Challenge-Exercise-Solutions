/*//CALLBACKS
const doSomething = callback => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS"]
        callback("it didn't go well", skills)
    }, 2000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback);


//another case where error is false
const doThings = callback => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS"]
        callback(false, skills)
    , 2000})
}

doThings((err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
})

doThings(callback);

//Promise  -settled with resolve
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS"]
        if (skills.length > 0) {
            resolve(skills)
        }
        else {
            reject("Something went wrong.")
        }
    }, 2000)
})

doPromise
.then(result => {
    console.log(result)
})
.catch(error => console.log(error))


//Promise  -settled with reject
const doProm = new Promise((resolve, reject) => {
    setTimeout(() =>  {
        const skills = ["HTML", "CSS", "JS"]
        if (skills.indexOf("Node") !== -1) {
            resolve("fullstack developer")
        }
        else {
            reject("Something went wrong.")
        }
    }, 2000)
})

doProm
.then(result => {
    console.log(result)
})
.catch(error => console.log(error))

//in both cases, the promises were chained with then() and catch() methods





//FETCH API
const url = 'https://restcountries.eu/rest/v2/all'    //countries API
fetch(url)
.then(response => response.json())  //accessing API data as JSON
.then(data => {   //getting the data
    console.log(data);
})
.catch(error => console.log(error));
*/


//Async
const squar = async function (n) {
    return n * n
  }
  
  console.log(squar(2))
  


//Asyn and Await
const square = async function(n) {
    let value =  n * n;
    let result = await value;
    return result;
}

console.log(square(2))


//Fetch API data using both promise method and async await method

//promise
const urls =  'https://restcountries.eu/rest/v2/all';    //countries API
fetch(urls)
.then(response => response.json())  //accessing API data as JSON
.then(data => {   //getting the data
    console.log(data);
})
.catch(error => console.log(error));

//async and await
const fetchData = async () => {
    try {
        const response = await fetch(urls)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.log(err)
    }
}
console.log("==== async and await")
fetchData();


//Exercises
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.eu/rest/v2/all'

fetch(countriesAPI)
.then(response => response.json())
.then(countriez => {countriez.map(item =>
    console.log(item.name, item.capital, item.languages, item.population, item.area))
})
.catch(error => console.log(error))


//Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const catNames = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        console.log(cats.map(item => item.name))
    } catch (err) {
        console.log(err)
    }
}
catNames();

//Read the cats api and find the average weight of cat in metric unit.
const catAPI = 'https://api.thecatapi.com/v1/breeds'

const catWeight = async () => {
    try {
        const response = await fetch(catAPI)
        const cats = await response.json()
        const plus = (cats.map(item => (item.weight.metric)))
        const z = (plus.map(item => item.match(/\d+/gi).map(Number))  //extract all numbers in singleton arrays
        console.log(z.map(item => item.reduce((acc, nt(acc) + parseInt(cur))/2)))
    } catch (err) {
        console.log(err)
    }
}
catWeight();


//Read the countries api and find out the 10 largest countries
//Using Async and wait
const countryAPI = 'https://restcountries.eu/rest/v2/all'

const tenLargest = async () => {
    try {
        const response = await fetch(countryAPI)
        const countryy = await response.json()
        const landMass = countryy.sort((a, b) => { return b.area -a.area}).splice(0, 10).map(item => item.name)
        console.log(landMass)
    } catch (err) {
        console.log(err)
    } 
}
tenLargest();


//Read the countries api and count total number of languages in the world used as officials.
//using promise
fetch(countryAPI)
.then(response => response.json())
.then(countries => {
    const langArray = countries.map(item => item.languages)
    console.log((langArray.flat(4)).map(item => item.name).length)
})
.catch(error => console.log(error))
