/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 * Introduction to simple JS objects
 */

// Creating a simple object
let person = {
    first_name: "First",
    middle_name: "Middle",
    last_name: "Last",
    date_of_birth: "01/01/2000",
    'work years': 3
};

// Basic object output
console.log(person);

// Accessing object properties
// Via "." operator (with name of property)
console.log(person.first_name, person.middle_name, person.last_name);

// Via "[]" (with name of property in quotes) - useful for multi word property names, accessing from string variable.
// Property name with space.
console.log(person['work years']);

// Property name from string variable
let propName = "date_of_birth";
console.log(person[propName]);