// This is the padLeft4 function that we previously saw in our lesson on union types.
function padLeft4(value: string, padding: unknown) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected number or string, got '${padding}'.`);
}

console.log(padLeft4('Hello World', 4));     // '    Hello World'
console.log(padLeft4('Hello World', '   ')); // '   Hello World'
console.log(padLeft4('Hello World', '---')); // '---Hello World'

// Now, the padding parameter for this function can be a string or a number, allowing us to pad with
// a number of spaces or any given string.

// Now, within the function body, we are using the JavaScript typeof operator to determine if the padding
// is a number or a string.

// Outside of these conditional blocks, the padding perimeter can be a number or a string 
// now within these conditional blocks, TypeScript understands that if this condition is true,
// then within the condition body, the padding parameter must be a number.

// And if you hover over the padding parameter, you can see that it is inferred to be a number within this block.

// The same is true for the other block, if the type of padding is a string and within the conditional
// block, the padding parameter will be narrowed down to the string type.

// Now, the JavaScript typeof operator is one of the ways in which you can narrow down a union type into
// one of its primitive members.

// Now, this is perfectly fine.

// If the union type that you are looking at consists of primitive members like number or string.

// for anything else that is not a JavaScript primitive type,
// the typeof operator actually returns the string object
// and therefore cannot be used to discriminate between the members.

// Now let's look at how we can narrow between instances of different JavaScript classes with an example.

// Here we have a simple JavaScript class called Cat with the single method called meow.
class Cat {
    meow() {
        console.log('meow')
    }
}

// We also have another JavaScript class called Dog with a single method called bark.
class Dog {
    bark() {
        console.log('woof')
    }
}

// We can capture instances of a cat or a dog in a single type union called Animal.
type AnimalNarrow = Cat | Dog;

// Now we want to create this utility method called Speak, which can accept any animal.
// And if it is a cat, it should meow and if it is a dog, it should bark.
function speak(animal: AnimalNarrow) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
}

// Now, as mentioned before, we cannot use the typeof operator because it will be the string object
// for instances of either a cat or a dog.

// Not the proper way to determine if a given object is an instance of a class is using the JavaScript
// instance of operator.

// So we check if the passed in animal is an instance of a cat and if so, we invoke the method meow.
// Otherwise, if it is an instance of a dog, we invoke the method bark.

// Now, just like the type of operator typescript understands the instance of operator and understands
// that if this condition is true, then within the conditioned body animal will be a cat.

// And similarly, if the second condition is true, then the animal will be a dog.

// Now that's it for classes.

// But what about objects that are not created by calling a constructor of a particular class?

// Let's discuss those with another example.

// Here we have a type representing the square with the single member Kosice to represent the squares width
// as well as its height.
type Square = {
    size: number
}

// Then we have this type called Rectangle with separate members to represent the rectangles width and height.
type Rectangle = {
    width: number,
    height: number
}

// Now we can capture instances of a square or a rectangle in a single type union called Shape.
type Shape = Square | Rectangle;

// This allows us to create a utility function called area that can operate on any given shape.
function area(shape: Shape) {
    if ('size' in shape) {
        return shape.size * shape.size;
    }
    if ('width' in shape) {
        return shape.width * shape.height;
    }
}

// So if you pass in a square with a single size value of 2, it should return the area 4.
console.log(area({ size: 2 })); // 4

// And if you pass in a rectangle with the width of 2 and a height of 3, it should return the area
// of the rectangle, which would be 6.
console.log(area({ width: 2, height: 3 })); //6


// Now, as you mentioned before, the type of operator for both of these objects would be the string object
// and would not help us differentiate between a square and a rectangle.

// Additionally, since these instances are not created by classes, we cannot use the JavaScript instance
// of operator to differentiate between the two objects.

// Fortunately, we can use the JavaScript in operator to determine if a particular property exists on
// the passed in object.

// And TypeScript will automatically infer that if this property is present on the object, then it must
// be of that particular type.

// So if the size property is found on the shape and this condition turns out to be true, TypeScript infers
// that shape must be a square.

// Similarly, if the width property is found on the passed in shape, that script infers that shape must
// be a rectangle and will allow us to use the width and the height property with complete compile time
// type safety.
