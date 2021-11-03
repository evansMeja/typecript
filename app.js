function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var result1 = combine(1, 3, 'as-number');
var result2 = combine('39', '56', 'as-number');
var result3 = combine('Evans', 'Meja', 'as-text');
console.log(result1);
console.log(result2);
console.log(result3);
