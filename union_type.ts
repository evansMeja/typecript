type Combinable = number | string
type ConversionDescriptor = 'as-text' | 'as-number'

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor
    ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

const result1 = combine(1,3, 'as-number')

const result2 = combine('39','56', 'as-number')

const result3 = combine('Evans','Meja','as-text')

console.log(result1)
console.log(result2)
console.log(result3)