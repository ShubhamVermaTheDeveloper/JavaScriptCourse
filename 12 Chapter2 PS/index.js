let marks ={
    shubham: 90,
    ajay: 70,
    kelash: 50,
    ashish: 80
  }
  
  // Problem 1
  for(let i=0; i<Object.keys(marks).length; i++){
    // console.log("The marks of "+ Object.keys(marks)[i]+ " are " + marks[Object.keys(marks)[i]])
  }
  
  // Problem 2 
  for(let key in marks){
     // console.log("The marks of "+ key + " are " + marks[key])
  }
  
  // Problem 3
  let cn = 43
  let i
  // while( i != cn){
  //   console.log("Try again")
  //   i = prompt("Enter a number")
  // }
  // console.log("You have entered a correct number")
  
  
  // problem 4
  const mean = (a, b, c, d)=>{
    return (a+b+c+d)/4
  }
  console.log(mean(4,8,6,7))
  