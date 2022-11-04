// Here we have a JavaScript function that takes an input array and then invokes sort in reverse to return
// reverse sorted array. 
function reverseSorted(input: number[]): number[] {
    return input.sort().reverse();
}

// We create an array of five numbers stored in a start variable.
const start = [1, 2, 3, 5, 4];


// Then we invoke this reverseSorted function and then stored the result in a result variable.
const resultSorted = reverseSorted(start);

// Now, at this point, our result is exactly what we expected it to be.
console.log(resultSorted); // [5, 4, 3, 2, 1]

// It is the five numbers in reverse sorted order.

// However, sadly, the reverseSorted function has also mutated our input array.
console.log(start); // [5, 4, 3, 2, 1]

// This is a very common mistake to make when beginning JavaScript development. 
// And the reason is that the sort and the reverse methods, in addition to returning the results,
// also muted the original array.

// Fortunately, with TypeScript, instead of declaring the input as a number array, we can declare it
// as a read only number array, and now any mutating methods will no longer be available on input.
function reverseSorted1(input: readonly number[]): number[] {
    return input.slice().sort().reverse();
}

// So if you want to use the sort and the reverse methods, the first thing that we will need to do is
// to create a copy of the input array using the built in slice method.

// This creates a new non-read only array, which can then be safely sorted and reversed and then returned.

// And now when we invoke this reverseSorted method on the start variable, the start variable is no longer
// mutated, which is very, very cool.
const resultSorted1 = reverseSorted1(start);

console.log(resultSorted1); // [5, 4, 3, 2, 1]

console.log(start); // [1, 2, 3, 5, 4]

// Now you might remember that for JavaScript arrays, TypeScript has a neat syntax which we prefer, as
// well as a more verbose array, generic syntax.

// The same is true for read-only arrays.
type Neat = readonly number[];
type Long = Array<number>;

// We prefer the neat syntax and you saw us already use that for the input parameter.

// But there is an equivalent read-only array generic interface.
type Long1 = ReadonlyArray<number>;

// Not typescript also supports read-only tuples and we've mentioned this before.
// The tuples are simply arrays with fixed length.

// So let's look at a couple example here.

// We have a tuple representing a point in two dimensional space with two members, both of Type number.
type PointTuple = [number, number];

// We create this utility function that accepts a given point and the distance to move in the X and Y dimensions
// and then update the values in the input tuple and then returns to modify tuple.
function movePoint(point: PointTuple, x: number, y: number): PointTuple {
    point[0] += x;
    point[1] += y;
    return point;
}

// So if we create a point with X and Y zero and move it by amount, 10 and 10 in the X and Y dimensions,
// we do get the moved point with 10 10.
const pointMoved: PointTuple = [0, 0];
const moved = movePoint(pointMoved, 10, 10);

console.log(moved); // [10, 10]

// However, this result in a side effect of mutating our input point also to 10 10, which makes a set
console.log(pointMoved); // [10, 10]

// // Now just like arrays, We can annotate a tuples as read-only by using the read-only modifier before the tuple declaration,
// and now any attempts to modify any given point will result in a compiler error.
type PointTuple1 = readonly [number, number];

// For example, here you can see that we cannot mutate the value.
function movePoint1(point: PointTuple1, x: number, y: number): PointTuple1 {
    // point[0] += x; // Error
    // point[1] += y; // Error
    return [point[0] + x, point[1] + y];
}

// So now we can fix this error by replacing our mutating implementation with an implementation that returns
// a new tuples created from the existing tuples, plus the moves in the X and Y dimensions.


// So now when we invoke the move method on an existing point, we no longer mutate the original point,
// which replaces set tears with tears of joy.
const moved1 = movePoint1(pointMoved, 10, 10);

console.log(moved1); // [10, 10]

console.log(pointMoved); // [0, 0]
