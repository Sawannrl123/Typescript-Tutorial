// JavaScript runtime have two types to indicate the absence of a value. if something hasn't been initialized,
// the runtime normally returns undefined, and if something is currently unavailable, the runtime returns null.

// TypeScript provides literal type annotations for both of these values.
let notDefinedLocal: undefined = undefined;
let notPresentLocat: null = null;

// Now, you will have to deal with both of these values even if you don't use them explicitly in your code.

// Let's look at a few examples here.

// We have a class point with members X and Y of type number.
class PointLocal {
    public x: number;
    public y: number
    constructor(
        x: number,
        y: number
    ){
        this.x = x;
        this.y = y;
    }
    
}

// We create an instance of this point and then initialize the two members.
const centerLocal = new PointLocal(0, 0);
centerLocal.x = 0;
// centerLocal.y = 0;

// Now, if by any chance we forget to initialize any of these members and try to access that particular
// member, the JavaScript runtime will return us the special value undefined.
console.log(centerLocal.x, centerLocal.y); //0, undefined

// now just like undefined. NULL is a part of many JavaScript runtime features.

// For example, here we have a function that logs out the vowels of a particular input value string.
function logVowels(value: string) {
    console.log(value.match(/[aeiou]/gi));
}

// Internally, it uses the JavaScript built in string match method to find any of the vowels AEIOU.

// This built in match method returns an array of matches if any are found.

// For example, E and O match in the hello string.
logVowels('hello'); // ['e', 'o']

// However, if you pass in the string that does not have any vowels.

// For example, the string sky, this built in method returns null.
logVowels('sky'); // null

// So as you can see, even without explicitly using the literal, undefined or null they might be handed
// over to you by the JavaScript runtime and you will have to deal with both of them.

// Fortunately, there is a neat way to handle both of them in your JavaScript code and the trick is using
// the double equals operator.

// Now, it should come as no surprise that with the double equals operator, null is equal to null and
// undefined is equal to undefined.
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)

//**  However, what might be surprising is that undefined is also double equal to null.
console.log(undefined == null); // true

// This means we can use the double equals to, now to check if a value is null or it is undefined.

// Furthermore, the double equal to null is not true for any other false values, such as false or zero or an
// empty string.
console.log(false == null); // false
console.log(0 == null); // false
console.log('' == null); // false

// This means that we can use the double equals to null to explicitly check just for null and undefined
// without having to worry about any other values leaking through.

// As an example, consider a function that might return you boolean or null or undefined.

// That is the result returned can be one of these three types.

// Now you can safely isolate null and undefined with the double external check.

// And in fact, TypeScript understands this as well and will narrow the type for you to be just null and
// undefined.
function someBooleanOrNullOrUndefined() {
    return null;
}
const result = someBooleanOrNullOrUndefined();

if (result == null) {
    console.log('Null or Undefined', result); // null | undefined
}

// Alternatively, if you want to remove null and undefined from a particular set of types, the proper
// way to do that in JavaScript is to use not equals to null.
if (result != null) {
    console.log('Boolean', result); // true | false
}

// Once more, TypeScript understands this as well and will correctly isolate that.
// The result must be a boolean at this point, as both null and undefined have been ruled out.

// To give you a bit more practice with handling now and undefined in typescript.

// Let's look at another example here.

// We have a function called Decorate that has a parameter value which has been annotated to accept a string or null or undefined.
function decorate(value: string | null | undefined) {
    // return `-- ${value.trim()} --`; // Error
    if (value == null) {
        return value;
    }
    return `-- ${value.trim()} --`;
}

// Now within the function, if we try to access the value is a string.

// For example, try to call the string trim method.

// We get a compile time error from TypeScript.
// And if you look at the error message, you can see the typescript is complaining that value might be
// null or undefined.

// Now, using what we've learned just right now, we can isolate null and undefined from value by using
// a double equals null check.

// And in that particular case, we simply return the value back to the caller.

// And if that condition is false, TypeScript now understands that value must be a string and will allow
// you to safely call the trim method.

// And now we have a nice decorate function that can work with strings as well as with null and undefined
// with complete compile time type safety.
console.log(decorate('Hello')); // -- Hello --
console.log(decorate('Hello World ')); // -- Hello World  --

console.log(decorate(null)); // null
console.log(decorate(undefined)); // -- undefined --

// Now, one final thing worth mentioning is that null and undefined are only enforced as distinct types

// when the district configuration has strict set to true or more specifically, the sub option, strictNullChecks is set to true.

// this is true in the default configuration created by TypeScript anyways, and I highly recommend
// that you leave it as is for maximum type safety?
