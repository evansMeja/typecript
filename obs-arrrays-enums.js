"use strict";
var ADMIN = 1;
var USER = 2;
var READONLY = 3;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["READONLY"] = 2] = "READONLY";
})(Role || (Role = {}));
// const Person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number, string]
// } = {
//     name: 'Evans Meja',
//     age:23,
//     hobbies:['coding','cooking','music'],
//     role:[2,'author'] ,
//     purpose:ADMIN
// }
var Person = {
    name: 'Evans Meja',
    age: 23,
    hobbies: ['coding', 'cooking', 'music'],
    role: Role.ADMIN,
};
console.log(Person);
var favActivities;
favActivities = ['sports'];
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
if (Person.role == Role.ADMIN) {
    console.log('is admin');
}
