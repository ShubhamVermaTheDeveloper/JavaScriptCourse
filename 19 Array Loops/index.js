let num = [3, 54, 1, 2, 4]

// for(let i=0; i<num.length; i++){
//   console.log(num[i])
// }

// Using forEach loop we are printing the every element of the array
// num.forEach((element)=>{      
//   console.log(element * element)
// })


// Array.from
let name = "Shubham"
let arr = Array.from(name)
console.log(arr)


// for..of loop
for(let i of num){
  console.log(i)
}

// for..in loop
for(let i in num){
  console.log(num[i])
}