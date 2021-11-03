function combine(input1: number | string, input2: number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

const result1 = combine(1,3)

const result2 = combine('Evans','Meja')

console.log(result1)
console.log(result2)