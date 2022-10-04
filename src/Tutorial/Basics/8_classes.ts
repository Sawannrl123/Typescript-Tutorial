// Let talk about JS classes
// We have a class animal with property name
// a constructor function that is used to create instance of this class
// and a method called move that takes the distance in meter and logs something to the console

class Animal {
    // private name: string;
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// Now we create a variable to store an instance of this class
// and then we can call methods on this instance.
let cat = new Animal('Cat');
cat.move(10);

// Now, TS already understands all the information that is present in the code right now
// but additionally, it allow us to annotate any of the properties,
// the parameters of the constructor, as well as the parameters of the methods
// as well as the return type 
// TS also allows fine grained access control of the properties and method of the class

// Now, by default, all properties and methods are public, which is the standard for JS.
// However, we can be explict about this access by using the public keyword before any of the properties

// Now, there might be some class members that we do not want to be accessible outside of the class body.

// For example, we might not want the name property to be accessible outside.
// cat.name = 'Dog'; // Error

// In order to limit the access of member only within the class body.
// we can use the TS keyword called private
// and now any access outside the class body resulting the compile time error

// Now, JS also supports class inheritance 
// so we can create a class called Bird that extends Animal
// and has an additional method called fly

class Bird extends Animal {
    fly(distanceInMeters: number): void {
        // console.log(`${this.name} flew ${distanceInMeters}m.`);// Error with private
        console.log(`${this.name} flew ${distanceInMeters}m.`); // can access with protected
    }
}

// Now, as mentioned, private members are only accessible in the class body
// So, we get the compile time error when we try to use the name property in the child class

// Typescript provides another access modifier called protected
// Which still keeps the member inaccessible on instances
// However, make it accessible within the class hierarchy so we can access in the child class

