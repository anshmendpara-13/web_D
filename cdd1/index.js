// below line for perticular funciton import
// const average = require("./mod");
// console.log(average([3, 4, 5, 6]));


// below line for bunch of object imprt in one file
const mod = require("./mod")
console.log(mod.ave([5, 7, 8, 2, 2, 5]));

console.log("this is index.js");

console.log(mod.name);