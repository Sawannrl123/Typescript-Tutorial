// Let create a simple js functions
// which is designed to add 2 numbers
// just like we annotate the variable
// we can also annotate the parameters of function
// ts also allow us to annotate the return type of a function
// using the same familer syntex
function add(a: number, b: number): number {
    return a+b;
}

// Now you can have a function in javascript that is not designed to return any value
function logMessage(message: string) {
    console.log('LOG:', message);
}
// Now, if a function does not return any value,
// you can annotate its return type using the special typescript 
// build in type called void

// Now, JavaScript also allow you to create a function that can take an Indefinite number of argumnets
// The way to indicate this entire script is using three dots before the peremeter
// Such parameter is called a rest parameter.
function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current;
    })
}

//Here we have a function sum, that you can invoke with as many numbers as you want.
sum(1, 2); // 3
sum(1, 2, 3); // 6

// Internally, all these arguments get collected into a js array for the rest parameters.
// TypeScript understand this and will enforce that you annotate the rest parameter as an array. 
// For our sum function, we expect only numbers, so we have annotate it as an array of numbers.

// Now javaScript also suports first class functions.
// What does this means that we can store functions in a javascript variable.
type Add = (a: number, b: number) => number;
let addFn: Add;

addFn = function(a, b) {
    return a + b;
}

// Now, Typescript understands this and provides a nice shorthand syntax for declaring variable of a function type
// The syntax consists of listing of all the parameters between brackets, each parameter with their own type annotation,
// followed by the arrow operator and the return type
// Now, as I mentioned before, anything thet is used as a type annotation in typescript can be given a name using the type alias
// So, if you wanted, we could create function types once and use them again and again.

// Finally, it s worth mentioning that the shorthand syntax for typescript function type is actually inspired
// by the error functions that are supported by modern javascript.