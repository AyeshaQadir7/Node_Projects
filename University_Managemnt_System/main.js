"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
        this.courses = [];
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
class Department {
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student('Alice', 20, 12345);
const student2 = new Student('Lisa', 21, 12346);
const instructor1 = new Instructor('Emma', 30, 40000);
const instructor2 = new Instructor('Chris', 35, 45000);
const course1 = new Course(1, 'Web Development');
const course2 = new Course(2, 'App Development');
const department1 = new Department('Computer Science');
department1.addCourse(course1);
department1.addCourse(course2);
student1.registerForCourse(course1);
student2.registerForCourse(course1);
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(student1.getName()); // Output: Alice
console.log(student1.courses); // Output: [Course]
console.log(student2.getName()); // Output: Lisa
console.log(student2.courses); // Output: [Course]
console.log(instructor1.courses); // Output: [Course]
console.log(department1.courses); // Output: [Course, Course]
