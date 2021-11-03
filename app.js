function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function AddAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(56);
var printValue;
printValue = printResult;
// will prevent re assigning
// combined = 3
printValue(67);
var combinedValues;
combinedValues = add;
console.log(combinedValues(677, 90));
AddAndHandle(10, 30, function (result) {
    console.log("the sum is " + result);
});
