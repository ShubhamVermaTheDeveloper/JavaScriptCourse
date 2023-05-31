// let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num3 = [211, 212, 213, 214, 215, 216, 217, 218, 219]
// console.log(num.length)
// delete num1[0]
// console.log(num.length)

// let newArray = num1.concat(num2, num3)
// console.log(newArray)
// console.log(num1, num2)


// sort method 
// let compare = (a, b)=>{
//   return a - b //accending 
// }
// let num = [251, 752, 83, 754, 645, 386, 847, 358, 749]
// num.sort(compare)
// num.reverse()   // Reverse the array
// console.log(num)


// splice and slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 3, 1021, 1022, 1023, 1024)
// console.log(num)  // print modified array after splice
// console.log(deletedValues)  // print deleted value that is deleted by splice
// console.log(typeof deletedValues)   // return the type of the perticular variable that is object


let newNum = num.slice(3, 7)  // creat a new array using given range
console.log(newNum)