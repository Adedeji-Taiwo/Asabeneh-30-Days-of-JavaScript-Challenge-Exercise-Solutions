//If inner function accesses the variables of outer function, this is called closure.
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction()
}

console.log(outerFunction())
console.log(outerFunction())





function greetCustomer() {
    let customerName = "Mike";
    function greetMsg() {
        console.log("Hi!" + customerName);
    }
    greetMsg();
}
greetCustomer();




function outerFunctions() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }
    return {plusOne: plusOne(), minusOne: minusOne()}
}


console.log(outerFunctions().plusOne)
console.log(outerFunctions().minusOne)


//Exercise
//Create a closure which has one inner function
function outer() {
    let sum = 0;
    function inner() {
        sum += Math.floor(Math.random() * 10)
        return sum;
    }
    return inner();
}

console.log(outer())


//Create a closure which has three inner functions
function greet() {
    let name = "Steph";
    function hail() {
        return (`Hi ${name}.`)
    }
    function date() {
        let today = new Date();
        return (`Today's date is ${today.getDate()}/${today.getMonth() + 1}/${today.getUTCFullYear()}
        ${(today.getHours() < 10)? "0" + today.getHours() : today.getHours()}:${(today.getMinutes() < 10)? "0" + today.getMinutes() : today.getMinutes()}`)
    }
    function question() {
        return (`${hail()} ${date()} How can i help you today?`)
    }
    return question();
}

console.log(greet());