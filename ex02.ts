function upperCase(str = '') {
    let result = ''
    
    for (let i=0; i < str.length; i++) {
      const code = str.charCodeAt(i)
      
      if (code >= 97 && code <= ) {
        result += String.fromCharCode(code - 32)
      } else {
        result += str[i] 
      }
    }
  
    return result
  }
  
  console.log(upperCase('Chopper'))
  console.log(upperCase('TONY TONY'))