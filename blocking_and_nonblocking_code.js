// synchronus or blocking
// - line by line execution

// asynchronus or non-bloking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
// below is callback function
let text = fs.readFile("data.txt", "utf-8", (err, data) => {
    console.log(err, data);
});
console.log("this is a massage");

