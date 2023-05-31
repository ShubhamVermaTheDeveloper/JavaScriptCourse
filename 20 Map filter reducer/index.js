let arr1 = [45, 23, 21]
// array map method
let a = arr1.map((value, index, array)=>{
  // console.log(value, index, array)
  return value + 1
})
// console.log(a)

// Array filter method
let arr2 = [45, 23, 21, 0, 5]
let a2 = arr2.filter((a)=>{
  return a<10           // if condition true than store the element from the new array
})
// console.log(a2)


// Array reduce method
let arr3 = [1,2,3,4,5,6,7,1,5]
let newArr3 = arr3.reduce((h1, h2)=>{
  return h1 + h2
})
console.log(newArr3)