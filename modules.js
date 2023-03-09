// module is external code 
const fs = require("fs");
let text = fs.readFileSync("data.txt", "utf-8");
text = text.replace("hi", "hiii");

console.log("the contant of the file is : ");
console.log(text);

console.log("creating a new file");
fs.writeFileSync("ansh.txt", text);



