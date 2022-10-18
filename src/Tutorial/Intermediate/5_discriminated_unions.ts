// A common use of literal types in typescript is to have a union of types which have a single shared field.

// This single shared field can be used to discriminate between the members of a union.

// Let's discuss this with an example here.

// We have two types, a square and a rectangle and then a union of the two types that allows us to work
// with either a square or a rectangle with simple utility functions.

type SquareU = {
    size: number,
};

type RectangleU = {
    width: number,
    height: number
};

type ShapeU =
    | SquareU
    | RectangleU

function areaU(shape: ShapeU) {
    if('size' in shape) {
        return shape.size * shape.size;
    }
    if('width' in shape) {
        return shape.width * shape.height;
    }
}

// Now, in our area utility function, we are currently using property checks to determine if a particular
// shape is a square or a rectangle.

// If it has a member size, then it is a square.
// If it has a member width, then it is a rectangle.

// Now, using this property existence checks, for example, checking if a shape has a member width, it does
// not intuitively tell us that we are thinking of the shape is a rectangle.
// This is where a discriminated union comes in.

// We can add a property kind with the same name to all of the types in the union, but with different litteral values.

// For example, we can add the property kind both to a square with the literal value square and then to
// a rectangle with the literal value rectangle.

type Square2U = {
    kind: 'square',
    size: number,
};

type Rectangle2U = {
    kind: 'rectangle',
    width: number,
    height: number
};

type Shape2U =
    | Square2U
    | Rectangle2U
    | Circle2U

function area2U(shape: Shape2U) {
    if(shape.kind === 'square') {
        return shape.size * shape.size;
    }
    if(shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    if(shape.kind === 'circle') {
        return Math.PI * (shape.radius ** 2)
    }
}

// And now, because all of the members of the shape have this property, we can access it off of any given shape.

// Additionally, when we try to access the property, TypeScript figures out that the only literal values
// that kind can be is either a square or a rectangle and will even provide nice autocomplete.

// And now if the kind is indeed a square, the transcript knows that a shape with a member size has been
// passed in.

// Similarly, if the shape that kind is a rectangle, then shape must be a rectangle with the members
// width and height.

// Discriminated unions are also easier to maintain when we need to add additional members.

// For example, if you decide to support the circle shape as well, we simply add the type circle with
// the member kind pointing to the literal circle.
type Circle2U = {
    kind: 'circle',
    radius: number
}

// Then we added to a shape union and if we ever want to operate on a circle, we simply check that the
// member is pointing to the literal circle.

// Now you are free to call the discriminating member whatever you want.

// And in addition to string literals, as we have done over here, you can also use other little types
// like a boolean or numerically true.

// Let's demonstrate that with another example.

// Here we have a type representing a validation success and then another type representing a validation
// failure and then a type validation result, which can either be a validation of success or validation
// failure.
type ValidationSuccess = {
    isValid: true,
    validatedValue: string
}

type ValidationFailure = {
    isValid: false,
    errorReason: string,
}

type ValidationResult = 
    | ValidationSuccess
    | ValidationFailure

// Now, both the success and the failure types have the same named member called isValid.

// The only difference is that in a validation success isValid, it is pointed to the literal true and in
// a validation failure, the isValid member is annotated to be the literal value false.

// Now, using a discriminated union for validation results as well as for network requests that might
// return a success or a failure is actually a great idea.

// For example, in this particular case, we will not be able to read the validated value unless we ensure
// that isValid is true.

// Now let's consider a utility function log result which wants to log out any form of validation results
function logResult(result: ValidationResult) {
    if(result.isValid) {
        console.log('Success, validated value:', result.validatedValue)
    }
    if(result.isValid === false) {
        console.log('Failure, error reason:', result.errorReason)
    }
}

// within the function. We can simply check if result that isValid is true.
// And if so, we know that it is a validated value and we can log that out.

// Otherwise, if isValid is false, then it must be a failure and we can log out the error reason.