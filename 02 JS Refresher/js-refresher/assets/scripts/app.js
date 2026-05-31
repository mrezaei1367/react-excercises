// import  { apiKey } from "./util.js";
// import apiKey from "./util.js";
// import  { apiKey, abc } from "./util.js";
// import  { apiKey, abc as content} from "./util.js";
// import * as util from "./util.js";

// console.log("API Key:", util.apiKey);
// variables
let userMessage = "Hello World";
// const userMessage = "Hello World";
console.log(userMessage);
console.log(10 === 5);

// functions
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

export default (name) => {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
};

// objects and classes
const user = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};
console.log(user.name);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

const user1 = new User("Bob", 25);
console.log(user1);
user1.greet();

// arrays and loops
const hobbies = ["reading", "coding", "hiking"];
console.log(hobbies[0]);

hobbies.push("cooking");
console.log(hobbies);
const index = hobbies.findIndex((hobby) => hobby === "coding");
console.log(index);

const editedHobbies = hobbies.map((hobby) => hobby + "!");
const editedHobbies1 = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);

// Destructuring
// const userNameData = ["Charlie", "Smith"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];
const [firstName, lastName] = ["Charlie", "Smith"];
console.log(firstName, lastName);

const { name: userName, age } = {
  name: "Alice",
  age: 30,
};
console.log(userName, age);

//Spread operator
const newHobbies = ["painting"];
const allHobbies = [...hobbies, ...newHobbies];
console.log(allHobbies);

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);

// Revisiting control structures

const password = promt("Enter your password:");
if (password === "secret") {
  console.log("Access granted");
} else if (password === "admin") {
  console.log("Access granted with admin privileges");
} else {
  console.log("Access denied");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const hobbiesList = ["reading", "coding", "hiking"];
for (const hobby of hobbiesList) {
  console.log(hobby);
}
// Dom manipulation
const list = document.querySelector("ul");
list.remove();

// using function as values
function handleTimeout() {
  console.log("Timer finished!");
}

const handleTimoout2 = () => {
  console.log("Timer finished2!");
};

// setTimeout(() => {
//   console.log("Timer finished!");
// }, 1000 );
SetTimeout(handleTimeout, 1000);
SetTimeout(handleTimoout2, 2000);

// define functions inside functions
function outerFunction() {
  console.log("This is the outer function.");

  function innerFunction() {
    console.log("This is the inner function.");
  }

  innerFunction();
}
outerFunction();

// Refrencing vs primitive values
let a = 10;
let b = a; // b is a copy of a
b = 20;
console.log(a); // 10
console.log(b); // 20

const obj1 = { name: "Alice" };
const obj2 = obj1; // obj2 references the same object as obj1
obj2.name = "Bob";
console.log(obj1.name); // Bob
console.log(obj2.name); // Bob

const lastHobbies = ["reading", "coding", "hiking"];
hobbies.push("cooking");
console.log(lastHobbies); // ["reading", "coding", "hiking", "cooking"]
