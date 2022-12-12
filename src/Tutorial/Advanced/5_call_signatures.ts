// Here we have a type Add representing a function that can be invoked with two parameters, each of type
// number and then returns a number result.
type AddSignature = (a: number, b: number) => number

// we can use this type in any type annotation position.

// For example, here we are declaring a variable to be of this type.
const addSignature: AddSignature = (a: number, b: number) => {
    return a + b;
}

// Now, this shorthand syntax for declaring the type of a function can be used in line or as we have done
// in this case, assigned to a type alias.

// Another way of declaring the type of a function is by using call signatures in a body block.

// So we base what we have in the shorthand syntax, and the only modification we need to make is replace
// the arror with the colon, similar to how you would annotate the return type of a function.
type AddSignature1 = {
    (a: number, b: number): number,
}

// As far as TypeScript is concerned, this type is exactly the same as what we had in the shorthand syntax

// This body blocks syntax is also what you would use to declare the type of a function if you wanted to
// use an interface instead of a type alias.
interface AddSignature2 {
    (a: number, b: number): number,
}

// Of course, these are both equivalent, other than the fact that an interface is open for declaration
// merging.

// Let's go back to a type alias.

// Now, using a body block means that you can also add other members, for example, an optional debug
// name property to the type Add.
type AddSignature3 = {
    (a: number, b: number): number,
    debugName?: string,
}

const addSignature3: AddSignature3 = (a: number, b: number) => {
    return a + b;
}

// And now this property is available for access on our variable.
addSignature3.debugName = 'Additional Function';

// Another feature available in this long form is the ability to declare function overlord's.

// Here we are saying that the ADD function can also be invoked with three parameters and now we update
// our implementation to accept the third optional parameter as well as use it if it is provided.
type AddSignature4 = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
    debugName?: string,
}

const addSignature4: AddSignature4 = (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0);
}

// In addition to simple functions, TypeScript also supports providing the type annotation, for a
// function that is invoked with the new operator, also known as javascript classes.

// Let's look at an example.

// here, We have a class call point with two members X and Y of type number, now classes in JavaScript are an
// expression that can be assigned to any variable. For example, a variable called Point.
const PointClass = class {
    constructor(public x: number, public y: number){}
}

// Now we can declare the type of such a variable by using the familiar syntax from call signature.
type PointCreator = new (x: number, y: number) => { x: number, y: number };

// The differences is we precede the call with new and for the return type annotation.
// We provide the list of members that will exist on instances of the class 
// and now we can use this type annotation for our point variable.
const PointClass1: PointCreator = class {
    constructor(public x: number, public y: number){}
}

// Now, just like for functions, this constructor signature is the short form.
// There is an equivalent long form syntax as well.

// So within our pranthesis we paste in the same short form and the only thing we need to change is change the
// arrow to the return type annotation, just like we did for simple called signatures 
type PointCreator1 = {
    new(x: number, y: number): { x: number, y: number };
}


// as the final note, Let's combine everything we have learned into a single type annotation.

// Here we have a type with multiple constructor overlord's as well as function overlord's as well as a
// property called debug name.
type PointCreator2 = {
    new(x: number, y: number): { x: number, y: number },
    new(x: number, y: number, z: number): { x: number, y: number, z: number },
    (x: number, y: number): { x: number, y: number },
    (x: number, y: number, z: number): { x: number, y: number, z: number },
    debugName: string,
}

// const pointFn: PointCreator2 = (x: number, y: number, z?: number) => {
//     if (z != null) {
//         return ({
//             x: x,
//             y: y,
//             z: z
//         })
//     }
//     return ({
//         x: x,
//         y: y,
//         z: 0
//     })
// }

// const ins1= new pointFn(1, 2);
// const ins2= new pointFn(1, 2, 3);
// pointFn(1, 2)
// pointFn(1, 2, 3)
// pointFn.debugName = 'test';
// And although you are very unlikely to create a type like this, at least you can appreciate the types
// and TypeScript are extremely expressive.

