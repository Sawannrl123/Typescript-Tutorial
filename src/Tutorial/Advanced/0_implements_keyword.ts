// we have a type representing animals with the property name and animal voice.
type AnimalImp = {
    name: string,
    voice(): string,
};

// Now we can create utility functions that work on top of animals.

// For example, here, we have a log function that logs out the animal's name and voice.
function logAnimal(animal: AnimalImp) {
    console.log(`Animal ${animal.name}: ${animal.voice}`);
}

// Now we want to be able to use these utility functions on instances of classes, cat and dog.
class CatImp {}

class DogImp {}

// Now typescript can help ensure that cat and dog provide all the features required by an animal by using
// and implements Keywoods

// so we specified that class Cat implements Animal.
// class CatImp1 implements AnimalImp {} // Error

// And as soon as we do that, we get an error from TypeScript, the error message tells us that at this
// point, Cat is missing the following members required by animal.
// It is missing the name and a voice.

// Adding in implements, animal annotation is helping us ensure that we provide all the features that
// are required by an animal type, and now we can provide the features that are highlighted.

// for example,
// create a name parameter property and then provide the voice method.
class CatImp1 implements AnimalImp {
    constructor(public name: string){}
    voice() { return 'meow' };
}

// And now we can repeat the same process for the dog class adding implements animal 
// noticing the error message and then providing the members that are highlighted by the error message.
class DogImp1 implements AnimalImp {
    constructor(public name: string){}
    voice() { return 'woof' };
}

// And now, since no errors are being highlighted by implements animal, we can rest assured that instances
// of cat and dog can be used at any place where an animal is required.
log(new CatImp1('Salem'));
log(new DogImp1('Lassie'))
