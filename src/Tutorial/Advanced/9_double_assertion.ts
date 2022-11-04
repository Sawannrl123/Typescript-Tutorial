// Here we have a type point2D with members X and Y of type number and that type point3D with members
// X, Y and Z of type number, and then we have a type person with the name and an email.
type Point2DDouble = { x: number, y: number };
type Point3DDouble = { x: number, y: number, z: number };
type PersonDouble = { name: string, email: string };

// Then we create variables of each of these three types so we can do some type comparison between them.
let point2: Point2DDouble = { x: 0, y: 0 };
let point3: Point3DDouble = { x: 10, y: 10, z: 10 };
let personDouble: PersonDouble = { name: 'Sawan Nirala', email: 'sawan.kumar@olx.com' }

// Remember, the types in typescript are structural.

// This means that we can assign a point3D to a point2D without any errors, because a point3D
// does have all the members that are required by a point2D, which is X and Y.
point2 = point3;

// However, we cannot assign a point2D to a point3D because a point3D requires a member Z.
// And this variable point2 simply does not have that.
// point3 = point2; // Error


// However, we can force this assignment to happen by using a type assertion.
point3 = point2 as Point3DDouble; // Ok: I trust you

// Here we are saying that dear typescript, I know you think this is a point2D, but trust me, it is a point3D.

// And TypeScript, being a nice companion, happily agrees with you and trusts you completely.

// However, this single assertion is sometimes not enough.

// Let's look at an example.

// We know that a point2 cannot be assigned to a person as there are no common members between them.
// personDouble = point3; // Error

// The same is true that we cannot assign a person to a point3.
// point3 = personDouble; // Error

// Because of this bidirectional incompatibility, If we try to assign a person to a point3,
// even with a single assertion, TypeScript will still complain.
// point3 = personDouble as Point3DDouble; // Error: I don't trust you enough

// And if you hover over the error message, you can see the typescript is saying that this is probably
// a mistake.

// But if you still want to do something like this, then add an additional assertion to unknown.
// And if you do this process of first asserting the unknown and then inserting to point3D, indeed,
// typescript trust us and does not check with any errors.
point3 = personDouble as unknown as Point3DDouble; // Ok: I doubly trust you

// Now, from our lesson on unknown, we can understand why this is working 

// unknown is allowed at least one way compatibility with all types, that is a variable of all types can be assigned to a variable of
// type unknown.

// So anything can be assigned to unknown.

// For example, a person and an unknown can be asserted as anything.

// For example, a point3D, so that is how a double dissolution works.

// And it goes without saying use it with caution and avoid it as much as possible.

// But it might help you migrate some JavaScript code.

