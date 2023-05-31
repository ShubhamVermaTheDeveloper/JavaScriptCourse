let a = prompt("Hey whats you age?")
a = Number.parseInt(a)
if(a<0){
  alert("This is not a valid age")
}
else if(a<9){
  alert("You are a kid and you can't even think of driving")
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18")
}
else if(a<9){
  alert("You are a kid and you can't even think of driving")
}
else{
  alert("You can now drive as you are above 18")
}
console.log("Done")


// Homework : switch case statement

let day = prompt("Enter the day")

switch(day){
    case "sunday" :
    alert("Sunday")
    break;
    case "monday" :
    alert("monday")
    break;
    case "tuesday" :
    alert("tuesday")
    break;
    case "wednessday" :
    alert("wednessday")
    break;

    default :
    alert("Please enter valid day")
}



let c = 5
console.log((c<10?"c equals to 5":"c does not equals to 5"))