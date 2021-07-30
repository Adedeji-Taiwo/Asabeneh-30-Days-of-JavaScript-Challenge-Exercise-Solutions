//Set 
//Creating new set.
const companies = new Set();
console.log(companies);

//Creating set from an array.
const languages = ['English', 'Finnish', 'English', 'French', 'Spanish', 'English', 'French']
console.log(new Set(languages));

//Iterating through a set.
const language = ['English', 'Finnish', 'English', 'French', 'Spanish', 'English', 'French']
const langSet = new Set(language);

for(const lang of langSet) {
    console.log(lang);
}

//Ading an elelment to a set.
const company = new Set();
console.log(company.size);

company.add("Google");
company.add("Facebook");
company.add("Amazon");
company.add("Oracle");
company.add("Microsoft");

console.log(company.size);
console.log(company);

//loop to add element to a set.
const companiess = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
let setOfCompanies = new Set()
for (const company of companiess) {
  setOfCompanies.add(company)
}
console.log(setOfCompanies);

//Delelting an element of a set
console.log(company.delete("Google"));
console.log(company.size);

//Checking an element in the set
console.log(company.has("Amazon"));
console.log(company.has("Google"));

//clearing the set
company.clear();
console.log(company);

//Example on how to use a set.
const languagez = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const uniqueLang = new Set(languagez)
console.log(uniqueLang)
console.log(uniqueLang.size)

let count = [];

for (const lang of uniqueLang) {
    let filteredLang = languagez.filter(item => item == lang)
    console.log(filteredLang);
    count.push({lang: lang, count: filteredLang.length})
}
console.log(count);

//Other use case of set. For instance to count unique item in an array.
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const newSet = new Set(numbers);
console.log(newSet);


//Union of Sets (AuB)
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


//Interception of sets (AnB)
let x = [1, 2, 3, 4, 5]
let y = [3, 4, 5, 6]

let X = new Set(x);
let Y = new Set(y);

let z= x.filter((num) => Y.has(num));
let Z = new Set(z);
console.log(Z)


//Difference of sets (A/B)
let m = [1, 2, 3, 4, 5]
let n = [3, 4, 5, 6]

let M = new Set(m);
let N = new Set(n);

let o = m.filter((num) => !N.has(num))
let O = new Set(o)
console.log(O);


//Map
//creating an empty map.
const map = new Map()
console.log(map);

//Creating Map from an array.
const county = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
const mapCounty = new Map(county);
console.log(mapCounty);
console.log(mapCounty.size)

//Adding values to the Map.
const countriesMap = new Map()
console.log(countriesMap.size);
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Nigeria", "Abuja");
countriesMap.set("Norway", "Oslo")
console.log(countriesMap);
console.log(countriesMap.size);

//Getting a value from a Map
console.log(countriesMap.get("Nigeria"));

//Checking keys in Map
console.log(countriesMap.has("Norway"));

//Getting all values from a map using loop
for (const country of countriesMap) {
    console.log(country)
}


//
for (const [country, city] of countriesMap) {
    console.log(country, city)
}


//Exercises
//create an empty set
const empty = new Set();

//Create a set containing 0 to 10 using loop
const loop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const loopSet = new Set(loop);
console.log(loopSet);

//Remove an element from a set
console.log(loopSet.delete(0));
console.log(loopSet.delete(4))
console.log(loopSet.size)

//clear a set
loopSet.clear();
console.log(loopSet);

//Create a set of 5 string elements from array
const pack = [1, 2, 3, 4, 5]
const packSet = new Set(pack)
console.log(packSet);

const bag = ["green", "blue", "red", "purple", "yellow"]
const bagSet = new Set(bag)
console.log(bagSet);


//Create a map of countries and number of characters of a country
const countriess = ["Oman", 'Finland', "Nigeria", 'Sweden', "Netherland", 'Norway', "France"]
const countryzz = new Set(countriess);

 let countt = [];
for (const count of countryzz) {
    countt.push({country: count, length: count.length})
}

console.log(countt);

//
const countryy = new Map();
console.log(countryy);
countryy.set("Oman", "Oman".length)
countryy.set("Nigeria", "Nigeria".length);
countryy.set("Libya", "Libya".length);
countryy.set("France", "France".length);
countryy.set("Netherland", "Netherland".length);
console.log(countryy);



//Find a union b
const aa = [4, 5, 8, 9]
const bb = [3, 4, 5, 7]


const cc = [...aa, ...bb]
const sortCC = cc.sort((a,b) => a - b)
console.log(new Set(sortCC));


//Find a intersection b
let AA = new Set(aa);
let BB  = new Set(bb)
const intAB = aa.filter((num) => BB.has(num))
console.log(intAB);

//Find a intersection b
//This is the same thing as finding A difference B. it picks result on first set.
const diffAB = aa.filter((num) => !BB.has(num));
console.log(diffAB);

//How many languages are there in the countries object file.
import {countryz} from "./allCountries.js";
const langArr = countryz.map(lang => lang.languages)   //maps out only the languages from the country array
const flatArr = langArr.flat(1);       //merges all language arrays obtained into a single array. the 1 in bracket is the depth of the arrays(nexts).
const uniqueLan = new Set(flatArr);    //return unique/unrepeated set of languages
console.log(`The are ${uniqueLan.size} uniques languages in the country object file`);

//Use the countries data to find the 10 most spoken languages.
const mostSpokenLanguages = (num) => {
    const langAr = countryz.map(item => item.languages)
    const flatAr = langAr.flat(1);
    const uniqueAr = new Set(flatAr);

    let countz = [];
    
    for (const lang of uniqueAr) {
        const filteredLangz = flatAr.filter(item => item === lang)
        countz.push({language: lang, count: filteredLangz.length})
        countz.sort((a, b) => {
            if(a.count > b.count) return -1;
            if(a.count> b.count) return 1;
            return 0;
        })
    }
    return countz.splice(0, num)
}

console.log(mostSpokenLanguages(10))