const randomNum = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min)
  }
  let num = randomNum(1, 100)
  
  let a
  let count = 0
  do{
  count++
  let a = prompt("Enter a number")
  if(a == num){
    console.log("You are enter the correct number ")
    break
  }
  else{
      if(a > num){
        console.log(a + " is greated then the guess number")
      }
    else{
      console.log(a + " is less then the guess number")
    }
  
  }
  }while(a!=num)
  console.log("Your score is out of 100 : "+ (100-count))
  console.log("Actual number is : "+ num)