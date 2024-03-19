//   let a ="3";
//   let b ="4"
//   let aConversion=Number(a);
//   console.log(typeof aConversion);
//   let bConversion=Number (b);
//   console.log(typeof bConversion);



/*console.log(true + 1);
console.log(true - 1);
console.log(true / 1);
console.log(true % 1);
console.log(true * 1);*/

// console.log("2" + 2 + 2);
// console.log(2 + "2" + 2);
// console.log(2 + 2 + "2" + 2);
// console.log(2 - 2 + "2" + 2);
// console.log(2 * 2 + "2" + 2);
// console.log(2 % 2 + "2" + 2);
// console.log("2" - 2);
// console.log("2" + 2);


//let fullName = "Ojas soft";
//console.log(fullName);

/*let a = 5;
console.log(a);
console.log(typeof a);*/

 //console.log(x);
//var x;

//1. Write a script with the following steps (the 'power'-operator is '**'):

// Compute the value of 250. Store it in the variable x1.
// Compute the value of 250 + 1. Store it in the variable x2.
// Compare x1 with x2. Are they equal?


//let x1 = 250;
//let x2 = 250+1;
//let x3 = (x1 == x2);
//console.log(x3);          //output = false

// 2. Repeat the previous exercise with 260 instead of 250.


/*let x1 = 260;
let x2 = 260 + 1;
//let x3 = (x1 == x2);
console.log(x3);*/    //output = false


// 3.Repeat the previous exercise with 1000 instead of 1.

/*let x1 = 260;
let x2 = 260+1000;
let x3 = (x1 == x2);
console.log(x3);*/          //output = false


// 5. Write a script with the following steps:

// Compute the value of one divided by three. Store the result in the variable x1.
// Show x1.
// Multiply x1 by three and store the result in x2.
// Show x2. Which value do you expect?

/*let x1 = 1/3;
console.log(x1);
let x2 = x1 * 3;
console.log(x2);  */  //output = 1
              

// 6. Write a script that shows that 5 and 5.0 are identical values.

/*let x1 = 5;
let x2 = 5.0;
let x3 = (x1 == x2);
console.log(x3);  */     // output = true


// 7. Write a script that asks the user how old he is: prompt(...)
// prompt() always returns a string. To perform the calculation, it's necessary to convert the answer to number parseInt(), parseFloat(), Number()
// if his answer is a numeric value, show how often his heart has beaten since his birth (approximately once per second)
// else, give a message like "Sorry. We need a numeric value to perform the computation."


// let a = prompt("Enter your age");
// let b = Number(a);
// console.log(typeof b);
// console.log(a);
// let output = a * 360 * 60 * 60;
// console.log(output);


/*let a = 8;
console.log(a);
b = (typeof a);
console.log(typeof b);*/

//isNaN Method

/*let a = "50";
let b = 10;
let c = 20;
let d = "Hello";
document.write(isNaN());*/


// let height = 26;
// let msg = "I am doing fine";
// console.log(isNaN(height));
// console.log(isNaN(msg));

//Datatype conversions

// let isLoggedIn = 1;         // 1 or true and 0 or false
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


// 1. Number data type :

// let a = 24;
// console.log(a);
// console.log(typeof a);

// let b = String(a);
// console.log(b);
// console.log(typeof b);


// Chapter-2  Operators and Conditional statements :


// Modulus operator (Remainder value is output)

// let a = 5;
// let b = 2;
// let c = a%b;
// console.log(c);


// Exponentiation operator  (a to the power b)


//   let a = 5;
//   let b = 2;
//   let c = a ** b;
//   console.log(c);

 // Unary operators

 // 1. Increment operator (symbol ++)

//  let a = 5;
//  let b = 2;
//  console.log("a=", a,  "& b=", b);
//  a = a + 1;   // a++;
//  b = b + 1;   // b++;
//  console.log("a = ", a);
//  console.log("b = ", b);

// 1. Post increment (a ++);

//   let a = 5;
//   let b = 2;
//   console.log("a=", a,  "& b=", b);
//   console.log("a++ = ", a++);
//   console.log("a = ", a);

      //  OR   
 //2. Pre increment (++a);   

//     let a = 5;
//     let b = 2;
//     console.log("a=", a,  "& b=", b);
//     console.log("++a = ", ++a);


// 2. Decrement operator (symbol a--)


//  let a = 5;
//  let b = 2;
//  console.log("a=", a,  "& b=", b);
//  a = a - 1;   // a--;
//  b = b - 1;   // b--;
//  console.log("a = ", a);
//  console.log("b = ", b);

// 1. Post decrement (a --);

//   let a = 5;
//   let b = 2;
//   console.log("a=", a,  "& b=", b);
//   console.log("a-- = ", a--);
//   console.log("a = ", a);


      //  OR   
//  Pre decrement (--a);


//  let a = 5;
//  let b = 2;
//  console.log("a=", a,  "& b=", b);
//  console.log("--a = ", --a);
//  console.log("a = ", a);


// Assignment operator

//  let a = 5;
//  let b = 2;
//  a += 4;  // i.e.   a = a + 4 
//  console.log("a = ", a);


// Comparison operators

// Equal to

// let a = 5;
// let b = 2;

// console.log("a == b", a == b);

// Not equal to

// let a = 5;
// let b = 2;

// console.log("a != b", a != b);


// JS allocates memory for this object in the heap. 
// The actual values are still primitive, which is why they are stored in the stack.

// const hobbies = ['hiking', 'reading'];
// const person = {
//       name: 'John',
//       age: 24,
//     };


// Arrays are objects as well, which is why they are stored in the heap.

// const hobbies = ['hiking', 'reading'];



// Primitive values are immutable, 
// which means that instead of changing the original value,
//  JavaScript creates a new one.


// let name = 'John'; // allocates memory for a string
// const age = 24; // allocates memory for a number

// name = 'John Doe'; // allocates memory for a new string
// const firstName = name.slice(0,4); // allocates memory for a new string



// Stack and Heap memory stored type:


// const person = {
//       id: 1;
//       name: John;
//       age: 25;
// }

// const dog = {
//       name: 'puppy';
//       personId: 1;

// }

// function getOwner(dog, person) {
//       return person.find((person)  =>
//             persin.id === dog.person

//       )
// }

// const name = 'John';
// const newPerson = person;


// Stack                                                   Heap


//                                                    {
//                                                       id: 1;
//                                                       name: John;
//                                                       age: 25;
//                                                    }


//                                                    {
//                                                       name: 'puppy';
//                                                       personId: 1;
                                                  
//                                                    }

//                                                    function getOwner(dog, person) {
//                                                       return person.find((person)  =>
//                                                             persin.id === dog.person
                                                
//                                                       )
//                                                 }
// / newPerson
// name = 'John'
// getOwner
// dog
// person


// In this picture, we can observe how different values are stored.
//  Note how person and newPerson both point to the same object.



// Cycles

// The problem with this algorithm is that it doesn't consider cyclic references. 
// This happens when one or more objects reference each other, but they can't be accessed through code anymore.


// let son = {
//       name: 'John',
//     };
    
//     let dad = {
//       name: 'Johnson',
//     }
    
//     son.dad = dad;
//     dad.son = son;
    
//     son = null;
//     dad = null;



//     stack                              Heap


//     dad = null                        son
//     son = null                        dad


//Call stack ::

// const addOne = (value) => value + 1;                                    
// const addTwo = (value) => addOne(value + 1);
// const addThree = (value) => addTwo(value + 1);
// const calculation = () => {                                                  addTwo(3)
//   return addThree(1) + addTwo(2);                                            addTwo(3)
// };                                                                           addTwo(1)
// calculation();                                                               calculation()
                                                                             
//                                                                              main()


// Note how each function call is being added to the call stack and removed once it finishes.                                                                            

// The order in which the stack processes each function call follows the LIFO principle 
// (Last In, First Out).


// What is a callback?

// A callback is a function that's passed as an argument to another function. 
// The callback will usually be executed after the code has finished.

// You can create callback functions yourself by writing functions that accept a function as an argument.
//  Functions like that are also known as higher-order functions. Note that callbacks aren't by default asynchronous.



// Let's have a look at an example:

// const a = () => console.log('a');
// const b = () => setTimeout(() => console.log('b'), 100);
// const c = () => console.log('c');

// a();
// b();
// c();


// setTimeout adds a timeout of x ms before the callback will be executed.


// stack memory :

//  let number1 = 23;
//  let number2 = number1;
//  console.log(number1);
//  console.log(number2);

// Heap memory :

//  let a = {
//        number1 : 24
//  }

//  let b = a;

//  console.log(a.number1);
//  console.log(b.number1);



//  let playerName =  "nikhil";
//  console.log(playerName);
//  console.log(playerName.indexOf('i'));


//Conditional statements ==

// 1. if statement :

// let age = 25; 

// if (age >= 18)   {
//       console.log("you can vote");
// }

// if (age <= 18) {
//             console.log("you can not vote");
// }

// let mode = "dark";
// let color;

// if (mode === "dark") {
//       color = "black";
// }

// if (mode === "light") {
//       color = "white";
// }
      
// console.log(color);


// 2. if-else statement :


// let mode = "white";
// let color;

// if (mode === "dark") {
//       color = "black";
// } else {
//       color = "white";
// }

// console.log(color);


// e.g.

// let age = 25;

// if (age >= 18) {
//       console.log("vote");
// } else {
//       console.log("not vote");
// }


// e.g.  even or odd :

// let num = 10;

// if (num % 2 === 0) {
//       console.log(num, "is even");
// } else {
//       console.log(num, "is odd");
// }


// syntax -> is nothing but rules.


// 3. else-if statement :



// let mode = "silver";
// let color;

// if (mode === "dark") {
//       color = "black";

// } else if (mode === "blue") {
//       color = "blue";

// } else if (mode === "pink") {
//       color = "pink";

// } else {
//       color = "white";

// }

// console.log(color);


// Ternary operator :

// let age = 16;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);


// Switch statement :


// const foo = 0;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// Logs 0 and 1


// practice questions :

// q1. 

// Get user to input a number using prompt("Enter a number"). Check if the number is a multiple of 5 or not ?


// let num = prompt("enter a number");

// if(num % 5 === 0) {
//       console.log(num, "is a multiple of 5");

// } else {

//       console.log(num, "is NOT multiple of 5");
// }

// q2.


// Write a code which can give grades to students according to their scores:

// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F


// let score = prompt("enter your score (0-100):");
// let grade;

// if(score >= 90 && score <= 100) {
//       grade="A";

// } else if(score >= 70 && score <= 89) {
//       grade = "B";

// } else if(score >= 60 && score <= 69) {
//       grade = "C";

// } else if(score >= 50 && score <= 59) {
//       grade = "D";

// } else if(score >= 0 && score <= 49) {
//       grade = "F";

// }

// console.log("according to your scores, your grade was :" , grade);






// Chapter-3 Loops and strings :


// 1. for Loop :

//  for (count = 1; count <= 5; count++) {
//       console.log("Apna college");
//    }

//  console.log("Loop has ended");


 //calculate sum of 1 to 5 :


// let sum = 0;
//  let n = 100;
// for (i = 1; i <= n; i++) {
//     sum = sum + i;
//  }

//  console.log("sum = ", sum);
//  console.log("Loop has ended");



// 2.  While loop :

//  let i = 1;
//  while (i <= 10) {
//        console.log("apna college");
//        i++;
//  }


// 3.  do-while loop :


//  let i = 1;
//  do {
//       console.log("i = ", i);
//       i++;
//  } while (i <= 5);


// for-of Loop : ( Special loop )


// let str = "ojassoft";

// let size = 0;
// for (let val of str) {   // i is iterator -> characters
//       console.log("val = ", val);
//       size++;
// }

// console.log("string size = ", size);



// for-in Loop :


// let student = {
//       name: "ojas soft",
//       age: 20,
//       cgpa: 7.5,
//       isPass: true
// };

// for (let key in student) {
//       console.log("key = ", key, "value = ", student[key]);
// }


// Practice questions :

// Q1. print all even numbers from 0 to 100?

//  for (let num = 0; num <= 100; num++) {
//      if (num%2 ===0) {   // for even numbers
//      console.log("num =", num);

//       }

//  }


// for odd numbers 

// for (let num = 0; num <= 100; num++) {
//       if (num%2 !==0) {   
//       console.log("num =", num);

//       }

// }


// Q2. Create a game where you start with any random game number. 
// Ask the user to keep guessing the number until the user enters correct value.

// let gameNum = 25;
// let userNum = prompt("Guess the game number : "); 

// while (userNum != gameNum) {
//      userNum = prompt("You entered the wrong number. Guess again : ");
// }

// console.log("Congratulations, you entered the right number");


// ++++++++++ Strings in javascript ++++++++++

// let str = "Ojassoft";
// console.log(str);
// console.log(str[3]);


// Template Literals :

// let specialString = `This is a template literal`;
// console.log(typeof specialString);

//   let obj = {
//       item : "pen",
//       price : 10,
// }; 

// let output = `the cost of ${obj.item}` is ${obj.price} rupees;
// console.log(output);
  


// ++++++++++ Special chapters ++++++++++++


// ++++++++++ String Literals +++++++++++

// let number1 = 23;
// //let number2 = number1;
// console.log(number1);
//console.log(number2);

// let a = 24;
// let b = a;       //-----{b=24}
// b = 54;
// console.log(a);
// console.log(b);


// let a = {
//       number1 : 24
// }

// let b = a;
// b = 54

// console.log(a);
// console.log(b);


//    let str = new String("jakir");
//    console.log(str)
//    console.log(str.substring(1,3));
//    console.log(str.slice(-4,3));
//    console.log(str.charAt(3));
//    console.log(str.includes("i"));
//    console.log(str.toUpperCase());
//    console.log(str.toLowerCase());



//  +++++++++++++ Array ++++++++++


// let a = new Array (2,3);
// console.log(a);

//   let a =  new Array(2,3,4,5,6);
// // //  a.push(45);
// // // console.log(a)
//    a.pop();
//   console.log(a);
//   a.unshift(88);
// console.log(a);
// //  a.shift();
// //  console.log(a);


//  let a = new Array (1,2,3,5);
//   a.splice(2,2,73);
//   console.log(a);



//  let desi_heroes = ["shaktiman", "gunior-g", "bhai", "nagraj"];
//  let marvel_heroes = ["ironman", "thor", "captainamer", "antman"];
//  let allheros = desi_heroes.concat(marvel_heroes);
//  console.log(allheros);


// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);





// +++++++ Spread Operator ++++++++

//  let desi_heroes = ["shaktiman", "gunior-g", "bhai", "nagraj"];
//  let marvel_heroes = ["ironman", "thor", "captainamer", "antman"];
//  let allheros = [...desi_heroes, ...marvel_heroes];
//  console.log(allheros);


//   // console.log(Array.isArray(desi_heroes));

// let str = 'jakirasasasassasaa';
// console.log(str.split('a'))

// console.log(Array.from(str));
 //console.log(Array.from(desi_heroes));
// let a = [2, 3, 4, 5];
//  let b = [4, 5, 6];
//  let c = [9, 0, 6];
//  console.log(Array.of(a, b, c));



//   let str = new String("Jakir");
//   console.log(str);
//   console.log(Object.getPrototypeOf(str));               
            
 
 




// +++++++++++ Numbers and it's prototypes in javascript +++++++++++++

//  let num = new Number(12345);
//  console.log(num);

// 1. toFixed :

//   let num = new Number(12345);
//   console.log(num.toFixed(2));

 // 2. toString :

//   let num = new Number(12345);
//   console.log(num.toString());
  

// 3. toPrecision :

//  let num = new Number(12345);
//   console.log(num.toPrecision(3));

// 4. toExponential :

//  let num = new Number(12345);
//   console.log(num.toExponential());


// +++++++++++++++ Maths +++++++++++++

//   console.log(Math);
//  //console.log(Math.abs(-4));
//  //console.log(Math.round(4.4));
//  //console.log(Math.ceil(4.2));
//  //console.log(Math.floor(4.8));
//   //console.log(Math.min(4, 3, 6, 8));
//  //console.log(Math.max(4, 3, 6, 8));
//  console.log(Math.floor(-9.2));

//  const min = 10;
//  const max = 20;

//  console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// +++++++ Date and Time in javascript +++++++++++

   //let myDate = new Date();
   //console.log(myDate);
 //console.log(typeof myDate);
 //console.log(myDate.toString());
 // console.log(myDate.toDateString());
// console.log(myDate.toISOString());
 //console.log(myDate.toJSON());
 //console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


//  let myCreatedDate = new Date (2023, 1, 25, 9, 5);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date ("01-14-2023");
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toJSON());

 //let newDate = new Date();
 //console.log(newDate);
 //console.log(newDate.getDate());
 // console.log(newDate.getDay());
//console.log(newDate.getFullYear());






// let a = 4;
// let b = a;
// console.log(a);




// let c = {
// a : 55
// }

// let d = c;
// d.a = 67
// console.log(c);
// console.log(d);

// console.log((3.2))


// ++++++ Objects in javascript ++++++



// let sym = Symbol(122)
// let employeeWork = {
//       Name: "Sayyad Jakir",
//       Location: "PushManager",
//       [sym]:144
// }

// console.log(employeeWork[sym]);
// console.log(employeeWork);


// 1. Object Literal :

// let car1 = {
//       name: 'Honda City',
//       manufacturer: 'Honda',
//       fuelCapacity: '40L',
//       isAutomatic: false,
//       greetMe: function() {
//             console.log("Hello from sayyad jakir");
//       }
// }

// console.log(car1.greetMe());


// 2. Using new keyword :

// let myDetails = new Object();
// myDetails.name = "Sayyad Jakir";
// myDetails.title = "Engineer at Microsoft | ex-flipkart | Developer";
// myDetails.expertise = ['#frontend', '#interview', '#javascript'];
// myDetails.followers = 15000;
// myDetails.greetMe = function () {
//       console.log("Hello from sayyad jakir");
// }


// console.log(myDetails);

// 3. using constructor method :

// {
//       instructor : "Sayyad Jakir";
//       title : "Javascript Foundations";
//       description : "JavaScript Programming Course";
//       language : "Hinglish";
//       fees : 'free';
//       startDate : '5 April 2023';

// }

// function Course (
//       instructor,
//       title,
//       description,
//       language,
//       duration,
//       fees,
//       startDate,

// )  {
//       this.instructor =  instructor;
//       this.title =     title;
//       this.description = description;
//       this.language =  language;
//       this.duration =  duration;
//       this.fees =  fees;
//       this.startDate = startDate;
// }

// let JavaScriptCourse = new Course(
//       "Sayyad Jakir",
//       "Javascript Foundations",
//       "Hinglish",
//       10,
//       'free',
//       '5 April 2023'
      
// )

// let fullStackCourse = new Course (
//       "Sayyad Jakir",
//       "Fullstack Development",
//       "Hinglish",
//       10,
//       'free',
//       '5 April 2023'
// )
// console.log(JavaScriptCourse, fullStackCourse);

// Function and methods in javascript :

// function myFunction (msg) {
//       // parameter -> input
//       console.log(msg);
// }
 
// myFunction ("I Love JS");    // argument
 