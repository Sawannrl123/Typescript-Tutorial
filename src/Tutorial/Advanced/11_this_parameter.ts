// Here we have a JavaScript utility method that is designed to double the value member of any given this.
function double() {
    // this.value = this.value * 2; // Error
}

// Now, you might be familiar that this is known as the calling context in JavaScript.

// It is an object that is implicitly passed into the function by the javascript at runtime, depending upon
// how the function is invoked.

// Let's look at an example, how we might use such a function.

// Here we are creating a JavaScript object with two members, a value member pointing to the number 10
// and a double member pointing to a utility function.

const valid = {
    value: 10,
    double
}

// So if you go ahead and invoke the double method on this JavaScript object, the JavaScript runtime will
// take this object and pass that into the function as this.
valid.double();

// So within the function body, validate.value will be changed to validate.value*2 

// so after the function Invocation is complete. valid.value will now be 20.
console.log(valid.value); // 20

// Now, even though this works, we haven't actually annotated what this needs to be within the double
// function and therefore it is not being enforced to any particular type by typescript.

// So if you were to have an object, we misspelled the value member, for example, here, we've misspelled
// it as valve.
const invalid = {
    valve: 10,
    double
}

// And then try to invoke the double method.
// It will result in undesirable runtime behavior.
invalid.double();

// However, we do not get any error from typescript.

// Now typescript support annotating what this should
// be within a particular function by using this parameter.
function double1(this: { value: number }) {
    this.value = this.value * 2;
}

// Here we are saying that within the double function, this should be treated as something that has a
// member value of type number.

// this type is enforced within the function body and also enforced when trying to invoke the double
// function.

// So when we try to invoke it on something that has a value member typescript allows it.

// However, if you try to invoke it on something that does not have the value member, for example, or
// invalid object typescript gives us a compile time error.
const invalid1 = {
    valve: 10,
    double: double1
}

// invalid1.double(); // Error

// If you look at the error message, you can see that typescript is complaining that value is missing 
// on this particular object.

// However, it is required to be present in order to invoke the double function.

// So now we can get rid of the error quite easily by fixing the typo in a value member.

// Now, there is one more thing to note about this parameter.

// It must be the first parameter within the function declaration.

// The reason is that this parameter is a fake parameter.

// That is, it is not a part of the generated JavaScript and only use for compile time checking.

// This is implicitly passed into the function by the JavaScript runtime and therefore does not need to
// be part of the generated JavaScript.

