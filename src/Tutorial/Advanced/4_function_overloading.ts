// Here we have a function called reverse that can be called with the string or a string of Array, and if
// it is a string, then it splits the string into its characters, reverses them, and then finally joins
// them back to return the reversed string.

// Alternatively, if it is invoked with the string Array, it creates a copy of the array using slice and
// returns the reverse version of that array.
function reverse(stringOrStringArray: string | string[]) {
    if (typeof stringOrStringArray == 'string') {
        return stringOrStringArray.split('').reverse().join('');
    } else {
        return stringOrStringArray.slice().reverse();
    }
}

// So if he invoked this function with the string, hello, we get the reverse string.
const helloRev = reverse('hello'); // 'olleh'

// And similarly, if he invoke it with an array of characters, we get back a reversed array of characters.
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']); // ['o', 'l', 'l', 'e', 'h']

// Now we know that if the input is a string, then the output of the function is a string.

// And if the input is a string Array, then the output is a string Array.

// However, as far as the inference engine in typescript is concerned, there are two possible ways that
// the function can return.

// It can either return a string or it can return a string array and typescript infers the return type
// of the function to be a string or string array.

// So if you hover over the first variable, you can see that the typescript thinks that it might be a string
// or string Array.

// And the same is true for the second variable.

// Now, the solution to this problem is function overloading.

// We can declare multiple signatures for any given function before the function body.

// So we declare a function signature such that it takes an input string and it output the string and another
// signature specifying that when it takes the string Array, it returns a string Array.
function reverse1(string: string): string;
function reverse1(stringArray: string[]): string[];
function reverse1(stringOrStringArray: string | string[]) {
    if (typeof stringOrStringArray == 'string') {
        return stringOrStringArray.split('').reverse().join('');
    } else {
        return stringOrStringArray.slice().reverse();
    }
}

// Now with these two function overloads in place, TypeScript knows that when this function is invoked
// with a string, it returns the string and inferred that correctly for the first function call.
const helloRev1 = reverse1('hello'); // 'olleh'

// Similarly, it correctly infers a string array for the second function call.
const h_e_l_l_o_1 = reverse1(['h', 'e', 'l', 'l', 'o']); // ['o', 'l', 'l', 'e', 'h']

// Now function overloading in typescript is compile time only.

// That is, these signatures are not a part of the output javascript.

// This is why we are only allowed to have one body for the function which must handle all the overload
// cases.

// For example, here we are using a type of check to determine which code block we want to execute.

// Additionally, adding overlord's shadows the internal functions signature.

// So let's look at another example to demonstrate that

// here we have a function called makeDate design to help us make date objects
// within the function we check if a month and day were passed in.
// And in that case, we assume that the arguments are the year, the month and the day.

// Otherwise we assumed that the first argument is the timestamp.
// That is the time in milliseconds since Epoch 
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
    if (month != null && day != null) {
        return new Date(timestampOrYear, month - 1, day);
    } else {
        return new Date(timestampOrYear);
    }
}

// so we can create an instance of the date using the makeDate function passing in the year 2000 month Jan and day first.
const doomsday = makeDate(2000, 1, 1); // 1 Jan 2000

// Similarly, we can create a date by passing in the time since Epoch and let's just pass in zero to create
// the date of Epoch.
const epoch = makeDate(0); // 1 Jan 1970

// Now, if someone were to look at just the function signature, the variable might assume that you should
// be able to pass in just a year and the month.

// However, when we look at the code, you can see that if day is not passed in, then the second code
// block will execute. And in that case, the month argument will be completely ignored and the other argument will actually
// be thought of as a timestamp in milliseconds.
// const invalid = makeDate(2000, 1 /* Error: ignored */)

// However, with the single function signature that we have right now, we are able to invoke the makeDate
// function with two arguments.

// once more, The solution to this problem is to declare function overlord's so we create a function overload.

// We accept a timestamp of type number and specify that we will return a date and then another function
// signature where we specify that we will take three arguments, which is year month and day and then return
// the date.

// Now when we declare the overlord's, it essentially shadows the internal function signature.
// And now externally, there are only two possible ways to invoke the function, one with the timestamp
// and one with year month day.

// So now TypeScript is correctly highlighting the fact that you cannot invoke the makeDate function with
// just two arguments and we can get rid of this incorrect function call.

// So now you might be wondering why we need to have an implementation signature when it is not visible
// to consumers of our API?

// Well, the reason is that the implementation signature is there only for the author of the function
// to declare how they would like to handle all of the possible cases declared by the Overlords.
// This is the only function signature that is visible within the body of the function.

