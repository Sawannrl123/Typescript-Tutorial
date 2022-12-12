// Here we have a const variable called King that is storing the string Elvis.
const king = 'elvis';

// Now, we know that const in JavaScript ensures that we cannot assign a different value to the king
// variable.
// king = 'john' // Error

// And additional fact about JavaScript is that strings are immutable.
// That is, none of the methods on the string primitive type allow you to imitate the string value.
const upperCased = king.toUpperCase(); // king === 'elvis'

// TypeScript understands this fact and automatically infers the type of the king variable to be the literal
// Elvis.

// However, objects and arrays in JavaScript are not immutable.

// Here we have an object dave with two members name and role of type string and member skills of type array.
const dave = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbanging'],
}

// declaring the variable as a const ensures that we cannot assign a different value to the dave variable.
/* dave = {
    name: 'grohl',
    role: 'singer',
    skills: ['singing', 'drumming', 'headbanging'],
} */ // Error

// However, the object itself is still mutable so we can assign different values to the different members.
// For example, dave.name or dave.role and even modify arrays by its methods.
dave.name = 'grohl';
dave.role = 'singer';
dave.skills.unshift('singing');

// For example, dave.skills.unshift.

// Once more, TypeScript understands this fact and automatically infers the name and rules to be of type
// string so you can assign any string to them and the skills member to be a string array.

// Now, of course, from what we know before, we can create a type specific to the variable where we 
// have these members, but they are all marked as read only.

// However, there is another way you can achieve this effect without creating a type specific to this
// variable, and that is using a const assertion.
const dave1 = {
    name: 'dave',
    role: 'drummer',
    skills: ['drumming', 'headbanging'],
    test: {
        name: 'saw'
    }
} as const;

// dave1.name = 'grohl'; // Error
// dave1.role = 'singer'; // Error
// dave1.skills.unshift('singing'); // Error

// const assertions can be used on any value using as const.
// const assertions are essentially hints to the type
// inference that you wanted to infer the most immutable type possible.

// A const assertions does three things, it can worth any primitives
// to the literal types, any members of an object to read only members, and any arrays to read only tuples.

// And now any mutation's with the object will be highlighted as an error by typescript.

// In addition to providing immutability for objects, const assertions are also commonly required when you
// are working with objects that have literals members.

// Let's look at an example here.

// We have a function called layout that expects an object with 2 members, a member align which is
// restricted to a limited set of literal types and a member padding of type number.
type Setting = {
    align: 'left' | 'center' | 'right',
    padding: number
}
function layout(settings: Setting) {
    console.log('Performing layout:', settings);
}

// we create an example variable of such an object and then we invoke the layout function with this
// example.
const example = {
    align: 'left',
    padding: 0
}

// layout(example); // Error

// And even though the example variable follows the required structure, we get an error from TypeScript.

// If you hover over the error message, you can see the typescript is complaining that string does not
// confirm to the literal types that are required by the align member.

// The reason for this error is that for the object example, typescript has inferred the align member
// to be of type string.

// this is consistent with what we saw in our previous dev sample.

// We could fix it with an explicit type annotation for the example variable or as we saw before, use
// the const assertion.
const example1 = {
    align: 'left',
    padding: 0
} as const;

layout(example1);

// With this assertion in place, the align member is inferred to be the literal type left and the arrow
// goes away.

// We notice that all the members of the object have become read-only and padding is also inferred to be
// the literal type zero.

// As mentioned before, the const assertion can be applied on any value and we can be more specific where
// we want to apply the const assertion.

// since we only need the align member to be inferred as the literal type
// and we don't want to change the other members to the literal types or read-only properties, we can
// apply that assertion just to the left string.
const example2 = {
    align: 'left' as const,
    padding: 0
};

layout(example2);

// And now only the align member is inferred to be the literal left in all of the members remain untouched.

// So when you are using a const assertion to fix an error, it is always recommended that you applied 
// at the most specific point possible.

// Now, unlike other assertions which essentially silence unsafe, code const assertion are just hints that
// increased safety by limiting the mutability, so you can use them without worrying about your type checking
// becoming unsafe.

