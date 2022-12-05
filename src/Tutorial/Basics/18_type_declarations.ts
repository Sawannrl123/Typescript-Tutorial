// The standard way of accessing environment variables within node js is using process.
console.log('Logged in user', process.env.USER);

// And here we have a simple piece of code that logs out the logged in user.

// However, you can see that we are getting an error on the process variable.

// If you hover over the error, you can see that it is complaining that cannot find the name process.

// This is because the process is not defined anywhere within our code base and we expect it to be provided
// by the node js at runtime.

// That script provides the ability to declare any variables that are not present within the typescript code base

// for example, for the process variable. We can simply declare it as a variable of type any 
// declare const process: any; // Moved to env.d.ts

// the syntax for a type declaration is the same as the syntax for declaring any of the variable within
// your code base with key differences.

// First, we use the declare Keywood before declaring the variable, and then we cannot provide any implementation
// details as they are not really a declaration, but rather a definition.

// For example, if we try to provide a value for the process, variable types complain that you cannot
// provide any implementation within a declaration.
// declare const processDec: any = 'implementation details not allowed'; // Error

// TypeScript supports creating these declarations within a separate file as well.

// These files are called declaration files.

// A declaration file is simply a set of declarations and has the file extension .d.ts.

// so we can take the typed definition for the process variable and create a new file called env.d.ts

// and you are free to name your declaration files whatever you want, as long as they end .d.ts.

// And then we paste this declaration for the process variable.

// Now, in addition to this process variable, there are a lot of other node js runtime features as well.

// And we could keep going down this path of creating these declarations ourselves.

// But fortunately, there is a better way.

// So let's go ahead and delete this declaration file and compile the code using the typescript compiler.

// Now, you can see on the compiler output that not only does it tell you that it cannot find this process
// variable, but also provides the suggestion that you might want to install the type definitions using
// npm i --save-dev @types/node, now types is the name of an NPM organization owned by Microsoft, and packages under
// this organization are automatically deployed from a very popular community driven an open source project
// called Definitely Typed.

// One of the many type definitions is the one for node and we can install it by running npm i --save-dev @types/node.

// Once the installation is complete, you can see that the error for the process variable goes away and
// the same lack of errors can be observed if you compile a code using the typescript compiler.

// Now, if you go to the definition of the env variable within a code, you can see that it comes from a file
// called process.d.ts, which is a part of the package that we installed, which is @types/node.

// Now, the node js runtime also provides a number of built in modules as well, and one of them is for
// file system known as FS.

// Now, in order to use FS or any of the other modules, we simply imported within our code and use it
// as you normally would within JavaScript.
import fs from 'fs';
fs.writeFileSync('hello.txt', 'Hello World');

// Now, one great thing about this type definition's worth mentioning is that in addition to providing
// compile time type safety, they also provide great docs for all of the apps that you are using, for
// example, for this writeFileSync function.

// That's it for the node js built ins.

// Let's talk about third party packages that you might find on npm.

// Now, many of those packages are written in TypeScript, so you don't need to do anything special other
// than simply installing them in order to use them in your code base.

// There are, however, some packages that require an external type definition.
