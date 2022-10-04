// Here we have a basic typescript, source code with a single type annotation.
let messageString: string = 'Hello world';
console.log(message);

// now typescript, which is not something that can be run natively or node.

// So if you try to run it through it, you will actually get a syntax error.

// Of course, the simplest way to run any piece of typescript code is to first compiler to JavaScript,

// and we can do that by running npx tsc. And now once we have the output JavaScript,
// we can simply executed through node.

// Now if you want to skip this compile typescript to javascript, and then execute a process.

// There is an NPM package called ts-node. that can compile typescript of JavaScript on the fly and then
// executed through node in a single step.

// So in order to run this typescript source code, we simply run npx ts-node src/index.ts.

// This will bring in the ts-node package from the Internet and then executed locally.
// And you can see that the output matches what we expected.

// Now with any NBN package, if you want to skip this download from the Internet flow, you can install
// that package into your folder.

// So for ts-node node we simply run npm i ts-node and once the installation is complete, if we run the
// same command again, you can see that it executes much faster.

// Now, if you find yourself running some NPM command again and again, you can even move it into the
// package.json script section to give it a nicer name.

// So within our script section, we create an entry for start which will execute ts-node for source index.ts.

// D and now we can simply open up the terminal and run NPM start, which will in turn run T.S.A..

// And you can see that the output matches what we expected.


