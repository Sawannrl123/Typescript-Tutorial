// One amazing feature within the typescript type system is type Unions', let's consider a simple example to demonstrate the motivation.
/**
 * @param input a command or an array of commands
 * @return a single trimmed string
 */
function formatCommandline(input: any) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    } else {
        line = input.map((x: string) => x.trim()).join(' ');
    }
    return line;
}

// Here we have a simple function that can operate on a string or an array of strings and within the function
// body, if it is simply a string, it will trim it and return the result.
// And if it is an array, it will trim each of the strings in the array and then join them with the space and return the result.

// Such functions, which operate on a single item or an array of items, is quite common within javascript. Eco-System.

// Currently, in order to accept a string as well as an array of strings, we have this function annotated as input type any.
console.log(formatCommandline('hello')); // 'hello'
console.log(formatCommandline(['hello', 'world'])); // 'hello world'

// However, this results in type unsafety, for example, someone can pass in a number and now our code
// will blow up at runtime without any compile time errors.
console.log(formatCommandline(1337)); // Error

// Fortunately, TypeScript allows you to create types as a union of predefined types.

// For example, in our case, we want to accept only a string or an array of strings.
function formatCommandline2(input: string | string[]) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    } else {
        line = input.map((x: string) => x.trim()).join(' ');
    }
    return line;
}

// Once we've added this annotation, invalid usages are highlighted as a compile time error.
// console.log(formatCommandline2(1337)); // Error at compile time

// But TypeScript, now union types are simply a set of types separated by the pipe operator as shown over
// here, you are free to use any type names separated by the operator to create a union type.

// Let's demonstrate that by another usage.

// A common requirement in your programming is to pair the string with some characters before it.
/**
 * Takes a string and adds `padding` to the left
 * If `padding` is a number, then that number of spaces is added to the left.
 * If `padding` is a string, then `padding` is applied to the left
 */
function padLeft(value: string, padding: unknown) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected number or string, got '${padding}'.`);
}

// Here we have a function that achieves this objective, if the input argument is a number, it pads with the number of spaces.

// Alternatively, you can pass in your own padding string and that is used it appended before the input value.

// And if the input is not a number or a string, this function throws a runtime error.

// A naive approach would be to accept all inputs using the unknown type, as we have done over here.

// And indeed it does achieve the objective of accepting a number or padding string.
console.log(padLeft('Hello World', 4));     // '    Hello World'
console.log(padLeft('Hello World', '   ')); // '   Hello World'
console.log(padLeft('Hello World', '---')); // '---Hello World'

// However, just like any, unknown accepts all types.

// And if someone were to call this function with something that is not a number or a string, for example,
// a boolean, this function will throw a runtime exception.
console.log(padLeft('Hello World', false)); // Error

// Unfortunately, once more we can get this error by using a proper union type annotation for the padding parameter.

// In this case, we want to accept a number or a string and anything else will be caught as a compile
// time error from typescript as shown over here.
type Padding = 
    | number
    | string;
function padLeft2(value: string, padding: Padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected number or string, got '${padding}'.`);
}

// console.log(padLeft2('Hello World', false)); // Error

// Now, just like any other type annotation within typescript, you can extract a union type into its own type.

// Alias giving it a well-defined name for better code readability.

// Now, if the unions are becoming a bit long, TypeScript allows you to split your union into multiple lines.

// Also, in order to increase the readability a bit more, TypeScript allows you to optionally add a pipe

// before the first member in the union.

// This has no impact on the semantics of the type, and it's purely there for code readability purposes.
