// Here we have a variable that is initialized by a function call.
type Load = () => unknown
const load: Load = () => {};
let helloLoad = load();

// const trimmed = helloLoad.trim(); // Error

// Now we know that this function is returning a string, so we try to use a variable as a string and trim
// its value and we get to compile time error.

// Now, the reason for the error in this particular case is that the load function is annotated to return
// an unknown type.

// It is possible in typescript to end up in a situation where either the function, annotation is incorrect
// or the type inferred by the title of compiler does not match what you know, the value of the variable to be.

// Of course, for the unknown type.
// In this particular case, we can add some runtime type check to ensure that the value of the variable
// helloLoad is string before calling the trim function.
if (typeof helloLoad === 'string') {
    const trimmed = helloLoad.trim();
    console.log(trimmed);
}

// Now you might not want to add this runtime type check simply because of performance reasons, or you
// want to save some time and simply develop your application without having to worry about the types.

// For this reason, TypeScript provides you with the concept called type assertions, which you can use
// to tell the compiler what the type of a variable is without having to do any of the type inference or
// type checks with the as string type assertion.
let trimmed = (helloLoad as string).trim();

// We are telling the typescript compiler, that dear compiler, trust me, I know this is a string, you don't
// have to second guess it.
// And with that in place we can use this variable helloLoad as a string and call it string method.

// The main syntax for a type of assertation is the as keyword, followed by the type that you want to assert. (helloLoad as string)
// Now TypeScript also provides an additional syntax for type assertions known as the angle brackets syntax
// where you put the type in angle brackets before the variable.
trimmed = (<string>helloLoad).trim();

// Now, I don't recommend that you use the angle brackets syntax as it does not work in TSX file

// And the reason for this error is that it thinks that this is a JSX element.
// Instead of a type assertions.

// Of course, you can still do type assertions in TSX using the as type syntax.

// Now, before we finish with the type assertions are your way of telling the compiler that you know better
// than what it understands.

// The ideal approach, of course, is to use proper type annotations or runtime javascript type checks
// ensure correct type inference.
if (typeof helloLoad === 'string') {
    const trimmed = helloLoad.trim();
    console.log(trimmed);
}
