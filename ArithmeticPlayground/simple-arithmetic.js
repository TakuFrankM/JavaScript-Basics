/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 * Basic console arithmetic playground
 */

// Working numbers
let numA = 10, numB = 5, numC = 2;

// Addition
let sum = numA + numB;
console.log("Addition: " + numA + " + " + numB + " = " + sum);

// Subtraction
let dif = numA - numB;
console.log("Subtraction: " + numA + " - " + numB + " = " + dif);

// Multiplication
let product = numA * numB;
console.log("Multiplication: " + numA + " x " + numB + " = " + product);

// Division
let quotient = numA / numB;
console.log("Division: " + numA + " ÷ " + numB + " = " + quotient);

// Exponent
let exponent = numA ** numC;
console.log("Exponent: " + numA + " ^ " + numC + " = " + exponent);

// Modular Division
let remainder = numB % numC;
console.log("Modular: " + numA + " % " + numC + " = " + remainder);

// Compact pre incrementation and reduction: JS does arithmetic before accessing variable
console.log("Original [Pre arithmetic]: " + numC + ", increment: " + ++numC + ", reduce: " + --numC);

// Compact post incrementation and reduction: JS does arithmetic after accessing variable
console.log("Original [Post arithmetic]: " + numC + ", increment: " + numC++ + ", reduce: " + numC--);







