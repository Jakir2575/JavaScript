// ++++++++ Array +++++++

// e.g.   
// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

// for (let city of cities) {
//     console.log(city.toUpperCase());
// } 

// Q. For a given array with marks of students -> [85, 97, 44, 37, 76, 60];
// Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// Q. For a given array with prices of 5 items -> [250, 645, 300, 900, 50].
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items [i] = items [i] - offer;
//     console.log(`value after offer = ${items [i]}`);
//     i++;
// }

// Using for loop :

//let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//     let offer = items [i] / 10;
//     items [i] -= offer;
// } 
// console.log(items);

// ++++++++++ Array methods in javascript ++++++++++

// 1. Push() : Add to end.

// let foodItems = ["potato", "apple", "litch", "tomato"];
// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems);

// 2. pop () : Delete fron end and return

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.pop();
// console.log(foodItems);

// 3. tostring() :  converts array to string

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems.toString());

// 4. Concat () : joins multiple arrays and returns

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes =["superman", "Batman"];
// let heroes =  marvelHeroes.concat (dcHeroes);
// console.log(heroes);

// 5. Unshift () : Add to start 

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

// 6. Shift () : 

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.shift();
// console.log(marvelHeroes);

// 7. slice () : returns the piece of the array. (startIdx, endIdx)   -----Idx-> Index

//  let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.Strange"];
//  console.log(marvelHeroes.slice(1, 3));

// 8. splice () : change original array (add, remove, replace)

 // let arr = [1, 2, 3, 4, 5, 6, 7];
//   arr.splice(2, 2, 101);
//   console.log(arr);

  // Add Element :

//   arr.splice(2, 0, 101);
//   console.log(arr);


  // Delete Element :

//   arr.splice(3, 1);
//   console.log(arr);

  // Replace Element :

//   arr.splice(3, 1, 101);
//   console.log(arr);

// 9.  (.of method ) :

//  let a = 12;
//  let b = 45;
//  console.log(Array.of(a,b));

// e.g. 2 

//   let a = [2, 3, 4, 5];
//   let b = [4, 5, 6];
//   let c = [9, 0, 6];
//   console.log(Array.of(a, b, c));

// 10. (.from method-) :

//  let str = 'jakir';
//  console.log(Array.from(str));

// 11. checking Array isArray :

//  let desi_heroes = ["shaktiman", "gunior-g", "bhai", "nagraj"];
//  let marvel_heroes = ["ironman", "thor", "captainamer", "antman"];
//  let allheros = [...desi_heroes, ...marvel_heroes];
//  console.log(allheros);


// console.log(Array.isArray(desi_heroes));



  // +++++++ Spread Operator ++++++++

  // let desi_heroes = ["shaktiman", "gunior-g", "bhai", "nagraj"];
  // let marvel_heroes = ["ironman", "thor", "captainamer", "antman"];
  // let allheros = [...desi_heroes, ...marvel_heroes];
  // console.log(allheros);



// +++++++++ Classes and Objects ++++++++++++

// const mySym = Symbol("Key1")

// const jsUser = {
//   name: "Jakir",
//   fullName: "Sayyad Jakir",
//   [mySym]: "myKey1",
//   age: 25,
//   location: "Pune",
//   email: "jakir@gmail.com",
//   IsLoggedIn: false,
//   lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(jsUser)
//console.log(jsUser[mySym])

// let employeeDetail = {
//   name: "Jakir",
//   age: 25,
//   designation: "Software engineer",
//   isLoggedIn: true
// }
// console.log(employeeDetail);
// console.log(employeeDetail["age"]);

//  const student = {
//     fullName: "Sayyad jakir",
//     marks: 94.4,
//     printMarks: function () {
//        console.log("marks = ", this.marks);    // student.marks
//     },
//  };

//  const employee = {
//     calcTax () {
//         console.log("tax rate is 10%");
//     },
// };


// const karanArjun = {
//     salary: 50000,
// };

// karanArjun.__proto__ = employee;

//  +++++++++++++ Classes in js +++++++++++


//  class toyotaCar {
//    start() {
//          console.log("start");
//     }
//      stop() {
//          console.log("stop");
//      }
//  }

// let fortuner = new toyotaCar();

// Inheritance in js :

// class Parent {
//     hello () {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();

// e.g. PRACTICE QUETIONS : 

// Q. You are creating a website for your college. Create a class User with 2 properties, name and email.
//     It also has a method called viewData() that allows user to view website data.


// let DATA = "secret information";

// class User {
//     constructor (name, email) {
//         this.name;
//         this.email;

//     }

//     viewData () {
//         console.log("data = ", DATA);
//     }
// }

// let student1 = new User ("shraddha", "abc@email.com");
// let student2 = new User ("shraddha1", "abcd@email.com");


// Error Handling : 

// try-catch



// ++++++ object ++++++++++

// const person = {
//     firstName: "Jakir",
//     lastName: "Sayyad",
//     age: 25
// }

// //person.firstName = "Mr. Jakir";     // Update firstName
// //person.company = "Ojassoft";        // Add new key and value
// //delete person.age;                  // delete key and values

// //console.log(person["firstName"]);
// console.log(person);


// 1. Update key and value :

//   const person = {
//     firstName: "Jakir",
//     lastName: "Sayyad",
//     age: 25
//  }
//  person.firstName = "Mr. Jakir";  
//  console.log(person["firstName"]);


// 2. Add new key and value :

//  const person = {
//    firstName: "Jakir",
//     lastName: "Sayyad",
//      age: 25
//  }
//  person.company = "ojasSoft";
// console.log(person);

// 3. Delete key and value :


//  const person = {
//     firstName: "Jakir",
//     lastName: "Sayyad",
//     age: 25
//  }

// delete person.age;
//  console.log(person);



// ++++++ Nested object ++++++++

// const person = {
//     firstName: "Jakir",
//     lastName: "Sayyad",
//     age: 25,
//     address: {
//         street: "Baner Road",
//         city: "Pune",
//         country: "India",
//         zipCode: "411045"
//     }
// }

// console.log(person.address.city);

// console.log("firstName" in person);    // Boolean output


// ++++++++ Global Execution Context +++++++++++++

//  const globalVar = 'I am a global variable';

//  function greet(name) {
//    const greeting = 'Hello'; // Variable in the greet function's scope
//    console.log(`${greeting}, ${name}!`);
//  }

//  greet('Alice'); // Output: Hello, Alice!


// console.log(val2);
// console.log(val1);
// console.log(result1);
// console.log(result2);


// var val2 = 5
// var result1 = addNum(val1, val2)
// var result2 = addNum(10, 2)
// var val1 = 10

// function addNum(num1, num2) {
//     let total = num1 + num2
//     return total
// }
// console.log(val2);
// console.log(val1);
// console.log(result1);
// console.log(result2);


// Callstack :

// function one() {
//     console.log("one")
//     two()
// }
// function two() {
//     console.log("two")
// }
// function two() {
//     console.log("two")
// }

// +++++++++ Hoisting +++++++++++ 


// Following two lines will run successfully due to javascript hoisting
// console.log(a);
// greet()
// function greet () {
//     console.log("Good Morning");
// }
// var a = 9;     // Declaration hoisted to the top but initialization is not
// console.log(a);


// e.g. 2--
// var a;
// console.log(a);
// var a = 5;

// GEC :

// let val1 = 10;
// let val2 = 5;
// function addnum (num1, num2) {
//     let total = num1 + num2
//     return total
// }
// let result1 = num (val1, val2)
// let result2 = addnum (10, 2)

// Hoisting :


// Lexical :


//  function outerFunc() {
//     var a = 10;
//  function innerFunc() {
      
//       console.log(a);
     
//   }
//      innerFunc();
//     }
  
//   outerFunc();

// Shadowing :

//  Shadowing is nothing but the overriding of one element to another is called as shadowing.

// e.g. 
  // var a = 100;
  //  {
  //   var a = 10;
  //   let b = 20;
  //  const c = 30;
  //   console.log(a);
  //  console.log(b);
  // console.log(c);
  // }
  // console.log(a);


  // Hoisting :

//  A procee where the variables declaration are moved to the top of their scope.

//  var a;   // interpreter declaration assume not the initialization
//   console.log(a);
//   var a = 5;
 
  
  // syntax error :

  // when const initializtion and declartion is not in one line it gives syntax error.

// const a;
// a = 10;
// console.log(a);


// Type error :

//  const a = 100;
//   a = 10;
//  console.log(a);

// symbol reserve two values at a same point :

// let sname = Symbol("abc");
// console.log(sname);
// let EmpDetails = {
//   empName: "xyz",
//   empid: 121,
//   [sname]: "pqr",
// }
// //console.log(EmpDetails);
// console.log(EmpDeatils[sname]);


// join method :


// const myarr = [0, 1, 2, 3, 4, 5];
// console.log(myarr);
// const newarr = myarr.join();
// console.log(newarr);


// split() method :

//  let abc =  "ojasSoft";
// console.log(abc.split("").join());


// function hoisting :

//  add();
//  function add () {
//   console.log();

//  }


// +++++++++++++++ Function and methods ++++++++++++

// Arrow Function :

// 1. Sum function :

// function sum (a, b) {
//   return a + b;
// }

// const arrowSum = (a, b) => {
//   console.log(a + b);
// }

// // 2. Multiplication function :

// function mul (a, b) {
//   return a * b;
// }

// const arrowMul = (a, b) => {
//   console.log(a * b);
// }

// Let's Practice :

// Q. Create a function using the "function" keyword that takes a String as an argument 
//    and returns the number of vowels in the string.

// function countVowels (str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" 

//     ) {
//       count ++;
//     }
//   }
//   console.log(count);
// }

// Q. Create an arrow function to perform the same task.

// const countVow = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//        char === "a" ||
//        char === "e" ||
//        char === "i" ||
//        char === "o" ||
//        char === "u" 
  
//    ) {
//    count ++;
//   }
// }
//   return count;
// }


//  callBackFunction (arr.forEach)  :

// let arr = ["Pune", "Delhi", "Mumbai"];

// arr.forEach ( (val) => {
//   console.log(val);
// });


// Let's practice :

// Q. Foe a given array of numbers, print the square of each value using the forEach loop. [2, 3, 4, 5, 6].

// let nums = [2, 3, 4, 5, 6];

// nums.forEach ((num)  => {

//   console.log(num * num);

// });


// +++++++++++ Map method +++++++++

// let nums = [67, 52, 39];

// let newArr = nums.map ((val) => {
//   return val * 2;
// })
// console.log(newArr);

// +++++++++++++ Filter method +++++++++++

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter ((val) => {
//   return val > 3;
// });

// console.log(evenArr);

// +++++++++++ Reduce method ++++++++

// Perform some operations and reduce the array to a single string value. It returns that single value.

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const output = arr.reduce ((res, curr) => {
//   return res + curr;
// });

// console.log(output);


// console.log(this);


// let age = prompt ("Enter your age");
// if (age >= 18) {
//   console.log("Mature");
// }.
// else{
//   console.log("Not Mature");
// }

// let string = "jakir"
// console.log(Object.getPrototypeOf(string))


// ++++++++++++++++ this keyword ++++++++++++

//console.log(this);


// function f1 () {
//   console.log(this);
// }
// f1();



// let a = {
//   name : "Jakir",
//   description : function () {
//     console.log(this);
//     let b = {
//       surName : "Sayyad",
//       fullName : function () {

//         console.log(this);

//       }
     

//     }

//     b.fullName();
//   }

// }
// a.description();


// let vishwesh = {
//   surname: "tanawade",
//   description: function () {
//        console.log(this);
//     let nikhil = {
//       surname: "wable",
//       description: function () {
//         console.log(this.surname);
//       }
//     }
//     nikhil.description();

//   }
  
// }

// vishwesh.description();


// ++++++++++ this keyword +++++++++++ (methods):

// 1. By itself : (refers to window object or global object in browser and in node {}.)

//console.log(this);

// 2. Inside object method :

// const obj = {
//   name : "Jakir",
//   lastName : "Sayyad",
//   fullName : function() {
//   return this;    // .name + " " + this.lastName;

//   }
// }

// console.log(obj.lastName);


// 3. Inside function :

// function f1() {
//    //console.log(this);
//    return this;
//    }
//    //f1();
//   console.log(f1());

// let a = {
//     name : "Jakir",
//     surname : "Sayyad",
//     description : function () {
//       console.log(this);
//       }

// }
// a.description();

// let a = {
//   name : "Jakir",
//   fullName : function () {
//     console.log(this);
//   }

// }
// a.fullName();

// ++++++++++ if else conditions for loggedIn  ++++++++++++


// let y = 7;

// if (y > 10) {
//   console.log("y is greater than 10");

// } else if (y > 5) {
//   console.log("y is greater than 5 but not greater than 10");

// } else {
//   console.log("y is 5 or less");
// }


// Creation Phase              |
// |-------------------------------|
// |   y = undefined               |
// |   (Variable declaration)      |
// ---------------------------------
// |   Execution Phase             |
// |-------------------------------|
// |   y = 7                       |
// |   (Variable assignment)       |
// |-------------------------------|
// |   if (y > 10) {...}          |
// |   else if (y > 5) {...}      |
// |   else {...}                 |
// |   (Control flow evaluation)   |
// |-------------------------------|
// |   Console Output:             |
// |   "y is greater than 5 but   |
// |   not greater than 10"       |
// |   (Execution of code)        |
// --------------------------------

// const isUserLogedIn = true;
// const IsDebitCardApply = true;
// const isUpi = true;

// // if (isUserLogedIn && IsDebitCardApply && isUpi) {
// //   console.log("proceed to payment");
// // } else {
// //   console.log("please check");
// // }
// const userLoggedWithGoogle = false;
// const userLoggedWithEmail = true;
// const guestUser = false;
// const telLoggedIn = false;

// if (userLoggedWithEmail || userLoggedWithGoogle || guestUser || telLoggedIn) {
//   console.log("logged in");
// }


// let y = 4;

// if (y > 10) {
//   console.log("y is greater than 10");

// } else if (y > 5) {
//   console.log("y is greater than 5 but not greater than 10");

// } else {
//   console.log("y is 5 or less");
// }

// Dangling else problem :

// function checkValue(a, b) {
//   if (a === 1)
//     if (b === 2)
//       console.log("a is 1 and b is 2");
//   else
//     console.log("a is not 1");
// }


// const b = new Boolean(false);
// if (b) {
//   console.log("b is truthy"); // "b is truthy"
// }

// +++++++++++++ Find empty array ++++++++++

// let a = new Array();
// console.log(a);

// let arr = [];

// if(arr.length===0) {
//   console.log("Array is empty");
// }
// else {
//   console.log("Array is filled");
// }

// +++++++++++++ Find empty object ++++++++++

// let myObject = {}; // Empty object

// if (Object.keys(myObject).length === 0) {
//   console.log("The object is empty.");
// } else {
//   console.log("The object is not empty.");
// }

// Object constructor :

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Creating new objects using the constructor
// const person1 = new Person('Alice', 25);
// const person2 = new Person('Bob', 30);

// console.log(person1); // Outputs: { name: 'Alice', age: 25 }
// console.log(person2); // Outputs: { name: 'Bob', age: 30 }


// Find empty object :


//  const myObject = {
//   firstName : "Jakir",
//     lastName : "Sayyad"
//  }
//  //console.log(myObject);
  
//   if(Object.keys(myObject).length > 0) {
//     console.log("myObject is not mpty");
//   }else {
//     console.log("myObject is empty ");
//   }


// let b =  [80, 6, 2, 1, 88, 90, 11, 3]
//     for(let i=0;i<b.length-1;i++){
//        for(let j=i+1;j<b.length;j++)
//             {
//                 if(b[j]<b[i])
//                 {
//                     temp = b[j]
//                     b[j]=b[i]
//                     b[i] = temp
//                 }
//             }
//         }
//     console.log(b)



// ++++++++ closure +++++++++

//   function fun1() {
//   let a = 5;

//   function fun2() {
//     console.log(a);
//   }
//   return fun2;
// }
// const abc = fun1();
// abc();


// Synchronous in js :

// console.log("first");

// console.log("second");

// Asynchronous in js:

// setTimeout (() => {
//     console.log("first");
//   },  2000);

//   console.log("second");

// var a;
// console.log(a);
// var a = 5;

// function fun1() {
//   let a = 5;
//   function fun2() {
//     console.log(a);
//   }
//   return fun2;
// }
// const abc = fun1();
// abc();

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i == 5) {
//       console.log("5 is my favorite number");
//       break;
//     }
//   }


// Continue and break :

// 1. break :

// for (let i = 1; i <=10; i++) {
//   if(i == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(i);
// }

// 2. continue :

//  for(let i = 1; i <=10; i++) {
//   if(i == 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(i);
// }


// +++++++ While loop +++++++

//  let arr = ["vishwesh", "software", "developer"];
// // let i = 0;
// // //arr.length = 3
// // while (i < arr.length) {
// //   console.log(arr[i]);
// //   i = i + 1;
// // }

// ++++++ do while ++++++ :

// let i = 1;
// do {
//   console.log(i);
//   i = i + 1;
// } while (i <= 10);

  //  function fun1() {
  //   let a = 5;
  
  //   function fun2() {
  //     return a;
  //   }
  //    return fun2;
  // }
  // const abc = fun1();
  
  //  console.log(abc());
  //  abc();


// Array Destructuring :

// [a, b] = [b, a]
// // console.log(a, b);


// Program for swapping two numbers :

// let a = 5;
// let b = 10;

// console.log(a);
// console.log(b);

// let temp = a;
// a = b;
// b = temp;
// console.log(a, b); 


// Higher order loop and maps :


// for of :

// let map = new Map();
// map.set("name", "Jakir");
// map.set("age", 25);
// map.set("city", "pune");
// map.set("name", "Vishwesh");

// for (let [key, val] of map) {
//     console.log(key);
  
// }

// console.log(map.get("name"));

// for(let v of map){
//   console.log(v);
// }

//console.log(map.keys());

// for (let key of map.keys()) {
//     console.log(key);
// }

// e.g.

// let arr = ["arr", "in", "23", "98"];
// for (let val of arr) {
//   console.log(val);
// }

// e.g.

// let arr = ["arr", "in", "2fdtydchdg", "98", "00"];
// for (let val of arr[2]) {
//   console.log(val);
// }

//e.g.

// let str = "Jakir";
// for (let val of str) {
//   console.log(val);
// }

// let map = new Map();
// map.set("name", "Jakir");
// map.set("age", 25);
// map.set("city", "pune");
// map.set("name", "Vishwesh");
// //console.log(map.get("name"));
// console.log(map);

// const myObject = {
//   'name' : 'Jakir',
//   'lastName' : 'Sayyad'
// }
// for (const [key, value] in myObject) {
//     console.log(key, value);
// }





// Q. 13. Implement shift, unshift and splice method without using inbuilt method.

// 1. Shift : (Single element delete)

// let arr = [1, 2, 3, 4];
// //let shiftElement = null;
// let newArr = [];

// for (let i=1; i<arr.length; i++) {
//             newArr[i-1] = arr[i];
// }

// console.log(newArr);


// Delete multiple element :

// let arr = [10, 11, 12, 13, 14, 15];
// let count = 4;
// let newArr = [];
// for(let i=count; i<arr.length; i++) {
//   newArr[i-count] = arr[i];

// }

// console.log(newArr);


// 2. Unshift :

// let arr = [1, 2, 3];
// let addElement = 4;
// let newArr = [addElement];

// for(let i=0; i<arr.length; i++) {
//   newArr[i+1] = arr[i];

// }

// console.log(newArr);


// 3. Splice : (Remove 13, 14, 15)

// let arr = [11, 12, 13, 14, 15, 16]
// let newArr = [];

// for(let i=2; i<=4; i++) {
//   newArr.push(arr[i]);
// }

// console.log(newArr);

//Q.12 - Implement push operation without using inbuilt Method :

// let arr1=[0,1,2,3,4,5];
// arr1[arr1.length]=6;
// console.log(arr1);

// Another method :

// let arr3 =[0,1,2,3];
// let arr4=[];
// arr4[0]=4;
//  for(let i=0; i<arr3.length; i++){
//     arr4[i+1]=arr3[i];                           
//  }
// console.log(arr4);

// Add multiple elements in array :

// let arr3 =[0,1,2,3];
// let elementAdd = [9,8];
// let arr4=[];

//  for(let i=0; i<arr3.length; i++){
//     arr4[i] = arr3[i];                           
//  }
//  for(let i=0; i<elementAdd.length; i++) {
//   arr4[arr3.length + i] = elementAdd[i];
//  }
// console.log(arr4);


// pop() operation without using inbuilt method :

// Single element delete :

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = [];
// for(let i=0; i<arr.length-1; i++) {
//   newArr[i] = arr[i];
// }
// console.log(newArr);

// Multiple element delete :

// let arr = [1, 2, 3, 4, 5, 6];       
// let count = 3;
// newArr = [];

// for(let i=0; i<arr.length-count; i++) {
//   newArr[i] = arr[i];
// }

// console.log(newArr);


// pop operation using array and spread operator :

// Original array
// let originalArray = [1, 2, 3, 4, 5];

// // Using splice and spread to insert elements at a specific index
// const indexToInsert = 2;
// const elementsToInsert = [6, 7, 8];

// // Splice: Remove 0 elements at indexToInsert, then insert elementsToInsert
// originalArray = [...originalArray.slice(0, indexToInsert), ...elementsToInsert, ...originalArray.slice(indexToInsert)];

//console.log(originalArray);

// let array = [1, 2, 3, 4, 5];
// let removedElements = array.splice(1, 2, 6, 7);
// let newArray = [...array];

// console.log(newArray); // Output: [1, 6, 7, 4, 5]
// console.log(removedElements); // Output: [2, 3]
