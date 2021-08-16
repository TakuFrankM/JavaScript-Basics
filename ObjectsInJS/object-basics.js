/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 *
 * Introduction to simple JS objects (similar to python dictionaries i.e. Key/Value pairs)
 *
 */

// Creating a simple person object
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

// Object with object properties
// Simple school subject with a teacher
let subject = {
    name: "Introduction to JavaScript",
    code: "JS101",
    teacher: person,
    students: []
}

// Outputs all information
console.log(subject);

// "?" property output: Avoids error when undefined
subject.teacher.middle_name = undefined;
console.log(subject.teacher.middle_name?.length)

