let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;

function render(document: any) {
    console.log(document);
}


let numbers: number[] = [1, 2, 3];

numbers.forEach(n => n.toExponential)


let user: [number, string] = [1, 'Mosh'] //tuple - key values pair

// Enums

const small  = 1;
const medium = 2;
const large = 3;

const enum Size {
    Small = 1,
    Medium,
    Large
}

let mySize: Size = Size.Medium;

console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 50_000) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10_000);

/**
 * Advance Types
 *      ||
 * => Type aliases
 * => Union and Intersections
 * => Type Narrowing
 * => Nullable type
 * => The unknown type
 * => The never type
 */

/* Type aliases -> Always follow Dry (Don't repeat yourself) principle. */

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

const employee: Employee = {
    id: 1,
    name: 'Sawan',
    retire: (date) => {
        console.log(date);
    }
}

/* Union Type */

type Weight = number | string;

// Note:- By defining the union type, Typescript compailer will combine the proerties of union types
// and shows only the comon suggestions.

// Like in this case, it will show the suggestion which are common to both number and string.
// Eg:- toLocaleString, toString, valueOf

/* Type Narrowing */

function kgToLbs(weight: Weight): number {
    // Narrowing
    if (typeof weight === 'number') {
        // Only shows options available on number object
        return weight * 2.2;
    } else {
        // Only shows options available on string object
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10');

/* Intersection Type */
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

/* Literal Type */
// Literal (exact, specific)
type Quantity = 50 | '100';
let quantity: Quantity = 50;
quantity = '100';

/* Nullable Type */
function greet(name: string | null | undefined) {
    if(name) {
        console.log(name.toUpperCase());
    } else {
        console.log('Namaste');
    }
}

greet(null);
greet(undefined);
greet('Sawan');

/* Optional Chaining */
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);

if (customer !== null && customer !== undefined) // Check might be increase
    console.log(customer.birthday);

// OR
console.log(customer?.birthday?.getFullYear()); // Optional Chaining

// Optional element access operator (Useful in case of arrays) 
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');

