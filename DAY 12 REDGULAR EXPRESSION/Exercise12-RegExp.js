//Creating a pattern with RegExp Constructor

//without  global/ case insensitive flags.
let pattern = "love";
let regEx =new RegExp(pattern);

//Declearing regular expression with global flag and case insensitve flag.
let patternn = "love";
let flag = "gi";
let regExx = new RegExp(patternn, flag);

//Declaring a regex pattern using RegExp object.
let regExxx = new RegExp("love, gi");

//Creating a pattern without RegExp Constructor.
let regE = /love/gi;   //same as the last expression.

//RegExpp Object Methods

//TEST()-Testing for a match. Returns true/false.
const str = "I love javaScript";
const patern = /love/;
const result = patern.test(str);
console.log(result);

//MATCH()-Array containing all of the match.
//Without global flag. Returns an array containing the pattern, index, input and group.
const strr = "I love Javascript";
const patternx = /love/; 
const resort = strr.match(patternx);
console.log(resort);
//With global flag. Returns all matches.
const strig = "I love javaScript";
const patterns = /love/g;
const resultx = strig.match(patterns);
console.log(resultx);

//SEARCH()- Returns index of the match or -1 if search fails.
const strigg = "I love javaScript";
const patternz = /love/g;
const resultz = strigg.search(patternz);
console.log(resultz);

//REPLACE()- Replacing a substring.
//Without global flag
const txt = 'Python is the most beautiful language that a human begin has ever created. I recommend python for a first programming language'
const matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced); // replaces only one of the pattern.

//With global flag
const txtt = 'Python is the most beautiful language that a human begin has ever created. I recommend python for a first programming language'
matchRep = txtt.replace(/Python|python/g, "JavaScript");
console.log(matchRep);

//With global and insensitive flag
const txtz = 'Python is the most beautiful language that a human begin has ever created. I recommend python for a first programming language'
const rep = txtz.replace(/Python/gi, "JavaScript");
console.log(rep);

//
const ttxt = '%I a%m %a% te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher?.'

matches = ttxt.replace(/%/g, "");
console.log(matches);

//Specila characters
//Square Brackets
const patttern = /[Aa]pple/;
const txxt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matched = txxt.match(patttern);
console.log(matched);

const paternn = /[Aa]pple/g;
const txtx = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const math = txtx.match(paternn);
console.log(math);

const patt = /[Aa]pple|[Bb]anana/g;   //square bracket and or operator.
const ttxtt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matchh = ttxtt.match(patt);
console.log(matchh);


//Escape character(\) in RegExp
const pat = /\d/g;
const test = "This regular expression example was made in January 12, 2020.";
const mattch = test.match(pat);
console.log(mattch);

//One or more times;
const pats = /\d+/g;
const testt = "This regular expression example was made in January 12, 2020.";
const mattchs = testt.match(pats);
console.log(mattchs);

//Period(.)
const parran = /[a]./g;    //. means any character except new line
const tests = "Apple and banana are fruits"
const matchess = tests.match(parran);
console.log(matchess);

//any character one or more times.
const patterny = /[a].+/g;
const textx = "Apple and banana are fruits."
const matc = textx.match(patterny);
console.log(matc);

//Zero or more times(*);
//pattern may not occur at all or do at many times.
const patter = /[a].*/g;
const texting = "Apple and banana are fruits.";
const matche = texting.match(patter);
console.log(matche)

//Zero or one time(?)
const ttt = 'I am not sure if there is a convention how to write the word e-mail. Some people write it email others may write it as Email or E-mail.'
const patternss = /[Ee]-?mail/g;  //? means optional
const matchhz = ttt.match(patternss);
console.log(matchhz);

//Quantifier in RegExp;
const testts = "This regular expression example was made in December 6, 2019.";
const patterx = /\d{4}/g   //return 4 digits characters.
const mattchh = testts.match(patterx)
console.log(mattchh);
//
const tstts = "This regular expression example was made in December 6, 2019.";
const paterx = /\d{1,4}/g   //return 1 to 4
const matchhs = tstts.match(paterx)
console.log(matchhs);

//Cart ^
//Starts with
const ttxx = "This regulatr expression example was made in December 6, 2019."
const pattn = /^This/g;
const mattc = ttxx.match(pattn);
console.log(mattc);
//Negation
const trt = "This regualar expression example was made in December 6, 2019."
const ppattern = /[^A-za-z,. ]+/g //not alphabets in upper or lowercase, no comma, no period, no space.
const mmatch = trt.match(ppattern);
console.log(mmatch);


//Exact Match
let ppaternn = /^[A-Z][a-z]{3,12}$/;
let namee = "Asabeneh";
let resulttz = ppaternn.test(namee);
console.log(resulttz)


//Exercises
//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const texxt = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
const paatern =  /\d+/g;   //extracts all figures.
const march = texxt.match(paatern);
const integerr = march.map(item => parseInt(item)) //stringed figures converted to integers.
const salaryAnnual = integerr[0] * 11; //salary is multiplied by 11 months to get total anual salary.
const sumUp = integerr.reduce((acc, cur) => acc + cur) //parsed arrray is added up
const annualTotal = salaryAnnual + sumUp;
console.log(`He earns a total annual income of: ${annualTotal}`);

//using filter
let annualSal = integerr.filter(item => item < 5000) * 12;
let sumBonusCourse = integerr.filter(item => item > 5000).reduce((acc, cur) => acc + cur)
let totalEarnings = annualSal + sumBonusCourse;
console.log(totalEarnings);


//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const teest = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."
const pantern = /-?\d/g    //extract all digits with or without the - signs.
const marches = teest.match(pantern); 
const points = marches.map(item => parseInt(item)) //all strings ti integers.
const sortedPoints = points.sort((a, b) => {return a - b})  //sort arrays
console.log(sortedPoints)
const distance = Math.abs(sortedPoints[0]) + sortedPoints[sortedPoints.length - 1]
console.log(distance);


//Write a pattern which identify if a string is a valid JavaScript variable
const is_valid_variable = (arr) => {
    pattern =  /^[0-9]|[-]/g;
    if (pattern.test(arr) == true) {
        console.log(" # False")
    }
    else {
        console.log(" # True")
    }
}
is_valid_variable('first_name') 
is_valid_variable('first-name') 
is_valid_variable('1first_name') 
is_valid_variable("firstname")


//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
const tenMostFrequentWords = (arr, num) => {
    const pattern = /\w+/g    //extracts each word character from the paragrach
    let match = arr.match(pattern)  //returns array of each word.  
    const newSet = new Set(match);   //returns a unique unrepeated set of word character from the array 

    let countt = [];
    for (const uniqueWord of newSet) {      //iterate over set to extract words
    let filteredWord = match.filter(item => item === uniqueWord)
    countt.push({word: uniqueWord, count: filteredWord.length})

    }
    countt.sort((a, b) => {   //count from the countt result is sorted in descending order.
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;
    })
    return countt.splice(0, num) //returns specified number of word search..
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph, 10));




//Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
 function cleanText(arr) {
    const clean = arr.replace(/[%@#&,!;.?$]/g, '')  //cleans texts
    return clean;
 }

const sentenze = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?"
console.log(cleanText(sentenze))

 

//Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
const mostFreq = (arr) => {
    const pattern = /\w+/g;             //extracts each word character from cleansed sentnece. 
    const match = arr.match(pattern);   //present them as an array
    const newSet = new Set(match)


    let countt = [];
    for(const uniqueWord of newSet) {
       let filteredWord = match.filter((item) => item === uniqueWord)
       countt.push({word: uniqueWord, count: filteredWord.length})
    }
    countt.sort((a, b) => {
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;
    })
    return countt.splice(0, 3);
}
console.log(mostFreq(cleanText(sentenze)))