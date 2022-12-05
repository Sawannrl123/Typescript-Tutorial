// TypeScript interfaces support, a feature called Declaration Merging.

// an example use case of that would be something like the node js framework called Express.

// The base request type, supported by Express, has a few properties, for example, body property.
// Express Base
export interface Request {
    body: any;
}

// Now, within our application code, when we handle an express request, we will have access to any of
// the properties that are declared on the request type.

// For example, we have access to this body property.
// Our App
function handleRequest(req: Request) {
    req.body
}

// Now, declaration merging allows a middleware, for example, json middleware to add additional
// properties to the request interface.
// Express JSON
export interface Request {
    json: any;
}

// typescript is going to merge the two declarations of the interface
// into a single type that has both of these properties.

// So in our, simply by importing the json middleware, you will get access to the json property
// on instances of the request interface.
function handleRequest1(req: Request) {
    req.body;
    req.json;
}

// Declaration merging is not something that is supported by type aliases.

// So if you are working with an API that requires that seamless structural extension, you will have to
// use an interface.

interface Box {
    height: number;
    width: number;
}
interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };
