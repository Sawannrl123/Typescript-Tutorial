// Let's create two typescript types
// a type user with a member idea of type string
// and a type product with a member idea of type string
type User = { id: string };
type Product = { id: string };

// when we have 2 variables, one a user and another product.
let userObj: User = { id: 'user-asfef23' };
let productObj: Product = { id: 'product-fwefw575' };

// Now, the structure for the user and the product type is exectly the same
// i.e they both have a member ID of type string.
// TypeScript type system is structural, it does not care about the names of the types
// what this means is that the user and the product have the same type compatibility.

// This means that you can assign a user to a product or a product to the user 
// because they have the same structure.
userObj = productObj;
productObj = userObj;


// Now, lets take a another example
// Here, we have 2 types, a type for a point in 2D space with the member X and Y 
// and the type for a point in 3D space with the same member as well as an additional member Z of type number
type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

// Next, we create the variables, one of type points 2D and one of type point 3D 
let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

// and additional feature of the typescript structural type system is that 
// **extra information is OK
point2D = point3D;
// What this means is that we can assign a point 3D to a point 2D 
// because point 3D deos have the members that are required to point 2D, which is X and Y

// Now such an assignment can also happen indirectly

// For example, here we have a function that expects to be passes in a point 2D as an argument
// Now, because of point, 3D contains all the information that is required by point 2D.
function takePoint2D(point: Point2D) { 
    console.log(point);
}
takePoint2D(point3D);

// We can actually invoke this function with the point 3D without any compile time errors.
// **This is also called duck typing
// i.e, if it walk like a duck and quack like a duck, then it must be a duck.
// and the point 3D is all the walking talking features of a point 2D.

// Now a point 2D, on the other hand, does not have all the features that are required by a point 3D
// Specifically it is missing the property z of type number;

// Therefore, if you try to assign a point 2D to point 3D
// ts will raise a compile time error
/**Error */
// point3D = point2D; // Error

// And similarly, if there is a function that expects a point 3D and we try to pass in a point 2D
// we will get a compile time error from typescript
function takePoint3D(point: Point3D) { 
    console.log(point);
}
// takePoint3D(point2D); // Error

