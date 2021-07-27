//Function without a parameter and return
function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
}
square();

// function without parameter
function addTwoNumbers() {
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;
    console.log(sum);
}
addTwoNumbers();   //calling a function

// function without parameter
function printFullName () {
    let fName = "Adedeji";
    let lName = "Taiwo";
    let space = " ";
    let fullName = fName + space + lName;
    console.log(fullName);
}
printFullName ()


//Function returning value
function printFulName () {
    let firstName = "Adedeji";
    let lastName = "Taiwo";
    let spaces = " ";
    let fulName = firstName + spaces + lastName;
    return fulName;
}
console.log(printFulName());

//Function returning value
function numberSum () {
    let numA = 25;
    let numB = 75;
    let summing = numA + numB;
    return summing;
}
console.log(numberSum());

//Function with a parameter
//function with one parameter
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(10));

// function with one parameter
function square (number){
    return number * number;
}
console.log(square(20));

//Function with two parameters
function sumTwonumbers(numC, numD) {
    let sums = numC + numD;
    return sums;
}
console.log(sumTwonumbers(5, 5));

//Function with two parameters
function printFuName (firstNm, lastNm) {
    return (`${firstNm} ${lastNm}`)
}
console.log(printFuName("Adedeji", "Taiwo"));

//Function with many parameters
function sumArrayValues(numb) {
    let sum = 0;
    for (let i = 0; i <numb.length; i++) {
        sum += numb[i];
    }
    return sum;
}
const arr = [1, 2, 3, 4, 5];
console.log(sumArrayValues(arr));

//Function
const areaOfCircles = (radius) => {
    let areas = Math.PI * radius * radius;
    return areas;
}
console.log(areaOfCircles(15));


// Let us access the function scoped arguments object
function sumAllNums() {
    let sum = 0;
    for (let a = 0; a < arguments.length; a++) {
        sum += arguments[a];
    }
    return sum
}
console.log(sumAllNums(10, 20,30, 40));


//Unlimited number of parameters in arrow function
const sumAllNum = (...args) => {
    console.log(args)
}
sumAllNum(1, 2, 3, 4);

// function declaration
const smallNum = (...args) => {
    let sum = 0;
    for (b= 0; b < args.length; b++) {
        sum += args[b];
    }
    return sum
}
console.log(sumAllNums(10, 20, 13, 40, 10));

//Anonymous Function & Expression Function
//Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.
let set = function(n) {
    return n * n;
}
console.log(set(2));

//Self Invoking Functions
//Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(n) {
    console.log(n * n);
})
(3);

//self invoking functions with return values
let squaredNum = (function(n) {
    return n * n;
}) 
(10);
console.log(squaredNum);

//Arrow Function
const sqr = n => {
    return n * n;
}
console.log(sqr(4));


//Arrow Function
const changeToUpperCase = arrz => {
    const newArr = [];
    for (let c = 0; c < arrz.length; c++) {
        newArr.push(arrz[c].toUpperCase());
    }
    return newArr;
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries));

//Arrow Function
const fully = (fezzName, lazzName) => {
    return(`${fezzName} ${lazzName}`);
}
console.log(fully("Wale", "Taiwo"));

//or

const printFull = (fNam, lNam) => (`${fNam} ${lNam}`);
console.log(printFull("jide", "taiwo"));

//Function with default parameters
function greetings(name = "Peter") {
    let message = (`${name}, welcome to 30 Days of Javascript.`)
    return message;
}
console.log(greetings());
console.log(greetings("Adedeji"));

//Function with default parameters
function generateFull (fn = "Adedeji", ln = "Taiwo") {
    let spacez = " ";
    let fullz = fn + spacez + ln;
    return fullz;
}
console.log(generateFull())
console.log(generateFull("Peter", "Druiry"))

//Function with default parameters
function calcAge(birthYear, currentYear = 2021) {
    let age = currentYear - birthYear;
    return age;
}
console.log("Age:", calcAge(2001));

//Function with default parameters
function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + "N"
    return weight;
}
console.log("Weight of object in Newton: ", weightOfObject(100));


//Arrow Function with default parameters
const greetingz = (name = "John") => {
    let msg = name + ", Welcome to 30 Days of Javascript"; 
    return msg;
}
console.log(greetingz());
console.log(greetingz("Ade"));

//Arrow Function with default parameters
const getFullName = (fnm = "Adedeji", lnm = "taiwo") => {
    let spacezz = " ";
    let comp = fnm + spacezz + lnm;
    return comp
}
console.log(getFullName());
console.log(getFullName("Eniola", "Oloyede"));

//Arrow Function with default parameters
const calcAgez = (birthYear, currentYear = 2021) => {
    let agezz = currentYear - birthYear;
    return agezz;
}
console.log("Age: ", calcAgez(1991));

//Arrow Function with default parameters
const weightOfObjectz = (mass, gravity = 9.81) => mass * gravity + "N";
console.log("Weight of Object in Newton is: ", weightOfObjectz(10));






//EXERCISES
//Declare a function fullName and it print out your full name.
function fullNamee () {
    let f = "Adedeji";
    let l = "Taiwo";
    let fulle = (`${f} ${l}`); 
    return fulle;
}
console.log(fullNamee())

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fulNamee (first = "Michael", last = "Taiwo") {
    let dash = " ";
    let myName = first + dash + last;
    return myName;
}
console.log(fulNamee());
console.log(fulNamee("Michael", "Spence"));

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumz (num1, num2) {
    let sumNum =  num1 + num2;
    return sumNum;
}
console.log(addNumz(2, 55));

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRect (length, width) {
    let areaR = length * width + "m";
    return areaR;
}
console.log("Area of the rectangle is given as: ", areaOfRect(2, 15));


//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeter (len, wid) {
    let per = 2 * (len + wid);
    return per;
}
console.log("perimeter of the rectangle is given as: ", perimeter(2, 2));

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfPrism (length, width, height) {
    let vol = (length * width * height);
    return vol;
}
console.log("Volume of prism is given as: ", volumeOfPrism(2, 3, 4));


//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCir (r) {
    let cir = Math.PI * r * r;
    return Math.round(cir);
}
console.log("Area of circle is given as: ", areaOfCir(3));


//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle (r) {
    let circum = 2 * Math.PI * r;
    return Math.ceil(circum);
}
console.log("Circumference of  circle: ", circumOfCircle(2));

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density (mass, volume) {
    let den = mass / volume;
    return (den.toFixed(2));
}
console.log("Density of substance is: ", density(4, 3));

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function calcSpeed (distance , time) {
    let speed = distance * time + "Km";
    return (speed);
}
console.log("Speed of the object is: ", calcSpeed(1000, 2.5))

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function calcweight (mass, gravity = 9.81) {
    weightz = mass * gravity + "kg";
    return (weightz);
}
console.log("Weight of Object is: ", calcweight(20));

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelsiusToFahrenheit (oC){
    let oF = (oC * (9/5)) + 32; 
    return oF;
}
console.log("Your temperature in Fahrenheit is: ", convertCelsiusToFahrenheit(32));


//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

/*The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/



/*function calcBMI (weight, height) {
    let bmi = weight / ((height * height)/10000);
    return bmi.toFixed(1);
}

z = calcBMI(weight = prompt("Enter your weight in KG: " ), height = prompt("Enter your height in meters: "));
console.log(z);
if (z < 18.5) {
console.log("You are UNDERWEIGHT");
}
else if (z < 24.9) {
console.log("Your weight is NORMAL");
}
else if (z < 29.9) {
console.log("You are OVERWEIGHT");
}
else {
    console.log("You are OBESE");
};

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason (arrs) {
    let month = [];
    month.push(arrs);
    return month; 
}
numz = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let y = checkSeason(numz[(prompt("Enter 0-11 to represent the months:"))]);

if (y == "Jan") {
    console.log("Month is January and it's the winter season")
}
else if (y == "Feb") {
    console.log("Month is February and it's the winter season")
}
else if (y == "Mar") {
    console.log("Month is March and it's the spring season");
}
else if (y == "Apr") {
    console.log("Month is April and it's the spring season");
}
else if (y == "May") {
    console.log("Month is May and it's the spring season");
}
else if (y == "Jun") {
    console.log("Month is June and it's the summer season");
}
else if (y == "Jul") {
    console.log("Month is July and it's the summer season");
}
else if (y == "Aug") {
    console.log("Month is August and it's the summer season");
}
else if (y == "Sep") {
    console.log("Month is September and it's the autum season");
}
else if (y == "Oct") {
    console.log("Month is October and it's the autum season");
}
else if (y == "Nov") {
    console.log("Month is November and it's the autum season");
}
else if (y == "Dec") {
    console.log("Month is December and it's the winter season");
}
else {
    console.log("You entered invalid number");
}


//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax (arr) {
    let maxim = arr[0];
    for (let x = 0; x < arr.length; x++){
        if(arr[x] > maxim) {
            maxim = arr[x]
        }
    }
    return maxim
}
zd = findMax([parseInt(prompt("Enter first number: ")), parseInt(prompt("Enter second number: ")), parseInt(prompt("Enter third number: "))]);
console.log("The maximum number is: ", zd);*/


//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function quadEqu (a, b, c) {
    let disc = (b * b) - (4 * a * c);
    if (disc > 0) {
        root1 = (-b + Math.sqrt(disc)/ 2 * a);
        root2 = (-b - Math.sqrt(disc)/ 2 * a);
        console.log(`Roots of the equation are ${Math.floor(root1)} and ${Math.floor(root2)}`);
    }
    else if (disc == 0) {
        root1 = root2 = -b/(2 * a);
        console.log(`Roots of the equation are ${Math.floor(root1)} and ${Math.floor(root2)}`)
    }
    else {
    realPath = -b/(2 * a).toFixed(2);
    imagPart = (Math.sqrt(-disc)/(2 * a)).toFixed(2);
    console.log(`Roots of the equation are ${Math.floor(realPath)} and ${Math.floor(imagPart)}`)
    }
}
(quadEqu(1, 7, 12));


//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    let zar = [];
    arr.forEach(item => {
        zar.push([item]);
    })
    return zar;
}
lim = [1, 2, 3, 4, 5];
console.log(printArray(lim));

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    if (month<10) {
        month  = ("0" + month);
    }
    else {
       month = month;
    };
    
    
    if (date<10) {
       date  = ("0" + date);
    }
    else {
      date = date;
    };
    
    if (hour<10) {
       hour  = ("0" + hour);
    }
    else {
      hour = hour;
    };
    
    if (minute<10) {
       minute  = ("0" + minute);
    }
    else {
      minute = minute;
    }
    let full = (`${date}/${month}/${year} ${hour}:${minute}`)
    return full;
}

console.log(showDateTime());

//Declare a function name swapValues. This function swaps value of x to y.
function swapValues (y = 1, z = 2) {
    let zac = (`x => ${z}, y => ${y}`);
    return zac;
}
console.log(swapValues(3, 4));

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray (arr) {
    let mec = [];
    for (i = arr.length - 1; i >= 0; i--) {
        mec.push(arr[i]);
    }
    return mec;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalArray (arr) {
    zarr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        zarr.push(arr[i].toUpperCase());
    }
    return zarr;
} 
console.log(capitalArray(["jan", "feb", "mar", "apr"]))

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem (ziv) {
    zarc = [1, 2];
    zarc.push(ziv);
    return zarc;
}
console.log(addItem("5, 6, 7"));

//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem (arry) {
    arry.pop();
    return arry;
}
listz = [1, 2, 3, 4, 5, 6];
console.log(removeItem(listz));


//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumberz(arrs) {
    let fullArr = [];
    let sum = 0;
    for (let i = arr[0]; i <= arrs[0]; i++) {
        fullArr.push(i);
    }
    sum = fullArr.reduce((accumulator, currentValue) => accumulator + currentValue); 
    return sum;
}
console.log(sumOfNumberz([5]));

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdd(arrs) {
    let fullOdd = [];
    let sum = 0;
    for (let i = arr[0]; i <= arrs[0]; i++) {
        if (i % 2 !== 0) {
            fullOdd.push(i);
        }
    }
    sum = fullOdd.reduce((accumulator, currentValue) => accumulator + currentValue); 
    return sum;
}
console.log(sumOfOdd([5]));

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(arrs) {
    let sum = 0;
    let fullSum = [];
    for (let i = arr[0]; i <= arrs[0]; i++) {
        if (i % 2 == 0) {
            fullSum.push(i);
        }
    }
    sum = fullSum.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum;
}
console.log(sumOfEven([8]));


//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evenOdds(arz) {
    let poolEven = [];
    let poolOdd =[]
    for (let i = 0; i <= arz[0]; i++) {
        if (i % 2 == 0) {
            poolEven.push(i);
        }
        else poolOdd.push(i);
    }
    return (`The number of evens: ${poolEven.length}
The number of odds: ${poolOdd.length}`);
} 
console.log(evenOdds([100]));

//Write a function which takes any number of arguments and return the sum of the arguments
function sumer() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; 
    }
    return sum;
}
console.log(sumer(10, 45, 4, 7, 89));

//Writ a function which generates a randomUserIp.
function userIp(ary) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    let rander = Math.round(Math.random() * 256);
    let rander1 = Math.round(Math.random() * 256);
    let rander2 = Math.round(Math.random() * 256);
    let rander3 = Math.round(Math.random() * 256);
    return (`your new user IP is: ${rander}.${rander1}.${rander2}.${rander3}`);
}
console.log(userIp());

//Write a function which generates a randomMacAddress
function randomMacAddress() {
    let pack = [];
    let pack1 = [];
    let pack2 =  [];
    let pack3 = [];
    let alpha = "ABCDEF1234567890"
    for (let g= 0; g < 2; g++ ) {
    pack += alpha.charAt(Math.round(Math.random() * 17));
    pack1 += alpha.charAt(Math.floor(Math.random() * 17));
    pack2 += alpha.charAt(Math.floor(Math.random() * 17));
    pack3 += alpha.charAt(Math.floor(Math.random() * 17));
    }
    return (`Your MacAddress is: ${pack}:${pack1}:${pack2}:${pack3}`);
}
console.log(randomMacAddress());

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
    let radd = "0123456789abcdef";
    let rads = "";
    for (let h =0; h < 6; h++) {
        rads += radd.charAt(Math.floor(Math.random() * 17));
    }
    return (`'#${rads}'`);
}
console.log(randomHexaNumberGenerator());

//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
    let id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let gen = "";
    for (let k = 0; k < 7; k++) {
        gen += id.charAt(Math.floor(Math.random() * 64));
    }
    return (`${gen}`);
}
console.log(userIdGenerator());

//Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/*function userIdGeneratedByUser() {
    let ids = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let gens = "";
    let idLength = parseInt(prompt("Enter Id length to be generated: "));
        for (let q = 0; q <= idLength; q++ ) {
            gens += ids.charAt(Math.floor(Math.random() * 64))
    }
        return gens;
}
let idNum = prompt("Enter number of IDs: ")
for (d= 0; d < idNum; d++) {
    console.log(userIdGeneratedByUser())
}*/

//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    let ab = Math.floor(Math.random() * 256);
    let ab1 = Math.floor(Math.random() * 256);
    let ab2 = Math.floor(Math.random() * 256);
    return (`rgb(${ab},${ab1},${ab2})`);
}
console.log(rgbColorGenerator());

//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors() {
    let hexs = "abcdef0123456789";
    let bag = "";
    for (bg = 0; bg < 6; bg++) {
        bag += hexs.charAt(Math.floor(Math.random() * 17));
    }
    return (bag.length < 6) ? (`[#${"0" + bag}]`) : (`[#${bag}]`);
}
console.log(arrayOfHexaColors());

//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors() {
    let ab = Math.floor(Math.random() * 256);
    let ab1 = Math.floor(Math.random() * 256);
    let ab2 = Math.floor(Math.random() * 256);
    return (`[rgb(${ab},${ab1},${ab2})]`);
}
console.log(arrayOfRgbColors());

//Write a function convertRgbToHexa  which converts hexa color to rgb and it returns an rgb color.
function convToHex(c) {
    let hexz = c.toString(16);
    return (hexz.length == 1) ? "0" + hexz : hexz;
}
function convertRgbToHexa(r, g, b) {
    return (`#${convToHex(r)}${convToHex(g)}${convToHex(b)}`)
}
console.log(convertRgbToHexa(235, 233, 233));


//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function hexToRGB(h) {
    let r = 0; g = 0; b = 0;
    //if hex color entered is 3
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];
    }
    //if hex color entered is 6
    if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }
    return (`rgb(${+r}, ${+g}, ${+b})`); // variables prepended with + to return strings to numbers
}
console.log(hexToRGB("#000000"));


//Write a function generateColors which can generate any number of hexa or rgb colors.

function convertRgbToHex(rr, gg, bb) {
    let r = rr.toString(16);
    let g = gg.toString(16);
    let b = bb. toString(16);
    if (r.length == 1) {r = "0" + r};
    if (g.length == 1) {g = "0" + g};
    if (b.length == 1) {b = "0" + b};
    return (`#${r}${g}${b}`);
   }
console.log(convertRgbToHex(0, 52, 255));

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (azz) => {
    let shuff = [];
    shuff.push(azz.sort());
    return shuff; 
}
let brim = [3, 5, 2, 9, 1];
console.log(shuffleArray(brim));

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function sumOfNumberz(arrs) {
    let fullArr = [];
    let sum = 1;
    for (let i = arr[0]; i <= arrs; i++) {
        fullArr.push(i);
    }
    sum = fullArr.reduce((accumulator, currentValue) => accumulator * currentValue); 
    return sum;
}
console.log(sumOfNumberz([5]));

//Call your function sum, it takes any number of arguments and it returns the sum.
function sum() {
    let suma = 0;
    for (let sm = 0; sm < arguments.length; sm++) {
        suma += arguments[sm];
    }
    return suma;
}
console.log(sum(56, 79, 67));

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems (arrzz) {
    let sum = 0;
    for (jj = 0; jj < arrzz.length; jj++) {
       sum += arrzz[jj]; 
    }
    return sum;
}
console.log(sumOfArrayItems([1, 2, 3]));

//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average (arzz) {
    let sum = 0;
    for (ee = 0; ee < arzz.length; ee++) {
    (typeof arzz[ee] !== true ) ?
    sum +=arzz[ee] : console.log("Invalid expression! Not all array items are numbers")
    }
    return sum/arzz.length;
}
console.log(average([1, 2, 3, 4, 5]));


//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
const modifyArray =  aarz => {
        let bags = [];
        for (let jj = 0; jj < aarz.length; jj++) {
        aarz[4] = aarz[4].toUpperCase();
        bags.push(aarz[jj]);
    }
    return bags;
}
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))


//Write a function called isPrime, which checks if a number is prime number.
const isPrime = (num) => {
    if (num <= 1) return (`${false}: ${num} is not a prime number`);
    if (num === 2) return (`${true}: ${num} is a prime number`);
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return (`${false}: ${num} is not a prime number`);;
        }
        else { 
            return (`${true}: ${num} is a prime number`);
        }
    }
}
console.log(isPrime(10));

//Write a functions which checks if all items are unique in the array.
const unique = (arrr) => {
    for (let hh = 0; hh < arrr.length; hh++) {
        if (new Set(arrr).size == arrr.length) {//set only takes an item from the array once. hence, items are unique ..so here we converted the original array into a set and then compare it's length with that of the aray. if array length is longer than set size then its an indication that duplicate values are present.   
            return (`${true}: All items in the array are unique`);
        }
    }
    return (`${false}: Array contains duplicate items`);
}
console.log(unique([1, 2, 3, 4]))

//Write a function which checks if all the items of the array are the same data type.
const checkData = (aarr) => {
    return new Set(aarr.map(x => typeof x)).size <= 1;
}
console.log(checkData(["f", "b", "v", "b"]))

//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
const isValidVariable  = (aaar) => {
    if (aaar.includes(aaar.match(/^[$_A-Za-z0-9 ]+$/))) {
    return (`${true}: Variable is valid`);
    }
    return (`${false}: Invalid variable`);
}
console.log(isValidVariable("the"));

//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const sevenRandomNumbers = (arss) => {
    zin = [];
    do {
        zin.push(Math.floor(Math.random() * 10));
        zin = Array.from(new Set(zin));  
    }
    while (zin.length < 7)
    return zin;
} 



console.log(sevenRandomNumbers());


//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const reverseCountries = (countrie) => {
    let rev = [];
    for (df = 0; df < countrie.length; df++) {
        rev.push(countrie[df]);
    }
    return rev.reverse();
}
console.log(reverseCountries(["Albania", "Bolivia", "Canada", "Denmark", "Germany", "Nigeria"]));














/*
const convertFahrToCelsius = (f) => {
    let num = parseInt(f);
    if (typeof num == "number") {
        return  `${((5/9) * (f-32)).toFixed(4)} deg C`;
    }
    else {
        return `${num} is not a valid number but a ${typeof num}` 
    }
}

  console.log(convertFahrToCelsius({a: 1}));


*/





  function convertFahrToCelsius (oF){
    let oC = ((5/9) * (parseInt(oF)-32)).toFixed(4);

    if (typeof oF === "number" || typeof oF === "string") {
        return `${oC} deg C`;
    }
    if (oF instanceof Array) {
        return (`${JSON.stringify(oF)} is not a valid number but an array`);
    }
    else {
        return (`${JSON.stringify(oF)} is not a valid number but a/an ${typeof oF}`);
    }
   
}

console.log(convertFahrToCelsius(true));

