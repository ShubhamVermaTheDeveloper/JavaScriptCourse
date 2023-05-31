// Problem no. 1
let runAgain = true;

const canDrive = (age) =>{
  return age>=18?true:false
} 

while(runAgain){
let age = prompt("Enter your age : ")
age = Number.parseInt(age)
  if(age<0){
    console.error("Please enter a valid age : ")
    break
  }
  else{
if(canDrive(age)){
  alert("Yes you can drive")
}
else{
  alert("You not drive") 
}
  }
  runAgain = confirm("Do you want to play again?")
}