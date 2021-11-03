const ADMIN = 1
const USER = 2
const READONLY = 3

 enum Role {ADMIN, USER, READONLY}

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


const Person = {
    name: 'Evans Meja',
    age:23,
    hobbies:['coding','cooking','music'],
    role:Role.ADMIN ,
}

console.log(Person)


let favActivities: string[];
favActivities = ['sports']

for (const hobby of Person.hobbies){
    console.log(hobby.toLocaleUpperCase())
}

if (Person.role == Role.ADMIN){
    console.log('is admin')
}