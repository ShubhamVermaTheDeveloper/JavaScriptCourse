/// Chapter 5 practice set
// // practice problem 1

// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a);
// arr.push(a)
// console.log(arr)


// practice problem 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a;
// do {
//   a = prompt("Enter a number")
//   a = Number.parseInt(a);
//   arr.push(a)
// } while (a != 0);
//  // console.log(arr)



// // Problem no. 3
// // Print a number from the array the number is divisible by 10
// let arr = [10, 20, 15, 30, 45, 82, 64, 90]
// let newArr = arr.filter((value)=>{
//   return value%10 == 0
// })
// console.log(newArr)


// // Problem no. 4
// // create a array of squre of given numbers
// let arr = [10, 20, 15, 30, 45, 82, 64, 90]
// let newArr = arr.map((x)=>{
//   return x * x
// })
// console.log(newArr)



// Problem no. 5
let arr = [1, 2, 3, 4, 5]
let newArr = arr.reduce((h1, h2)=>{
  return h1 * h2
})
console.log(newArr)