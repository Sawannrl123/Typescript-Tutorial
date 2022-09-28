// In this lesson, we will look at the any and the unknown types in TypeScript.

// To understand the behavior of these types, We start by creating variables, one annotated as any and a second one annotated as unknown,
// both any and unknown, a universal super typed in typescript.
let exampleAny: any;
let exampleUnknown: unknown;

// This means that all types of variables can be assigned to something that is any.
// And the same is true for unknown, and that is where the similarity ends.
// any
exampleAny = 123;
exampleAny = 'Hello';

// unknown
exampleUnknown = 123;
exampleUnknown = 'Hello';


// Let's first take a closer look at any, any is like an escape hatch in the type system.

// It gives you complete freedom to do anything you want to do with the variable without having to worry
// about TypeScript adding its types checks into the mix.

// For example, you can access anything you want from it, and any member access is further inferred to
// be any so you can build up any ridiculous gene that you can imagine.
// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// Similarly, you can even assign it to well-defined types like Boolean without having to ensure that
// the value currently held by the any variable is actually a boolean, essentially that any type exists
// to allow you to completely bypass the typescript type system and you can use it to overcome pesky type
// errors if you are in a rush and trust the codebooks, 


// unknown is different and safer.
// You can still accept anything into an unknown, but you cannot just use it in an unsafe manner.

//For example, you cannot willy nilly access any properties on it and you cannot assign it to well-defined
// types like Boolean without further checks.
// unknowm
// exampleUnknown.trim(); // Error
// let unknownSetBool: boolean = exampleUnknown; // Error

// All attempts to do so would result in a compile time error.
// And that is the main value proposition of the unknown type.
// If you want to use it as a string, you have to check that its current value is going to be a string.
if (typeof exampleUnknown === 'string') {
    exampleUnknown.trim();
}

// And if you want to use it as a boolean, you have to check that it is going to be a boolean.
if (typeof exampleUnknown === 'boolean') {
    let unknownSetBool: boolean = exampleUnknown;
    console.log(unknownSetBool);
}


// So unknown can be thought of as a more typesof version of any.

// It still allows free access to all types within the type system, but also in a safe manner.

// The main reason why `any` was added to the typescript type system was to allow easy migration of JavaScript
// code to typescript, for example, here we have some JavaScript code that uses zero type annotations.
//And you can see that it works without any compile time typescript errors.
const loadString = () => { return 'string' }
let someLegacyVariable;

someLegacyVariable = loadString();
console.log(someLegacyVariable.trim());

const loadNumber = () => { return 10 }
someLegacyVariable = loadNumber();
console.log(someLegacyVariable.toFixed(2));

// Now, the main reason for that is that unencrypted variables in typescript are inferred to be `any` to
// migrate this JavaScript to annotated typescript. We can simply add an explicit any annotation, and that's the quickest solution.

let someLegacyVariableAny: any;

someLegacyVariableAny = loadString();
console.log(someLegacyVariableAny.trim());

someLegacyVariableAny = loadNumber();
console.log(someLegacyVariableAny.toFixed(2));

// But here, that typescript is not doing any handholding in the form of type checking for you.
// So if this JavaScript function load string returns something that is not a string, for example, and
// undefined, the code will blow up at runtime and that's where the unknown type comes in handy.

let someLegacyVariableUnknown: unknown;

someLegacyVariableUnknown = loadString();
// console.log(someLegacyVariableUnknown.trim()); // Error

someLegacyVariableUnknown = loadNumber();
// console.log(someLegacyVariableUnknown.toFixed(2)); // Error

// If you have time to do reliable refactoring of your JS code, you can annotate the legacy variables as unknown.

// And TypeScript will warn you at each instance where you try to use the value from the variable, allowing
// you to add sanity checks before using it.

// So if you want to use it as a string, you need to add an explicit JavaScript runtime check, for example,
// using the type of operator.

if (typeof someLegacyVariableUnknown === 'string') {
    console.log(someLegacyVariableUnknown.trim());
}

// And similarly, if you want to use it as a number, you will need to add an explicit check.
if (typeof someLegacyVariableUnknown === 'number') {
    console.log(someLegacyVariableUnknown.toFixed(2));
}

// So in summary, if you want a quick fix migration, use any.
// But if you have the time to do more reliable refactoring or are dealing with code that you don't trust,
// use unknown.

// This might even help you understand the code a bit better.


// Here we have a log function that we want to support logging for any type of variable that might be passed into it.

// Now, you might be tempted to annotate certain input value as any.

function logAny(value: any) {
    console.log(value.toFixed(2));
}

// However, doing so will result in a decrease in type safty.
// An inexperienced developer might end up using the input value within the function in an unsafe manner
// because there might only be thinking of a limited set of examples, for example, just the number type
// and then the code will go up at runtime for anyone else because the body of the function is unsafe for
//anything other than a number, not the recommended way in.

logAny(10.234);
logAny('Hello');

// TypeScript, to accept all values within the function with type safety is to use the unknown type externally.

function logUnknown(value: unknown) {
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    } else {
        console.log(value);
    }
}

// Your function still accepts all types just like any.
// But now internally you get to safety when trying to use the variable in an unsafe manner.

logUnknown(10.234);
logUnknown('Hello');

//So if you want to call some method on the perimeter, you need to check that the Boston perimeter is
// actually of a type that supports that method.