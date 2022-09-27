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
