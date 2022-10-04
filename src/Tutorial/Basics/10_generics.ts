/** A FIFO (First In First Out) collection */
// Here we have a simple JS class that implements a first in, first out collection, which is also known as queqe.
// it provides two methods Push to push items into the queue and pop to pop items out of the queue in a first in first out manner.
class QueueClass {
    data: any[] = [];
    push(item: any) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}

// Now this is a general-purpose queue And it's both items of any type.
// So we can push in a number and we can push in a string.
const queueObj = new QueueClass();
queueObj.push(123);
queueObj.push("Hello world");


// However, because it supports items of any type, when we pop up items from the queue we do not get any
// guarantees about what the type of that item will be at compile time.
console.log(queueObj.pop().toPrecision(1));
console.log(queueObj.pop().toPrecision(1)); // Runtime Error

// So developer's assumption of what popped out item might be, for example, in the second call based on the two precision call.
// It seems that the developer is expecting a number.

// However, since the type of the items in the queue was not constrained, we were allowed to push in a string.
// And this particular call will result in a runtime error, not in a language that does not support generics.

// We can overcome this issue by using class specialization.
class NumberQueue extends QueueClass {
    push(item: number) {
        super.push(item);
    }
    pop(): number {
        return super.pop();
    }
}

// So what we do is that we extend the base queue class with a class specially designed for a particular item
// type where we annotate the push and the items with that item type and within the method bodies, 
// we simply call the super class methods which support all the other types.

const queqeObj2 = new NumberQueue();
queqeObj2.push(123);
// queqeObj2.push("Hello World"); // Error

// Now when we expect to be working with numbers instead of using the base queue class, we create instances of this NumberQueue.
// And this highlights errors when we try to push in something that is not a number, 
console.log(queqeObj2.pop().toPrecision(1));
console.log(queqeObj2.pop().toPrecision(1)); 
// and therefore when we pop an item, we can be guaranteed that it will be of type number.

// Now creating this class specialisations specifically for the purpose of the annotation can quickly become cumbersome.

// For example, if we needed a queue of strings at this point,
// you would have to duplicate this code only to change the annotations from number to string.

// Fortunatly typescript does support generics and so we don't need to create these specialization classes.
// So let's create new class with generic

// We can add a generic type parameter as an argument to the queue class and then we can use this type to annotate push and pop functions
class QueueGeneric<T> {
    data: T[] = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}

// Now when we create instances of the queue class, we can pass in the generic type argument.
// For example, if you want a queue of numbers, we pass in the type number because we've annotated the push
// method to only accept items of Type T when we are passing the generic argument
// Number, this ensures that the instance will only accept items of type number for the push calls.
// So we get an error when we try to push a string and we can easily fix it.
const queueNumber = new QueueGeneric<number>();
queueNumber.push(123);
// queueNumber.push('Hello'); // Error

// And now our toPrecision call will work because we are only pushing numbers.
console.log(queueNumber.pop()?.toPrecision(1));
console.log(queueNumber.pop()?.toPrecision(1));

// So to summarize, generics allow you to add type arguments that can be used to enforce a relationship
// between different members of a piece of code.
// Here we are using a generic argument in the queue class and storing it in type T.
// We use this to ensure that only items of type T are accepted by the push method and subsequently returned from the pop method.