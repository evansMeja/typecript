function add(n1:number, n2:number, showResult:boolean){
    if (showResult){
        console.log(n1 + n2)
    }else{
        return n1 + n2
    }
}

let number1: number;
let number2: number;

number1 = 5
number2 = 2.8
const showResult = true
const result  = add(number1,number2, showResult)

console.log(result)