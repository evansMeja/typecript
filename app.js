var Person = {
    name: 'Evans Meja',
    age: 23,
    hobbies: ['coding', 'cooking', 'music']
};
console.log(Person);
var favActivities;
favActivities = ['sports'];
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
