/**
 * Instance Types
 */
// Now js despite being functional programming language at a scope
// Does support classes and there are number of built in classes for js runtime classes out there
// One of them is class for regular expression
let regexp: RegExp = new RegExp('ab+c');

// Another built in class that is used quite haviely with in js code is the class for an array
// Now array is something you used quite heavily, Js provide special syntext to create arrays
let array: number[] = [1, 2, 3];
let array2: Array<number> = [1, 2, 3];
let array3: Array<number|string> = [1, 2, 'test'];
let array4: (number | string)[] = [1, 2, 'test'];

// Modern js also come with additional collection classes.
// And one of them is Set class which is used for a unique set of items
let set: Set<number> = new Set([1, 2, 3]);
// We can initialized the set with the js array 
// and internally it will remove any duplicate items found within the array

// To define the types of these classes just use the class name

// In addition to this js built in classes you can make your own classes
// A first in first out collection
class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}

let queue: Queue<number> = new Queue();
// queue.push('Test'); // This will throw error
queue.push(5);

// We will read this in later.
// So, the detailed of this class is not that important.
