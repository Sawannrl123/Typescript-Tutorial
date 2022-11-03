// TypeScript allows you to create abstract classes, a concept that you might be familiar with from other
// programming languages.

// a class can be marked as abstract by using the extra keyword and then you get the ability to provide abstract members.
abstract class Command {
    abstract commandLine(): string;

    execute() {
        console.log('Executing:', this.commandLine());
    }
}

// For example, here we have an abstract method called command line.

// Now, the abstract members do not have any implementation, and the whole objective of an abstract class
// is for it to be inherited and then for the joint classes to provide an implementation for these abstract
// members.

// This means that within other portions of our abstract class, we get to assume that these members will
// be provided.

// Here, We have a dummy execute function that simply logs the command line to the console.
// But in a more real world scenario, it might spawn up an actual terminal process.

// So this abstract command class takes a particular command line from its child classes and then provides the
// reuseable functionality to execute that command line.

// So the main consumers of an abstract class, are classes that want to extend.

// here, we create a class called GitResetCommand that extends this command.

// Now, as soon as we extend the base abstract class, we get a compiler error.
// class GitResetCommand extends Command {} // Error

// And if you look at the compiler error message, you can see that it is complaining that the child class
// does not provide the functionality required by the abstract class, which is the command line method.

// So we go ahead and provide the command line and now we get the execute method for free.
class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard';
    }
}

// We can repeat the process for as many commands as you want, for example, the gitFetch command.
class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch --all';
    }
}

// So now we can create instances of the GitReastCommand and the GitFetchCommand and call the execute
// methods.
new GitFetchCommand().execute();
new GitResetCommand().execute();

// Now, one final thing worth mentioning that might be obvious is that you cannot create instances of
// an abstract class by itself.
// new Command(); // Error: Canot create an instance of an abstract class.

// The obvious reason is that an abstract class has abstract that is missing features.

// For example, here the command line method would be missing.
