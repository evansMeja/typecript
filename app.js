function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var result1 = combine(1, 3);
var result2 = combine('Evans', 'Meja');
console.log(result1);
console.log(result2);
