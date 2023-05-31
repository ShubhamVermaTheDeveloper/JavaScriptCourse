alert("Enter the value of a!");
let a = Number.parseInt(prompt("Enter a here", "578"));
alert("You entered a of type "+ (typeof a))
let write = confirm("Do you want to write it to the pae")
if(write){
  document.write(a)
}
else{
  document.write("Please allow me to write")
}