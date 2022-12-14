// The most common use case of type definitions in typescript is to declare the structure of an object.

// For example, here we have a type representing a point in two dimensional space with two members, X
// and Y of type number.
type Point2DInterface = {
    x: number,
    y: number,
};

// Now we can create a new type to represent a point in three dimensional space, using an intersection
// type, bringing in all of point 2D and adding the members of type number.
type Point3DInterface = Point2DInterface & {
    z: number,
};

// Now, of course, there are various reasons to use a type definition.

// For example, we can enforce the structure of a variable in our code base.
let pointInterface: Point3DInterface = {
    x: 0,
    y: 0,
    z: 0
};

// And now if you make any type errors, for example, forget to assign the remember, we get a nice compile
// time error from TypeScript.
/* pointInterface = { // Error
    x: 0,
    y: 0,
} */

// Now, in addition to type aliases, which are created using the type Keywood, the same can be achieved
// in typescript using interfaces which are created with the interface Keywood.
interface Point2DInterface1 {
    x: number,
    y: number,
}

// Beyond the keywords type vs interface, the other key syntactic difference is the use of the
// assignment operator in a type alias.

// This is because type aliases are simply a way to give names to any possible type annotation.
// syntactically similar to how you would assign a valid variable in JavaScript.

// interfaces however, operate on body blocks syntactically similar to how you would create a class in JavaScript

// now for creating point 3D in type aliases.
// We used an intersection type to bring in all of point 2D and then add the members z.

// We can achieve the same effect with typescript interfaces by using the extended keyword, similar to
// how you would do it in a JavaScript class.
interface Point3DInterface1 extends Point2DInterface1 {
    z: number,
}

// Now, in terms of usage is the type alias and the interface can be used in a similar fashion.

// For example, we can use the interface to declare a variable of a particular type, just like we did
// for the type alias.
let pointInterface1: Point3DInterface1 = {
    x: 0,
    y: 0,
    z: 0
};

// And this provides the same level of safety that we were getting from the type alias.

// For example, if you forget to provide the members z, we get a nice compile time error from TypeScript.
/* pointInterface1 = { // Error
    x: 0,
    y: 0,
} */

// Now, just like type aliases, interfaces in typescript only exist for compile time type checking and
// are not a part of the output JavaScript generated by the compiler.

// There are two key reasons why interfaces exist in typescript.

// One reason is familiarity for developers coming from other programming languages.

// For example, they get to use the extends keyboard and can create type hierarchies with a more familiar
// syntax.

// The other key reason is interface declaration merging.
// And we will look at that in the next lesson.
