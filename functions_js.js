console.log("this is lec of functions");

function greet(name, greettext = "Greetings from javascript") {
    let name1 = "royal";
    console.log(name1);
    console.log(greettext + " " + name);
    console.log(name + " is a good boy")
    // return name + " is a good boy";
}

function sum(a, b, c) {
    let d = a + b + c;
    return d
    // after return any line are not execute (unreachable code)
    console.log("fucntions is returned");
}

let name1 = "ansh";
let name2 = "om";
let name3 = "roy";
let name4 = "jason";
// let greettext;
let greettext = "Good Morning";
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");


// actions using fuctions :-
greet(name1, greettext);
greet(name2, greettext);
greet(name3);
greet(name4, greettext);

console.log(name1);

// below line show the undefined because greet fucntion not return any value
let returnval = greet(name3);
console.log(returnval);

let s = sum(1, 2, 3);
console.log(s);
