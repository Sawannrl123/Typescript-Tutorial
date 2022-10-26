// Here we have a type representing a person with the member's name and email, both of type string.
type PersonModifier = {
    name: string,
    email: string,
    phone?: string
};

// Now, these members of the type are considered required members.

// In addition to required members.
// We can add an optional member with a question mark modifier.

// Hey, we've added an additional optional phone number to the person type.

// Now we can create an instance of the person type with all three members, or we can even create a person
// object with just the two required members leaving out the optional phone member.
const sawan: PersonModifier = {
    name: 'Sawan Nirala',
    email: 'sawan.kumar@olx.com',
    phone: '911'
};

const test: PersonModifier = {
    name: 'Test Account',
    email: 'testaccount@gmail.com',
    // phone: 111 // Error
}

// Now in javascript, if you try to access a property that hasn't been provided, the JavaScript runtime
// will return the special value undefined, typescript understands that and will automatically mark all
// optional members to also include the undefined type.
console.log(test.phone); // undefined

// Now, with optional members, we can leave them out, as we have done for the test object over here,
// or we can provide a member with the correct type.

// For example, provide a string for the phone, as we previously did for the sawan object as well.
// Or we can even provide an explicit, undefined value.

// It is still type checked, so anything other than the correct type, for example, providing a number when
// a string was annotated will result in a compile time error.

//now typescript also supports optional members on classes.

// Let's look at them with another example here.

// We have a class with required members X and Y of type number.
class PointModifier {
    // x: number; // Error
    // y: number; // Error
    // x: number = 0;
    // y: number = 0;
    x?: number;
    y?: number;
}

// Not because we haven't provided any default value for these X and Y members of Type number, nor have
// been initialize them in the class constructor. typescript is going to highlight this is a compiler error.

// Now we can fix that by initializing these values in the class constructor or we can provide an initialized inline.

// Alternatively, now that we understand optional members, we can remove the initial letter and simply
// mark these members as being optional.

// Now, because these members are optional, we can create an instance of the point class and not provide
// any initial values to the X and Y members.
const pointModifier = new PointModifier();

// And if we try to read these members, the javascript at runtime will return as the special value undefined
console.log(pointModifier.x); // undefined

// Once more typeScript understands that and automatically adds undefined to the number of possible values for optional members.

// This means that we can assign it the correct type, which in our case is number, or we can even assign
// it the special value undefined.
pointModifier.x = 0;
pointModifier.x = undefined;

// Now, one final thing worth mentioning for optional members types of classes is that null is not considered
// an optional value.

// So if we try to assign null to a particular member, it will result in a compile time error.
// pointModifier.x = null; // Error

// If you want to support null is a possible value for any of the members of your types of classes.

// You will have to add that as an explicit annotation, for example, using a union type.

