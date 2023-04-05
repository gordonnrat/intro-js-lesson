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

    // function doubleNumber(a) {
    //     let double = 2 * a;
    //     console.log(double);
    //     return double;
    // }

    // doubleNumber(10);

// 2. Create a squareNumber function expression that takes in 1 number parameter and returns the square

    // function squareNumber(a) {
    //     let square = a**2;
    //     console.log(square);
    //     return square;
    // }

    // squareNumber(5);

// 3. Create a productNumber arrow function that takes in 2 number parameters and returns the product of the 2 numbers

    // let productNumber = (a, b) => console.log(a * b);

    // productNumber(2,5);

/*
========== LESSON 3 - NUMBERS ==========
*/
// 1. Create a sumOfThree function statement that takes in 3 number parameter and returns sum.

    function sumOfThree(a,b,c) {
        let sum = a + b + c;
        console.log(sum);
        return sum;
    }

    sumOfThree(1,2,3);

// 2. Create a productofThree function expression that takes in 3 number parameter and returns the quotient.

    function productofThree(a,b,c) {
        let product = a * b * c;
        console.log(product);
        return product;
    }

    productofThree(1,2,3);

// 3. Create a getRemainder arrow function that takes in 2 number parameters and returns the remainder of the first number divided by the second number

    let getRemainder = (a,b) => console.log(a % b);

    getRemainder(5,2);

// 4. Create a getRootRounded function that takes in 1 number, and returns the absolute value's square root, rounded up. Note: negative numbers should have their absolute value taken to still work.

    function getRootRounded(a) {
        let rootRound = Math.ceil(Math.sqrt(Math.abs(a)));
        console.log(rootRound);
        return rootRound;
    }

    getRootRounded(-81);

// 5. Create a getRandom function that returns a random number from 1-100.

    function getRandom() {
        let random = Math.random() * 100;
        console.log(random);
        return random;
    }

    getRandom();

    /*
========== LESSON 4 - STRINGS ==========
*/
// 1. Create a getPersonStats function statement that takes in 3 Strings: name, job, age. The function should console log a statement such as "Hi my name is [NAME], I am [AGE] years old, and I am a [JOB]".

    function getPersonStats(name, job, age) {
        console.log(`Hi my name is ${name}, I am ${age} years old, and I am a ${job}`);
    }

    getPersonStats("Peter", "Actor", 54);

// 2. Create a sayFirstAndLast function expression that takes in 1 String parameter and console logs "the first character is: [firstChar] and last character is: [lastChar]".

    function sayFirstAndLast(string) {
        console.log("the first character is: " + string[0] + " and last character is: " + string[string.length - 1]);
    }

    sayFirstAndLast("trash");

// 3. Create a yellFruitNum arrow function that takes in 1 number parameter, 1 String that is a fruit parameter, and console logs the sentence "I have [number] [FRUIT]" in all caps.

    function yellFruitNum(num, fruits) {
        let sentence = "I have " + num + " " + fruits;
        console.log(sentence.toUpperCase());
    }

    yellFruitNum(5, "bananas");

// 4. Create a sliceFruit function that takes in a String of a fruit and console logs everything except the first 2 letters.

    function sliceFruit(fruits) {
        console.log(fruits.slice(2));
    }

    sliceFruit("apples");

// 5. Create a splitFruit function that takes in a String of a fruit and returns an array of the letters split into each index of the array.

    function splitFruit(fruits) {
        console.log(fruits.split(""));
    }

    splitFruit("apple");