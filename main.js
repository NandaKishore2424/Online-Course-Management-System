class User {
    constructor(id, name, email) {
        if (new.target === User) {
            throw new Error("Cannot instantiate abstract class User");
        }
        this._id = id;
        this._name = name;
        this._email = email;
    }

    login() {
        console.log(`${this._name} logged in.`);
    }

    logout() {
        console.log(`${this._name} logged out.`);
    }

    getRole() {
        return "User";
    }
}

class Student extends User {
    constructor(id, name, email) {
        super(id, name, email);
        this._enrolledCourses = [];
    }

    enroll(course) {
        this._enrolledCourses.push(course);
        course.addStudent(this);
        console.log(`${this._name} enrolled in ${course.title}`);
    }

    uploadAssignment(assignment, fileName) {
        assignment.submitAssignment(this, fileName);
    }

    getRole() {
        return "Student";
    }
}

class Instructor extends User {
    constructor(id, name, email) {
        super(id, name, email);
        this._teachingCourses = [];
    }

    createCourse(title, description) {
        const course = new Course(title, description, this);
        this._teachingCourses.push(course);
        return course;
    }

    gradeAssignment(assignment, student, score, feedback) {
        const grade = new Grade(student, assignment, score, feedback);
        assignment.assignGrade(student, grade);
    }

    getRole() {
        return "Instructor";
    }
}

class Course {
    static courseIdCounter = 1;

    constructor(title, description, instructor) {
        this.courseId = Course.courseIdCounter++;
        this.title = title;
        this.description = description;
        this.instructor = instructor;
        this.students = [];
        this.assignments = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
}

class Assignment {
    static assignmentIdCounter = 1;

    constructor(title, dueDate) {
        this.assignmentId = Assignment.assignmentIdCounter++;
        this.title = title;
        this.dueDate = dueDate;
        this.submissions = new Map(); 
        this.grades = new Map();      

    submitAssignment(student, fileName) {
        this.submissions.set(student, fileName);
        console.log(`${student._name} submitted ${fileName}`);
    }

    assignGrade(student, grade) {
        this.grades.set(student, grade);
        console.log(`Graded ${student._name}: ${grade.score} - ${grade.feedback}`);
    }
}

class Grade {
    constructor(student, assignment, score, feedback) {
        this.student = student;
        this.assignment = assignment;
        this.score = score;
        this.feedback = feedback;
    }

    getScore() {
        return this.score;
    }

    getFeedback() {
        return this.feedback;
    }
}

// Demo Usage
const instructor = new Instructor(1, "Dr. Smith", "smith@edu.com");
const student = new Student(2, "Nanda", "nanda@student.com");

const course = instructor.createCourse("OOP Design", "Learn Object-Oriented Design");
course.addAssignment(new Assignment("UML Diagram", "2025-07-30"));

student.enroll(course);

const assignment = course.assignments[0];
student.uploadAssignment(assignment, "nanda_UML.pdf");

instructor.gradeAssignment(assignment, student, 95, "Excellent work!");
