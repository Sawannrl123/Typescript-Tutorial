// Now Because typescript does code flow analysis, there are certain instances where it infers that something
// can never occur.

// For example, here's the function that always throws and therefore it can never return a value.
// And typescript infers return type to be the special type Never.
const fail = (message: string) => {
    throw new Error(message);
}

// another example of a function that never returns is something that has a very obvious infinite loop.
// for example while true.
const sing = function() {
    while(true) {
        console.log('Never gonna give you up');
        console.log('Never gonna give you down');
        console.log('Never gonna run around and desert you');
        console.log('Never gonna make you cry');
        console.log('Never gonna say goodbye');
        console.log('Never gonna tell a lie and hurt you');
    }
}

// hear once more, typescript infers that the return value of this function is never as this functional,
// will never return.

// Now, never can also be used as an explicit type annotation. In TypeScript.

//for example, here we have a variable which we have annotated to be never.
// a key feature of the never type in typescript is that only something of type
// Never can be assigned to something of type Never.

// So if we try to assign a number to a variable of type, never, typescript will give us a compile time
// error.
// let example: never = 123; // Error

// For example, number cannot be assigned to something that is never.

// We can use this fact to ensure that all important cases are handled in our code base.

// Let's look at an example here.

// We have a typed square with the member size of type number and then we have a type rectangle with member
// width and height of type number.
type SquareNever = {
    kind: 'square',
    size: number,
};

type RectangleNever = {
    kind: 'rectangle',
    width: number,
    height: number,
}

// Then we have a unique type shape that allows us to work with squares and rectangles in utility functions.
type ShapeNever = 
    | SquareNever
    | RectangleNever;

// Now our objective is to create a utility function that returns the area for any given input shape
// to ensure that we handle all the types of shapes that might be input.

// The first thing that we do is create a never variable, ensure all cases are handled, and try to assign the
// input shape to this variable.
function areaNever(s: ShapeNever) {
    // const _ensureAllCasesAreHandled: never = s; // Error
}

//now because the input parameter is of type shape, which is not assignable
// to something of type never. This will result in a compile time error.

// Only after we've handled all the cases will s truly become never.

// So this error is going to force us to handle the different cases.

// And the first case that we handle is that for the square and once this case is there, the error changes.
// That rectangle is not assignable to never.
function areaNever1(s: ShapeNever) {
    if (s.kind === 'square') {
        return s.size * s.size;
    }
    // const _ensureAllCasesAreHandled: never = s; // Error
}


// So the next step is to handle the case for rectangle and now the error goes away, indicating that we
// have successfully handled all the cases.
function areaNever2(s: ShapeNever) {
    if (s.kind === 'square') {
        return s.size * s.size;
    } else if (s.kind === 'rectangle') {
        return s.width * s.height;
    }
    const _ensureAllCasesAreHandled: never = s;
    return _ensureAllCasesAreHandled;

}

// Now, it is a good idea to leave this decision as a part of the area function, ensuring good correctness
// for future modifications.

// For example, if in the future we decide to support the circle type as a part of a shape, we immediately

// get a compile time error because circle is not handled within the area of function and the error message
// is that circle cannot be assigned to never.

// This helps the person making the modification and they can ensure that this new type is handled in all
// the utility functions.

// Now, one final thing worth mentioning is that all parts of a function must return a value.

// Otherwise, TypeScript infers that the return type of the function might be undefined.

// For this particular case, we can simply return the _ensureAllCasesAreHandled variable and typescript correctly infers
// that the return type of the function will be a number.
