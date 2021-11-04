let userInput: unknown
let userName: string

userInput = 45

userInput = 'Evans Meja'

if(typeof userInput === 'string'){
    userName = userInput
}


function generateError(message:string, code:number):never{
    throw {
        message:message, errorCode:code
    }

    // while(true){}
}

generateError('An Error Occurred!', 500)

// crashes the app, never returns anything
