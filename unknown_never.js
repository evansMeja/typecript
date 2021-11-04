"use strict";
var userInput;
var userName;
userInput = 45;
userInput = 'Evans Meja';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message, errorCode: code
    };
    // while(true){}
}
var result = generateError('An Error Occurred!', 500);
// crashes the app, never returns anything
