/*
// fundamentals of javascript
// variables, data types, operators, functions, conditionals, loops, arrays, objects, classes, modules
// foreach, filter,map,find,indexof
// functions return , arrow functions, default parameters, destructuring, rest and spread operators
// promises, async await, fetch api, error handling, local storage, session storage, cookies, web storage

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// foreach
arr.forEach(function (val) {
    return (val + " helloworld");
})
console.log(arr);

// map
var ans = arr.map(function (val) {
    return (val + 10 + " helloworld");
})
console.log(ans);

// filter
var newarr = arr.filter(function (val) {
    if (val > 5) return true;
    else return false;
})
console.log(newarr);

// find
var found = arr.find(function (val) {
    if (val == 5) return true;
    else return false;
})
console.log(found);

// indexof
var index = arr.indexOf(5);
console.log(index);

*/

// Intoduction to express js
// express js ek web application framework hai jo npm package hai node.js ka
// express js is a framework to build web applications on top of node.js with a flow
// express js manage everything from sending requests  and giving responses to handling routes and rendering views
//jjaab bhi server request bhejta hai toh waha se route ke beech me pauchte hi aur uss request ko handle karte hai matlab kch perform krte hhai toh uss element ko mdddlleware kehte hai
// middleware ek function hai jo request aur response object ko modify karne ke liye use hota hai
