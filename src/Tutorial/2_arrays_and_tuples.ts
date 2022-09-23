/**
 * Arrays And Tuples
 */
// Array
let array5: number[] = [1, 2, 3];
let array6: (number | string)[] = [1, 2, 'test'];
// All items in the array must match the type annotation
// Array can be of any length

// Tuples
// Sometime you might want to create array of fixed length
// Example of that is an array with the two numbers is used to represent point in space
// Fixed length array is commonly called tuples in programming gargens
// And Ts is supposed to creating tuples within its type system
let tuple: [number, number] = [0, 0];

// Useage, we can assign any arry of two numbers to this variable
tuple = [1, 1];
tuple = [2, 6];
// If we want to assign, less then or more then two numbers, it will give compile time error
// tuple = [5]; // Error: must be 2 items
// tuple = [5, 4, 3] // Error: must be 2 items

// Also, member of the array needs to match the type annotation
// tuple = ['elite', 1337]; // Error: must be number
