//Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using Javascipt only.
//- The year color is changing every 1 second.
//-The date and time background color is changing every one second.
//-Completed challenge has background green.
//-Ongoing challenge has background yellow
//-Coming challenges hjave background yellow.




//Styling the div which wraps the whole body content.
const text = document.querySelector("div")
text.style.fontFamily = "cursive"
text.style.width = "100%"
text.style.textAlign = "center"
text.style.display = "flex"
text.style.flexDirection = "column"
text.style.alignItems = "center"
text.style.justifyContent = "center"


//styling the header element h1
const texts = document.querySelector("h1")
texts.style.fontSize = "25px"


//styling the big bold year
const num = document.querySelector("span")
num.style.fontSize = "70px"
function year() {
    let today = new Date;
    let year = today.getFullYear();
    return (num.textContent = year);
}
setInterval(year, 1000)


//for year color
setInterval(() => {
    const str = "0123456789abcdef"
    let hexa = "#";
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return num.style.color = hexa;
}, 1000);


//styling first h2 in the doc
const h2 = document.querySelector("h2")
h2.style.fontSize = "20px"
h2.style.textDecoration = "underline"

//selecting and styling second h2
const h22 = document.querySelectorAll("h2")
h22[1].style.fontSize = "15px"
h22[1].style.padding = "10px"
h22[1].style.paddingLeft = "30px"
h22[1].style.paddingRight = "30px"
h22[1].style.marginTop = "0px"


//for time and ticking seconds
function time() {
    const today = new Date;
    let month = today.getMonth();
    let date = today.getDate();
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    return h22[1].textContent = (`${
        (month === 0)? "January" : (month === 1)? "February" : (month === 2)? "March" : (month === 3)? "April" : (month === 4)? "May" : (month === 5)? "June" : (month === 6)? "July" : (month === 7)? "August" : (month === 8)? "September" : (month === 9)? "October" : (month === 10)? "November" : "December"} ${(date < 10)? "0" + date : date}, ${year} ${(hour < 10)? "0" + hour : hour}:${(minute < 10) ? "0" + minute : minute}:${(second < 10)? "0" + second : second}`)
}
setInterval(time, 1000);

//for changing background color of time
function hexaColor() {
    const str = "0123456789abcdef"
    let hexa = "#";
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]   //or str.charAt(index)
    }
    return h22[1].style.backgroundColor = hexa;
}
setInterval(hexaColor, 1000); 


//styling the list
const ul = document.querySelector("ul");
ul.style.listStyleType = "none";
ul.style.width = "600px"
ul.style.marginTop = "0px" 


//styling list content
const li = document.querySelectorAll("li")
li.forEach((title, i) => {
    if (i === 0) {
        title.style.backgroundColor = "#29c44d";
        title.style.padding = "10px"
        title.style.marginBottom = "2px"
    }
    else if (i === 1) {
        title.style.backgroundColor = "#f8bf00";
        title.style.padding = "10px"
        title.style.marginBottom = "2px"
    }
    else {
        title.style.backgroundColor = "#ff5835"
        title.style.padding = "10px"
        title.style.marginBottom = "2px"
    }
})
