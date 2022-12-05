// Here we have a generic function that takes an object of type T and then returns the same object

function addFullName<T>(obj: T): T {
    return obj;
}

// At this point this function is a simple identity function.

// We can modify this function to return a shallow clone of the passed in object.

function addFullName2<T>(obj: T): T {
    return {
        ...obj
    };
}

// Here we are returning a new object and using the javascript spread operator to spread all the members of
// onj into the new one.

// In addition to returning all the members from obj, we can add an additional member called fullName of type String

// So we add that to the return type annotation and then provide a default value for the
// full name member in the return object.
function addFullName3<T>(obj: T): T & { fullName: string } {
    // return {
    //     ...obj,
    //     fullName: `${obj.firstName} ${obj.lastName}` // Error
    // };

     return {
        ...obj,
        fullName: ``
    };
}

// Now the purpose of the ad fullname function is actually to generate a fullname property by using the
// obj first name and the obj last name.

// At this point, TypeScript is complaining that it does not know what is intended by obj firstName and
// obj lastName, as these members are not declared any bit.

// In order to access these members from the obj of type T, we have to declare that the passed in obj 
// must confirm to a particular structure, and that is done by using a generic constraint.
type NameFields = {
    firstName: string,
    lastName: string
}
function addFullName4<T extends NameFields>(obj: T): T & { fullName: string } {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    };
}

// Here we are saying that type T must have all the members that are present in the type name fields.

// Of course we could declare this type in line, but let's just create a type alias to look our code
// bit clean.

// Now with this generic constraint in place, typescript will ensure that the object of Type T has the member's
// firstName and lastName of type string.

// Now let's demonstrate a usage of this function.

// So we invoke this function with an object that has a member email, a firstName and a lastName, all
// of type string.
const john = addFullName4({
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe'
});

// Now because of the function signature where it takes T and return the T, we are able to access any
// of the members of the originally passed in object, for example, the email field.

// In addition, in our return type annotation, you say that the return object will get this property
// fullname of type string and indeed we can access that on the returned John object.
console.log(john.email); // john@example.com
console.log(john.fullName); // John Doe

// Now the generic constraint extends name fields is allowing us to access the firstName and the lastName property within the function body.

// Additionally, it is enforcing that the passed in object should have these members firstName and lastName of type string.

// Let's look at an example where we fail to provide these members which are being enforced by the generic constraint.
// const jane = addFullName4({ firstName: 'Jane' }); // Error

// Typescript immediately reports this as an error.

// And if you look at the error message, it is telling you that the lastName property is missing in this
// object that is being passed into addFullName.

// Armed with this information, we can provide the lastName for Jne, which in our case is Austin,
// and now the error goes away because everything is fine.
const jane = addFullName4({ firstName: 'Jane', lastName: 'Austin' });
