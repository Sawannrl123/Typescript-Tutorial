// Here we have a variable representing the value of a dice of type number.
let dice: number;

// Then we have a utility function rollDice, which updates the value of the dice with the new random
// value to ensure that dice is always a valid number.
function rollDiceDefinite() {
    dice = (Math.floor(Math.random() * 6) + 1);
}

// We do an initial roll of the dice.
rollDiceDefinite();

// Now, at this point, if we try to read the value of the dice, we get a compiler error from typescript.
// console.log('Current Dice Value', dice); // Error

// The error message indicates that variable dice is being used before it has been assigned.

// The source of this error is the fact that we are not doing a direct assignment of the variable at the
// point of declaration and only doing one later on through a function call.

// Since TypeScript doesn't track the mutating side effects of a function, it thinks that dice might still
// be undefined.

// We can overcome this error with a non-null assertion.
// As we have seen in a previous lesson.
console.log('Current Dice Value', dice!);

// it does get rid of the error.
// However, if we try to roll the dice again and then read it's value, TypeScript still thinks that dice
// might be undefined as it has still never been initialized directly.
rollDiceDefinite();
// console.log('After another roll', dice); // Error

// So let's get rid of our non-null assertion and look at an alternative fix.

// We can use an exclamation mark after the variable name at the point of declaration to tell typescript
// that this variable is definitely assigned.
let dice1!: number;

function rollDiceDefinite1() {
    dice1 = (Math.floor(Math.random() * 6) + 1);
}

// This exclamation mark at the point of declaration is known as a definite assignment assertion and now
// tested no longer complains that the variable is used before assignment, just like other assertions.
console.log('Current Dice Value', dice1);

// The definite assignment assertion is compile time only and it is up to you to ensure correctness.

// Now, definite assignment can also be used with members of a class.

// So let's look at another example.

// Here, We have a class representing a point in two dimensional space with members X and Y that we initialize
// to random values in the constructor.
// This class also provides a utility method to reinitialize the X and Y members to new random values.
class PointDefinite {
    x: number;
    y: number;
    constructor() {
        this.x = Math.random();
        this.y = Math.random();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}


// At this point, you can see the code duplication between the constructor and the random method.

// We can get rid of this application by simply invoking the moveRandom method from the constructor.
class PointDefinite1 {
    x!: number;
    y!: number;
    constructor() {
        this.moveRandom();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}

// However, this raises a compiler error for the members X and Y, and if you look at the error message,
// you can see that it is complaining that the members X and Y do not have an initial and are not
// assigned to a value in the constructor.

// This is similar to the error message we saw in our previous example, and the cause once more is the
// redirection introduced by the function call.

// The fix is once more the same.

// That is, we do a definite assignment assertion by adding an exclamation mark after the member declarations.
