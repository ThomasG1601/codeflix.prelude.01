import { ReadVResult } from "fs"

function capitalize (str ='', restToLowerOpt=false) {
    let result = ''

    for (let i=0; i<str.length; i++){
        const code = str.charCodeAt(i)

        if (i == 0 && code >= 97 && code <= 122) {
            result = result + String.fromCharCode(code - 32)
        } else if (i > 0 && code >= 65 && code <= 90 && restToLowerOpt){
            result += String.fromCharCode(code + 32)
        }
        
        else {
            result += str[i]
        }
    }
    return result
}

console.log(capitalize('one Code'))
console.log(capitalize('One CODE'))