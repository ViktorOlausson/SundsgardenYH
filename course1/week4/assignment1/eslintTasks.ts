const greet = (firstName: string) => {
  return `Hello ${firstName}`;
};

greet("Student");

const double = (n: number) => {
  return n * 2;
};

//console.log(`result${double(5)}`);

const isEven = (num: number) => {
  return num % 2 === 0;
};

//console.log(`Test: ${isEven(2)}`);

const square = (x: number) => {
  return x * x;
};

//console.log(`test: ${square(2)}`);

// This function calculates your are by subtracting the current year with your birth year
const getAge = (year: number) => {
  return 2026 - year;
};

const prices = [10, 20, 30];
let total = 0;

prices.forEach((p) => {
  return (total += p);
});
