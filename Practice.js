// [2,6,1,5,7,3,6,1]; Find smallest number counter, after self.

// let arr_ele = [2,6,1,5,7,3,6,1];
// let op_arr = [];
// for(let i=0; i<arr_ele.length; i++){
//     let sml_ele_count = 0;
//     for(let j=0; j<arr_ele.length; j++){
//         if(i==j){
//             continue;
//         } 
//         else if(i<j){
//             if(arr_ele[i]>=arr_ele[j]){
//                 sml_ele_count=sml_ele_count+1;
//             }
//         }
//     }
//     op_arr.push(sml_ele_count);
// }
// console.log(op_arr);


///// Middle element find :


// let arr = [2,4,6,9,8,0,16,2,4,8];
// let i;
// let letf_arr = [];
// let right_arr = [];
// let mid_ele;


// let ele = arr.length/2;
// mid_ele = Math.floor(ele);
// console.log(mid_ele);

// let count = 0;
// for(let i=0; i<mid_ele-1; i++){
//     if(arr[i]<=arr[mid_ele-1]){
//         count = count+1;
//         letf_arr.push(arr[i]);
//     }
// }
// console.log(count);
// console.log(letf_arr);


////////////////////////////////////////////////////////////////////

// Find mid element and swap elements positions :9

// let arr = [2,4,6,8,9,10,12];

// let i;
// let letf_arr = [];
// let right_arr = [];
// let mid_ele;


// let ele = arr.length/2;
// mid_ele = Math.floor(ele);
// console.log(mid_ele);
// console.log(arr[mid_ele]);

// let count = 0;
// for(let i=0; i<mid_ele-1; i++){
//     if(arr[i]<=arr[mid_ele-1]){
//         count = count+1;
//         letf_arr.push(arr[i]);
//     }
// }
// console.log(count);
// console.log(letf_arr);


// myFunction();


// let myFunction = () => {
//     console.log("Hello");
// }


// Q.3) Javascript asynchronous operation: (javascript revision)

// 1) Callback function:

// function fetchData(callback) {
//     setTimeout(() => {
//       callback("Data fetched");
//     }, 1000);
//   }
  
//   function processData(data) {
//     console.log(data);
//   }
  
//   fetchData(processData);

  // 2) Promises:

  // let P = new Promise((resolve, reject) => {
  //   let number = 2;
  //   if (number == 2) {
  //       resolve("success");
  //   }
  //   else {
  //       reject("failed");
  //   }
  // });

  // P.then((message) => {
  //   console.log("something " + message);
  // });

  // P.catch((message) => {
  //   console.log("something " + message);
  // });

  // 3) Async/Await :

  //Q.4) Closure:

  // function fun1 () {
  //   let a = 5;
  //   function fun2 () {
  //     console.log(a);
  //   }
  //   return fun2;
  // }
  // const abc = fun1();
  // abc();

  //Q.5) Prototype inheritance:
  // Prototype is an object which act as a parent to serve their child property.





//Q.6) this keyword:



//Q.7) What are arrow functions in js,and how do they differ from regular functions.


// Arrow function:
// const arrow = (a, b) => {
//   console.log(a+b);
//   return a+b;
// }
// arrow();

// // Regular function:

// function myFunction (a, b) {
//   console.log(a+b);
//   return a+b;
// }


//Q.  SRP(Single Responsibility Principle):

// function calculateAndLogArea(length, width) {
//   const area = length * width;
//   console.log("Area:", area);
//   return area;
// }


// function calculateArea(length, width) {
//   return length * width;
// }

// function logArea(area) {
//   console.log("Area:", area);
// }

// const area = calculateArea(5, 3);
// logArea(area);


// function greet(message) {
//   console.log(message + ", " + this.name);
// }

// const person = { name: "Alice" };
// greet.call(person, "Hello"); // Output: Hello, Alice








 