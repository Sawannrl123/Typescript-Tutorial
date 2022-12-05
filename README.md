# Typescript

## _Prerequist_
`Js Concepts`
1. variables
2. arrays
3. objects
4. functions
5. arrow functions
6. destructuring

`Benifits`
1. Stitically typed
2. Code Completion
3. Refactoring
4. Shorthand Notaion

`Drawbacks`
1. Compilation
2. Discipline in Coding

>Compilation of TS into Js called Transpilation

## Setpup typescript development 
1. Make a folder with name typescript
2. Install node latest version
3. Verify node installation by running `node --version` in terminal
4. Go inside that folder and run `npm init -y` (_init project with the package.json file_)
5. Now install typescript by running `npm i typescript` (_to install it locally_)
6. `Or` you can also install typescript globally by running `npm i -g typescript`
7. Now init the typescript config by running `npx tsc --init --rootdir src --outdir dist` (_inti tsconfig.json file with the typescript compalitation options. src with the root dir and dist as a output dir_)
8. Now by running `tsc` it will compile your `src/index.ts` file into `dist/index.js` file.
9. Recommended IDE is vscode
10. To run typescript compiler in watch mode `npx tsc --watch`. It will compile ts on the fly.

## Notes
- Typescript can't be executed by nodejs or browser. It require compiler to convert ts to js.
- Type annotation in ts is only for development purpose. After compilation into js type annotation will be removed.
- After conversion into js. We can run js file with the node, like `node filename.js`.
- Key difference between js and ts is type annotation.
- If we try to assign number into string type variable, It will give compile time error.
- By using ts, ts will ensure that your code doesn't have any syntatic and type error.
- Typescript follows `pascal case` to define types and `lower case` for predefined types.
- All of the syntax of JavaScript modules is supported by TypeScript. (import and export)



## Refrence
[Youtube](https://www.youtube.com/watch?v=d56mG7DezGs)
[Udemy](https://naspers.udemy.com/course/typescript-for-professionals/learn/lecture/21434252#overview)
[Markdown](https://dillinger.io/)
[Github](https://github.com/Sawannrl123/Typescript-Tutorial)
[Sheet] (https://docs.google.com/spreadsheets/d/1w2DM0uuPmb8Bw4mEj83AgRxefUVHvAIoFxcrWoKwSAs/edit#gid=0)
