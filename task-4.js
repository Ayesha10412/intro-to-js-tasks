// ### Task-4

// What will be the result of the following codes:

// **var a = isNaN(‘11’);**

// **var a = isNaN(2-10);**

// Explain your answers.


var a = isNaN('‘11’');
// since its a string so we can not say that it's a number. So we will get true as output.

var b = isNaN(2-10);
// since we will get output by subtract the two results. So we can say that it's a number. Result is false.

console.log(a +'\n');
console.log(b);
