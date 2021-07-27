//ARRAYS

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log("Numbers: ", numbers);
console.log("Number of numbers: ", numbers.length);

const fruits = ["banana", "orange", "mango", "lemon"];
console.log("Fruits: ", fruits);
console.log("Number of fruits: ", fruits.length);

const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
console.log("Vegetables: ", vegetables);
console.log("Number of vegetables: ", vegetables.length);

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
console.log("Web Technologies: ", webTechs);
console.log("Number of Web Technologies: ", webTechs.length);

//Array with different data types
const arr = ["Adedeji", 250, true, {country: "Finland", city: "Helsinki"},
            {skills: ["HTML", "CSS", "JS", "React", "Python"]}];
console.log(arr);

//Creating an array using split
let js = "Javascript";
const charsInJavascript = js.split("");
console.log(charsInJavascript);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies);

let txt = "I love teaching and empowering people. I teach HTML, CSS, JS, React, and Python";
const words = txt.split(" ");
console.log(words);


//Accesssing array items using index
const fruitz = ["banana", "orange", "mango", "lemon"];
console.log(fruitz);
console.log(fruitz[0]);
console.log(fruitz[1]);
console.log(fruitz[2]);
console.log(fruitz.length);
console.log(fruitz[(fruitz.length - 1)]);

const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Germany", "Nigeria",];
console.log(countries);
console.log(countries.length);
console.log(countries[0]);
console.log(countries[5]);
console.log(countries[countries.length - 2]);

//Modifying array element.
const numberz = [1, 2, 3, 4, ];
numberz[0] = 10;
numberz[1] = 20;
console.log(numberz);


const countriez = ["Albania", "Bolivia", "Canada", "Denmark", "Germany", "Nigeria",];
console.log(countriez);
countriez[0] = "Argentina";
countriez[3] = "Kenya";
countriez[countriez.length-1] = "Ghana";
console.log(countriez);



/*METHODS OF CREATING AN ARRAY.*/

//Creating empty arrays.
const arry = Array()
console.log(arry);

const emptySix = Array(6);  //creates 6 empty spaces.
console.log(emptySix);


//Creating static values with FILL- fill all elements with a static value.
const valFive = Array(5).fill("X");
console.log(valFive);

const eight0values = Array(8).fill(0);
console.log(eight0values);

const four4values = Array(4).fill(4);
console.log(four4values);

//Concatenating array using concat.
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

const fruity = ["Orange", "Apple", "Banana", "Mango"];
const vegey = ["Tomato", "Potato", "Cabbage", "Onions"];
console.log(fruity.concat(vegey));


//Getting Array Length.
const number = [1, 2, 3, 4, 5];
console.log(number.length);

//Getting index of element in an array using "indexOf".
const digits = [1, 2, 3, 4, 5];
console.log(digits.indexOf(5));
console.log(digits.indexOf(1));
console.log(digits.indexOf(6)); //this will return -1 as the item is not on the list.

//Check an element if it exist in an array.
const fruitzy = ["Orange", "Apple", "Banana", "Mango"];
let index = fruitzy.indexOf("Banana");

if (index != -1) {
    console.log("This fruit does exist in the array");
}
else {
    console.log("This fruit does not exist in the array");
};

//Using tenary operator for same exercise.
(index != -1)
? console.log("This fruit does exist in the array")
: console.log("This fruit does not exist in the array");

//let us check if Avocado exist in the array.
let index2 = fruitzy.indexOf("Avocado");

if (index2 != -1) {
    console.log("This fruit does exist in the array");
}
else {
    console.log("This fruit does not exist in the array");
};

//Getting last index of an item in an array.
const num = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(num.lastIndexOf(3));
console.log(num.lastIndexOf(8));
console.log(num.lastIndexOf(1));

//Includes
const numb = [1, 2, 3, 4, 5, 6];
console.log(numb.includes(3));
console.log(numb.includes(0));

const webTech = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
console.log(webTech.includes("CSS"));
console.log(webTech.includes("Python")); 

//Checking Array.----Array.isArray checks if data type is an array.
const numz = [1, 2, 3, 4, 5];
console.log(Array.isArray(number));

const nums = 20;
console.log(Array.isArray(nums));

//Array to string
const numbs = [1, 2, 3, 4, 5];
console.log(numbs.toString());

const namee = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(namee.toString());

//Joining Array elements.- Aside the joining capabilities, it always returns strings.
const numbe = [1, 2, 3, 4, 5,];
console.log(numbe.join());

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log(names.join());
console.log(names.join(''));
console.log(names.join(' '));
console.log(names.join(', '));
console.log(names.join(' # '));

//Slice array elements
console.log(numbe.slice()); //copies all item
console.log(numbe.slice(0)); //copies all item
console.log(numbe.slice(1, 4)); //slice out any item outside this 2 index but dont include ending position

//Splice method in array--takes 3 parameters: starting postion, number of items to be removed, and list of items to be added.
console.log(numbe.splice()); //removes all
console.log(numbe.splice(0, 1));
console.log(numbe.splice(2, 2, 8, 9));

//Adding Item to the end of an array using push.
 const zar = [1, 2, 3, 4, 5];
 zar.push(6);
 console.log(zar);

 //Removing item from the end with pop.
 const fruz = ['banana', 'orange', 'mango', 'lemon'];
 console.log(fruz);
 fruz.pop()
 console.log(fruz);

 fruz.push("lime");
 console.log(fruz);

 //Removing an element from the beginning.(Shift)
 const alpha = [1, 2, 3, 4, 5];
 alpha.shift();
 console.log(alpha);

 //Adding an element to the beginning.(Unshift)
 const beta = [1, 2, 3, 4, 5];
 beta.unshift(0);
 console.log(beta);

 //Reversing array order
 const zeta = [1, 2, 3, 4, 5];
 zeta.reverse();
 console.log(zeta);

 //Sorting elements in an array.
 const web = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
 web.sort(); //in ascending order.
 console.log(web);
 web.reverse();
 console.log(web);

//Array of arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
console.log(fullStack.length);
console.log(fullStack[0]);
console.log(fullStack[1]);



//Exercises.
//Declear an empty array;
let scope = Array();
console.log(scope);

//Declare an array with more than 5 number of elements
let scope2 = Array(6).fill("z");
console.log(scope2);

let val = [1, 2, 3, 4, 5, 6];
console.log(val);

//Find the length of your array.
console.log(val.length);

//Get the first item, the middle item and the last item of the array
console.log(val[0]);
console.log(val[3]);
console.log(val[5]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataType = [5, "pop", true, 0.4, "smoke", 250, "globe", {country: "Nigeria", state: "Lagos"}, {frontzend: ["HTML", "CSS", "JS"]}];

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

//Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//Change each company name to uppercase one by one and print them out
let comp1 = "Facebook";
console.log(comp1.toUpperCase());

let comp2 = "Google";
console.log(comp2.toUpperCase());

let comp3 = "Microsoft";
console.log(comp3.toUpperCase());

let comp4 = "Apple";
console.log(comp4.toUpperCase());

let comp5 = "IBM";
console.log(comp5.toUpperCase());

let comp6 = "Oracle";
console.log(comp6.toUpperCase());

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let compy = itCompanies.toString("");
console.log(`${compy} are big IT companies`);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let caze = itCompanies.indexOf("Google");
if (caze != -1) {
    console.log("Google is present")
} 
else {
    console.log("Google not found")
};

//Sort the array using sort() method
console.log(itCompanies.sort());

//Reverse the array using reverse() method
console.log(itCompanies.reverse());

console.log(itCompanies.reverse());


//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7));

//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(2, 5));

//Remove the first IT company from the array
const itCompaniez = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
itCompaniez.shift();
console.log(itCompaniez);

//Remove the middle IT company or companies from the array
const itCompanie = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const myIndex = itCompanie.indexOf("Apple");
(myIndex != -1) ? itCompanie.splice(3, 1) : false;
console.log(itCompanie);

//Remove the last IT company from the array
const compani = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
compani.pop();
console.log(compani);

//Remove all IT companies
const compan = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(compan.splice());

//Filter out companies which have more than one 'o' without the filter method
const techs = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let techy = techs.includes("Google", "Facebook", "Microsoft");
(techy = true) ? techs.splice(0, 1) : false;
(techy = true) ? techs.splice(0, 1) : false;
(techy = true) ? techs.splice(0, 1) : false;
console.log(techs);

//First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let clear = (text.replace(/[[.,]/g, ""));
console.log(clear.split(" "));

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);
//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);
//remove 'Honey' if you are allergic to honey
let honey = shoppingCart.includes("Honey");
(honey = true) ? shoppingCart.splice(4, 1) : false;
console.log(shoppingCart);
//modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea"
console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const counties = [
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
    'Nigeria',
    'Zambia',
    'USA',
  ];
let eth = counties.indexOf("Ethiopia");
if (eth != -1) {
    console.log("ETHIOPIA")
}
else {
    counties.push("Ethiopia")
};

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTec = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'PHP',
];
let sass = webTec.indexOf("Sass");
if (sass = -1) {
    webTec.push("Sass");
    console.log(webTec);
}
else {
    console.log("Sass is a CSS preprocess")
};


//Concatenate the following two variables and store it in a fullStack variable.
const frontEn = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEn = ['Node','Express', 'MongoDB']
let fullStick = frontEn.concat(backEn);
console.log(fullStick);

//The following is an array of 10 students ages:
const agez = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
console.log(agez.sort());
console.log(Math.min(...agez));
console.log(Math.max(...agez));
//Find the median age(one middle item or two middle items divided by two)
let mid1 = agez[4];
let mid2 = agez[5];
let median = (mid1 + mid2)/2;
console.log(median);
//Find the average age(all items divided by number of items)
let mida = agez[0];
let midb = agez[1];
let midc = agez[2];
let midd = agez[3];
let mide = agez[4];
let midf = agez[5];
let midg = agez[6];
let midh = agez[7];
let midi = agez[8];
let midj = agez[9];
let average = (mida+midb+midc+midd+mide+midf+midg+midh+midi+midj)/10
console.log(average);

//Sum of all numbers in the agez array
var sum = agez.reduce(function(a, b) {
    return a + b;
}, 0);  // 0 here is the initial value.
console.log(sum);

//Find the range of the ages(max minus min)
let mini = Math.min(...agez);
let maxi = Math.max(...agez);
let range = maxi - mini;
console.log(range);

//Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(mini - average));
console.log(Math.abs(maxi - average));

//Slice the first ten countries from the countries array
console.log(counties.slice(0, 9));

//Find the middle country(ies) in the countries array
console.log(counties.splice(6, 4));

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let a = counties.splice(6);
console.log(counties);
console.log(a)