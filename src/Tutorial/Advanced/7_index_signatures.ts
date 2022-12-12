// Here we have a JavaScript object with a single member, hello, you can access members of the JavaScript
// object using the string index.
const strs = {
    hello: 'World'
}

console.log(strs['hello']); // 'World'

// Similarly here we have an object, with the single member, 1337.
const nums = {
    1337: 'leet'
}

// We can access this member using a number index, similar to how you would do it in a JavaScript array.
console.log(nums[1337]); // 'leet'

// TypeScript allows you to access members of a javascript object using arbitrary string or number indexes by
// declaring an index signature.

// Here we are declaring a type whose instances you will be able to access using a key of type string and
// the members will be booleans.
type Dictionary = {
    [key: string]: boolean
}

// Alternert
type D2 = Record<string, boolean>;

// The type for the key can only be a string or a number, as those are the only ones that are safely supported
// by JavaScript.

// You are free to name the index member whatever you want.

// It is only used for developer documentation.

// Here you simply use the name key and in terms of values, you can put whatever you want.

// Here we simply use the type boolean.

// Now let's look at an example application of an index signature.

// Here we have a type representing a person with members, display name and email.
type PersonIndex = {
    displayName: string,
    email: string
}

// We can declare a type for a key value pair of username to persons using an index signature.
type PersonDictionary = {
    [username: string]: PersonIndex | undefined
}

// We can create an instance of this dictionary as a simple JavaScript object 
const persons: PersonDictionary = {
    sawan: { displayName: 'Sawan Nirala', email: 'sawan.kumar@olx.com' }
}

// here with pre initialized, it with a single key sawan and a corresponding person object.

// We can also assign to any given key afterwards.

// For example, here we are assigning a person to the key, test.
persons['test'] = { displayName: 'Test Demo', email: 'test.demo@olx.com' }

// We can also read the value at any given key using a javascript string indexer.
console.log(persons['john']);

// Additionally, we can use the JavaScript delete operator to delete the value at any given string index.
delete persons['test'];

// You're allowed to mix index signatures with other well-defined members.

// For example, here we are saying that the person dictionary must always have a member, sawan, of type
// person.
type PersonDictionary1 = {
    [username: string]: PersonIndex,
    sawan: PersonIndex
}

// So if we try to create a person dictionary without this member, typescript will give us a compile time
// error.
// const persons1: PersonDictionary1 = {
//     nirala: { displayName: 'Sawan Nirala', email: 'sawan.kumar@olx.com' }
// }// Error

// And if we get rid of this required member, the error will go away.

// Also, all additional members of a type of an index, it must confirm to the index signature.

// For example, if we try to create a member alfred of type Boolean typescript will complain that Boolean 
// is not assignable to the index signature, which is person.
/*type PersonDictionary2 = {
    [username: string]: PersonIndex,
    alfred: boolean
}*/ // Error

// So we can either change it to be of type person or just get rid of this member.

// Now you can always access this person dictionary with any given key.
const resultIndex = persons['missing'];

// However, if the key value is not present, the javascript runtime will return as the special value undefined
// console.log(resultIndex, resultIndex.email); // undefined, Error

// and existing something like an email of an undefined will result in a runtime error.

// However, notice the typescript is not catching this right now.

// If you want TypeScript to catch these mistakes, you can add a union of undefined to the value written
// by the index signature

// and now test it correctly highlights the potential error with a familiar message.
// Object is possibly undefined.

// Now, one more thing worth mentioning is that when we are assigning by a given string index typescript
// is still going to provide us with type safety to ensure that it is actually a person.
// persons['test'] = { displayName: 'Test Demo', emale: 'test.demo@olx.com' }; // Error

// For example, have you made a typo in the email member?

// And TypeScript has figured this out and provides a suggestion for the correct spelling of email.

