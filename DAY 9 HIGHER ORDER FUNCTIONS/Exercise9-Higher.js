//Higher Order Function
//1. callback function
const callback = (n) => {    //this is a callback function 
    return n ** 2;
}

function cube(callback, n) {          //this function takes another function as callback
return callback(n) * n;
}

console.log(cube(callback, 3));

//2. returning function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver =  t => {
            return 2 * n + 3 * m + t;
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10));


//callback example
const numbers = [1, 2, 3, 4];
const sumArray = arr => {
    let sum = 0;
    const callBack = function(element) {
        sum += element
    }
    numbers.forEach(callBack)
    return sum
}
console.log(sumArray(numbers));




//set Interval
function sayHello() {
    console.log("Hello")
}
setInterval(sayHello, 2000);              //prints hello every 2 secondss


//set Timeout
function sayHellos() {
    console.log("Hello")
}
setTimeout(sayHellos, 2000);       //prints hello after waiting for 2 seconds



//Functional Programming
//forEach
const number = [1, 2, 3, 4, 5];
number.forEach(num => console.log(num));


//
let sum = 0;
const numberz = [1, 2, 3, 4, 5];
numberz.forEach(num => sum += num)
console.log(sum)

//
const countries = ["Finland", "Denamrk", "Sweden", "Norway", "Iceland"]
countries.forEach(element => console.log(element.toUpperCase()));


//Map
const numberzz = [1, 2, 3, 4 ,5];
const numberSquare = numberzz.map(num => num * num)
console.log(numberSquare);

//
const names = ["Adedeji", "Arike", "Elias", "Brook"]
const namesToUpperCase = names.map(name => name.toLocaleUpperCase());
console.log(namesToUpperCase);

//
const countrie = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const countrieToUpperCase = countrie.map(country => country.toUpperCase());
console.log(countrieToUpperCase);


const countrieFirstThreeLetters = countrie.map(country => country.toUpperCase().slice(0, 3));
console.log(countrieFirstThreeLetters);


//Filter
const countrieContainingLand = countrie.filter(country => country.includes("land"));
console.log(countrieContainingLand);

//
const countrieEndByia = countrie.filter(country => country.endsWith("ia"));
console.log(countrieEndByia);

//
const countrieHaveFiveLetters = countrie.filter(country => country.length === 5);
console.log(countrieHaveFiveLetters);



//
const scores = [
    {name: "Adedeji", score: 95},
    {name: "Mathias", score: 80},
    {name: "Elias", score: 50},
    {name: "Jide", score: 85},
    {name: "John", score: 100},
]
const scroresGreaterEight = scores.filter(country => country.score > 80);
console.log(scroresGreaterEight);



//Reduce
const numbber = [1, 2, 3, 4, 5];
const summ = numbber.reduce((acc, cur) => acc + cur, 0);
console.log(summ);



//Every
const namee = ["Taiwo", "Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = namee.every(name => typeof name === "string")
console.log(areAllStr);


//
const bools = [true, true, true, true];
const allTrue = bools.every(b => {return b === true})
console.log(allTrue);


//Find
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find(age => age < 20);
console.log(age)


//
const namees = ["Taiwo", "Asabeneh", "Mathias", "Elias", "Brook"];
const longg = namees.find(name => name.length > 7)
console.log(longg);

//

const scorez = [
    {name: "Adedeji", score: 95},
    {name: "Mathias", score: 80},
    {name: "Elias", score: 50},
    {name: "Jide", score: 85},
    {name: "John", score: 100},
]

const users = scorez.find(users => users.score > 80)
console.log(users)

//FindIndex
const namezz = ["Taiwo", "Asabeneh", "Mathias", "Elias", "Brook"];
const finder = namezz.findIndex(name => name.length > 7)
console.log(finder)

//
const agess = [24, 22, 25, 32, 35, 18];
const lesser = agess.findIndex(age => age < 20)
console.log(lesser);

//Some
const nams = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const areSomeTrue = nams.some(name => typeof name === "number")
console.log(areSomeTrue);


//
const bool = [true, true, true, true]
const allAre = bool.some(item => {
    return item === true})
console.log(allAre);


//Sort
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort());

//Sorting Numeric values
const numberr = [9.81, 3.14, 100, 37];
numberr.sort(function(a, b) {         //Ascending order.
    return a - b;
})
console.log(numberr);


numberr.sort(function (a, b) {
    return b - a;
})
console.log(numberr)


//Sorting Object Arrays
const userr = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
  ]

  userr.sort((a, b) => {         //Users in ascending order
      if (a.age < b.age) return -1
      if (a.age > b.age) return 1
      return 0;
  } )
  console.log(userr);








  //Exercises
  //Explain the difference between forEach, map, filter, and reduce.

  //forEach
  //its takes a callback function and iterating through an array of item. This is carried out only on arays.

  //Map
 // Takes a callback function. Iterates and modify an array of items.

 //Filter
 //filter out items which satisfies a given condition. modifies array.

 //Reduce
 //Takes callback function with multiple parameters(accumulator, current, and initial value). It returns a single value.


 //Define a call function before you them in forEach, map, filter or reduce.
 
 //
const num = [1, 2, 3, 4];
const sumA = arr => {
    let sum = 0;
    const callBack = function(element) {
        sum += element
    }
    numbers.forEach(callBack)
    return sum
}
console.log(sumA(num));

//
const sumB = aar => {
    let sum = 0;
    const callBack = function(item) {
        sum += item * item;
    }
    num.map(callBack)
    return sum;
}
console.log(sumB(num));



//
const countriess = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const namm = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const productz = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//Use forEach to console.log each country in the countries array.
countriess.forEach(county => console.log(county));

//Use forEach to console.log each name in the names array
namm.forEach(name => console.log(name));


//Use forEach to console.log each number in the numbers array.
numm.forEach(number => console.log(number))

//Use map to create a new array by changing each country to uppercase in the countries array.
const countyToUpper = countriess.map(country => country.toUpperCase());
console.log(countyToUpper);

//Use map to create an array of countries length from countries array.
const countryLen = countriess.map(country => country.length);
console.log(countryLen);

//Use map to create a new array by changing each number to square in the numbers array
const squareNum = numm.map(square => square ** 2)
console.log(squareNum);

//Use map to change to each name to uppercase in the names array
const upperName = namm.map(name => name.toUpperCase());
console.log(upperName);

//Use map to map the products array to its corresponding prices.
const productMap = productz.map(mapper => (`${mapper.product}: ${mapper.price}`));
console.log(productMap);

//Use filter to filter out countries containing land.
const countyFilter = countriess.filter(country => country.includes("land"));
console.log(countyFilter);

//Use filter to filter out countries having six character.
const sixChar = countriess.filter(country => country.length === 6)
console.log(sixChar);

//Use filter to filter out countries containing six letters and more in the country array.
const sixMore = countriess.filter(country => country.length >= 6)
console.log(sixMore);

//Use filter to filter out country start with 'E';
const countyE = countriess.filter(country => country.startsWith("F"));
console.log(countyE)

//Use filter to filter out only prices with values.
const priceValue = productz.filter(item => item.price >= 1)
console.log(priceValue);

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringList = arr => {
    let elements = [];
     arr.map(function(element) {
     elements.push(element.toString());
     })
     return elements;
}
console.log(getStringList(numm));

//Use reduce to sum all the numbers in the numbers array.
const getSum = numm.reduce((acc, curr) => acc + curr)
console.log(getSum);

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const dd = countriess.slice(0, -1)
console.log(dd);
const ee = countriess.splice(4, 1).join(" ")
console.log(ee);
const concatt = dd.reduce((acc, curr) => acc + ", " + curr)
console.log(`${concatt} and ${ee} are North European countries.`);

//Explain the difference between some and every
//Some
//checks  if some elements satisfy a given conditon

//Every
//checks if all elements  satisfy a given condition.

//Use some to check if some names' length greater than seven in names array
console.log(namm.some(name => name.length > 7))

//Use every to check if all the countries contain the word land
console.log(countriess.every(country => country.includes("land")));

//Explain the difference between find and findIndex
//find- returns first element which satisfies a given condition.
//findIndex- returns index of element which satisfies stipulated conditon.

//Use find to find the first country containing only six letters in the countries array
console.log(countriess.find(country => country.length === 6))

//Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countriess.findIndex(country => country.length === 6))

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countriess.findIndex(country => country === "Norway"))

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countriess.findIndex(country => country === "Russia"))


//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let totalPrice = productz.map(product => product.price  //maps out only the prices
).filter(product => product >= 1          //removes empty prices.
).reduce((sum, product) => sum + product   //adds up 
);
console.log(totalPrice);

//Find the sum of price of products using only reduce reduce(callback))
var priceTotal = productz.filter(cur => cur.price >= 1).reduce((acc, cur) => 
    acc + cur.price, 0
)
console.log(`Total price: ${priceTotal}`);





//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
import {countryz} from "./allCountries.js";

//console.log(countryz);

function categorizeCountries(arr) {
   let cate =  countryz.filter(country => country.name.includes(arr))
    return cate;
}

console.log(categorizeCountries("land"));

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countryLetter = arr => {
    let length = countryz.filter(country => country.name.startsWith(arr.toUpperCase())).length
    let z = {}
    z.Letter = arr;
    z.Number_of_Countries_it_begins = length;

    return z;
}
console.log(countryLetter("f"));

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = arr => {
    let tenCounty = countryz.filter(country => country.name.startsWith(arr.toUpperCase()));
    if (tenCounty.length >= 10) {
        return tenCounty.splice(0, 10)
    }
    else {
        return ("Countries don't number up to 10")
    }
}
console.log(getFirstTenCountries("a"));

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = arr => {
    let tenCounty = countryz.filter(country => country.name.startsWith(arr.toUpperCase()));
    if (tenCounty.length >= 10) {
        return tenCounty.splice(tenCounty.length - 10, tenCounty.length)
    }
    else {
        return ("Countries don't number up to 10")
    }
}
console.log(getLastTenCountries("a"));


//Use the countries information, in the data folder. Sort countries by name, by capital, by population    
//By name
const CountryName = countryz.sort((a, b) => {
        if (a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
    })
console.log(CountryName);

//By capital
const CountryCap = countryz.sort((a, b) => {
    if (a.capital > b.capital) return 1;
    if (a.capital < b.capital) return -1;
});
console.log(CountryCap);

//By population
const countryPop = countryz.sort((a, b) => {
    if (a.population > b.population) return 1;
    if(a.population < b.population) return -1;
    return 0;
})
console.log(countryPop);


// Find the 10 most spoken languages
const mostSpokenLanguages = (num) => {
    const cont = countryz.map(country => country.languages)  //map out all languages into an array of arrays
    let langArr = (cont.flat(1));     //1 is the depth of the nested array. Here flat turns an array of arrays into a single one.
    const langSet = new Set(langArr); //Getting unique unrepeated values of langArr

    const counts = [];

    for (const lang of langSet) {
        const filteredLang = langArr.filter(item => item === lang) //filteredlang returns an array of a particular/single language. This helps to get the length
        counts.push({country: lang, count: filteredLang.length})
        counts.sort((a, b) => {
            if (a.count > b.count) return -1;
            if (a.count < b.count) return 1;
            return 0;
        })
    }
return counts.splice(0, num);
}
console.log(mostSpokenLanguages(10))



//Use countries_data.js file create a function which create the ten most populated countries
const mostPopulatedCountries = (num) => {
    const populace = countryz.map(country => country.population)
    const counts = [];

    for (const pop of populace) {
        const name = countryz.find((country) => {return country.population === pop}) //this returns an object containing all properties and value of that particular country. then the name can be extracted in the next line.
        counts.push({country: name.name, population: pop})
        counts.sort((a, b) => {
            if (a.population > b.population) return -1;
            if (a.population < b.population) return 1;
            return 0;
        })
    }
    return counts.splice(0, num);
}
console.log(mostPopulatedCountries(5))


//Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do calculations as method for the statistics object. Check the output below.
const statistics = {
    mean: function(arr) {
        let sum = arr.reduce((acc,cur) => acc + cur)
        return Math.ceil(sum/ arr.length);
    },

    median: function(arr) {
        let sortt = arr.sort(function(a, b) {
            return a - b
        })
        if (sortt.length % 2 == 0) {
            return ((sortt[(arr.length/2) - 1]) + (sortt[arr.length/2]))/2
        } 
        else { 
          return (sortt[(Math.ceil(arr.length/2)) - 1]);
        }
    },


    mode: function(arr) {
        let sortArr = arr.sort((a, b) => {
            return a - b;
        })  // Sort out array first.
        //arr.filter(item => item === a).lenght - arr.filter(item => item === b).length).pop();    //This returns only the mode or frequently occuring element;
            let maxFreq = 1;     
            let count = 0;
            let item;
            
            for (let i = 0; i < sortArr.length; i++) {
                for (let j = i; j < sortArr.length; j++) { //inner loop set up to compare first indexed against the rest 
                    if (d[i] == d[j]) count++;    //if any element is the same count is incrememnted.
                    if (maxFreq < count) {
                        maxFreq = count;
                        item = sortArr[i];
                    }
                }
                count = 0;
            }
     return (`mode: ${item}, count: ${maxFreq}`);
},

range: function(arr) {
    let sorted = arr.sort((a, b) => {  //sort array first
    return a - b });
    let rangee = Math.max(...sorted) - Math.min(...sorted);
    return rangee;
},

variance: function(arr) {
    let sorted = arr.sort((a, b) => {  //sort array first
        return a - b });
    let average = sorted.reduce((acc, cur) => acc + cur/sorted.length , 0) //the array mean is obtained. 
    let deviation = sorted.map(num => (num -average) ** 2) //each element of the array is tsken from its mean and squared
    return ((deviation.reduce((acc, cur) => acc + cur, 0))/sorted.length).toFixed(1); //the squared array is summed up and divided by number of elements. this returns variance.
    },

std: function(arr) {
    return Math.sqrt(statistics.variance(arr)).toFixed(2);
},

count: function(arr) {
    return arr.length;
},

sum: function(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
},

min: function(arr) {
    return Math.min(...arr);
},

max: function(arr) {
    return Math.max(...arr);
},

/*freqDist: function(arr) {
    let count = {};
    arr.forEach(e => count[e] ? //here we asked if the elements of the arr are present in the empty object. 
    count[e]++ : count[e] = 1);  //since count is empty, this will return a falsy value which assigns 1 to each elements as freq counts..if the tenary operator checks for the second time, it runs the tenary operator which increments the values of the element keys.  
    return count;
    }*/

 //or
freqDist: function(arr) {
        let freqCount = arr.reduce((obj, num) => {
            if(!obj[num]) {    //elements of array are checked against the empty object..since nothing can be found, all elements frequency are counted as one.
                obj[num] = 1;
            }
            else {
                obj[num]++; //the statement is run again to check if elements of array are present in the object. This time they do. Hence, any element encountered a number of times allows for the object values to be incrememented for each object keys(elements). 
            }
            return obj;
        }, {})
        return freqCount;
    }

}


let d = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
console.log(statistics.mean(d));
console.log(statistics.median(d));
console.log(statistics.mode(d));
console.log(statistics.range(d));
console.log(statistics.variance(d));
console.log(statistics.std(d));
console.log(statistics.count(d));
console.log(statistics.sum(d));
console.log(statistics.min(d));
console.log(statistics.max(d));
console.log(statistics.freqDist(d));

