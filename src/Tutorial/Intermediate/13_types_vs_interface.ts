// Here we have an interface representing the kind of properties that a UI input element might accept.

// for example, it has a member type which can be text or email, a current value for the input element
// and a method to handle changes to the value.
export interface InputProps {
    type: InputType,
    value: string,
    onChange: InputOnChange
}

// We can achieve the same effect using a typescript type alias.
export type InputPropsType = {
    type: InputType,
    value: string,
    onChange: InputOnChange
}

// And you can see that the body of the interface is a one to one correspondence with what we are assigning
// when creating the type alias

// now a great thing about aliases is that anything you put in a type position
// can be put as an assignment for a type alias.

// In fact, TypeScript even offers a refactoring that takes something in a type position and extracts it
// out to a type alias.

// So if you wanted, you can pick out the onChange handler into a name type.
type InputOnChange = (newValue: InputValue) => void;

// Similarly, you can create a type alias from privative types like string and reuse it in the onChange
// handler and you can even use the type alias for the union of text and email literals.
type InputValue = string;
type InputType = 'text' | 'email';

// Now, because interfaces must have a body, they do not support these short hand functions, syntax or
// the ability to create interfaces from primitive types.

// And if you want to give a name to a type union, you will have to use a type alias.

// Additionally, there are other advanced features like conditional types that we will look at in a future
// lesson, which are only supported by type aliases.

// So now let's take a step back and compare the pros and cons.
/*  
                Type                   |                    Interfaces
    Unions                             |    Declaration Merging          
    Intersctions (&)                   |    Familiarity (extends)
    Primitives                         |
    Shohrthand Functions               |
    Advanced Type Functions            | 
*/

// We have features that are only supported by type aliases and on the right we have features that are
// only supported by interfaces.

// So if you want any of the features that are shown on the screen right now, the choice will be made
// for you.

// But what about the common ground?

// Well, really, the choice is up to you.

// You can use whichever syntax you're more comfortable with and only use types or interfaces for the specific
// features that are shown on screen.

// Personally, my default stands is that I use types unless I need to use interfaces for a particular
// reason.

// For example, I'm working with an API that needs declaration merging or working in a code base that
// has deep, deep hierarchies, which extends feels a bit more natural than intersection types.

