// Here we have a JavaScript function that takes an input array and then invokes sort in reverse to return

// reverse sorted array.

// We create an array of five numbers stored in a start variable.

// Then we invoke this reverse audit function and then stored the result in a result variable.

// Now, at this point, our result is exactly what we expected it to be.

// It is the five numbers in the sorted order.

// However, sadly, the reverse audit function has also mutated our input array.

// This is a very common mistake to make when beginning JavaScript development.

// And the reason is that the thought and the reverse methods, in addition to returning the results,

// also muted the original array.

// Fortunately, with TypeScript, instead of declaring the input as a number three, we can declare it

// as a read only number three, and now any meeting methods will no longer be available on input.

// So if you want to use the sort and the reverse methods, the first thing that we will need to do is

// to create a copy of the input array using the built in slice method.

// This creates a new nonmarried on the array, which can then be safely sorted and reversed and then returned.

// And now when we invoke this reverse audit method on the start variable, the start variable is no longer

// mutated, which is very, very cool.

// Now you might remember that for JavaScript arrays, TypeScript has a neat syntax which we prefer, as

// well as a more verbose array, generic syntax.

// The same is true for read-only arrays.

// We prefer the neat syntax and you saw us already use that for the input parameter.

// But there is an equivalent read-only array generic interface.

// Not typescript also supports read-only tuples and we've mentioned this before.

// The tables are simply arrays with fixed lines.

// So let's look at a couple example here.

// We have a table representing a point in two dimensional space with two members, both of Type No.

// We create this utility function that accepts a given point and the distance to move in the X and Y dimensions

// and then update the values in the input table and then returns to modify tuple.

// So if we create a point with X and Y zero and move it by amount, then and then in the X and Y dimensions,

// we do get the moved point with dentin.

// However, this result in a side effect of mutating our input point also to Tenten, which makes a set

// not just like arrays.

// We can annotate a table as read-only by using the read-only modifier before the table declaration,

// and now any attempts to modify any given point will result in a compiler error.

// For example, here you can see that we cannot mutate the value.

// So now we can fix this error by replacing or mutating implementation with an implementation that returns

// a new double created from the existing tuple, plus the moves in the X and Y dimensions.

// So now when we invoke the move method on an existing point, we no longer mutate the original point,

// which replaces asset use with tears of joy.

