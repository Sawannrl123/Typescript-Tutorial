// Let's start off with the simple test of class that represents a person object.
class Person {
    public name: string;
    public age: number;
    constructor(
        name: string,
        age: number
    ) {
        this.name = name;
        this.age = age
    }
}

// Now, this class has two properties, name and age.

// Then we have a constructor with parameter name and age, and we use these parameters to initialize
// the class properties.

// now to demonstrate these properties
// We create a person called Edem to represent the first men to ever exist and then log out Adam's name and age.
const adam = new Person('Adam', 120000);
console.log(adam.name, adam.age); // 'Adam', 120000 

// Notice that there is duplication between the declaration of the properties and the constructor parameters.

// TypeScript allows us to get rid of this duplication by using parameter properties.

// So we get rid of the property declaration and we get rid of the property initialization.

// And then within our parameters we can actually declare them as properties by using the modifiers public,
// private, protected or read-only the strictest class parameters and declares properties for them and
// then also initializes them with the values that are in when creating class instances.
class Person2 {
    constructor(
        public name: string,
        public age: number
    ) {
    }
}

const adam2 = new Person2('Adam', 120000);
console.log(adam2.name, adam2.age); // 'Adam', 120000 
