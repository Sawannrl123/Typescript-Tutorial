// Here we have a variable called direction of type string
let direction: string;
// now the type string can accept any JavaScript string
// for example, a dictionary spelling of the word north
direction = 'North';
//however, because it accepts all strings,
// you can even provide it with the string that is a bit poorly spelled.
direction = 'n0r7h';
// Now, if you want to ensure that north is always spelled with the correct spelling in your code base,
// there are a few JavaScript runtime solutions to the problem.

// For example, you can create a variable pointing to the string, north and only use that variable instead
// of typing the string inconsistently in your code base.
const NORTH = 'North';
direction = NORTH;

// Now, in addition to all the JavaScript runtime solutions, typescript also provides a compile time solution
// to this problem in the form of literal types.

// TypeScript allows you to use any string literal in a type position, for example, the literal string north.
let direction2: 'North';

// And now the only value that can ever be assigned to this variable is the literal string north.
direction2 = 'North';

// any other type of string will result in a compile time error as shown over here.
// direction2 = 'n0r7h'; // Error

// Now, of course, a variable that only accepts just one string literal is not particularly useful,
// and you would most commonly use a literal type in a union.

// For example, we can create a union of all of the cardinal directions that can be used for this direction variable.
type CardinalDirection = 'North' | 'East' | 'South' | 'West';
let direction3: CardinalDirection;

// And now anything that is in this union will be fine and anything else will result in a compile time error.

// Now, one great thing about literal string types in TypeScript is that they also show up in autocomplete,
// which can result in a great developer experience.
direction3 = 'East';

// Now, just like any other union type in typescript, we can extract this union offering literals into
// a name to type alias, for example, called Cardinal Direction.

// And once you have this type alias, you can start using it in a library of utility functions, specifically your domain.
function move(distanceMeters: number, direction: CardinalDirection) {
    console.log(`Moving ${distanceMeters} meters towards ${direction}`);
}

// Now, in addition to literal strings, TypeScript also supports literal types for the Boolean, true
// and false, as well as any number value.

// To demonstrate that, let's look at another example.

// Now we can represent the value of a traditional dice as the number of values.
// One, two, three, four, five, six.
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

// And then we can create a utility function that uses method random to role a dice.
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

// We use the return value from Math.random() and scale it from zero to 5.99999. You get the idea 
// and then use method floor to limit this value to be zero to five and then scale it by adding one to be one to six.
// Which matches our dice value type. and we inform typescript of this fact by using a type assertion.

// Now once we have this type and this utility function in place, we can start using it in our code base.
// And at any point if we try to use it improperly, for example, try to compare the result of a roll
// dice to the number literally seven, which is not a member of the dice value.
// We get a compile time error from TypeScript keeping us from shipping bugs to production.

// if (rollDice() === 7) { // Error
//     throw new Error('Error');
// }