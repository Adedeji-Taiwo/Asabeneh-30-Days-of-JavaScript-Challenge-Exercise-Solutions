//if statement
let num = 3;
if (num>0) {
    console.log(`${num} is positive number`)
}


//if and else statement
let isRaining = true;
if (isRaining) {
    console.log("You need a rain coat");
} 
else {
    console.log("No need for a rain coat");
};


//else if else statements
let a = 0;
if (a>0) {
    console.log(`${a} is a positive number`);
}
else if (a<0) { 
    console.log(`${a} is a negative number`);
}
else if (a==0) { 
    console.log(`${a} is equal to zero`);
}
else {console.log(`${a} is a not a number`);
}



let weather = "sunny";
if (weather==="rainy") {
    console.log("you need a raincoat");
}
else if (weather==="cloudy") { 
    console.log("you need a jacket");
}
else if (weather==="sunny") { 
    console.log("you can go out freely");
}
else {
    console.log("no need for a raincoat");
}


//using switches in place of else ifs
let weathers = "cloudy";
switch(weathers){
    case "rainy":
        console.log("you need a raincoat")
    break;

    case "cloudy":
        console.log("its cloudy, you neeed a jacket")
    break;
    
    case "sunny":
        console.log("you can go out freely")
    break;

    default:
        console.log("you dont need a raincoat");
} 


let dayUserInput = prompt("What day is today: ");
let day = dayUserInput.toLowerCase();

switch (day) {
    case "monday":
        console.log("Today is Monday")
    break

    case "tuesday":
        console.log("Today is Tuesday")
    break

    case "wednesday":
        console.log("Today is Wednesday")
    break

    case "thursday":
        console.log("Today is Thursday")
    break

    case "friday":
        console.log("Today is Friday")
    break

    case "saturday":
        console.log("Today is Saturday")
    break

    case "sunday":
        console.log("Today is Sunday")
    break

    default:
        console.log("Today is no day");
}



let numb = prompt("Enter number: ");
switch (true) {
    case (numb>0):
        console.log("number is postive")
    break

    case (numb<0):
        console.log("number is negative")
    break 

    case (numb==0):
        console.log("number is zero")
    break

    default:
        console.log("value entered is not a number");
}



//Ternary operator shortcut for if else statements
let age = 19;
var canDrive = age > 16 ? "yes" : "no";

//Ternary example2
let number = -5;
number>0 
? console.log(`${number} is a postive number`)
: console.log(`${number} is a negative number`);





//Exercises

/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.*/

let ages = prompt("Enter your age: ");

if (ages>=18) {
    console.log("You are old enough to drive");
}
else {
    diff = 18 - ages;
    console.log(`You are left with ${diff} years to drive.`);
};


/*Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/

let myAge = 25;
let yourAge = prompt("Enter your age");
let sub = myAge - parseInt(yourAge);
let diffz = parseInt(yourAge) - myAge;

if (parseInt(yourAge)>myAge) { 
    console.log(`You are ${diffz} years older than I am.`)
}
else {
    console.log(`I am ${sub} years older than you are.`)
};


/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways*/

let aa = 4;
let b = 3;

if (aa>b) {
    console.log(`${aa} is greater than ${b}`);
}
else {
    console.log(`${aa} is less than ${b}`);
};



(a>b)
? console.log(a + " is greater than " + b)
: console.log(a + " is less than " + b);



/*Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?*/

let numberz = prompt("Enter a number: ");
if (numberz % 2 == 0) {
    console.log(`${numberz} is an even number.`)
}
else {
    console.log(`${numberz} is an odd number.`);
};



/*Write a code which can give grades to students according to theirs scores.*/

let score = prompt("Enter your score: ");
if (score<=49) {
    console.log(`Your score is ${score} and your grade is F`)
}
else if (score<=59) {
    console.log(`Your score is ${score} and your grade is D`)
}
else if (score<=69) {
    console.log(`Your score is ${score} and your grade is C`)
}
else if (score<=89) {
    console.log(`Your score is ${score} and your grade is B`)
}
else if (score<=100) {
    console.log(`Your score is ${score} and your grade is A`)
};



/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :*/

let seasonUserInput = prompt("Enter a month: ");
let season = seasonUserInput.toLowerCase();
switch(season) {
    case ("september"):
        console.log("The season is Autum")
    break

    case ("october"):
        console.log("The season is Autum")
    break

    case ("november"):
        console.log("The season is Autum")
    break

    case ("december"):
        console.log("The season is Winter")
    break

    case ("january"):
        console.log("The season is Winter")
    break
  
    case ("february"):
        console.log("The season is Winter")
    break

    case("march"):
        console.log("The season is spring")
    break

    case ("april"):
        console.log("The season is Spring")
    break

    case("May"):
        console.log("The season is spring")
    break

    case ("june"):
        console.log("The season is Summer")
    break

    case ("july"):
        console.log("The season is Summer")
    break

    case ("august"):
        console.log("The season is Summer")
    break

    default:
        console.log("No season");
}



/*Check if a day is weekend day or a working day. Your script will take day as an input.*/

let dayz = prompt("What is the day today? ");
switch(dayz) {
    case ("sunday"):
        console.log("Sunday is a weekend")
    break
    case ("saturday"):
        console.log("Saturday is a weekend")
    break
    case ("friday"):
        console.log("Friday is a working day")
    break
    case ("thursday"):
        console.log("thursday is a working day")
    break
    case ("wednesday"):
        console.log("Wednesday is a working day")
    break
    case ("tuesday"):
        console.log("Tuesday is a working day")
    break
    case ("monday"):
        console.log("Monday is a working day")
    break
    default:
        console.log("this is no day");
};


/*Write a program which tells the number of days in a month, now consider leap year.*/

let month = prompt("Enter a month: ")
let feb = 28;
if (feb>28) {
    console.log("February has 29 days")
}
else {
    console.log("February has 28 days")
}
switch(month){
    case ("janary"):
        console.log("January has 31 days")
    break
    case ("february"):
        console.log(feb)
    break
    case ("march"):
        console.log("March has 31 days")
    break
    case ("april"):
        console.log("April has 30 days")
    break
    case ("may"):
        console.log("May has 31 days")
    break
    case ("june"):
        console.log("June has 30 days")
    break
    case ("july"):
        console.log("July has 31 days")
    break
    case ("august"):
        console.log("August has 31 days")
    break
    case ("september"):
        console.log("september has 30 days")
    break
    case ("october"):
        console.log("october has 31 days")
    break
    case ("november"):
        console.log("november has 30 days")
    break
    case ("december"):
        console.log("december has 31 days")
    break
}