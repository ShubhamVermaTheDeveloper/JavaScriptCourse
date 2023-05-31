// Array Methods
let num = [1, 2, 3, 4, 5]
let b = num.toString()    // b is now a string 
console.log(b, typeof b)

let c = num.join("_")
console.log(c, typeof c)

let p1 = num.pop()
console.log(num, p1)

let q1
q1 = num.push(7)
console.log(num, q1)

q1 = num.push(6)
console.log(q1)


let i = num.shift() // Remove the element from the start array
console.log(i, num)

let j = num.unshift(5)  // add a new element into first place
console.log(j, num)