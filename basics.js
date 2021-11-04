"use strict";
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1;
var number2;
number1 = 5;
number2 = 2.8;
var showResult = true;
var result = add(number1, number2, showResult);
console.log(result);
