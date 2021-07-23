//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.let firstName = "Wale";
let lastName = "Taiwo";
let country = "Canada";
let city = "Lagos";
let age = 25;
let isMarried = true;
let year = 2021;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Check if type of '10' is equal to 10
console.log(typeof "10");
console.log(typeof 10);
console.log(10=="10");
console.log(10==="10");

//Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8")==10);
console.log(parseInt("9.8")===10);

//Boolean value is either true or false.
// 1. Write three JavaScript statement which provide truthy value.
// 2. Write three JavaScript statement which provide falsy value.

let a = "9.8";
console.log(parseInt(a));
console.log(parseFloat(a));
console.log(9===10);

console.log(5>3);
console.log(5>3 && 10=="10");
console.log(!false);

console.log(4<1);
console.log((4<1) || (3<2));
console.log(!(3>2));


//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!="4");
console.log(4 == "4");
console.log(4==="4");

c = "python";
d = "jargon";
console.log(c.length == d.length);
console.log(c.length !==d.length);

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4>3));

e = "dragon"; "python";
console.log(e.includes(!"on"));



//Use the Date object to do the following activities

// What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
console.log(Date.now());


//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
alert("This is the triangle calculator");
let base = prompt("Enter base:");
let height = prompt("Enter height");
let area = 0.5 * base * height;
console.log(area);



//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
alert("Triangle Perimeter calculator");
let sideA = prompt("Enter side a:");
let sideB = prompt("Enter side b:");
let sideC = prompt("Enter side c:");
per = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(per);


//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
alert("Rectangle Area & Perimeter calculator");
let width = prompt("Enter width:");
let length = prompt("Enter length");
let areaR = width * length;
let perR = 2 *(parseInt(width) + parseInt(length));
console.log("Area of the rectangle is: " + areaR);
console.log("Perimeter of the rectangle is: " + perR);


//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
alert("Cirlce Area & Radius Calculator");
let radius = prompt("Enter radius:");
let pie = prompt("The radius of a circle is:", Math.PI.toFixed(4));
let areaCircle = radius * radius * Math.PI;
let circum = 2 * Math.PI + parseInt(radius);
console.log("Area of the circle is: " + areaCircle.toFixed(3));
console.log("Circumference of the circle is: " + circum.toFixed(3));


//Calculate the slope, x-intercept and y-intercept of y = 2x -2
alert("This is the slope calculator");
let y = prompt("whats the y-intercept:");
let x = prompt("whats the x-intercept:")
let m = (parseInt(y) + 2)/parseInt(x);
console.log("the slope of the curve is:" + m);


//Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
alert("This is the multi-slope calculator");
let x1 = prompt("x1 is", 2);
let y1 = prompt("y1 is", 2);
let x2 = prompt("x2 is", 6);
let y2 = prompt("y2 is", 10);

let slope = ((y2-y1)/(x2-x1));
console.log("The slope between the two points is: " + slope);

//Compare the slope of above two questions.
/*comparing "m" and "slope"*/
console.log(m==slope);
console.log(m===slope);


//Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let i = prompt("enter the x-value: ");
let j = (parseInt(i**2) + parseInt(6*i) + 9);
console.log(j);


//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hr = prompt("Enter hours: ");
let rateHr = prompt("Enter rate per hour: ");
let earning = hr * rateHr;
console.log("Your weekely earning is: " + "$" + earning );

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let fName = prompt("Enter your name:");
let size = fName.length;
if (size>=7) {
    console.log("Your name is long");
}
else { console.log("Your name is short");};

//Compare your first name length and your family name length and you should get this output.
let aName = prompt("Enter your first name: ");
let bName = prompt("Enter your last name ");
let fSize = aName.length;
let lName = bName.length;

if (fSize>lName) {
    console.log("Your first name ," + aName + " is longer than your family name, " + bName + ".");
}
else {
    console.log("Your last name " + bName + "is longer.");
};


//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = prompt("my age is: ");
let yourAge = prompt("Your age is: ");
let diff = parseInt(myAge) - parseInt(yourAge);
let sub = parseInt(yourAge) - parseInt(myAge);

if (diff>sub) {
    console.log("I am " + diff + " years older than you.");
}
else {
    console.log("You are " + sub + " years older than I am.");
};


//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let bYear = prompt("Enter birth year: ");
const noww = new Date();
let today = noww.getFullYear();
let yearDiff = today - parseInt(bYear);
console.log(yearDiff);
let eligible = 18 - yearDiff;
if (parseInt(yearDiff)>=18) {
    console.log("you are " + yearDiff + " . You are old enough to drive.");
}
else {
    console.log("You are " + yearDiff + ". You will be allowed to drive after " + eligible + " years.");
};


//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let live = prompt("Enter number of years you've lived: ");
let seconds = 365 * 24 * 60 * 60; 
let total = live * seconds;
console.log("you lived " + total + " seconds already.");



//Create a human readable time format using the Date time object
const todayy = new Date();
let yearr = now.getFullYear();
let monthh = now.getMonth();
let datee = now.getDate();
let hourr = now.getHours();
let minutee = now.getMinutes();

console.log(yearr + "-" + monthh + "-" + datee + " " + hourr + ":" + minutee);
console.log(datee + "-" + monthh + "-" + yearr + " " + hourr + ":" + minutee);
console.log(datee + "/" + monthh + "/" + yearr + " " + hourr + ":" + minutee);

//All except the year are all the time two digits.
if (monthh<10) {
     monthh  = ("0" + monthh);
}
else {
    monthh = monthh;
};


if (datee<10) {
    datee  = ("0" + datee);
}
else {
   datee = datee;
};

if (hourr<10) {
    hourr  = ("0" + hourr);
}
else {
   hourr = hourr;
};

if (minutee<10) {
    minutee  = ("0" + minutee);
}
else {
   minutee = minutee;
};

console.log(yearr + "-" +  monthh + "-" + datee + " " + hourr + ":" + minutee);



