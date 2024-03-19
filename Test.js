// Q.1. explain synchronous and asynchronoud behaviour of javascript using diagram and example?

// 1. Synchronous behaviour :

// console.log("Hello!!");
// console.log("Hello javascript");

// // 2. Asynchronous behaviour :

// function first() {
//     setTimeout(() => {
//       const data = 'Data fetched successfully!';
//       callback(null, data);
//     }, 2000); // Simulating a delay of 2 seconds
//   }
//   console.log("first");

//   console.log("second");


// Q. 2. Explain callstack and GEC with example :

  // 1. Callstack :

//   function one() {
//     console.log("one");
//   }

//   function second() {
//     console.log("second");
//   }

//   function three() {
//     console.log("three");
//   }

  // 2. GEC (Global Execution Context) :

 
// let val1 = 10;
// let val2 = 5;
// function addnum (num1, num2) {
//     let total = num1 + num2
//     return total
// }
// let result1 = num (val1, val2)
// let result2 = addnum (10, 2)


// Q. 3. Whats is hoisting in js explain with examples :

//  A procee where the variables declaration are moved to the top of their scope.

//  var a;               // interpreter declaration assume not the initialization

//  console.log(a);

//   var a = 7;


// Q. 4. Explain "this" keyword and it's use cases :

// 1. By itself(Global context) : (refers to window object or global object in browser and in node {})

//console.log(this);

// 2. Inside object method :

// const myObject = {
//   name : "Jakir",
//   fullName : function() {
//   return this;    

//   }
// }

// console.log(myObject.fullName());

// 3. Inside function (Function context) : (Refers to global object)

// function f1() {
//    //console.log(this);
//    return this;
//    }
//    //f1();
//   console.log(f1());

// Q. 5. Prototype access:
        // Acts as a parent to serve their child.

// let a = Object.getPrototypeof("    ");
// console.log(a);


// Q. 6.  Array destructuring and it's cases :

//e.g. 1.

// let arr = ["Hello", "World"]  
  
// // destructuring assignment  
// let [first, second] = arr;  
  
// console.log(first); // Hello  
// console.log(second); // World

//e.g. 2.

// let colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// // destructuring assignment  
// let [color1, color2, color3] = colors; 
  
// console.log(color1); // Violet  
// console.log(color2); // Indigo  
// console.log(color3); // Blue  

// 1. Array destructuring and Rest operator(...) :

// let Colors = ["Violet", "Indigo", "Blue", "Red"];  
  
// // destructuring assignment  

// let [a,b,...args] = Colors;  
// console.log(a);   
// console.log(b);   
// console.log(args);  

// 2. Array destructuring and Default values :

// const numbers = [1, 2];

// const [firstNumber, secondNumber, thirdNumber = 0] = numbers;

// console.log(firstNumber, secondNumber, thirdNumber); 

// 3. Swapping Variables :

// let x = 100, y = 200;  
// [x, y] = [y, x];  
// console.log(x); 
// console.log(y); 

// 4. Parsing returned array from functions :

// function array() {  
//     return [100, 200, 300];  
// }  
   
// let [x, y, z] = array();  
   
// console.log(x);  
// console.log(y);   
// console.log(z); 

// What is an array. Explain array methods with examples.

// Q. 7. What is an array. Explain array methods with examples :

//(Array is a collection of items)

//e.g. 

// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks[0]);

// Array methods :

// 1. Push() : Add to end.

// let foodItems = ["potato", "apple", "litch", "tomato"];
// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems);

// 2. pop () : Delete fron end and return.

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

// 6. Shift () : Delete from start and return.

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

// 9. Spread operator : [...]

// let desi_heroes = ["shaktiman", "gunior-g", "bhai", "nagraj"];
  // let marvel_heroes = ["ironman", "thor", "captainamer", "antman"];
  // let allheros = [...desi_heroes, ...marvel_heroes];
  // console.log(allheros);

  // 10.  (.of method ) :

//  let a = 12;
//  let b = 45;
//  console.log(Array.of(a,b));

// e.g. 2 

//   let a = [2, 3, 4, 5];
//   let b = [4, 5, 6];
//   let c = [9, 0, 6];
//   console.log(Array.of(a, b, c));

// 11. (.from method-) :

//  let str = 'jakir';
//  console.log(Array.from(str));

// 12. join() :
        // Adds all the elements of an array into a string, 
        // seprated by the specified seprator.

// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);
// const newArr = myArr.join();
// console.log(newArr);

// Q. 8. Explain examples objects in javascript :

// Object is a collection of key-value pairs.

//e. g.

// let employeeDetail = {
//     name : "Jakir",
//     age : 25,
//     designation : "software engineer",
//     isLoggedIn : true
// }

// console.log(employeeDetail);

// // One key-value access:

// console.log(employeeDetail["age"]);

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


// Ways to Object Creations :

// 1. Object literal :

// const person = {
//     firstName: 'Jakir',
//     lastName: 'Sayyad',
//     age: 25,
//    }
//   console.log(person);

// 2. Constructor Function :

// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };
// const c1 = new Car("BMW", "520d", 9000000);
// console.log(c1.brand);
// console.log(c1.model);
// console.log(c1.price);

// 3. Object.create : (With some prototype object)

// const employeePrototype = {
//     printInfo : function() {
//         console.log(`Hello, employee name is ${this.name}`);
//     }
// };
// const e1 = Object.create(employeePrototype);
// e1.name = 'Jakir';
// e1.printInfo();


// Q. 9. What is the use of shift, unshift, push, pop methods with examples.


  // 1. Unshift () : Add to start 

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

// 2. Shift () : Delete from start and return.

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.shift();
// console.log(marvelHeroes);

// 3. Push() : Add to end.

// let foodItems = ["potato", "apple", "litch", "tomato"];
// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems);

// 4. pop () : Delete from end and return.

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.pop();
// console.log(foodItems);

// Q. 10. What is closure. Implemet with examples.

// Closure :

    // Closure is the combination of function bundled together with reference to it's lexical environment.

// e. g.

//   function fun1() {
//   let a = 5;

//   function fun2() {
//     console.log(a);
//   }
//   return fun2;
// }
// const abc = fun1();
// abc();

//Q.12 - Implement push operation without using inbuilt Method :

// let arr1=[0,1,2,3,4,5];
// arr1[arr1.length]=6;
// console.log(arr1);


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


// Q. 13. Implement shift, unshift and splice method without using inbuilt method.

// 1. Shift : (Single element delete)

// let arr = [1, 2, 3, 4];
// let newArr = [];

// for (let i=1; i<arr.length; i++) {
//             newArr[i-1] = arr[i];
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

// 3. Splice :





// Q. 14. Implement sort operation without using inbuilt method.

// let a=[77,6,2,1,85,100];


// for(let i=0;i<a.length-1;i++)
// for(let j=i+1;j<a.length;j++)
// {

//     if (a[j]<a[i])
//     {
//         temp=a[j]
//         a[j]=a[i]
//         a[i]=temp
//     }
// }

// console.log(a)


// Q. 15. Implement reversing the array operation without using inbuilt method.

// let arr = [1, 2, 3, 4, 5, 6];
// let reverseArray = [];
// for(let i=arr.length-1; i>=0; i--) {
//   reverseArray[reverseArray.length] = arr[i];
// }
// console.log(reverseArray);


// Q. 16. Reverse the given string "Hello Mr. XYZ" without using inbuilt method.

// let str = "Hello Mr. XYZ";

// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reverse = reverse + str[i];
// }

// console.log(reverse);


// Q. 17. Take inputs from user one by one and put the elements in array without using inbuilt method :

// let a = [10, 20, 30, 40];
// let b = Number(prompt("Enter how many elements do you want to add in array"));
// let c = a.length +b;

// for(let i = a.length; i < c; i++) {
//   let d = (prompt("Enter element"));
//   a[i] = d;
// }

// console.log(a);


// Q. 18. Check the given number is Armstrong or not.


// let num = 153;
// let temp = num;
// let sum = 0;

// while(num != 0) {
//   let x = 0;
//   let rem = parseInt(num % 10);
//   x = parseInt(rem*rem*rem);
//   sum = parseInt(sum + x);
//   num = parseInt(num / 10);

// }
// console.log(sum);
// if (sum==temp) {
//   console.log("it's a armstrong number");
// }
// else {
//   console.log("it's not a armstrong number");

// }



// Q. 19. Implement the lottery operation such that user should have three chances 
       // if one of the number matches the given number than the user will get message of congratulations.
       
       
       // Lottery operation with three chances

      //  const luckyNumber = 7;
      //  const chances = 3;
       
      //  for (let i = 1; i <= chances; i++) {
      //    let userGuess = parseInt(prompt("Guess(between 1 and 10)"));
       
      //    if (userGuess === luckyNumber) {
      //      console.log("Congratulations you won");
      //      break;
      //    } else {
      //      console.log("Try luck " + (chances - i));
      //    }
      //  }
       
      //  console.log("Thanks for playing!");
       

// Q. 22. Implement the program such that if user enters any character from the given string
       // then that character should be removed from given string. (Without using inbuilt method) 
         
      //  let str = prompt("Enter a string");
      //  let wordRemove = prompt("Enter a character to remove from the string:");
       
      //  let temp = "";
       
      //  for (let i = 0; i < str.length; i++) {
      //  if (str[i] !== wordRemove) {
      //  temp = temp + str[i];
      //    }
      //  }
       
      //  console.log("Modified String:", temp); 


// let arr1 = [10, 20, 30, 40 ,50, 60, 70, 80, 90];
// let arr2 = [];
// let f=2;
// let s=5;
// let t=110;
// for(let i=0; i<f; i++){
//   arr2[i]=arr1[i];
// }
// console.log(arr2);
// arr2[arr2.length]=t;
// console.log(arr2);
// let arr3=[];
// let x=0
// for(let i=f+s; i<arr1.length; i++){
//   arr3[x]=arr1[i];
//   x++;
// }    
// //console.log(arr3);
// let arr4=[...arr2,...arr3];
// //console.log(arr4);


// Array.prototype.includes() :


// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// console.log(pets.includes('at'));


// includes method without using inbuilt method :

// function myIncludesMethod(arr, value, fromIndex = 0) {

//    for (let i = fromIndex; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return true; 
//     }
//   }

//   return false; 
// }

// const newArr = [1, 2, 3, 4, 5];

// // console.log(myIncludesMethod(newArr, 3));         
// // console.log(myIncludesMethod(newArr, 6));          
// // console.log(myIncludesMethod(newArr, 3, 2));       
// // console.log(myIncludesMethod(newArr, 3, -2)); 
// console.log(myIncludesMethod(newArr, -3, 2));    

// This searches for 3 starting from index 3 from the end of the array.
// The negative fromIndex is converted to index 2 (length - 2), and the function finds 3 at that index, returning true.






