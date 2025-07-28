# 🎓 Online Course Management System – OOP Mini Project

This project is a simulation of an **Online Course Management System** built using **Object-Oriented Programming (OOP)** principles.

It's designed as a mini-interview task to demonstrate skills in abstraction, inheritance, polymorphism, encapsulation, and class design for real-world systems.

---

## ✅ Objective

To design and implement a role-based system where:
- **Instructors** can create courses and assignments and grade student work.
- **Students** can enroll in courses and upload assignments.
- The system enforces **role-based access** and reflects real-world relationships using OOP.

---

## 🧠 UML Class Diagram

The UML diagram below was designed using PlantUML and shows the full structure of the system, including:

- Superclass `User`
- Subclasses `Student`, `Instructor`
- Associative classes: `Course`, `Assignment`, `Grade`
- Inheritance and association relationships
- Public/private access specifiers
- Method overriding (`getRole()`)

<img width="1241" height="1087" alt="image" src="https://github.com/user-attachments/assets/a3252b36-aa66-4fa8-aa9e-f5ae890e9612" />


---

## 💻 Code Overview (JavaScript)

The system is implemented in **JavaScript** using ES6 classes.

### 🔧 Classes & Responsibilities:
| Class       | Responsibility                                   |
|-------------|--------------------------------------------------|
| `User`      | Abstract base class with common fields & methods |
| `Student`   | Enroll in courses, upload assignments            |
| `Instructor`| Create courses, assignments, and grade students  |
| `Course`    | Holds students and assignments                   |
| `Assignment`| Tracks submissions and grades                    |
| `Grade`     | Stores scores and feedback                       |

### ✨ Key Features:
- Method overriding via `getRole()` (Polymorphism)
- Encapsulated fields using class methods
- Associations via arrays/maps (e.g., enrolledCourses, submissions)
- Dynamic ID generation for courses and assignments


---

## 🧪 Demo Flow

```javascript
1. Instructor logs in and creates a course
2. Instructor adds an assignment to the course
3. Student logs in and enrolls in the course
4. Student submits the assignment
5. Instructor grades the assignment
```

## OOP Principles Used

### Abstraction
Each class exposes only necessary functionality like login(), enroll(), or gradeAssignment() while hiding internal logic.

### Encapsulation
Fields are private (prefixed with _) and accessed through class methods to protect data integrity.

### Inheritance
Student and Instructor inherit from the abstract User class, allowing reuse of common behavior.

### Polymorphism
Both Student and Instructor override the getRole() method to return their specific role.

### SOLID Principles
S – Single Responsibility: Every class has only one purpose.

O – Open/Closed: The system can be extended (e.g., adding a TA or Admin class) without modifying existing code.

L – Liskov Substitution: Anywhere a User is expected, Student or Instructor can be used.

(Interface Segregation and Dependency Inversion are not directly applicable in this JavaScript model, but the design leans toward them in spirit.)

