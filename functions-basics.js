/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 *
 * Introduction to JS functions
 *
 */

function outputHelloWorld() {
    console.log("Hello World!");
}

function getHelloWorld() {
    return "Hello World!";
}

// Function call to log hello world
outputHelloWorld();

// Function call to return and then output
console.log(getHelloWorld());

//Assigning a function to a variable (Function Expression)
let outputGreeting = function (name = "stranger") {
    console.log("Hi " + name);
}

outputGreeting("Frank");

// Arrow functions: Compact way of writing function
let getGreeting = (name) => "Hi " + name;
console.log(getGreeting("Compact Frank"))