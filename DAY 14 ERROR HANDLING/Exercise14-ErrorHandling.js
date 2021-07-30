//Built-in error-handling mechanism to catch runtime errors(try-catch-finally block)
//try-catch
try {
    let lastName = "Oloyede";
    let fullName = firstName + "" + lastName;
} catch (err) {
    console.log(err)
}

//try-catch-finally
try {
    let lastName = "Taiwo"
    let fullName = fistName + ' ' + lastName
} catch(err) {
    console.error(err)
} finally {
    console.log("In any case I will be executed")
}

//Using err's name and object keys.
try {
    let lastName = "Yetayeh"
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log("Name of error", err.name)
    console.log("Error message", err.message)
} finally {
  console.log("In any case I will be executed")
}



//Throw
const throwErrorExampleFun = () => {
    let message ;
    let x = prompt("Enter a number: ")
    try {
        if (x === "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high"
    } catch (err) {
        console.log(err)
    }
}
throwErrorExampleFun()



//Error Types
//Reference Error
let frstName = 'Asabeneh'
let fullNamz = frstName + ' ' + lastName

console.log(fullNamz)

//syntax Error
let square = 2 x 2
console.log(square)

console.log('Hello, world")

//TypeError