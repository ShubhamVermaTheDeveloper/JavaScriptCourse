export default factorial = () =>{
    let num = prompt("Enter any number")
  let fact = 1
  for (let i = 1; i <= num; i++) {
    fact *= i
  }
  return fact
  }
  
  