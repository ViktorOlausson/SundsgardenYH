// ============================================
// FILTER WORKSHEET - 1 HOUR STUDY ASSIGNMENT
// ============================================

// DATASETS
// --------

interface Student {
  name: string;
  age: number;
  grade: number;
  studiesBackend: boolean;
}

const students: Student[] = [
  { name: "Alice", age: 20, grade: 85, studiesBackend: true },
  { name: "Bob", age: 22, grade: 72, studiesBackend: false },
  { name: "Charlie", age: 19, grade: 90, studiesBackend: true },
  { name: "Diana", age: 21, grade: 68, studiesBackend: false },
  { name: "Eve", age: 20, grade: 95, studiesBackend: true },
];

interface Product {
  name: string;
  price: number;
  inStock: boolean;
  rating: number;
}

const worksheetProducts: Product[] = [
  { name: "Laptop", price: 6500, inStock: true, rating: 4.5 },
  { name: "Phone", price: 4995, inStock: false, rating: 4.8 },
  { name: "Tablet", price: 6000, inStock: true, rating: 4.2 },
  { name: "Watch", price: 30999, inStock: true, rating: 4.7 },
];

interface User {
  username: string;
  email: string;
  isActive: boolean;
  lastLogin: string;
}

const users: User[] = [
  {
    username: "john_doe",
    email: "john@example.com",
    isActive: true,
    lastLogin: "2024-01-15",
  },
  {
    username: "jane_smith",
    email: "jane@test.com",
    isActive: false,
    lastLogin: "2023-12-01",
  },
  {
    username: "bob_wilson",
    email: "bob@example.com",
    isActive: true,
    lastLogin: "2024-01-10",
  },
  {
    username: "alice_brown",
    email: "alice@demo.com",
    isActive: true,
    lastLogin: "2024-01-14",
  },
];

// ============================================
// LEVEL 1: EASY (Single Condition)
// ============================================
console.log("-".repeat(25) + " Easy " + "-".repeat(25));

// Question 1: Filter students who have a scholarship
// Your code here:
// can't do

const scholarship = students.filter((student) => student.grade > 70)
console.log(scholarship);

console.log("-".repeat(50));
// Question 2: Filter products that are in stock
// Use worksheetProducts instead of products
// Your code here:

const productsInStock = worksheetProducts.filter((product) => product.inStock) 
console.log(productsInStock);

console.log("-".repeat(50));
// Question 3: Filter students who are 20 years old
// Your code here:

const oldStudents = students.filter((student) => student.age >= 20)
console.log(oldStudents);

console.log("-".repeat(50));
// Question 4: Filter users who are active
// Your code here:

const isActive = users.filter((user) => user.isActive)
console.log(isActive);

console.log("-".repeat(50));
// Question 5: Filter products with price less than 500
// Your code here:

const cheap = worksheetProducts.filter((product) => product.price < 500)
console.log(cheap);

console.log("-".repeat(50));
// ============================================
// LEVEL 2: MEDIUM (Multiple Conditions)
// ============================================
console.log("-".repeat(25) + " Medium " + "-".repeat(25));

// Question 6: Filter students who have a scholarship AND grade above 85
// Your code here:
// can't do

const scholarship2 = students.filter((student) => student.grade > 85)
console.log(scholarship2);

console.log("-".repeat(50));
// Question 7: Filter products that are in stock AND have rating above 4.5
// Your code here:

const goodProd = worksheetProducts.filter((prod) => prod.inStock && prod.rating >= 4.5)
console.log(goodProd);

console.log("-".repeat(50));
// Question 8: Filter users with email ending in "example.com" AND are active
// Hint: Use .endsWith() method
// Your code here:

const usersEmail = users.filter((user) => user.email.endsWith("example.com"))
console.log(usersEmail);

console.log("-".repeat(50));
// Question 9: Filter students who are either 19 OR 20 years old
// Your code here:
console.log("student age 19/20");
const youngStudents = students.filter((student) => student.age === 19 || student.age === 20)
console.log(youngStudents);

console.log("-".repeat(50));
// Question 10: Filter products that are either out of stock OR priced above 600
// Your code here:
console.log("product sold out or expansive");

const weirdProd = worksheetProducts.filter((prod) => prod.price > 600 || !prod.inStock)
console.log(weirdProd);

console.log("-".repeat(50));
// ============================================
// LEVEL 3: HARD (Complex Logic)
// ============================================
console.log("-".repeat(25) + " Hard " + "-".repeat(25));

// Question 11: Filter students who have scholarship, are 20 or older, and grade is NOT below 80
// Your code here:

// can't do

console.log("-".repeat(50));
// Question 12: Filter products that are good deals (in stock, price < 500, rating > 4.5)
// Your code here:

//will return none because all procuts are over 500

console.log("-".repeat(50));
// Question 13: Filter users who logged in during January 2024 (lastLogin starts with "2024-01")
// Hint: Use .startsWith() method
// Your code here:

const userLogin = users.filter((user) => user.lastLogin.startsWith("2024-01"))
console.log(userLogin);

console.log("-".repeat(50));
// Question 14: Filter students whose names contain the letter "a" (case-insensitive)
// Hint: Use .toLowerCase() and .includes()
// Your code here:

const studentsNameWA = students.filter((student) => student.name.toLowerCase().includes("a"))
console.log(studentsNameWA);

console.log("-".repeat(50));
// ============================================
// BONUS CHALLENGE
// ============================================

// Question 15: Create a function that takes an array of students and a minimum grade,
// and returns only scholarship students above that grade, sorted by grade (highest first)
// Hint: Combine filter() and sort()
// Your code here:

//can't do

console.log("-".repeat(50));