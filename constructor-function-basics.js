/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 *
 * Introduction to JS constructor functions similar to classes in OOP
 *
 */

function Person(first_name, middle_name, last_name, date_of_birth = new Date()) {
    this.first_name = first_name;
    this.middle_name = middle_name;
    this.last_name = last_name;
    this.date_of_birth = date_of_birth;
}

/**
 * Constructor function for a school subject
 * @param name Name of the subject
 * @param code identifying code of the subject
 * @param teacher person teaching the subject
 */
function Subject(name, code, teacher) {
    this.name = name;
    this.code = code;
    this.teacher = teacher;
    this.students = [];
}

// Dummy data
let teacher = new Person("Teacher", "Teach", "McTeacherson");
let intoJavaScriptSubject = new Subject("Into to JavaScript", "JS101", teacher);

// Creating and populating students
for (let i = 0; i < 5; i++) {
    let currentStudent = new Person("Student" + (i + 1), "Stu" + (i + 1), "Stud" + (i + 1));
    intoJavaScriptSubject.students.push(currentStudent); // Remember push and pop not add/append
}

// Display object
console.log(intoJavaScriptSubject);
