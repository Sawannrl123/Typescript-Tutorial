// Modern js allow us create variable with the const declarations 
const point: PointInSpace = { x: 0, y: 0 };

// ofcourse we can use type annotation with type declarations
type PointInSpace = { x: number, y: number }

// This will capture any mistake during the compile time 
// like missmatch of property or type

// we cann't reassign the value in the variable created with const

// point = { x: 1, y: 1 }; // Error
