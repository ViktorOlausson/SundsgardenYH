const greet = (firstName: string) => {
  return `Hello ${firstName}`;
};

greet("Student");

const double = (n: number) => {
  return n * 2;
};

console.log(`result${double(5)}`);

const isEven = (num: number) => {
  return num % 2 === 0;
};

console.log(`Test: ${isEven(2)}`);
