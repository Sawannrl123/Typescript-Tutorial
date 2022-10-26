// Here we have a type representing a point in two dimensional space with members X and Y of type number.
type Point2DInterSection = {
    x: number,
    y: number
}

// Now, within our library, we also want to express point in three dimensional space and we have the
// members X, Y and Z of type number, notice the duplication between the members X and Y of point 2D and
// point 3D within the same code base.
type Point3DInterSection = {
    x: number,
    y: number,
    z: number
}

// Now, you might be familiar with the concept of class inheritance.

// Intersection types behave in a similar way and allow you to combine the features of any two given types

// so we can remove the duplication of the X and Y members in the point 3D type and simply use a type
// intersection with the point 2D by using the ampersand operator.
type Point3DInterSection2 = Point2DInterSection & {
    z: number
}

// Here we are saying that Point 3D has all the members of 2D and the member Z of type number.

// Now of course we can change multiple types with multiple ampersand signs and additionally we can use intersection
// types inline.

// Let's look at another example here.

// We have three types, a type person with the member name of type string A type email with a member email
// of type string and a type phone with the member phone of type string.
type PersonIntersction = {
    name: string,
}

type EmailIntersction = {
    email: string,
}

type PhoneIntersction = {
    phone: string,
}

type ContactDetailsIntersection = 
    & PersonIntersction
    & EmailIntersction
    & PhoneIntersction;

// We have this utility function that uses the name, the email and the phone to contact an individual.
function contact(details: ContactDetailsIntersection) {
    console.log(`Dear ${details.name}. I hope you received our email at ${details.email}. We will call you at ${details.phone} shortly.`);
}

// Now we can enforce that. The contact function is called with all the correct details by using an intersection type, combining
// the members of person, email and phone.

// And now we get to invoke the contact function with complete compile time type safety.
contact({
    name: 'Sawan',
    email: 'sawan.kumar@olx.com',
    phone: '1337'
})

// And if there are any type errors, for example, a missing member, we get a nice compiler error from TypeScript.

// Now, one final thing worth mentioning is just like type unions, we can extract an intersection type
// into a type Alia's and we previously saw this usage in point 3D as well.

// Similarly, we can add a leading ampersand before a type intersection and it has no impact on the semantics
// of the type. And is there purely for readability purposes.
