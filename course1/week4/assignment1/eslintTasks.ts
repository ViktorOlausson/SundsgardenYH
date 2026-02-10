// import fs from "fs";

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

const user = { name: "John" };
const sayHi = () => {
  return console.log(`Hi ${user.name}`);
};

const colors = ["red", "blue"];
colors.forEach((c) => {
  return console.log(`Color: ${c}`);
});

const items = [1, 2, 3];
const doubled = items.map((i) => {
  return i * 2;
});

type userType = {
  isAdmin: boolean;
};

const checkAuth = (user: userType) => {
  return user.isAdmin;
};

// const read = async (path: any) => {
//   try {
//     const data = await fs.readFile(path);
//     console.log(data);
//   } catch (err) {
//     console.log(`error was: ${err}`);
//   }
// };

const getData = async (url: any) => {
  try {
    const data: any = await fetch(url);
    return data.json();
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const process = (data: any) => {
  return data
    .filter((x: number) => {
      return x > 10;
    })
    .map((x: number) => {
      return x * 2;
    });
};

const timer = (ms: number) => {
  return new Promise((res) => {
    return setTimeout(res, ms);
  });
};

async function testTimer() {
  console.log("starting timer");
  await timer(1000);
  console.log("timer finished after 1 sec");
}

testTimer();
