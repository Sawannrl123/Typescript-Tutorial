// Coming from other taped programming languages, you might be familiar with the concept of typecasting.

//Here we have a variable of an undeclared type that we later initialize to a string.
let leet;

// Later
leet = '1337';

// And then if you want to use this variable as a number, you might be tempted to use a type assertion of
// typescript to convert it to a number.
// Use as number
const number = (leet as unknown) as number;

// However, a type assertion is not the same as type casting.

// This is because the value currently held by the variable will still be a string, and if you try to
// compare it to a number at runtime, you will find that it is not a number because its value is actually
// the string one three three seven.
console.log(number === 1337); // false
console.log(number); // '1337'

// Now typescript doesn't support any special syntax for typecasting.

// However, it understands how typecasting works in JavaScript.

// So you can use your JavaScript tricks to do any type casting that you need.

// For example, a common way to convert a string to a number is using the plus operator before the string.

const stringToNumber = +leet;

// Now typescript understands the impact of using the plus operator.
// So now if you hover over the stringToNumber variable, you can see that this group has inferred that it is going
// to be a number.

// Now this type of type manipulation within JavaScript documentation is called Type Coercion , and with that
// in place, the variable stringToNumber will be a number at runtime.
