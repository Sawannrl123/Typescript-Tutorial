// Here we have a type representing a person with, member, name of type string and an optional member,
// date of birth of type date.
type PersonAssertion = {
    name: string,
    dateOfBirth?: Date,
}

// Now, within the JavaScript ecosystem, it is common to have a function that asserts that a particular
// condition is true.
function assert(condition: unknown, message: string) {
    if (!condition) throw new Error(message);
}

// So if the condition turns out to be false, it throws an error instead of doing a standard return.

// Let's look at an example.

// Where we might use such a function,  here we are loading the person from a network call.
function loadPerson() {
    return ({ name: 'test' })
}

const maybePerson: PersonAssertion = loadPerson();

// Now, if the network fails our loadPerson, utility function returns now, and this can be seen in the
// type inferred for the maybePerson variable.

// So before we try to use this person object, we use a utility insertion function to assert that maybe
// person is not equal to null.
assert(maybePerson != null, 'Could not load person');

// Now, from our understanding of this function, we know that if this function returns, we should b
// able to access any of the properties of the person, for example, the name property.
console.log('Name:', maybePerson.name);

// However, if we do so, we get a compiler error.

// If you hover over the error, you can see that typescript still things that maybePerson might be null.

// Now, the reason for this error is that TypeScript does not do any implicit assertion checking.

// However, it does support explicit assertion, checking in the form of assertion functions.

// To specify that a particular function is an assertion function.
// We need to add a return type annotation of the form, asserts some parameter.
function assert1(condition: unknown, message: string): asserts condition {
    if (!condition) throw new Error(message);
}

// Here's the parameter we want to assert is called condition.

// This tells the typescript compiler that this function only returns if the condition parameter is true.

// Functions with such a return type annotation are called assertion functions.

// Now that typescript understand the impact of calling this function, it knows that maybePerson not equal
// to null, must have been true, and therefore maybePerson can only be of type person.

// In addition to assertion functions that simply assert if a condition parameter is true.

// you can create an association function to indicate that a passed in parameter is of a particular type.

// Here we have a utility function which asserts that a passed in parameter is of type date.
function assertDate(value: unknown) {
    if (value instanceof Date) return;
    else throw new TypeError('Value is not a Date');
}

// If the value is an instance of date, it simply returns.

// Otherwise, instead of doing a return, it throws an error.

// Now at this point, it is not an assertion function as we haven't added and asserts annotation.

// But let's demonstrate its intended usage before we add appropriate annotation.

// Now we want to read the date of birth of the person.

// So we use this a assertDate function to ensure that date of birth is of type date.
assertDate(maybePerson.dateOfBirth);

// Now we know that if this function returns, we should be able to access the date of birth at the type
// of date, for example, in invoke it's toISOString method.
// console.log('Date Of Birth', maybePerson.dateOfBirth.toISOString()); // Error

// However, without a proper type annotation, we immediately get a compiler error.
// And if you hover over the error message, you can see that typescript still thinks that date of birth
// can be undefined.

// The syntax for specifying that a function asserts a particular parameter to be of some type is a asserts
// parameter Name is type.
function assertDate1(value: unknown): asserts value is Date {
    if (value instanceof Date) return;
    else throw new TypeError('Value is not a Date');
}

// Here we are saying that the asserted function only returns if the passed in parameter value is of type date.

// With this annotation in place, TypeScript successfully narrows the date of birth to be of type date,
// allowing us to call the toISOString method.
assertDate1(maybePerson.dateOfBirth);
console.log('Date Of Birth', maybePerson.dateOfBirth.toISOString());

//  As a final thought, You might have noticed that the syntax for assertion functions is very similar to the syntex for user
// defined type guards.

// And you might be wondering when you should use an assertion function and when you should use a user
// defined type guards.

// Normally in your application code you would use a user defined type guards as you do not want to be throwing
// errors in your application code.

// However, when writing application tests, you would use an assertion function as unhandled errors are
// gracefully reported as a test failure by popular testing frameworks.

