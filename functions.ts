function add(n1:number, n2:number){
    return n1 + n2
}

function printResult(num:number):void{
    console.log('Result: '+num)
}


function AddAndHandle(n1:number, n2:number, cb:(num:number)=>void){
    const result = n1 + n2
    cb(result)
}

printResult(56)

let printValue: Function;
printValue = printResult
// will prevent re assigning
// combined = 3

printValue(67)

let combinedValues : (a:number,b:number)=> number;
combinedValues = add

console.log(combinedValues(677,90))


AddAndHandle(10,30,(result)=>{
    console.log(`the sum is ${result}`)
})


