/*
========== LESSON 1 - VARIABLES ==========
Complete the following numbered tasks:
*/

// 1. Declare 2 variables below:
    let age;
    let heads;
    let name;

// Initialize 3 variables:

    // 2. Assign one to the type Number below:
    age = 25;

    // 3. Assign one to the type Boolean below:
    heads = true;

    // 4. Assign one to the type String below:
    name = "John"; 

// console.log("Your name is " + name + " and you are " + age + " years old.")
// console.log("You flipped a coin and it is " + heads + " that it landed on heads.")

/*

========== LESSON 2 - FUNCTIONS ==========

*/

// 1. Create a doubleNumber function statement that takes in 1 number parameter and returns double the value.

function doubleNumber(a) {
    let double = 2 * a;
    console.log(double);
    return double;
}

doubleNumber(10);

// 2. Create a squareNumber function expression that takes in 1 number parameter and returns the square

function squareNumber(a) {
    let square = a**2;
    console.log(square);
    return square;
}

squareNumber(5);

// 3. Create a productNumber arrow function that takes in 2 number parameters and returns the product of the 2 numbers

let productNumber = (a, b) => console.log(a * b);

productNumber(2,5);