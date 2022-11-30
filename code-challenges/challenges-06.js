"use strict";

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//

//// const findMax = (arr)=>{
////     let max

////     return max;
//// }

const findMax = (arr) => {
  //   let array = [12, 32, 22, 45, 78, 12, 50];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:

//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions

// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81

// const sumNums = (arr) => {
//   let sum;
//   // write your code here
//   return sum;
// };

const sumNums = (arr) => {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    }
  }
  return sum;
};

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//
// Input: ['C#', 'JS', 'Ruby','Python']
// Output: ['Python','Ruby','JS','C#']

//// const reverseArray = (arr)=>{
////     // write your code here
//// }

// const reverseArray = (arr) => {

//     return arr.reverse();
//   };

// const reverseArray = (arr)=>{
//     for (let i = 0 ;i <=arr.length ; i++ ){
//     return arr.reverse();
//     }
//  }

//  const reverseArray = (arr)=>{

//     for(let i = arr.length ; i>=0 ; i--)
//     {
//         return arr[i];
//     }
// }

// const reverseArray = (arr)=>{
//     let a1 = [];
//     for(let i = arr.length ; i>=0 ; i--){
// a1.push(arr[i])
// console.log(reverseArray());
// }
// return a1;
// }

const reverseArray = (arr) => {
  let a1 = [];
  for (let i = arr.length-1; i >= 0; i--) {
    a1.push(arr[i]);
  }
  return a1;
};

// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums, reverseArray };
