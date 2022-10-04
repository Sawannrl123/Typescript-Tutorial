// Here we have a type declaring a point in two dimensional space with the members X and Y of type number.
type PointRead = {
    x: number,
    y: number
}

// We create a const variable declaration for this point with the members, with X and Y, both pointing to the value zero
const pointRead: PointRead = {
    x: 0,
    y: 0
};

// using a const variable  declaration ensures that we cannot assign a different value to this variable.
// pointRead = { x: 1, y: 1 }; //Error

// However, in JavaScript, a const variable declaration does not prevent us from assigning different values
// to the members of the variable.
pointRead.x = 1;
pointRead.y = 1; 

// Fortunately, typescript gives us the opportunity to add a read-only modifier to different members of a type.
type PointRead2 = {
    readonly x: number,
    y: number
}
const pointRead2: PointRead2 = {
    x: 0,
    y: 0
};

// So if you make X as Read-Only, we can no longer assign to this property after the declaration.
// pointRead2.x = 1;//Error

// And of course we can do the same for the Y member to make that as Read-Only.

// And of course, marking a property as Read-Only gives you access to read the property, you just cannot assign it.
console.log(`${pointRead2.x}, ${pointRead2.y}`);

// The read-only modifier in typescript is a compile time only feature used for error checking and does not require any runtime JavaScript support.
// That's it for types.

// Now let's look at JavaScript classes here.
class AnimalRead {
    public readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// We have a simple javascript class called AnimalRead with the member name that can be initialized using the constructor.

// We create an instance of this class by passing in the name sheep.
const sheep = new AnimalRead('sheep'); 

// Now at this point we can read the name member as well as modify it.
console.log(sheep.name);

// For example, put a wolf in sheep's clothing.
// sheep.name = 'wolf' // Error

// Now, if you want to disallow the assignment of the name property after the constructor, we can use
// the same read-only modifier before the property name.

// And now if you try to write to the name property after the constructor, we get a compile time error
// from TypeScript.

// Now, just like other class access modifiers, public, private and protected, the read-only modifier
// in typescript is a compile time only feature useful compile time error checking and does not require
// runtime JavaScript support.

// Now one final thing worth mentioning is that we can combine read-only with other class member access
// modifiers, for example, public.
