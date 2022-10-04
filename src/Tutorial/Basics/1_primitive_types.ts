/**
 * Primitive Type
 */
 const isPresent: boolean = false; // holds any boolean values
 const magic: number = 66.66; // holds any 64 bit values
 const hello: string = 'world'; // holds any character values
 
 // In addition to these premitive
 // There are two special premitives for the absence of data
 
 const notDefined: undefined = undefined; // indicates value is not defined
 const notPresent: null = null; // indicates value is not present
 
 // Modern js also introduced two more premitives types
 const penta: symbol = Symbol('start'); // To create globally unique identifiers
 const biggy: bigint = 24n; // to hold arbeterly large whole numbers
 // bigint is not available lower then es2020 target compiler
 
 // typescript provides predefied lowercase type names for these js premitives
 // These names actually follow what theses types are called within the js spec.
 
 // If we are defining the value into the variable. 
 // Ts will automatically attotate that variable with matching type. 
 // And later if we want to assign differnt type of value
 // compiler throws error
 // If you want to use multiple type to be hold in a variable 
 // Use union types
 let text = 'string'; // here type of text will be string, because we assign string value at the time of decleration.
 // If we want to assign number in text it will throw error
 // text = 5; //Error 
 // If we want text variable to hold both number and string then we can use union type (Will read later)
 let textAndNumber: string | number = 'Sawan';
 textAndNumber = 5;
 
 