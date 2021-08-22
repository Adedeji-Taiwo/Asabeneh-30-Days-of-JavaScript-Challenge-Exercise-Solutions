//Creating ELement
let title = document.createElement("h1");
title.className = "title";
title.style.fontSize = "24px";
title.textContent = "Create HTML element DOM Day 2";

console.log(title);

//Creating Multiple Elements
let titles;
for (let i = 0; i < 3; i++) {
    titles = document.createElement("h1");
    titles.className = "title";
    titles.style.fontSize = "24px";
    titles.textContent = i;
    console.log(titles)
}

//Appending child to a parent element - allows for created element to be seen
let titless;
for (let j = 0; j < 3; j++) {
    titless = document.createElement("h1");
    titless.className = "titles";
    titless.style.fontSize = "24px";
    titless.textContent = "this";
    document.body.appendChild(titless)
}


//Removing a child element from a parent node
const ul = document.querySelector("ul")
const lists = document.querySelectorAll("li")
for (const list of lists) {
    ul.removeChild(list)
}    //ul.innerhtml = ""

//or
const url = document.querySelector("h2")
url.textContent = "";

