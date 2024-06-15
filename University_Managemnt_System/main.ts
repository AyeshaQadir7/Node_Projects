class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  getName(): string {
      return this.name;
  }
}

class Student extends Person {
  id: number;
  courses: Course[];

  constructor(name: string, age: number, id: number) {
      super(name, age);
      this.id = id;
      this.courses = [];
  }

  registerForCourse(course: Course): void {
      this.courses.push(course);
  }
}

class Instructor extends Person {
  salary: number;
  courses: Course[];

  constructor(name: string, age: number, salary: number) {
      super(name, age);
      this.salary = salary;
      this.courses = [];
  }

  assignCourse(course: Course): void {
      this.courses.push(course);
  }
}

class Course {
  id: number;
  name: string;
  students: Student[];
  instructor!: Instructor;

  constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
      this.students = [];
  }

  addStudent(student: Student): void {
      this.students.push(student);
  }

  setInstructor(instructor: Instructor): void {
      this.instructor = instructor;
  }
}

class Department {
  name: string;
  courses: Course[];

  constructor(name: string) {
      this.name = name;
      this.courses = [];
  }

  addCourse(course: Course): void {
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

course1.setInstructor(instructor1)

console.log(student1.getName()); // Output: Alice
console.log(student1.courses); // Output: [Course]

console.log(student2.getName()); // Output: Lisa
console.log(student2.courses); // Output: [Course]

console.log(instructor1.courses); // Output: [Course]
console.log(department1.courses); // Output: [Course, Course]