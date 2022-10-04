// Definging type of object is very much similar to the js object
let center: { x: number, y: number } = {
    x: 0,
    y: 0
};

let unit: { x: number, y: number } = {
    x: 1,
    y: 1
}

// Here both unit and center have same type defination
// Typescript gives us fesiablity to define type alias
type Point = {
    x: number,
    y: number
}

// now above statement can be transformed into
let center1: Point = {
    x: 0,
    y: 0
};

let unit1: Point = {
    x: 1,
    y: 1
}

// automatically assign type from the defination
let unit2 = {
    x: 1,
    y: 1
}

// type alias have 2 advantages
// 1. It allow us name our intent // Here our intent is to represent the point in space
// 2. It allow us to remove code deplicacy and greater code mailatiblity in a long run

