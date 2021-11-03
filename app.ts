import { NumericLiteral } from "@babel/types";

const Person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string]
} = {
    name: 'Evans Meja',
    age:23,
    hobbies:['coding','cooking','music'],
    role:[2,'author'] 
}

console.log(Person)


let favActivities: string[];
favActivities = ['sports']

for (const hobby of Person.hobbies){
    console.log(hobby.toLocaleUpperCase())
}