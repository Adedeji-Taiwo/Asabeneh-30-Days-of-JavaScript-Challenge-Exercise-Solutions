/*//Getting Element
//Getting elements by tag name()
const allTiltes = document.getElementsByTagName("h1")

console.log(allTiltes)
console.log(allTiltes.length)

//Using for loop
for (let i = 0; i < allTiltes.length; i++) {
    console.log(allTiltes[i])
}


//Getting Elements by class name()
const allTitle = document.getElementsByClassName("title")

console.log(allTitle)
console.log(allTitle.length)

for (let i = 0; i < allTitle.length; i++) {
    console.log(allTitle[i])
}

//Getting Elements by Id()
let firstTitle = document.getElementById("first-title")
console.log(firstTitle)

//Getting Elements by using querrySelector methods  -selects first element
let firstTitlez = document.querySelector("h1")
console.log(firstTitlez);

let firstTitles = document.querySelector("#first-title")
console.log(firstTitles);

let firstTitlex = document.querySelector(".title")
console.log(firstTitlex)

//querySelectorAll()    -returns all
const allTit = document.querySelectorAll('.title')
console.log(allTit)



const h1 = document.querySelectorAll("h1")
console.log(h1)
console.log(h1.length)

//looping through h1 with for loop
for(let i = 0; i < h1.length; i++) {
    console.log(h1[i])
}

//looping through with for each
h1.forEach(title => console.log(title))




//Adding Attributes with setAttributes
const tiles = document.querySelectorAll('h1')
tiles[3].setAttribute('class', 'title')
tiles[3].setAttribute('id', 'fourth-title')
console.log(tiles)



//Adding Attributeswithout setAttribute   -adding class and id to fourth title
const tit = document.querySelectorAll("h1")
tit[4].className = "title";
tit[4].id = "fourth-title";
console.log(tit);


//Adding class using classlist  -appends additional class.
tit[4].classList.add('title', 'header-title');
console.log(tit);

//Removing class using remove
tit[4].classList.remove("title", "header-title")
console.log(tit)

//Adding Text to HTML element
//Using textContent
const tile = document.querySelectorAll('h1')
tile[3].textContent = "Fourth Title"


//Using innerHTML
const til = document.querySelectorAll('h1')
til[4].innerHTML = "Fifth Title"

//more on innerHTML  -adds children to parent elements
const lists = `
    <li>30DaysOfPython Challenge Done</li>
    <li>30DaysOfJavaScript Challenge Ongoing</li>
    <li>30DaysOfReact Challenge Coming</li>
    <li>30DaysOfFullStack Challenge Coming</li>
    <li>30DaysOfDataAnalysis Challenge Coming</li>
    <li>30DaysOfReactNative Challenge Coming</li>
    <li>30DaysOfMachineLearning Challenge Coming</li>`

const ul = document.querySelector("ul")
ul.innerHTML = lists;

console.log(ul)

//Removing children from parent element
ul.innerHTML = "";


//Adding style
//Adding Style Color
const titlezz = document.querySelectorAll("h1")
titlezz.forEach((title, i) => {
    title.style.fontSize = "24px";
    if (i % 2 === 0) {
        title.style.color = "skyblue"
    }
    else {
        title.style.color = "pink"
    }
})

//Adding Background color
const titless = document.querySelectorAll("h1")
titless.forEach((title, i) => {
    title.style.textTransform = "uppercase";
    if (i % 2 === 0) {
        title.style.backgroundColor = "white"
    }
    else {
        title.style.backgroundColor = "cyan"
    }
})

//Adding Style Font Size
const pie = document.querySelectorAll("h1")
pie.forEach((title, i) => {
    title.style.fontSize = "24px";
    if (i % 2 === 0) {
        title.style.fontSize = "30px";
    }
    else {
        title.style.fontSize = "20px;"
    }
})*/


//Exercise
//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firsty = document.querySelector("p")
console.log(firsty);

const firstyy = document.getElementsByTagName("p")
console.log(firstyy[0])

//Get get each of the the paragraph using document.querySelector('#id') and by their id
console.log(document.querySelector("#first-line"))
console.log(document.querySelector("#second-line"))
console.log(document.querySelector("#third-line"))
console.log(document.querySelector("#fourth-line"))

console.log(document.getElementById("first-line"))
console.log(document.getElementById("second-line"))
console.log(document.getElementById("third-line"))
console.log(document.getElementById("fourth-line"))

//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let kit = document.querySelectorAll("p")
console.log(kit);


console.log(document.getElementsByTagName("p"))

//Loop through the nodeList and get the text content of each paragraph
for (const key of kit) {
    console.log(key)
}

//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const text = document.querySelectorAll("p")
console.log(text[3].textContent = "Paragraph Four")

//Set id and class attribute for all the paragraphs using different attribute setting methods
const texxt = document.querySelectorAll("p")
texxt[0].id = "one-liner";
texxt[1].id = "second-liner";
texxt[2].id = "third-liner";
texxt[3].id = "fourth-liner";

texxt[0].className = "one";
texxt[1].className = "second";
texxt[2].className = "third";
texxt[3].className = "fourth";

console.log(texxt)



//Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const textss = document.querySelectorAll("p")
textss[0].style.color = "red";
textss[1].style.color = "purple";
textss[2].style.color = "blue";
textss[3].style.color = "orange";
textss[0].style.backgroundColor = "cyan";
textss[1].style.backgroundColor = "yellow";
textss[2].style.backgroundColor = "pink";
textss[3].style.backgroundColor = "gray";
textss[0].style.border = "solid"
textss[1].style.border = "dotted"
textss[2].style.border = "groove"
textss[3].style.border = "inset"
textss[0].style.fontFamily = "cursive"
textss[1].style.fontFamily = "impact"
textss[2].style.fontFamily = "helvetica"
textss[3].style.fontFamily = "courier new"
textss[0].style.fontSize = "20px"
textss[1].style.fontSize = "25px"
textss[2].style.fontSize = "30px"
textss[3].style.fontSize = "35px"

//Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
textss.forEach((title, i) => {
    if (i % 2 === 0) {
        title.style.color = "red"
    }
    else {
        title.style.color = "green"
    }
})

//Set text content, id and class to each paragraph
textss[0].textContent = "Paragraph one is very important"
textss[0].id = "firsty"
textss[0].className = "liner"
console.log(textss[0])

textss[1].textContent = "Paragraph two supports one"
textss[1].id = "secondy"
textss[1].className = "liner"
console.log(textss[1])

textss[2].textContent = "Paragraph three buttresses the points preceeding them"
textss[2].id = "thirdy"
textss[2].className = "liner"
console.log(textss[2])

textss[3].textContent = "Paragraph concludes the narrative"
textss[3].id = "fourthy"
textss[3].className = "liner"
console.log(textss[3])