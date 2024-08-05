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

