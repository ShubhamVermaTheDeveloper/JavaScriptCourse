let a = [91,22,43,74, null, false, "Not given"];
a[6] = 89
a[7] = 92
console.log(a);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);

console.log("The length of marks is " + a.length);

console.log(typeof a)

for(let i = 0; i < a.length; i++){
  console.log(a[i])
}