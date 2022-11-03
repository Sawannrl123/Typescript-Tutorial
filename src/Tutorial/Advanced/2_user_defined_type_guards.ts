// Here we have a type representing Square with the member size and a type of Rectangle with the members
// width and height, then we have a type shape which can accommodate both squares and rectangles in a utility
// function area in order to discriminate between the square and the rectangle.
// We check if it has a member size to determine if it's a square and we check if it has a member width
// to determine if it's a rectangle.
type SquareGuard = {
    size: number,
}

type RectangleGuard = {
    width: number,
    height: number,
};

type ShapeGuard = SquareGuard | RectangleGuard;

function areaGuard(shape: ShapeGuard) {
    if ('size' in shape) {
        return shape.size * shape.size;
    }
    if ('width' in shape) {
        return shape.width * shape.height;
    }
    const _ensure: never = shape;
    return _ensure;
}

// Now, these conditions are not explicitly clear that we are checking if something is a square or a rectangle.

// We have discussed before how we can improve the situation by adding a common member between square and
// rectangle of different literal types, thus forming a discriminated union.

// However, if we do not want to modify the types themselves, we can still get the readability benefit
// by creating user defined type cards.

// We start off by copying this condition into a utility function called isSquare.
function isSquare(shape: ShapeGuard): boolean {
    return 'size' in shape;
}

// Notice to this function returns a boolean value.

// A user defined type guard is simply a function that returns a boolean value and is annotated in the form
// parameter is type.

// For example, here we have the parameter as shape and the type Square.

// Here we are communicating with TypeScript and telling it that if this function return true, this
// means that shape is of type Square.
function isSquare1(shape: ShapeGuard): shape is SquareGuard {
    return 'size' in shape;
}

// Now, in terms of type inference, these user defined type guards behave exactly the same as the built
// in type guards offered by JavaScript.

// for example, to in operator.

// So we can replace the condition in our if block with a call to user defined type guards.
function areaGuard1(shape: ShapeGuard) {
    if (isSquare1(shape)) {
        return shape.size * shape.size;
    }
    if ('width' in shape) {
        return shape.width * shape.height;
    }
    const _ensure: never = shape;
    return _ensure;
}

// And now typescript understands that within the block.
// This means that shape must be a square and now we can repeat the process for the rectangle type.

// Creating a function isRectangle that is annotated to return.
function isRectangle(shape: RectangleGuard): shape is RectangleGuard {
    return 'width' in shape;
}
// Shape is rectangle and then internally simply checks if width is present in the input shape.
function areaGuard2(shape: ShapeGuard) {
    if (isSquare1(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    const _ensure: never = shape;
    return _ensure;
}

// And now we can replace a property type guard with a much more meaningfully named function called.