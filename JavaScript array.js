// 🧩 Task 1: Sum of Array Elements
// Description:
//  Write a program to calculate the sum of all numbers in an array.

// let nums = [5, 10, 15, 20];
// let tot = 0;
// for(i=0; i<nums.length; i++){
//     tot+=nums[i]
// }
// console.log(`The Sum of the given array is "${tot}"`)


// 🧩 Task 2: Find Maximum and Minimum
// Description:
//  Find the largest and smallest numbers in an array without using Math.max() or Math.min().

// let arr = [12, 7, 45, 22, 9];
// let str = ""
// let less =arr[0]
// for(i=0; i<arr.length; i++){
//     if(arr[i]>str){
//         str=(arr[i])
//     }
//     if(arr[i]<less){
//         less=(arr[i])
//     }
// }
// console.log(`The Largest number of the array is "${str}"`)
// console.log(`The Smallest number of the array is "${less}"`)



// 🧩 Task 3: Reverse an Array (without using reverse())
// Description:
//  Reverse the array elements manually using a loop.

// let arr = [1, 2, 3, 4, 5];
// let reverse =[]
// for(let i=arr.length-1; 0<=i; i--){
//     reverse.push(arr[i])
// }
// console.log(reverse)


// 🧩 Task 4: Remove Duplicates from Array
// Description:
//  Remove duplicate elements and return only unique values.

// Method - 1
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!unique.includes(arr[i])) { 
//     unique.push(arr[i]);
//   }
// }
// console.log(unique);

// Method - 2
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];
// for(let i=0;i<arr.length;i++){
//     let x=arr[i]
//     if(unique.indexOf(arr[i])=="-1"){
//         unique.push(arr[i])
//     }
// }
// console.log(unique)




// 🧩 Task 5: Count Occurrences of Each Element
// Description:
//  Display how many times each element appears in an array.

// let arr = ["apple", "banana", "apple", "cherry", "banana", "apple"];
// let unique = []
// for(let i=0; i<arr.length; i++){
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i])
//     }
// }
// for(let j=0; j<unique.length; j++){
//     let count=0;
//     for(let k=0; k<arr.length; k++){
//         if(unique[j].includes(arr[k])){
//             count++
//         }
//     }
//     console.log(`${arr[j]} is repeated for ${count} times`)
// }


// 🧩 Task 6: Filter Even Numbers
// Description:
//  Return a new array containing only even numbers.

// let arr = [10, 15, 20, 25, 30];
// let even =[]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }
// }
// console.log(even)



// 🧩 Task 7: Merge Two Arrays Without Duplicates
// Description:
//  Combine two arrays and remove duplicates.

// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let c=[...a,...b];
// let unique =[]
// for (let i=0; i<c.length; i++){
//     if(!unique.includes(c[i])){
//         unique.push(c[i])
//     }
// }
// console.log(unique)


// 🧩 Task 8: Sort Numbers Ascending & Descending
// Description:
//  Sort an array in both ascending and descending order using .sort().

// let nums = [42, 7, 19, 3, 25];
// console.log(`Ascending Order of that array is [${nums.sort((a,b) =>a-b)}]`)
// console.log(`Descending Order of that array is [${nums.sort((a,b) =>b-a)}]`)


// 🧩 Task 9: Find Second Largest Number
// Description:
//  Find the second largest element in an array.

// let arr = [10, 25, 5, 30, 20];
// let large=0;
// let secondlarge=0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>large){
//         large=arr[i]
//     }
// }
// for(let j=0; j<arr.length; j++){
//     if(large==arr[j]){
//         continue
//     }
//     else if(secondlarge<arr[j]){
//         secondlarge=arr[j]
//     }
// }
// console.log(secondlarge)


// 🧩 Task 10: Flatten a Nested Array
// Description:
//  Convert a nested array into a single-level array.

// let arr = [1, [2, [3, 4]], 5];
// console.log(arr.flat(Infinity))


// 🧩 Task 11: Square Each Number (Using map())
// Description:
//  Create a new array where each element is the square of the numbers in the original array.

// let nums = [2, 4, 6, 8];
// console.log(nums.map(a=>a**2))


// 🧩 Task 12: Filter Words by Length (Using filter())
// Description:
// Return only the words that have more than 4 characters.

// let words = ["sun", "planet", "moon", "star", "galaxy"];
// console.log(words.filter(word=>word.length>4))


// 🧩 Task 13: Sum of Numbers (Using reduce())
// Description:
//  Find the sum of all numbers in the array using the reduce() method.

// let numbers = [5, 10, 15, 20];
// console.log(numbers.reduce((a,b)=>a+b))


// 🧩 Task 14: Find First Negative Number (Using find())
// Description:
//  Find the first negative number from the array.

// let arr = [4, 8, -3, 9, -6];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         console.log(arr[i])
//         break;
//     }
// }


// 🧩 Task 15: Sort Objects by Age
// Description:
//  Sort the given array of objects in ascending order of age.

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 30 }
// ];
// let alter =[]
// let arranged =[]
// for(let i=0; i<users.length; i++){
//     alter.push(users[i].age)
// }
// alter.sort((a,b)=>a-b)
// for(let j=0; j<alter.length ;j++){
//     for(let i=0; i<users.length; i++){
//         if(alter[j]==users[i].age){
//             arranged.push(users[i])
//         }
//     }
// }
// console.log(arranged)


// 🧩 Task 16: Count Even and Odd Numbers (Using reduce())
// Description:
//  Return an object showing the count of even and odd numbers.

// let nums = [1, 2, 3, 4, 5, 6];
// let obj ={
//     even : 0,
//     odd : 0
// }
// for(let i=0; i<nums.length; i++){
//     if(nums[i]%2==0){
//         obj.even++
//     }
//     else{
//         obj.odd++
//     }
// }
// console.log(obj)


// 🧩 Task 17: Remove Falsy Values (Using filter())
// Description:
//  Remove null, undefined, false, 0, "", and NaN values from the array.

// let arr = [0, "hello", false, 42, "", null, "JS", undefined];
// let newarr=[]
// for(let i=0; i<arr.length; i++){
//    if(arr[i]!==null&& arr[i]!==undefined&& arr[i]!==false&& arr[i]!==0&& arr[i]!==""&& arr[i]!==NaN){
//        newarr.push(arr[i])
//    }
// }
// console.log(newarr)


// 🧩 Task 18: Capitalize Each Word (Using map())
// Description:
//  Capitalize the first letter of each word in an array.

// let words = ["apple", "banana", "cherry"];
// let Upper=words.map(n=>n[0].toUpperCase()+n.slice(1))
// console.log(Upper)


// 🧩 Task 19: Group Numbers by Even/Odd
// Description:
//  Split the array into two arrays — one with even numbers and one with odd numbers.

// let numbers = [10, 15, 20, 25, 30];
// let even=[];
// let odd=[];
// let sum = numbers.reduce((a,b)=>{
//     if(b%2==0){
//         even.push(b)
//     }
//     else{
//         odd.push(b)
//     }
// },0)
// console.log(`Even : ${even}`)
// console.log(`Odd : ${odd}`)


// 🧩 Task 20: Find Average Marks (Using reduce())
// Description:
//  Given an array of student marks, find the average.

// let marks = [75, 80, 90, 85];
// let avg = marks.reduce((a,b)=>{return a+b},0)
// console.log(avg/marks.length)