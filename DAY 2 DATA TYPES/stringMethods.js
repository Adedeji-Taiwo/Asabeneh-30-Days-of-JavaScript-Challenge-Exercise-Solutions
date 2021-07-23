//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days of Javascript ";

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3, 4));
console.log(challenge.substring(3, 7));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(3, 18));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes("script"));

//Split the string into an array using split() method
console.log(challenge.split(" ")); //takes place on the input value

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(","));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let tech = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(tech.split("," ));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("Javascript", "Python"));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));


let line = "You cannot end a sentence with because because because is a conjuction"

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(line.indexOf("a"));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(line.lastIndexOf("a"));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(line.indexOf("because"));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(line.lastIndexOf("because"));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(line.search("because"));


let word = "   30 Days of Javascript    ";

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(word.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("Javascript"));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"));

let pattern = /a/gi
console.log(challenge.match(pattern));

console.log(line.match(/because/gi));
console.log(challenge.match(/\d+/g));
console.log(challenge.match(/\d+/));


//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let phrase = "30 Days of";
console.log(phrase.concat("Javascript"));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat("2"));







//Using console.log() print out the following statement:
quote1 = "\'There is no exercise better for the heart than the reaching down and lifting people\' by John Holmes teaches us to help one another";
console.log(quote1);

//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same  -- with charity you give love, so don\'t just give money but reach out your hand instead.\"' );

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a = "10";
let b = 10;
console.log(typeof a);
console.log(typeof b);
console.log(a==b); 


//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let c = "9.8";
console.log(typeof c);
console.log(parseFloat(c));
console.log(b==(parseFloat(c)));
console.log(b==(Math.ceil(parseFloat(c))));


//Check if 'on' is found in both python and jargon
let lang = "python"; "jargon";
console.log(lang.includes("on"));


//I hope this course is not full of jargon. Check if jargon is in the sentence.
let Question = "I hope this course is not full of jargon";
console.log(Question.includes("jargon"));

//generate number between 0-100 inclusively
let num = (Math.random() * 101);
console.log(Math.round(num));


//generate number between 50-100 inclusively 
let min = 50 + 1;
let max = 100;
let rand = Math.random() * min;
console.log(Math.floor(rand + 50));

//generate number between 0-255 inclusively
let numb = (Math.random() * 257);
console.log(Math.round(numb + 0.1));

//Access "javascript" string characters using a random numbers
let prog = "JAVASCRIPT";
let z = Math.floor(Math.random() * 10);
console.log(prog.charAt(z));

//Use console.log() and escape characters to print the pattern
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

console.log(line.substr(31, 23));

//Count the number of word "love" in this sentence
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(sentence.match(/love/g));

console.log(line.match(/because/g));

//Clean the followinfg texts
let text = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. no@th@ing; &is& mo@re rewarding.";
console.log(text.replace(/[%$@&#;]/g, ""));

//Calculate the total annual income of the person by extracting the numbers from the folowing text
let report = "He earns 5000 euro from salary per month, 10000 euro annual bonus. 15000 euro online courses per month.";
console.log(report.match(/\d+/));
console.log(report.match(/\d+/g));
