//Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//while loop
let j = 0;
while (j <= 10) {
  console.log(j) 
  j++ 
}

//do while
let k = 0;
do {console.log(k)
     k++;
}  while(k <= 10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop
//for loop
for (let l = 10; l >= 0; l--) {
    console.log(l)
}

//while loop
let m = 10;
while(m >=0) {
    console.log(m) 
    m--;
}

//do while
let n = 10;
do {console.log(n) 
    n--;
} while(n>=0)

//Iterate 0 to n using for loop
for(o = 0; o<=/*Infinity */60; o++) {
    console.log(o);


}

//Write a loop that makes the following pattern using console.log():
for (let p = 1; p <= 8; p++) {
    console.log("#".repeat(p));
}

//Use loop to print the following pattern:
for (let q = 0; q<=10; q++) {
    console.log(`${q} * ${q} = ${q * q}`);
}

//Use loop to print the following pattern:
for (let r = 0; r<=10; r++) {
    console.log(`${r}      ${r**2}     ${r**3}`);
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for(let s = 0; s <= 100; s++) {
    if (s % 2 == 0) {
        console.log(s)
    }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (let t = 0; t <= 100; t++) {
    if (t % 2 !== 0) {
        console.log(t);
    }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
prime: 
for (let u = 2; u <= 100; u++) {
    for (let v = 2; v < u; v++) {
        if (u % v == 0) continue prime;
    }
    console.log(u)
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let w = 1; w <= 100; w++) {
    sum = sum + w; //sum += w;   
} 
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sunx = 0;
let suny = 0;

for (x = 0; x <= 100; x++) {
    
    if (x % 2 == 0) {  //for even
    sunx += x;
    }

    if (x % 2 !== 0) {  //for odds
    suny += x;
    }
}

console.log(`The sum of all evens from 0 to 100 is ${sunx}`)
console.log(`The sum of all odds from 0 to 100 is ${suny}`)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumx = 0;
let sumy = 0;
for(y = 0; y <= 100; y++) {
    
    if (y % 2 == 0) {
    sumx = sumx + y; 
    }
    
    if (y % 2 !== 0) {
    sumy = sumy + y;
    }
}
console.log(`sum of even numbers is ${sumx}`);
console.log(`sum of odd numbers is ${sumy}`);

console.log(Array(sumx, sumy));


//Develop a small script which generate array of 5 random numbers

const newArr = [];
for (let a = 1; a <= 5; a++) {
    newArr.push(Math.floor(Math.random() * 10));
}
console.log(newArr);


//Develop a small script which generate array of 5 random numbers and the numbers must be unique
var arr = [];

do {
    arr.push(Math.floor(Math.random() * 10));
    arr = Array.from(new Set(arr)); //sets unique values
} while(arr.length < 5)
console.log(arr);
    
//Develop a small script which generate a six characters random id:
var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var arrys = "";

for (let b = 0; b <= 5; b++) {
    arrys += char.charAt(Math.floor(Math.random() * char.length));
}  
console.log(arrys);

//Develop a small script which generate any number of characters random id:
var charz = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var arryz = "";
cd = Math.random() * charz.length;

for (let c = 0; c <= cd; c++) {
    arryz += charz.charAt(Math.floor(Math.random() * charz.length));
}  
console.log(arryz);


//Write a script which generates a random hexadecimal number.
var hex = "abcdef0123456789";
var newHex = "";

for (d = 0; d <= 5; d++) {
    newHex += hex.charAt(Math.floor(Math.random() * hex.length));
}
console.log(`#${newHex}`);

//Write a script which generates a random rgb color number.
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var col = "";
console.log(`rgb(${r},${g},${b})`);

//Using the above countries array, create the following new array.
const countries = [
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
    'Kenya'
  ]
  var con = [];
for (let e = 0; e <= 10; e++) {
    con.push(countries[e].toUpperCase());
}
  console.log(con);

//Using the above countries array, create an array for countries length'.
var cont = [];
for (f = 0; f < countries.length; f++) {
    cont.push(countries[f].length);
}
    console.log(cont);

//Use the countries array to create the following array of arrays:
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
    'Kenya'
  ]

var combos = [];
for (let g = 0; g <= 10; g++) {
 combos.push([countrie[g].toUpperCase(), countrie[g].slice(0, 3).toUpperCase(), countrie[g].length]);
}
console.log(combos);

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
var ar = countrie.filter(item => item.includes("land") == true);
console.log(ar);

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let zar = [];
for (let h = 0; h < countrie.length; h++) {
    if (countrie[h].includes("ia") == true) {
        zar.push(countrie[h]);
    }
}
console.log(zar);

//Using the above countries array, find the length of the country containing the biggest number of characters.
let big = [];
for (let ab = 0; ab < countrie.length; ab++) {
       big.push(countrie[ab].length);
} 
console.log(Math.max(...big));

//Using the above countries array, find the country containing the biggest number of characters.
let bigName = [];
for (let aa = 0; aa < countrie.length; aa++) {
    if (countrie[aa].length == Math.max(...big)) {
        bigName.push(countrie[aa]);
        
    }
}
console.log(bigName);

//Using the above countries array, find the country containing only 5 characters.
let five = [];
for (bb = 0; bb < countrie.length; bb++) {
    if (countrie[bb].length == 5) {
        five.push(countrie[bb]);
    }
}
console.log(five);

//Find the longest word in the webTechs array
const webTec = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let wordy = [];
let work = [];
for (let ba = 0; ba < webTec.length; ba++) {
      wordy.push(webTec[ba].length);
  }
      for (bc = 0; bc < webTec.length; bc++) {
      if (webTec[bc].length == Math.max(...wordy)) {
          work.push(webTec[bc]);
      }
  }
  console.log(work);

  
  //Use the webTechs array to create the following array of arrays:
  let webs = [];
  for (ca = 0; ca < webTec.length; ca++) {
      webs.push([webTec[ca], webTec[ca].length]);
  }
  console.log(webs);

  //An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
  const mernStack= ["MongoDB", "Express", "React", "Node"]
  let mern= [];
  for (ac = 0; ac < mernStack.length; ac++) {
     mern.push(mernStack[ac].slice(0, 1).toUpperCase());
    
      
  }
  console.log(mern.join(""));

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const dev = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (const mane of dev) {
console.log(mane);
}
//or
for (bc = 0; bc < dev.length; bc++){
    console.log(dev[bc]);
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitz = ['banana', 'orange', 'mango', 'lemon']
for (cb = fruitz.length - 1; cb >= 0; cb--) {
console.log(fruitz[cb]);
}

//Print all the elements of array as shown below.
const fullStackz = [
    ['HTML', 'CSS', 'JS', 'React,'],
    ['Node', 'Express', 'MongoDB']
  ]

let ay = (fullStackz.splice(0, 1).join());
let az = (fullStackz.slice(0, 1).join())
ax = ([ay.concat(az)]);
for (cd = 0; cd < ax.length; ax++) {
    console.log(ax[cd].replace(/[,]/g, " "));
}


//Copy countries array(Avoid mutation)
console.log(countries.slice(0, 11));

//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sorted_countries = countries.slice(0, 11).sort();
console.log(sorted_countries.sort());

//Sort the webTechs array and mernStack array
console.log(webTec.sort());
console.log(mernStack.sort());

//Extract all the countries contain the word 'land' from the countries array and print it as array
let land = [];
for (mn = 0; mn <= 10; mn++) {
    if (countrie[mn].includes("land") == true) {
        land.push(countrie[mn]);
    }
}
console.log(land);

//Find the country containing the hightest number of characters in the countries array
let highest = [];
let high = [];
for (ad = 0; ad < countrie.length; ad++)  {
    high.push(countrie[ad].length);
}
for (pq = 0; pq <= 10; pq++) {
    if (countrie[pq].length == Math.max(...high)) {
        highest.push(countrie[pq]);
    }
}
console.log(highest);

//Extract all the countries containing only four characters from the countries array and print it as array
let charc = [];
for (da = 0; da < countrie.length; da++) {
    if (countrie[da].length == 4) {
        charc.push(countrie[da]);
    }
} 
console.log(charc);

//Reverse the countries array and capitalize each country and stored it as an array
let rev = [];
for (df = 0; df < countrie.length; df++) {
    rev.push(countrie[df].toUpperCase());
}
console.log(rev.reverse());
    