/*

// 1. ways to print in javascript
console.log("hello world!");
// alert("me");
// print in document
// document.write("this is document write");

// 2. javascript console api - application programming interface
console.log("HI BOSS", 4 + 6, "another log");
console.warn("this is a warnig");
console.error("this is error");
// below line for clear console
// console.clear();
// below lines for assertion
console.assert(4 == 4);
console.assert(4 == (6 - 7));

// 3. javascript variables
// what are variable containers to store data values
var num1 = 13;
var num2 = 25;
console.log(num1 + num2);

// 4. data type in javascript
var num3 = 25;
var str1 = "this is a string";
var str2 = "this is also a string";
var marks = {
    ravi: 24,
    ansh: 78,
    om: 96
}
console.log(num3);
console.log(str1);
console.log(str1 + " " + str2);
console.log(marks);

var a = true;
var b = false;
console.log(a);
console.log(b);

var und = undefined;
console.log(und);
var und1;
console.log(und1);

var n = null;
console.log(n);

var s = Symbol('apple');
console.log(s);

*/

// at a very high level, there are two types of data types in javascript
// 1. primitive data type - undefined, null, number, string, boolean, symbol
// 2. reference data type - arrays and objects

var arr = [1, 2, "string", 4, 5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);

var c = 45;
var d = 54;
// arithmetic operators - +, -, /,*,%,...
// console.log("the value of c + d is", c + d)

var c = d;
// console.log(c);
c = c + 12 * d;
// console.log(c);

var x = 35;
var y = 85;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x == (y - 50));

// console.log(true && true);
// console.log(true && false);
// console.log(true || false);
// console.log(false || false);
// console.log(!false);
// console.log(!true);


function avg(a, b) {
    c = (a + b) / 2
    return c;
}

c1 = avg(15, 85);
c2 = avg(17, 89);
c3 = avg(c1, c2);
// console.log(c3);


// conditionals in javascript
var age = 17;
// if (age < 18) {
//     console.log("you are a kid");
// }
// else if (age == 18) {
//     console.log("you perfect")
// }
// else {
//     console.log("you are not a kid");
// }

// loops in javascript
var arr1 = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < arr1.length; i++) {
//     if (i == 3) {
//         // break;
//         continue;
//     }
//     console.log(arr1[i]);
// }

// var i = 7;
// while (i--) {
//     console.log(arr1[i]);
// }

// arr1.forEach(function (element) {
//     console.log(element);
// })

// let use for block level scope
// const e = 0;
// e++;
// j++;
// console.log(j);

// let j = 0;
// while (j < arr1.length) {
//     console.log(arr1[j]);
//     j++;
// }

// do {
//     console.log(arr1[j]);
//     j++;
// } while (j < arr1.length);


let myar = ['fan', 'camera', 15, null, true];
// ARRAY methods
// console.log(myar.length);
myar.pop();
// console.log(myar);
myar.push('ansh');
// console.log(myar);
myar.shift();  // remove from first
// console.log(myar);
myar.unshift('ansh');  // add into a first
// console.log(myar);
// const newlen = console.log(myar.length);
myar.toString();
// console.log(myar);
let f = [85, 96, 12, 5, 42, 2, 45];
f.sort();
// console.log(f);

let wt = "ansh is a good good boy";
// console.log(wt);
// console.log(wt.length);
// console.log(wt.indexOf("good"));
// console.log(wt.lastIndexOf("good"));
// 0,n-1 in below line
// console.log(wt.slice(0, 4));
// wt = wt.replace("ansh", "neev");
// wt = wt.replace("good", "bad");
// console.log(wt);


// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());
// console.log(mydate.getSeconds());
// console.log(mydate.getMilliseconds());


// DOM - document object model manipulation
let elem = document.getElementById('click')
// console.log(elem);

let elemclass = document.getElementsByClassName('container');
elemclass[0].style.background = 'yellow';
elemclass[1].classList.add('bg-primary');
elemclass[0].classList.add('text-success');
elemclass[0].classList.remove("text-success");
// elemclass[0].innerHTML;
// elemclass[0].innerText;
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
// console.log(elemclass);

// document
// document.location
// document.getElementById('click').click();
// document.getElementById('click').style.border = 'blue';
// document.getElementById('click').style.border = '2px solid blue';

tn = document.getElementsByTagName('button');
// console.log(tn);
di = document.getElementsByTagName('div');
// console.log(di);
createdelement = document.createElement('p');
createdelement.innerText = 'This is a big paragraph';
di[0].appendChild(createdelement);

createdelement2 = document.createElement('p');
createdelement2.innerText = 'This is a bold';
di[0].replaceChild(createdelement2, createdelement);

// removeChild(element); --> removes an element
// document.title;
// document.URL;
// document.scripts;
// document.links;
// document.forms;
// document.images;
// document.domain;


// selecting using query
// query selector only return one element and query selectorall return all elements+
// sel = document.querySelector('.container');
// console.log(sel);
// sel1 = document.querySelectorAll('.container');
// console.log(sel1);


// events in js
// function clicked() {
//     console.log('The button was clicked');
// }

// window.onload = function () {
//     console.log("The document was loaded")
//     // elemclass[0].style.background = 'red';
// }

// firstcontainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = '<b>We have clicked</b>';
//     console.log("click on container 1");
// })

// firstcontainer.addEventListener('mouseover', function () {
//     console.log("mouse on container 1");
// })

// firstcontainer.addEventListener('mouseout', function () {
//     console.log("mouse out of container 1");
// })

let previoushtml = document.querySelectorAll('.container')[1].innerHTML;

// firstcontainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = previoushtml;
//     console.log("mouse up when clicked on container 1");
// })

// firstcontainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML = '<b>We have clicked</b>';
//     console.log("mouse doun when clicked on container 1");
// })


// settimeout and setinterval
// arrow functions
// function summ(a, b) {
//     return a + b;
// }

summ = (a, b) => {
    return a + b;
}
// console.log(summ(5, 10));

logkaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = 'set interval fired!!!';
    console.log('I am you log');
}
logmatkaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = previoushtml;
    console.log('I am you logout');

}
// setTimeout(logkaro, 2000);
// clr = setInterval(logkaro, 1000);
// console.log(clr);
// clearInterval(clr);
// setInterval(logkaro, 1000);
// setInterval(logmatkaro, 2000);
// use clearinterval(clr)/cleartimeout(clr) to cancel setinterval/settimeout


// local storage in js
// below line for insert into localstorage
localStorage.setItem('name', 'neev');
localStorage.setItem('name1', 'ansh');
// localStorage --> in console
// localStorage.getItem('name');


// json - javascript open notation
obj = { name: "ansh", length: 1, a: { this: 'tha\\"t' } };
js = JSON.stringify(obj);
// console.log(js);

// typeof js   --> for find type of the object;
// console.log(typeof js);
// console.log(typeof obj);
// console.log(typeof length);


parsed = JSON.parse(`{"name":"ansh","length":1,"a":{"this":"tha\\"t"}}`);
// console.log(parsed);


// localStorage.removeItem('name');
// console.log(parsed);
// localStorage.clear();
// console.log(parsed);


// javascript version
// ECMA SCRIPT update of js and maintain - standard script->(js)


// backticks - template literals
a = 13;
console.log(`This is my fav number ${a}`);



