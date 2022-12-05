// It is entirely possible to end up in a situation with typescript, quote, for analysis, you cannot be
// sure that a value is null or undefined.

// Let's look at an example.

// Here we have a type representing a point in two dimensional space with members X and Y of Type number
type PointNonNull = {
    x: number,
    y: number
}

// we declare an instance of this point and then create a utility function to initialize this instance.
let pointNonNull: PointNonNull;
function initialize() {
    pointNonNull = { x: 0, y: 0 };
}

// Later on in our code, we initialize this instance and then try to access its X and Y members.
initialize();
// console.log('After initialized', pointNonNull.x, pointNonNull.y); // Error

// At this point, you can see that that script is giving us a compile time error.

// The reason for this error is that typescript does not do deep code flow analysis and therefore does
// not understand the impact of calling the initialize function.

// Therefore, it assumes that point may or may not be still undefined.

// And of course, we know that point can no longer be undefined and we can help TypeScript understand
// this fact by using a non null assertion operator.

// So at any point typescript still thinks that point might be undefined.
// We use a postfix exclamation mark and this exclamation mark is what is known as a non null assertion,
console.log('After initialized', pointNonNull!.x, pointNonNull!.y);

// just like other types assertions we have seen before.
// non-null assertions are compile time only and have no runtime impact.

// So it is up to you to ensure that the value is indeed not going to be null or undefined.

// So it is generally better to rewrite your code to avoid these non-null assertions.

// For example, in this particular case, we can get rid of the dangling variable declaration and then
// rewrite the initialize function to return us the point and then only create the variable after the function
// has been invoked.
function initialize2(): PointNonNull {
   return { x: 0, y: 0 };
}
const pointNonNull2 = initialize2();
console.log('After initialized', pointNonNull2.x, pointNonNull2.y);

// This ensures that the point variable is always initialized and we no longer need the non-null assertions.

// Now, non-null assertions can work on any variable or a member of a variable.

// Let's demonstrate that with another example.

// Here we have a type representing a person that always has a name but may optionally have an email that
// can be string or null or undefined.
type PersonNonNull = {
    name: string,
    email?: string | null | undefined,
};

// Next, we have a utility function to send an email giving an email address.

// And just as an example, we have a mock implementation that blocks the email to the console
function sendEmail(email: string) {
    console.log('Sent email to', email);
}

// now to ensure that a particular person is contactable.
// We have this utility function that checks if person or email is equal to null or undefined and in that
// case throws an error.
function ensureContactable(person: PersonNonNull) {
    if (person.email === null) throw new Error(`Person ${person.name} is not contacatble`);
}

// Now, if this function ever returns, that ensures that person.email, will not be null or undefined
// and therefore it must be a string

// now in order to contact a particular person.
// We have this function that takes a person and the first thing it does is ensures that person.email,
// will not be null or undefined by using a utility ensureContactable function.
function contact3(person: PersonNonNull) {
    ensureContactable(person);
    // sendEmail(person.email); // Error
    sendEmail(person.email!);
}

// So if this function returns, we should be able to safely envoke sendEmail because we know that person.email, must be a string.

// However, once more, typescript has failed to infer this particular side effect of the ensureContactable
// function and therefore thinks that person.email might still be null or undefined.

// Now, just like before, we can override this error by using a non-null assertion that is putting an
// exclamation mark after the value the typescript thinks might be null or undefined.

// Also, just like before, it is up to you to ensure the correctness of your code at this point.

// We can rewrite our code to make it a bit more easier for TypeScript to infer, for example, we can
// take the assertion from the insurer contactable function and move that in line.
function contact2(person: PersonNonNull) {
    if (person.email == null) throw new Error(`Person ${person.name} is not contacatble`);

    sendEmail(person.email);
}

// This triggers typescript code flow analysis for person.email and now tyepscript knows that person or email will
// not be null or undefined and therefore must be a string and will let us safely invoke the send email
// function.
